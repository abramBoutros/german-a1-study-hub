(function () {
  const CHAPTERS = (window.A1_CHAPTERS || []).sort((a, b) => a.id - b.id);
  const EX_EN = window.A1_EX_EN || {};

  // State
  const state = {
    view: "all", // "all" | "practice" | "starred" | chapter id (2..8)
    tab: "nouns", // "nouns" | "verbs" | "expressions" | "grammar"
    search: "",
    nounGender: "all", // "all" | "der" | "das" | "die"
    sourceFilter: "all", // "all" | "slides" | "extra"
    nounCategory: "all",
    nounLayout: "cards", // "cards" | "table"
    verbType: "all", // "all" | "Regular" | "Vowel" | "Separable" | "Modal"
    starred: new Set(JSON.parse(localStorage.getItem("german_a1_starred") || "[]")),
    theme: localStorage.getItem("german_a1_theme") || "light",
    speechRate: parseFloat(localStorage.getItem("german_a1_speed") || "0.85"),

    // Practice Lab state
    pMode: "articles", // "articles" | "flashcards" | "verbs"
    pScope: "all", // "all" | "starred" | chapter id
    pIncludeExtra: true,
    pDeck: [],
    pIdx: 0,
    pFlipped: false,
    pFeedback: null,
    pStreak: 0,
    pCorrect: 0,
    pTotal: 0,
    pVerbPron: null
  };

  // Helpers
  const $ = (sel) => document.querySelector(sel);
  const esc = (str) =>
    String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function itemKey(type, chId, label) {
    return `${type}:${chId}:${label}`;
  }

  function toggleStar(key) {
    if (state.starred.has(key)) state.starred.delete(key);
    else state.starred.add(key);
    localStorage.setItem("german_a1_starred", JSON.stringify([...state.starred]));
    renderNav();
    renderContent();
  }

  function getExEn(exDe) {
    return EX_EN[exDe] || "";
  }

  function renderExampleHTML(exDe, withPlayBtn = true) {
    const en = getExEn(exDe);
    return `
      <div class="card-ex">
        <div class="ex-text">
          <span class="ex-de">„${esc(exDe)}“</span>
          ${en ? `<span class="ex-en">${esc(en)}</span>` : ""}
        </div>
        ${withPlayBtn ? `<button class="mini-btn speak-btn" style="width:26px;height:26px;font-size:12px;" data-speak="${esc(exDe)}" title="Hear sentence at ${state.speechRate}× speed">▶</button>` : ""}
      </div>
    `;
  }

  function setPlayingUI(isPlaying) {
    const stopBtn = $("#audioStopBtn");
    if (stopBtn) stopBtn.classList.toggle("playing", isPlaying);
  }

  function stopAudio() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setPlayingUI(false);
  }

  function speakDE(text) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = state.speechRate;
    const voices = window.speechSynthesis.getVoices();
    const de = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("de"));
    if (de) u.voice = de;
    u.onstart = () => setPlayingUI(true);
    u.onend = () => setPlayingUI(false);
    u.onerror = () => setPlayingUI(false);
    window.speechSynthesis.speak(u);
  }

  function applySpeedUI() {
    document.querySelectorAll(".speed-btn").forEach((b) => {
      b.classList.toggle("active", parseFloat(b.dataset.speed) === state.speechRate);
    });
    localStorage.setItem("german_a1_speed", String(state.speechRate));
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = $("#themeToggle");
    if (btn) btn.textContent = state.theme === "dark" ? "☀️ Light" : "🌙 Dark";
    localStorage.setItem("german_a1_theme", state.theme);
  }

  function getScopedChapters() {
    if (typeof state.view === "number") {
      return CHAPTERS.filter((c) => c.id === state.view);
    }
    return CHAPTERS;
  }

  function collectAllData(chapters, starredOnly = false) {
    const nouns = [];
    const verbs = [];
    const expressions = [];
    const grammar = [];
    for (const ch of chapters) {
      for (const n of ch.nouns) {
        const key = itemKey("noun", ch.id, n.sg);
        if (!starredOnly || state.starred.has(key)) {
          nouns.push({ ...n, chId: ch.id, chCode: ch.code, key });
        }
      }
      for (const v of ch.verbs) {
        const key = itemKey("verb", ch.id, v.inf);
        if (!starredOnly || state.starred.has(key)) {
          verbs.push({ ...v, chId: ch.id, chCode: ch.code, key });
        }
      }
      for (const e of ch.expressions) {
        const key = itemKey("expr", ch.id, e.de);
        if (!starredOnly || state.starred.has(key)) {
          expressions.push({ ...e, chId: ch.id, chCode: ch.code, key });
        }
      }
      for (const g of ch.grammar) {
        grammar.push({ ...g, chId: ch.id, chCode: ch.code, chTitle: ch.title });
      }
    }
    return { nouns, verbs, expressions, grammar };
  }

  function matchesSearch(obj, q) {
    if (!q) return true;
    const hay = Object.values(obj)
      .filter((v) => typeof v === "string")
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  }

  function verbTypeClass(type) {
    const t = type.toLowerCase();
    if (t.includes("modal")) return "t-mod";
    if (t.includes("separable")) return "t-sep";
    if (t.includes("vowel")) return "t-vow";
    if (t.includes("irregular")) return "t-irr";
    return "";
  }

  // Render Sidebar Navigation
  function renderNav() {
    const totals = collectAllData(CHAPTERS);
    const globalEl = $("#nav-global");
    globalEl.innerHTML = `
      <button class="nav-btn ${state.view === "all" ? "active" : ""}" data-view="all">
        <span class="nav-icon">📚</span>
        <span class="nav-text">All Chapters (K2–K8)<span class="nav-sub">${totals.nouns.length} nouns · ${totals.verbs.length} verbs</span></span>
      </button>
      <button class="nav-btn ${state.view === "practice" ? "active" : ""}" data-view="practice">
        <span class="nav-icon">⚡</span>
        <span class="nav-text">Practice Lab<span class="nav-sub">Articles, Flashcards &amp; Verbs</span></span>
      </button>
      <button class="nav-btn ${state.view === "starred" ? "active" : ""}" data-view="starred">
        <span class="nav-icon">⭐</span>
        <span class="nav-text">Starred Review<span class="nav-sub">Your personal study list</span></span>
        <span class="nav-badge">${state.starred.size}</span>
      </button>
    `;

    const chEl = $("#nav-chapters");
    chEl.innerHTML = CHAPTERS.map(
      (ch) => `
      <button class="nav-btn ${state.view === ch.id ? "active" : ""}" data-view="${ch.id}">
        <span class="nav-icon">${ch.icon}</span>
        <span class="nav-text">${esc(ch.code)}<span class="nav-sub">${esc(ch.title)}</span></span>
        <span class="nav-badge">${ch.nouns.length + ch.verbs.length}</span>
      </button>
    `
    ).join("");

    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const v = btn.dataset.view;
        state.view = /^\d+$/.test(v) ? Number(v) : v;
        state.nounCategory = "all";
        if (state.view === "practice") initPracticeDeck();
        $("#sidebar").classList.remove("open");
        renderNav();
        renderContent();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    });
  }

  // Render Main Content
  function renderContent() {
    const root = $("#contentRoot");
    if (state.view === "practice") {
      renderPracticeLab(root);
      return;
    }

    const starredOnly = state.view === "starred";
    const chapters = getScopedChapters();
    const raw = collectAllData(chapters, starredOnly);
    const q = state.search.trim().toLowerCase();

    const nouns = raw.nouns.filter((n) => {
      if (state.nounGender !== "all" && n.art !== state.nounGender) return false;
      if (state.sourceFilter === "slides" && n.extra) return false;
      if (state.sourceFilter === "extra" && !n.extra) return false;
      if (state.nounCategory !== "all" && n.cat !== state.nounCategory) return false;
      return matchesSearch(n, q);
    });

    const verbs = raw.verbs.filter((v) => {
      if (state.sourceFilter === "slides" && v.extra) return false;
      if (state.sourceFilter === "extra" && !v.extra) return false;
      if (state.verbType !== "all" && !v.type.toLowerCase().includes(state.verbType.toLowerCase())) return false;
      return matchesSearch(v, q);
    });

    const expressions = raw.expressions.filter((e) => {
      if (state.sourceFilter === "slides" && e.extra) return false;
      if (state.sourceFilter === "extra" && !e.extra) return false;
      return matchesSearch(e, q);
    });

    const grammar = starredOnly
      ? []
      : raw.grammar.filter((g) => {
          if (!q) return true;
          const hay = (g.title + " " + g.explanation + " " + g.tip + " " + JSON.stringify(g.table)).toLowerCase();
          return hay.includes(q);
        });

    // Hero section
    let heroHTML = "";
    if (typeof state.view === "number") {
      const ch = chapters[0];
      heroHTML = `
        <section class="hero">
          <div class="hero-accent-bar" style="background:${ch.color}"></div>
          <div class="hero-top">
            <div>
              <div class="hero-kicker" style="color:${ch.color}">${ch.icon} ${esc(ch.code)} · German A1</div>
              <h2>${esc(ch.title)}</h2>
              <p class="hero-desc">${esc(ch.summary)}</p>
            </div>
            <button class="btn-primary" id="practiceChapterBtn">⚡ Practice ${esc(ch.code)}</button>
          </div>
          <div class="stats-row">
            <span class="stat-chip"><strong>${raw.nouns.length}</strong> Nouns (all forms)</span>
            <span class="stat-chip"><strong>${raw.verbs.length}</strong> Verbs (conjugated)</span>
            <span class="stat-chip"><strong>${raw.expressions.length}</strong> Phrases</span>
            <span class="stat-chip"><strong>${raw.grammar.length}</strong> Grammar Topics</span>
          </div>
        </section>
      `;
    } else if (starredOnly) {
      heroHTML = `
        <section class="hero">
          <div class="hero-accent-bar" style="background:#d97706"></div>
          <div class="hero-top">
            <div>
              <div class="hero-kicker" style="color:#d97706">⭐ Personal Study List</div>
              <h2>Starred Words &amp; Verbs</h2>
              <p class="hero-desc">Click the ★ star on any noun, verb, or phrase across Kapitel 2–8 to save it here for focused review.</p>
            </div>
            ${state.starred.size > 0 ? `<button class="btn-primary" id="practiceStarredBtn">⚡ Practice Starred (${state.starred.size})</button>` : ""}
          </div>
        </section>
      `;
    } else {
      const slideCount = raw.nouns.filter((x) => !x.extra).length + raw.verbs.filter((x) => !x.extra).length;
      const extraCount = raw.nouns.filter((x) => x.extra).length + raw.verbs.filter((x) => x.extra).length;
      heroHTML = `
        <section class="hero">
          <div class="hero-accent-bar"></div>
          <div class="hero-top">
            <div>
              <div class="hero-kicker">🇩🇪 German A1 Complete Reference</div>
              <h2>Kapitel 2 – 8 Master Study Hub</h2>
              <p class="hero-desc">Every noun in all forms (der/das/die, Plural, Akkusativ, Dativ, Feminine), every verb fully conjugated (Präsens, Imperativ, Präteritum), curated topic extras, and all chapter grammar in one searchable local page.</p>
            </div>
            <button class="btn-primary" id="practiceAllBtn">⚡ Launch Practice Lab</button>
          </div>
          <div class="stats-row">
            <span class="stat-chip"><strong>${raw.nouns.length}</strong> Nouns</span>
            <span class="stat-chip"><strong>${raw.verbs.length}</strong> Verbs</span>
            <span class="stat-chip"><strong>${raw.expressions.length}</strong> Phrases</span>
            <span class="stat-chip"><strong>${raw.grammar.length}</strong> Grammar Guides</span>
            <span class="stat-chip"><strong>${slideCount}</strong> Slide Items + <strong>${extraCount}</strong> Topic Extras</span>
          </div>
        </section>
      `;
    }

    // Tabs
    const tabsHTML = `
      <div class="tabs-bar">
        <button class="tab-btn ${state.tab === "nouns" ? "active" : ""}" data-tab="nouns">
          Nouns &amp; Forms <span class="tab-count">${nouns.length}</span>
        </button>
        <button class="tab-btn ${state.tab === "verbs" ? "active" : ""}" data-tab="verbs">
          Verbs &amp; Conjugations <span class="tab-count">${verbs.length}</span>
        </button>
        <button class="tab-btn ${state.tab === "expressions" ? "active" : ""}" data-tab="expressions">
          Phrases &amp; Adjectives <span class="tab-count">${expressions.length}</span>
        </button>
        ${
          !starredOnly
            ? `<button class="tab-btn ${state.tab === "grammar" ? "active" : ""}" data-tab="grammar">
                Grammar (Grammatik) <span class="tab-count">${grammar.length}</span>
              </button>`
            : ""
        }
      </div>
    `;

    let bodyHTML = "";
    if (state.tab === "nouns") {
      bodyHTML = renderNounsSection(nouns, raw.nouns);
    } else if (state.tab === "verbs") {
      bodyHTML = renderVerbsSection(verbs);
    } else if (state.tab === "expressions") {
      bodyHTML = renderExpressionsSection(expressions);
    } else {
      bodyHTML = renderGrammarSection(grammar);
    }

    root.innerHTML = heroHTML + tabsHTML + bodyHTML;
    bindContentEvents();
  }

  function renderNounsSection(nouns, allScopedNouns) {
    const categories = [...new Set(allScopedNouns.map((n) => n.cat))];
    const filterHTML = `
      <div class="filter-bar">
        <div class="pill-group">
          <button class="pill ${state.nounGender === "all" ? "active" : ""}" data-gender="all">All Articles</button>
          <button class="pill p-der ${state.nounGender === "der" ? "active" : ""}" data-gender="der">der</button>
          <button class="pill p-das ${state.nounGender === "das" ? "active" : ""}" data-gender="das">das</button>
          <button class="pill p-die ${state.nounGender === "die" ? "active" : ""}" data-gender="die">die</button>
          <span style="width:6px"></span>
          <button class="pill ${state.sourceFilter === "all" ? "active" : ""}" data-source="all">Slides + Extra</button>
          <button class="pill ${state.sourceFilter === "slides" ? "active" : ""}" data-source="slides">Slides Only</button>
          <button class="pill p-extra ${state.sourceFilter === "extra" ? "active" : ""}" data-source="extra">✨ Extra Only</button>
        </div>
        <div class="pill-group">
          <select class="filter-select" id="catSelect">
            <option value="all">All Topics (${categories.length})</option>
            ${categories.map((c) => `<option value="${esc(c)}" ${state.nounCategory === c ? "selected" : ""}>${esc(c)}</option>`).join("")}
          </select>
          <button class="pill ${state.nounLayout === "cards" ? "active" : ""}" data-layout="cards">▦ Cards</button>
          <button class="pill ${state.nounLayout === "table" ? "active" : ""}" data-layout="table">☰ Table</button>
        </div>
      </div>
    `;

    if (nouns.length === 0) {
      return filterHTML + `<div class="empty-state">No nouns match your current filter or search. Try clearing the search or switching filters.</div>`;
    }

    if (state.nounLayout === "table") {
      return (
        filterHTML +
        `<div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Singular</th>
                <th>Plural</th>
                <th>Akkusativ</th>
                <th>Dativ</th>
                <th>English</th>
                <th>Chapter / Topic</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${nouns
                .map((n) => {
                  const isStar = state.starred.has(n.key);
                  return `
                    <tr>
                      <td>
                        <span class="art-${n.art}">${n.art}</span> <strong>${esc(n.sg)}</strong>
                        ${n.fem ? `<div style="font-size:12px;color:var(--text-soft);margin-top:2px;">♀ ${esc(n.fem)}</div>` : ""}
                      </td>
                      <td>${esc(n.pl)}</td>
                      <td>${esc(n.akk)}</td>
                      <td>${esc(n.dat)}</td>
                      <td>${esc(n.en)}</td>
                      <td>
                        <span class="badge-ch">${esc(n.chCode)}</span>
                        ${n.extra ? `<span class="badge-extra">Extra</span>` : ""}
                      </td>
                      <td style="white-space:nowrap;">
                        <button class="mini-btn speak-btn" data-speak="${esc(n.art + " " + n.sg + ", " + n.pl)}" title="Pronounce">🔊</button>
                        <button class="mini-btn star-btn ${isStar ? "starred" : ""}" data-star="${esc(n.key)}" title="Save">★</button>
                      </td>
                    </tr>
                  `;
                })
                .join("")}
            </tbody>
          </table>
        </div>`
      );
    }

    return (
      filterHTML +
      `<div class="cards-grid">
        ${nouns
          .map((n) => {
            const isStar = state.starred.has(n.key);
            return `
              <article class="word-card c-${n.art}">
                <div class="card-head">
                  <div>
                    <div class="word-main">
                      <span class="art-${n.art}">${n.art}</span>
                      <span>${esc(n.sg)}</span>
                    </div>
                    <div class="word-en">${esc(n.en)}</div>
                  </div>
                  <div class="card-actions">
                    <button class="mini-btn speak-btn" data-speak="${esc(n.art + " " + n.sg)}" title="Pronounce">🔊</button>
                    <button class="mini-btn star-btn ${isStar ? "starred" : ""}" data-star="${esc(n.key)}" title="Star for review">★</button>
                  </div>
                </div>
                <div class="forms-grid">
                  <div class="form-cell"><span class="fl">Plural</span><span class="fv">${esc(n.pl)}</span></div>
                  <div class="form-cell"><span class="fl">Akkusativ</span><span class="fv">${esc(n.akk)}</span></div>
                  <div class="form-cell"><span class="fl">Dativ</span><span class="fv">${esc(n.dat)}</span></div>
                  <div class="form-cell"><span class="fl">Topic</span><span class="fv" style="font-size:11.5px;color:var(--text-muted)">${esc(n.cat.replace(/^Extra:\s*/, ""))}</span></div>
                  ${n.fem ? `<div class="form-cell fem-row"><span class="fl">Feminine Form</span><span class="fv">${esc(n.fem)}</span></div>` : ""}
                </div>
                ${renderExampleHTML(n.ex, true)}
                <div class="card-meta">
                  <span class="badge-ch">${esc(n.chCode)}</span>
                  ${n.extra ? `<span class="badge-extra">✨ Extra Topic Vocab</span>` : `<span class="badge-cat">From Slides</span>`}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>`
    );
  }

  function renderVerbsSection(verbs) {
    const filterHTML = `
      <div class="filter-bar">
        <div class="pill-group">
          <button class="pill ${state.verbType === "all" ? "active" : ""}" data-vtype="all">All Verbs</button>
          <button class="pill ${state.verbType === "Regular" ? "active" : ""}" data-vtype="Regular">Regular</button>
          <button class="pill ${state.verbType === "Vowel" ? "active" : ""}" data-vtype="Vowel">Vowel Change</button>
          <button class="pill ${state.verbType === "Separable" ? "active" : ""}" data-vtype="Separable">Separable (Trennbar)</button>
          <button class="pill ${state.verbType === "Modal" ? "active" : ""}" data-vtype="Modal">Modal</button>
        </div>
        <div class="pill-group">
          <button class="pill ${state.sourceFilter === "all" ? "active" : ""}" data-source="all">Slides + Extra</button>
          <button class="pill ${state.sourceFilter === "slides" ? "active" : ""}" data-source="slides">Slides Only</button>
          <button class="pill p-extra ${state.sourceFilter === "extra" ? "active" : ""}" data-source="extra">✨ Extra Only</button>
        </div>
      </div>
    `;

    if (verbs.length === 0) {
      return filterHTML + `<div class="empty-state">No verbs match your current filter or search.</div>`;
    }

    return (
      filterHTML +
      `<div class="verb-grid">
        ${verbs
          .map((v) => {
            const isStar = state.starred.has(v.key);
            return `
              <article class="verb-card">
                <div class="card-head">
                  <div>
                    <div class="word-main">${esc(v.inf)}</div>
                    <div class="word-en">${esc(v.en)}</div>
                  </div>
                  <div class="card-actions">
                    <button class="mini-btn speak-btn" data-speak="${esc(v.inf)}" title="Pronounce">🔊</button>
                    <button class="mini-btn star-btn ${isStar ? "starred" : ""}" data-star="${esc(v.key)}" title="Star">★</button>
                  </div>
                </div>
                <div class="verb-badges">
                  <span class="vtype ${verbTypeClass(v.type)}">${esc(v.type)}</span>
                  <span class="badge-cat">Case: ${esc(v.caseGov)}</span>
                  <span class="badge-ch">${esc(v.chCode)}</span>
                  ${v.extra ? `<span class="badge-extra">✨ Extra</span>` : ""}
                </div>
                <div class="conj-grid">
                  <div class="conj-item"><span class="pron">ich</span><span class="form">${esc(v.ich)}</span></div>
                  <div class="conj-item"><span class="pron">du</span><span class="form">${esc(v.du)}</span></div>
                  <div class="conj-item"><span class="pron">er / sie / es</span><span class="form">${esc(v.er)}</span></div>
                  <div class="conj-item"><span class="pron">wir</span><span class="form">${esc(v.wir)}</span></div>
                  <div class="conj-item"><span class="pron">ihr</span><span class="form">${esc(v.ihr)}</span></div>
                  <div class="conj-item"><span class="pron">sie / Sie</span><span class="form">${esc(v.sie)}</span></div>
                </div>
                <div class="verb-extra-row">
                  <div class="verb-extra-box"><strong>Imperativ</strong>${esc(v.imp)}</div>
                  <div class="verb-extra-box"><strong>Präteritum (er/sie)</strong>${esc(v.prt)}</div>
                </div>
                ${renderExampleHTML(v.ex, true)}
              </article>
            `;
          })
          .join("")}
      </div>`
    );
  }

  function renderExpressionsSection(expressions) {
    const filterHTML = `
      <div class="filter-bar">
        <div class="pill-group">
          <button class="pill ${state.sourceFilter === "all" ? "active" : ""}" data-source="all">Slides + Extra</button>
          <button class="pill ${state.sourceFilter === "slides" ? "active" : ""}" data-source="slides">Slides Only</button>
          <button class="pill p-extra ${state.sourceFilter === "extra" ? "active" : ""}" data-source="extra">✨ Extra Only</button>
        </div>
      </div>
    `;

    if (expressions.length === 0) {
      return filterHTML + `<div class="empty-state">No phrases match your current filter or search.</div>`;
    }

    return (
      filterHTML +
      `<div class="expr-grid">
        ${expressions
          .map((e) => {
            const isStar = state.starred.has(e.key);
            return `
              <article class="expr-card">
                <div class="card-head">
                  <div class="expr-de">${esc(e.de)}</div>
                  <div class="card-actions">
                    <button class="mini-btn speak-btn" data-speak="${esc(e.de.replace(/[↔\/]/g, ", "))}" title="Pronounce">🔊</button>
                    <button class="mini-btn star-btn ${isStar ? "starred" : ""}" data-star="${esc(e.key)}" title="Star">★</button>
                  </div>
                </div>
                <div class="expr-en">${esc(e.en)}</div>
                <div class="expr-note">${esc(e.note)}</div>
                <div class="card-meta" style="margin-top:4px;">
                  <span class="badge-ch">${esc(e.chCode)}</span>
                  ${e.extra ? `<span class="badge-extra">✨ Extra</span>` : ""}
                </div>
              </article>
            `;
          })
          .join("")}
      </div>`
    );
  }

  function renderGrammarSection(grammar) {
    if (grammar.length === 0) {
      return `<div class="empty-state">No grammar topics match your search.</div>`;
    }
    return `
      <div class="grammar-stack">
        ${grammar
          .map(
            (g) => `
          <section class="grammar-card">
            <div class="grammar-head">
              <h3>${esc(g.title)}</h3>
              <div class="pill-group">
                <span class="badge-ch">${esc(g.chCode)}</span>
                <span class="badge-cat">${esc(g.badge)}</span>
              </div>
            </div>
            <p class="grammar-exp">${g.explanation}</p>
            <div class="grammar-table-wrap">
              <table class="grammar-table">
                <thead>
                  <tr>${g.table.headers.map((h) => `<th>${h}</th>`).join("")}</tr>
                </thead>
                <tbody>
                  ${g.table.rows.map((r) => `<tr>${r.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
                </tbody>
              </table>
            </div>
            <div class="grammar-tip">💡 <strong>Exam Tip:</strong> ${g.tip}</div>
          </section>
        `
          )
          .join("")}
      </div>
    `;
  }

  function bindContentEvents() {
    document.querySelectorAll(".tab-btn").forEach((b) =>
      b.addEventListener("click", () => {
        state.tab = b.dataset.tab;
        renderContent();
      })
    );
    document.querySelectorAll("[data-gender]").forEach((b) =>
      b.addEventListener("click", () => {
        state.nounGender = b.dataset.gender;
        renderContent();
      })
    );
    document.querySelectorAll("[data-source]").forEach((b) =>
      b.addEventListener("click", () => {
        state.sourceFilter = b.dataset.source;
        renderContent();
      })
    );
    document.querySelectorAll("[data-layout]").forEach((b) =>
      b.addEventListener("click", () => {
        state.nounLayout = b.dataset.layout;
        renderContent();
      })
    );
    document.querySelectorAll("[data-vtype]").forEach((b) =>
      b.addEventListener("click", () => {
        state.verbType = b.dataset.vtype;
        renderContent();
      })
    );
    const catSelect = $("#catSelect");
    if (catSelect) {
      catSelect.addEventListener("change", () => {
        state.nounCategory = catSelect.value;
        renderContent();
      });
    }
    document.querySelectorAll(".speak-btn").forEach((b) =>
      b.addEventListener("click", () => speakDE(b.dataset.speak))
    );
    document.querySelectorAll(".star-btn").forEach((b) =>
      b.addEventListener("click", () => toggleStar(b.dataset.star))
    );

    const pAll = $("#practiceAllBtn");
    if (pAll) pAll.addEventListener("click", () => launchPractice("all"));
    const pStar = $("#practiceStarredBtn");
    if (pStar) pStar.addEventListener("click", () => launchPractice("starred"));
    const pCh = $("#practiceChapterBtn");
    if (pCh) pCh.addEventListener("click", () => launchPractice(state.view));
  }

  // =========================================================================
  // PRACTICE LAB
  // =========================================================================
  function launchPractice(scope) {
    state.view = "practice";
    state.pScope = scope;
    initPracticeDeck();
    renderNav();
    renderContent();
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function initPracticeDeck() {
    const chs =
      typeof state.pScope === "number"
        ? CHAPTERS.filter((c) => c.id === state.pScope)
        : CHAPTERS;
    const data = collectAllData(chs, state.pScope === "starred");

    let items = [];
    if (state.pMode === "articles") {
      items = data.nouns.filter((n) => (state.pIncludeExtra || !n.extra) && ["der", "das", "die"].includes(n.art));
    } else if (state.pMode === "verbs") {
      items = data.verbs.filter((v) => state.pIncludeExtra || !v.extra);
    } else {
      const ns = data.nouns.filter((n) => state.pIncludeExtra || !n.extra).map((n) => ({ kind: "noun", ...n }));
      const vs = data.verbs.filter((v) => state.pIncludeExtra || !v.extra).map((v) => ({ kind: "verb", ...v }));
      items = [...ns, ...vs];
    }

    state.pDeck = shuffle(items);
    state.pIdx = 0;
    state.pFlipped = false;
    state.pFeedback = null;
    pickRandomPronoun();
  }

  function pickRandomPronoun() {
    const prons = [
      { key: "ich", label: "ich" },
      { key: "du", label: "du" },
      { key: "er", label: "er / sie / es" },
      { key: "wir", label: "wir" },
      { key: "ihr", label: "ihr" },
      { key: "sie", label: "sie / Sie" }
    ];
    state.pVerbPron = prons[Math.floor(Math.random() * prons.length)];
  }

  function nextCard() {
    if (state.pDeck.length === 0) return;
    state.pIdx = (state.pIdx + 1) % state.pDeck.length;
    if (state.pIdx === 0) state.pDeck = shuffle(state.pDeck);
    state.pFlipped = false;
    state.pFeedback = null;
    pickRandomPronoun();
    renderContent();
  }

  function renderPracticeLab(root) {
    const acc = state.pTotal > 0 ? Math.round((state.pCorrect / state.pTotal) * 100) : 0;
    const controlsHTML = `
      <section class="hero">
        <div class="hero-accent-bar" style="background:#7c3aed"></div>
        <div class="hero-top">
          <div>
            <div class="hero-kicker" style="color:#7c3aed">⚡ Interactive Practice Lab</div>
            <h2>Train Articles, Vocabulary &amp; Verbs</h2>
            <p class="hero-desc">Build muscle memory for der/das/die, noun plurals &amp; cases, and verb conjugations across any chapter.</p>
          </div>
          <div class="stats-row" style="margin-top:0">
            <span class="stat-chip">🔥 Streak: <strong>${state.pStreak}</strong></span>
            <span class="stat-chip">🎯 Accuracy: <strong>${acc}%</strong> (${state.pCorrect}/${state.pTotal})</span>
          </div>
        </div>
      </section>

      <div class="practice-controls">
        <div class="pill-group">
          <button class="pill ${state.pMode === "articles" ? "active" : ""}" data-pmode="articles">🎨 der / das / die</button>
          <button class="pill ${state.pMode === "flashcards" ? "active" : ""}" data-pmode="flashcards">🃏 Smart Flashcards</button>
          <button class="pill ${state.pMode === "verbs" ? "active" : ""}" data-pmode="verbs">⚙️ Verb Conjugation</button>
        </div>
        <div class="pill-group">
          <select class="filter-select" id="pScopeSelect">
            <option value="all" ${state.pScope === "all" ? "selected" : ""}>All Chapters (K2–K8)</option>
            <option value="starred" ${state.pScope === "starred" ? "selected" : ""}>⭐ Starred Only (${state.starred.size})</option>
            ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.pScope === c.id ? "selected" : ""}>${esc(c.code)}: ${esc(c.title)}</option>`).join("")}
          </select>
          <label style="font-size:12.5px;font-weight:600;display:flex;align-items:center;gap:5px;cursor:pointer;">
            <input type="checkbox" id="pExtraCheck" ${state.pIncludeExtra ? "checked" : ""} /> Include Extras
          </label>
        </div>
      </div>
    `;

    if (state.pDeck.length === 0) {
      root.innerHTML = controlsHTML + `<div class="empty-state">No cards available for this selection (e.g., star some words first or pick a chapter).</div>`;
      bindPracticeControls();
      return;
    }

    const item = state.pDeck[state.pIdx];
    let stageHTML = "";

    if (state.pMode === "articles") {
      stageHTML = `
        <div class="practice-stage">
          <div class="card-meta" style="justify-content:center;">
            <span class="badge-ch">${esc(item.chCode)}</span>
            <span class="badge-cat">${esc(item.cat)}</span>
            <span class="badge-cat">Card ${state.pIdx + 1} / ${state.pDeck.length}</span>
          </div>
          <div class="flashcard-word">${esc(item.sg)}</div>
          <div class="flashcard-sub">${esc(item.en)}</div>
          <div class="art-choice-row">
            <button class="art-choice-btn b-der" data-art="der">der <span style="font-size:11px;opacity:.7">(1)</span></button>
            <button class="art-choice-btn b-das" data-art="das">das <span style="font-size:11px;opacity:.7">(2)</span></button>
            <button class="art-choice-btn b-die" data-art="die">die <span style="font-size:11px;opacity:.7">(3)</span></button>
          </div>
          ${
            state.pFeedback
              ? `
            <div class="feedback-box ${state.pFeedback.ok ? "feedback-ok" : "feedback-bad"}">
              ${state.pFeedback.ok ? "✅ Correct!" : `❌ It's <strong>${item.art} ${esc(item.sg)}</strong>!`}
              <div style="margin-top:6px;font-weight:500;color:var(--text);">
                Plural: <strong>${esc(item.pl)}</strong> · Akk: <strong>${esc(item.akk)}</strong> · Dat: <strong>${esc(item.dat)}</strong>
              </div>
              <div style="margin-top:4px;font-style:italic;font-weight:400;color:var(--text-muted);">„${esc(item.ex)}“</div>
              ${getExEn(item.ex) ? `<div style="margin-top:2px;font-size:12.5px;font-weight:400;color:var(--text-soft);">${esc(getExEn(item.ex))}</div>` : ""}
            </div>
            <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;">
              <button class="btn-secondary speak-btn" data-speak="${esc(item.art + " " + item.sg)}">🔊 Hear</button>
              <button class="btn-primary" id="nextCardBtn">Next Word →</button>
            </div>
          `
              : `<div style="font-size:12px;color:var(--text-soft);">Keyboard shortcuts: press <strong>1</strong> (der), <strong>2</strong> (das), <strong>3</strong> (die)</div>`
          }
        </div>
      `;
    } else if (state.pMode === "flashcards") {
      const isNoun = item.kind === "noun";
      stageHTML = `
        <div class="practice-stage">
          <div class="card-meta" style="justify-content:center;">
            <span class="badge-ch">${esc(item.chCode)}</span>
            <span class="badge-cat">${isNoun ? "Noun" : "Verb"}</span>
            <span class="badge-cat">Card ${state.pIdx + 1} / ${state.pDeck.length}</span>
          </div>
          <div class="flashcard-word">${isNoun ? esc(item.en) : esc(item.en)}</div>
          <div class="flashcard-sub">${isNoun ? "Recall article, singular, plural &amp; cases" : "Recall infinitive &amp; conjugations"}</div>
          ${
            !state.pFlipped
              ? `<button class="btn-primary" id="flipBtn">Reveal German Answer</button>`
              : `
            <div class="flashcard-answer">
              ${
                isNoun
                  ? `
                <div class="word-main" style="margin-bottom:10px;">
                  <span class="art-${item.art}">${item.art}</span> ${esc(item.sg)}
                  <button class="mini-btn speak-btn" data-speak="${esc(item.art + " " + item.sg)}">🔊</button>
                </div>
                <div class="forms-grid" style="margin-bottom:10px;">
                  <div class="form-cell"><span class="fl">Plural</span><span class="fv">${esc(item.pl)}</span></div>
                  <div class="form-cell"><span class="fl">Akkusativ</span><span class="fv">${esc(item.akk)}</span></div>
                  <div class="form-cell"><span class="fl">Dativ</span><span class="fv">${esc(item.dat)}</span></div>
                  ${item.fem ? `<div class="form-cell"><span class="fl">Feminine</span><span class="fv">${esc(item.fem)}</span></div>` : ""}
                </div>
                ${renderExampleHTML(item.ex, true)}
              `
                  : `
                <div class="word-main" style="margin-bottom:10px;">
                  ${esc(item.inf)} <span class="vtype ${verbTypeClass(item.type)}">${esc(item.type)}</span>
                  <button class="mini-btn speak-btn" data-speak="${esc(item.inf)}">🔊</button>
                </div>
                <div class="conj-grid" style="margin-bottom:10px;">
                  <div class="conj-item"><span class="pron">ich</span><span class="form">${esc(item.ich)}</span></div>
                  <div class="conj-item"><span class="pron">du</span><span class="form">${esc(item.du)}</span></div>
                  <div class="conj-item"><span class="pron">er/sie/es</span><span class="form">${esc(item.er)}</span></div>
                  <div class="conj-item"><span class="pron">wir</span><span class="form">${esc(item.wir)}</span></div>
                  <div class="conj-item"><span class="pron">ihr</span><span class="form">${esc(item.ihr)}</span></div>
                  <div class="conj-item"><span class="pron">sie/Sie</span><span class="form">${esc(item.sie)}</span></div>
                </div>
                ${renderExampleHTML(item.ex, true)}
              `
              }
              <div style="margin-top:18px;display:flex;gap:10px;justify-content:center;">
                <button class="btn-secondary star-btn ${state.starred.has(item.key) ? "starred" : ""}" data-star="${esc(item.key)}">★ ${state.starred.has(item.key) ? "Starred" : "Star for Review"}</button>
                <button class="btn-primary" id="nextCardBtn">Next Card →</button>
              </div>
            </div>
          `
          }
        </div>
      `;
    } else {
      // Verb Conjugation Drill
      const pron = state.pVerbPron;
      const expected = item[pron.key];
      stageHTML = `
        <div class="practice-stage">
          <div class="card-meta" style="justify-content:center;">
            <span class="badge-ch">${esc(item.chCode)}</span>
            <span class="vtype ${verbTypeClass(item.type)}">${esc(item.type)}</span>
          </div>
          <div class="flashcard-word">${esc(pron.label)} + <span style="color:var(--accent)">${esc(item.inf)}</span></div>
          <div class="flashcard-sub">${esc(item.en)}</div>
          <input type="text" class="drill-input" id="verbAnswerInput" placeholder="Type conjugated form…" autocomplete="off" ${state.pFeedback ? "disabled" : ""} />
          <div class="umlaut-bar">
            ${["ä", "ö", "ü", "ß"].map((ch) => `<button class="umlaut-btn" data-char="${ch}">${ch}</button>`).join("")}
          </div>
          ${
            !state.pFeedback
              ? `<div style="display:flex;gap:10px;justify-content:center;">
                  <button class="btn-primary" id="checkVerbBtn">Check Answer</button>
                  <button class="btn-secondary" id="revealVerbBtn">Reveal</button>
                </div>`
              : `
            <div class="feedback-box ${state.pFeedback.ok ? "feedback-ok" : "feedback-bad"}">
              ${state.pFeedback.ok ? `✅ Perfect! <strong>${esc(pron.label)} ${esc(expected)}</strong>` : `❌ Answer: <strong>${esc(pron.label)} ${esc(expected)}</strong>`}
              <div style="margin-top:5px;font-style:italic;font-weight:400;color:var(--text-muted);">„${esc(item.ex)}“</div>
              ${getExEn(item.ex) ? `<div style="margin-top:2px;font-size:12.5px;font-weight:400;color:var(--text-soft);">${esc(getExEn(item.ex))}</div>` : ""}
            </div>
            <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;">
              <button class="btn-secondary speak-btn" data-speak="${esc(pron.key === "er" ? "er " + expected : pron.key + " " + expected)}">🔊 Hear</button>
              <button class="btn-primary" id="nextCardBtn">Next Verb →</button>
            </div>
          `
          }
        </div>
      `;
    }

    root.innerHTML = controlsHTML + stageHTML;
    bindPracticeControls(item);
  }

  function answerArticle(choice, item) {
    if (state.pFeedback) return;
    const ok = choice === item.art;
    state.pTotal++;
    if (ok) {
      state.pCorrect++;
      state.pStreak++;
    } else {
      state.pStreak = 0;
    }
    state.pFeedback = { ok };
    speakDE(item.art + " " + item.sg);
    renderContent();
  }

  function checkVerbAnswer(item, revealOnly = false) {
    const inp = $("#verbAnswerInput");
    const val = (inp ? inp.value : "").trim().toLowerCase();
    const expected = item[state.pVerbPron.key].trim().toLowerCase();
    const ok = !revealOnly && val === expected;
    state.pTotal++;
    if (ok) {
      state.pCorrect++;
      state.pStreak++;
    } else {
      state.pStreak = 0;
    }
    state.pFeedback = { ok };
    renderContent();
  }

  function bindPracticeControls(item) {
    document.querySelectorAll("[data-pmode]").forEach((b) =>
      b.addEventListener("click", () => {
        state.pMode = b.dataset.pmode;
        initPracticeDeck();
        renderContent();
      })
    );
    const scopeSel = $("#pScopeSelect");
    if (scopeSel) {
      scopeSel.addEventListener("change", () => {
        const v = scopeSel.value;
        state.pScope = /^\d+$/.test(v) ? Number(v) : v;
        initPracticeDeck();
        renderContent();
      });
    }
    const extraCheck = $("#pExtraCheck");
    if (extraCheck) {
      extraCheck.addEventListener("change", () => {
        state.pIncludeExtra = extraCheck.checked;
        initPracticeDeck();
        renderContent();
      });
    }

    document.querySelectorAll("[data-art]").forEach((b) =>
      b.addEventListener("click", () => answerArticle(b.dataset.art, item))
    );
    const flipBtn = $("#flipBtn");
    if (flipBtn) {
      flipBtn.addEventListener("click", () => {
        state.pFlipped = true;
        renderContent();
      });
    }
    const nextBtn = $("#nextCardBtn");
    if (nextBtn) nextBtn.addEventListener("click", nextCard);

    const checkBtn = $("#checkVerbBtn");
    if (checkBtn) checkBtn.addEventListener("click", () => checkVerbAnswer(item, false));
    const revealBtn = $("#revealVerbBtn");
    if (revealBtn) revealBtn.addEventListener("click", () => checkVerbAnswer(item, true));

    const inp = $("#verbAnswerInput");
    if (inp) {
      inp.focus();
      inp.addEventListener("keydown", (e) => {
        if (e.key === "Enter") checkVerbAnswer(item, false);
      });
    }
    document.querySelectorAll(".umlaut-btn").forEach((b) =>
      b.addEventListener("click", () => {
        if (!inp || inp.disabled) return;
        inp.value += b.dataset.char;
        inp.focus();
      })
    );
    document.querySelectorAll(".speak-btn").forEach((b) =>
      b.addEventListener("click", () => speakDE(b.dataset.speak))
    );
    document.querySelectorAll(".star-btn").forEach((b) =>
      b.addEventListener("click", () => toggleStar(b.dataset.star))
    );
  }

  // Global Events
  function init() {
    applyTheme();
    applySpeedUI();

    document.querySelectorAll(".speed-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.speechRate = parseFloat(b.dataset.speed);
        applySpeedUI();
      });
    });

    const stopBtn = $("#audioStopBtn");
    if (stopBtn) stopBtn.addEventListener("click", stopAudio);

    $("#themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });

    $("#mobileMenuBtn").addEventListener("click", () => {
      $("#sidebar").classList.toggle("open");
    });

    const searchInput = $("#globalSearch");
    const searchClear = $("#searchClear");
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      searchClear.classList.toggle("show", state.search.length > 0);
      if (state.view === "practice") {
        state.view = "all";
        renderNav();
      }
      renderContent();
    });

    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      state.search = "";
      searchClear.classList.remove("show");
      renderContent();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== searchInput && document.activeElement.tagName !== "INPUT") {
        e.preventDefault();
        searchInput.focus();
        return;
      }
      if (state.view === "practice" && state.pMode === "articles" && state.pDeck.length > 0) {
        const item = state.pDeck[state.pIdx];
        if (!state.pFeedback) {
          if (e.key === "1") answerArticle("der", item);
          if (e.key === "2") answerArticle("das", item);
          if (e.key === "3") answerArticle("die", item);
        } else if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          nextCard();
        }
      }
    });

    renderNav();
    renderContent();
  }

  init();
})();
