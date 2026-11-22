(function () {
  const CHAPTERS = (window.A1_CHAPTERS || []).sort((a, b) => a.id - b.id);
  const EX_EN = window.A1_EX_EN || {};
  const CHEATSHEET = window.A1_GRAMMAR_CHEATSHEET || [];
  const GRAMMAR_CLOZE_BANK = window.A1_GRAMMAR_CLOZE_BANK || [];

  // State
  const state = {
    view: "all", // "all" | "practice" | "starred" | chapter id (2..8)
    tab: "nouns", // "nouns" | "verbs" | "expressions" | "grammar"
    search: "",
    nounGender: "all",
    sourceFilter: "all",
    nounCategory: "all",
    nounLayout: "cards",
    verbType: "all",
    unlearnedOnly: false,
    recallMode: localStorage.getItem("german_a1_recall") || "none", // "none" | "en" | "art"
    starred: new Set(JSON.parse(localStorage.getItem("german_a1_starred") || "[]")),
    mastered: new Set(JSON.parse(localStorage.getItem("german_a1_mastered") || "[]")),
    theme: localStorage.getItem("german_a1_theme") || "light",
    speechRate: parseFloat(localStorage.getItem("german_a1_speed") || "0.85"),
    activeSpeakBtn: null,

    // Quick Grammar Drawer
    grammarOpen: false,
    grammarTab: "articles",

    // Practice Lab state
    pMode: "articles", // "articles" | "flashcards" | "verbs" | "casequiz"
    pScope: "all",
    pIncludeExtra: true,
    pUnlearnedOnly: false,
    pAutoAudio: true,
    pDeck: [],
    pIdx: 0,
    pFlipped: false,
    pFeedback: null,
    pQuizChoice: null,
    pStreak: parseInt(localStorage.getItem("german_a1_streak") || "0", 10),
    pCorrect: parseInt(localStorage.getItem("german_a1_correct") || "0", 10),
    pTotal: parseInt(localStorage.getItem("german_a1_total") || "0", 10),
    pVerbPron: null
  };

  let toastTimer = null;

  // Helpers
  const $ = (sel) => document.querySelector(sel);
  const esc = (str) =>
    String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function showToast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2000);
  }

  function copyGerman(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(`📋 Copied "${text}"`)).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(`📋 Copied "${text}"`);
    }
  }

  function itemKey(type, chId, label) {
    return `${type}:${chId}:${label}`;
  }

  function savePracticeStats() {
    localStorage.setItem("german_a1_streak", String(state.pStreak));
    localStorage.setItem("german_a1_correct", String(state.pCorrect));
    localStorage.setItem("german_a1_total", String(state.pTotal));
  }

  function toggleStar(key) {
    const added = !state.starred.has(key);
    if (added) state.starred.add(key);
    else state.starred.delete(key);
    localStorage.setItem("german_a1_starred", JSON.stringify([...state.starred]));
    showToast(added ? "★ Saved to Starred Review" : "Removed from Starred Review");
    renderNav();
    renderContent();
  }

  // =========================================================================
  // MASTERY TRACKING ENGINE
  // =========================================================================
  function isMastered(key) {
    return key ? state.mastered.has(key) : false;
  }

  function getMasteryStats(chaptersInput) {
    const chs = Array.isArray(chaptersInput) ? chaptersInput : [chaptersInput];
    let total = 0;
    let learned = 0;
    for (const ch of chs) {
      for (const n of ch.nouns) {
        total++;
        if (state.mastered.has(itemKey("noun", ch.id, n.sg))) learned++;
      }
      for (const v of ch.verbs) {
        total++;
        if (state.mastered.has(itemKey("verb", ch.id, v.inf))) learned++;
      }
    }
    const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
    return { learned, total, pct };
  }

  function setMastered(key, forceState = null, silentRender = false) {
    if (!key) return false;
    const was = state.mastered.has(key);
    const next = forceState === null ? !was : Boolean(forceState);
    if (was === next) return next;

    if (next) state.mastered.add(key);
    else state.mastered.delete(key);
    localStorage.setItem("german_a1_mastered", JSON.stringify([...state.mastered]));

    const chId = Number(key.split(":")[1]);
    const ch = CHAPTERS.find((c) => c.id === chId);
    if (next && ch) {
      const stats = getMasteryStats(ch);
      if (stats.pct === 100) showToast(`🎉 ${ch.code} is 100% Mastered!`);
      else showToast(`✓ Marked Learned (${stats.pct}% of ${ch.code})`);
    } else {
      showToast(next ? "✓ Marked as Learned" : "Returned to Unlearned");
    }

    if (!silentRender) {
      renderNav();
      renderContent();
    }
    return next;
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
        ${withPlayBtn ? `<button class="mini-btn speak-btn" style="width:28px;height:28px;font-size:12px;" data-speak="${esc(exDe)}" title="Hear sentence at ${state.speechRate}× speed">▶</button>` : ""}
      </div>
    `;
  }

  // =========================================================================
  // AUDIO ENGINE
  // =========================================================================
  function clearSpeakingHighlight() {
    if (state.activeSpeakBtn) {
      state.activeSpeakBtn.classList.remove("speaking");
      state.activeSpeakBtn = null;
    }
    const trig = $("#audioTriggerBtn");
    if (trig) trig.classList.remove("playing");
    const stopBtn = $("#audioStopBtn");
    if (stopBtn) stopBtn.classList.remove("playing");
  }

  function stopAudio() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    clearSpeakingHighlight();
  }

  function speakDE(text, btnEl = null) {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    clearSpeakingHighlight();

    const u = new SpeechSynthesisUtterance(text);
    u.lang = "de-DE";
    u.rate = state.speechRate;
    const voices = window.speechSynthesis.getVoices();
    const de = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("de"));
    if (de) u.voice = de;

    const trig = $("#audioTriggerBtn");
    const stopBtn = $("#audioStopBtn");
    u.onstart = () => {
      if (trig) trig.classList.add("playing");
      if (stopBtn) stopBtn.classList.add("playing");
      if (btnEl) {
        btnEl.classList.add("speaking");
        state.activeSpeakBtn = btnEl;
      }
    };
    u.onend = clearSpeakingHighlight;
    u.onerror = clearSpeakingHighlight;
    window.speechSynthesis.speak(u);
  }

  function applySpeedUI() {
    document.querySelectorAll(".speed-btn").forEach((b) => {
      b.classList.toggle("active", parseFloat(b.dataset.speed) === state.speechRate);
    });
    const lbl = $("#audioSpeedLabel");
    if (lbl) lbl.textContent = `${state.speechRate}×`;
    localStorage.setItem("german_a1_speed", String(state.speechRate));
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const btn = $("#themeToggle");
    if (btn) btn.textContent = state.theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("german_a1_theme", state.theme);
  }

  function closeSidebar() {
    $("#sidebar").classList.remove("open");
    $("#sidebarBackdrop").classList.remove("show");
  }

  function openSidebar() {
    $("#sidebar").classList.add("open");
    $("#sidebarBackdrop").classList.add("show");
  }

  // =========================================================================
  // QUICK GRAMMAR CHEAT-SHEET DRAWER
  // =========================================================================
  function openGrammarDrawer(tabId = null) {
    if (tabId) state.grammarTab = tabId;
    state.grammarOpen = true;
    renderGrammarDrawer();
    $("#grammarDrawer").classList.add("open");
    $("#grammarDrawer").setAttribute("aria-hidden", "false");
    $("#drawerBackdrop").classList.add("open");
  }

  function closeGrammarDrawer() {
    state.grammarOpen = false;
    $("#grammarDrawer").classList.remove("open");
    $("#grammarDrawer").setAttribute("aria-hidden", "true");
    $("#drawerBackdrop").classList.remove("open");
  }

  function toggleGrammarDrawer() {
    if (state.grammarOpen) closeGrammarDrawer();
    else openGrammarDrawer();
  }

  function renderGrammarDrawer() {
    const active = CHEATSHEET.find((s) => s.id === state.grammarTab) || CHEATSHEET[0];
    if (!active) return;

    const tabsEl = $("#grammarDrawerTabs");
    tabsEl.innerHTML = CHEATSHEET.map(
      (s) => `
      <button class="drawer-tab ${s.id === active.id ? "active" : ""}" data-gtab="${s.id}" role="tab" aria-selected="${s.id === active.id}">
        ${s.icon} ${esc(s.label)}
      </button>
    `
    ).join("");

    const bodyEl = $("#grammarDrawerBody");
    bodyEl.innerHTML = `
      <section class="drawer-section">
        <h4>${active.icon} ${esc(active.title)}</h4>
        <p style="font-size:13.5px;color:var(--text-muted);margin:0 0 14px;">${active.summary}</p>
        ${active.tables
          .map(
            (t) => `
          <div style="margin-bottom:14px;">
            <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-soft);margin-bottom:6px;">${esc(t.caption)}</div>
            <div class="grammar-table-wrap">
              <table class="cheat-table">
                <thead><tr>${t.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
                <tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
              </table>
            </div>
          </div>
        `
          )
          .join("")}
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
          <div style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-soft);">Examples (Click ▶ to Hear)</div>
          ${active.examples
            .map(
              (ex) => `
            <div class="card-ex">
              <div class="ex-text">
                <span class="ex-de">„${esc(ex.de)}“</span>
                <span class="ex-en">${esc(ex.en)}</span>
              </div>
              <button class="mini-btn speak-btn" style="width:28px;height:28px;font-size:12px;" data-speak="${esc(ex.de)}">▶</button>
            </div>
          `
            )
            .join("")}
        </div>
        <div class="grammar-tip">💡 <strong>Quick Hack:</strong> ${active.tip}</div>
      </section>
    `;

    tabsEl.querySelectorAll("[data-gtab]").forEach((b) =>
      b.addEventListener("click", () => {
        state.grammarTab = b.dataset.gtab;
        renderGrammarDrawer();
      })
    );
    bodyEl.querySelectorAll(".speak-btn").forEach((b) =>
      b.addEventListener("click", () => speakDE(b.dataset.speak, b))
    );
  }

  // =========================================================================
  // DATA HELPERS
  // =========================================================================
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
    const hay = [
      ...Object.values(obj).filter((v) => typeof v === "string"),
      obj.ex ? getExEn(obj.ex) : ""
    ]
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

  function resetBrowseFilters() {
    state.nounGender = "all";
    state.sourceFilter = "all";
    state.nounCategory = "all";
    state.verbType = "all";
    state.unlearnedOnly = false;
    state.search = "";
    const inp = $("#globalSearch");
    if (inp) inp.value = "";
    $("#searchClear").classList.remove("show");
    if ($("#searchKbd")) $("#searchKbd").style.display = "";
    renderContent();
  }

  function selectView(v) {
    state.view = /^\d+$/.test(String(v)) ? Number(v) : v;
    state.nounCategory = "all";
    if (state.view === "practice") initPracticeDeck();
    closeSidebar();
    renderNav();
    renderContent();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // =========================================================================
  // SIDEBAR NAVIGATION
  // =========================================================================
  function renderNav() {
    const totals = collectAllData(CHAPTERS);
    const globalStats = getMasteryStats(CHAPTERS);

    const masteryEl = $("#sidebarMastery");
    if (masteryEl) {
      masteryEl.innerHTML = `
        <div class="sidebar-mastery">
          <div class="sidebar-mastery-head">
            <span>A1 Mastery Progress</span>
            <strong>${globalStats.pct}%</strong>
          </div>
          <div class="mastery-bar">
            <div class="mastery-bar-fill" style="width:${globalStats.pct}%"></div>
          </div>
          <div style="font-size:11px;color:var(--text-soft);margin-top:5px;">
            ${globalStats.learned} / ${globalStats.total} nouns &amp; verbs learned
          </div>
        </div>
      `;
    }

    const globalEl = $("#nav-global");
    globalEl.innerHTML = `
      <button class="nav-btn ${state.view === "all" ? "active" : ""}" data-view="all">
        <span class="nav-icon">📚</span>
        <span class="nav-text">All Chapters (K2–K8)<span class="nav-sub">${totals.nouns.length} nouns · ${totals.verbs.length} verbs</span></span>
      </button>
      <button class="nav-btn ${state.view === "practice" ? "active" : ""}" data-view="practice">
        <span class="nav-icon">⚡</span>
        <span class="nav-text">Practice Lab<span class="nav-sub">4 interactive drill modes</span></span>
      </button>
      <button class="nav-btn ${state.view === "starred" ? "active" : ""}" data-view="starred">
        <span class="nav-icon">⭐</span>
        <span class="nav-text">Starred Review<span class="nav-sub">Your personal focus list</span></span>
        <span class="nav-badge">${state.starred.size}</span>
      </button>
    `;

    const chEl = $("#nav-chapters");
    chEl.innerHTML = CHAPTERS.map((ch) => {
      const st = getMasteryStats(ch);
      return `
        <button class="nav-btn ${state.view === ch.id ? "active" : ""} ${st.pct === 100 ? "is-complete" : ""}" data-view="${ch.id}">
          <span class="nav-icon">${ch.icon}</span>
          <span class="nav-text">
            ${esc(ch.code)}
            <span class="nav-sub">${esc(ch.title)}</span>
            <span class="nav-progress-wrap">
              <span class="nav-progress"><span class="nav-progress-fill" style="width:${st.pct}%;background:${st.pct === 100 ? "var(--mastered)" : ch.color}"></span></span>
              <span class="nav-mastery-pct">${st.pct}%</span>
            </span>
          </span>
        </button>
      `;
    }).join("");

    document.querySelectorAll(".nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => selectView(btn.dataset.view));
    });
  }

  // =========================================================================
  // MAIN CONTENT RENDERER
  // =========================================================================
  function renderContent() {
    const root = $("#contentRoot");
    root.classList.toggle("hide-en", state.recallMode === "en" && state.view !== "practice");
    root.classList.toggle("hide-art", state.recallMode === "art" && state.view !== "practice");

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
      if (state.unlearnedOnly && state.mastered.has(n.key)) return false;
      return matchesSearch(n, q);
    });

    const verbs = raw.verbs.filter((v) => {
      if (state.sourceFilter === "slides" && v.extra) return false;
      if (state.sourceFilter === "extra" && !v.extra) return false;
      if (state.verbType !== "all" && !v.type.toLowerCase().includes(state.verbType.toLowerCase())) return false;
      if (state.unlearnedOnly && state.mastered.has(v.key)) return false;
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

    // Hero
    let heroHTML = "";
    let chapterStripHTML = "";
    if (typeof state.view === "number") {
      const ch = chapters[0];
      const st = getMasteryStats(ch);
      heroHTML = `
        <section class="hero">
          <div class="hero-accent-bar" style="background:${ch.color}"></div>
          <div class="hero-top">
            <div>
              <div class="hero-kicker" style="color:${ch.color}">${ch.icon} ${esc(ch.code)} · German A1</div>
              <h2>${esc(ch.title)}</h2>
              <p class="hero-desc">${esc(ch.summary)}</p>
            </div>
            <div class="hero-actions">
              <button class="btn-secondary" id="heroCheatBtn">📖 Grammar Sheet</button>
              <button class="btn-primary" id="practiceChapterBtn">⚡ Practice ${esc(ch.code)}</button>
            </div>
          </div>
          <div class="stats-row">
            <span class="stat-chip stat-mastery">✓ <strong>${st.learned}/${st.total}</strong> Mastered (${st.pct}%)</span>
            <span class="stat-chip"><strong>${raw.nouns.length}</strong> Nouns</span>
            <span class="stat-chip"><strong>${raw.verbs.length}</strong> Verbs</span>
            <span class="stat-chip"><strong>${raw.expressions.length}</strong> Phrases</span>
            <span class="stat-chip"><strong>${raw.grammar.length}</strong> Grammar</span>
          </div>
        </section>
      `;
    } else if (starredOnly) {
      heroHTML = `
        <section class="hero">
          <div class="hero-accent-bar" style="background:#d97706"></div>
          <div class="hero-top">
            <div>
              <div class="hero-kicker" style="color:#d97706">⭐ Personal Focus List</div>
              <h2>Starred Words &amp; Verbs</h2>
              <p class="hero-desc">Click the ★ star on any noun, verb, or phrase across Kapitel 2–8 to collect tricky items here for focused drilling.</p>
            </div>
            ${state.starred.size > 0 ? `<button class="btn-primary" id="practiceStarredBtn">⚡ Practice Starred (${state.starred.size})</button>` : ""}
          </div>
        </section>
      `;
    } else {
      const st = getMasteryStats(CHAPTERS);
      const extraCount = raw.nouns.filter((x) => x.extra).length + raw.verbs.filter((x) => x.extra).length;
      heroHTML = `
        <section class="hero">
          <div class="hero-accent-bar"></div>
          <div class="hero-top">
            <div>
              <div class="hero-kicker">🇩🇪 German A1 Complete Reference</div>
              <h2>Kapitel 2 – 8 Study Studio</h2>
              <p class="hero-desc">Every noun in all forms, every verb fully conjugated, translated examples with adjustable German audio, software engineering extras, mastery tracking, and complete chapter grammar.</p>
            </div>
            <div class="hero-actions">
              <button class="btn-secondary" id="heroCheatBtn">📖 Grammar Sheet</button>
              <button class="btn-primary" id="practiceAllBtn">⚡ Practice Lab</button>
            </div>
          </div>
          <div class="stats-row">
            <span class="stat-chip stat-mastery">✓ <strong>${st.learned}/${st.total}</strong> Mastered (${st.pct}%)</span>
            <span class="stat-chip"><strong>${raw.nouns.length}</strong> Nouns</span>
            <span class="stat-chip"><strong>${raw.verbs.length}</strong> Verbs</span>
            <span class="stat-chip"><strong>${raw.expressions.length}</strong> Phrases</span>
            <span class="stat-chip"><strong>${extraCount}</strong> Topic &amp; SWE Extras</span>
          </div>
        </section>
      `;
      if (!q) {
        chapterStripHTML = `
          <div class="chapter-strip">
            ${CHAPTERS.map((ch) => {
              const cst = getMasteryStats(ch);
              return `
                <button class="chapter-mini" style="--ch-color:${ch.color}" data-jump-ch="${ch.id}">
                  <div class="chapter-mini-head">
                    <span>${esc(ch.code)}</span>
                    <span>${ch.icon}</span>
                  </div>
                  <div class="chapter-mini-title">${esc(ch.title)}</div>
                  <div class="chapter-mini-meta">${cst.learned}/${cst.total} learned · ${cst.pct}%</div>
                  <div class="chapter-mini-bar"><div class="chapter-mini-bar-fill" style="width:${cst.pct}%;background:${cst.pct === 100 ? "var(--mastered)" : ch.color}"></div></div>
                </button>
              `;
            }).join("")}
          </div>
        `;
      }
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

    // Cross-tab search hint if current tab has 0 matches while another tab has matches
    let crossHintHTML = "";
    if (q) {
      const counts = { nouns: nouns.length, verbs: verbs.length, expressions: expressions.length, grammar: grammar.length };
      if (counts[state.tab] === 0) {
        const otherMatches = Object.entries(counts).filter(([k, c]) => k !== state.tab && c > 0);
        if (otherMatches.length > 0) {
          crossHintHTML = `
            <div class="search-cross-hint">
              <span>🔍 Found matches for <strong>„${esc(state.search)}“</strong> in:</span>
              ${otherMatches
                .map(([k, c]) => `<button class="pill" data-switch-tab="${k}">${k.charAt(0).toUpperCase() + k.slice(1)} (${c})</button>`)
                .join("")}
            </div>
          `;
        }
      }
    }

    let bodyHTML = "";
    if (state.tab === "nouns") bodyHTML = renderNounsSection(nouns, raw.nouns);
    else if (state.tab === "verbs") bodyHTML = renderVerbsSection(verbs);
    else if (state.tab === "expressions") bodyHTML = renderExpressionsSection(expressions);
    else bodyHTML = renderGrammarSection(grammar);

    root.innerHTML = heroHTML + chapterStripHTML + tabsHTML + crossHintHTML + bodyHTML;
    bindContentEvents();
  }

  function renderRecallSelectHTML() {
    return `
      <select class="filter-select" id="recallSelect" title="Active Recall Study Mode">
        <option value="none" ${state.recallMode === "none" ? "selected" : ""}>👁️ Recall: Normal</option>
        <option value="en" ${state.recallMode === "en" ? "selected" : ""}>🙈 Hide English</option>
        <option value="art" ${state.recallMode === "art" ? "selected" : ""}>🎯 Hide Articles (der/das/die)</option>
      </select>
    `;
  }

  function renderNounsSection(nouns, allScopedNouns) {
    const categories = [...new Set(allScopedNouns.map((n) => n.cat))];
    const filterHTML = `
      <div class="filter-bar">
        <div class="pill-group">
          <button class="pill ${state.nounGender === "all" ? "active" : ""}" data-gender="all">All</button>
          <button class="pill p-der ${state.nounGender === "der" ? "active" : ""}" data-gender="der">der</button>
          <button class="pill p-das ${state.nounGender === "das" ? "active" : ""}" data-gender="das">das</button>
          <button class="pill p-die ${state.nounGender === "die" ? "active" : ""}" data-gender="die">die</button>
          <button class="pill p-mastered ${state.unlearnedOnly ? "active" : ""}" id="toggleUnlearnedBtn">🎯 Unlearned Only</button>
          <button class="pill ${state.sourceFilter === "all" ? "active" : ""}" data-source="all">Core + Extra</button>
          <button class="pill p-extra ${state.sourceFilter === "extra" ? "active" : ""}" data-source="extra">✨ Extra Only</button>
        </div>
        <div class="pill-group">
          <select class="filter-select" id="catSelect">
            <option value="all">All Topics (${categories.length})</option>
            ${categories.map((c) => `<option value="${esc(c)}" ${state.nounCategory === c ? "selected" : ""}>${esc(c)}</option>`).join("")}
          </select>
          ${renderRecallSelectHTML()}
          <button class="pill ${state.nounLayout === "cards" ? "active" : ""}" data-layout="cards">▦ Cards</button>
          <button class="pill ${state.nounLayout === "table" ? "active" : ""}" data-layout="table">☰ Table</button>
        </div>
      </div>
    `;

    if (nouns.length === 0) {
      return (
        filterHTML +
        `<div class="empty-state">
          <p style="margin:0 0 12px;">No nouns match your current filters.</p>
          <button class="btn-secondary" id="resetFiltersBtn">↺ Reset All Filters</button>
        </div>`
      );
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
                <th>Chapter</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${nouns
                .map((n) => {
                  const isStar = state.starred.has(n.key);
                  const learned = isMastered(n.key);
                  return `
                    <tr>
                      <td>
                        <span class="art-${n.art}">${n.art}</span> <strong>${esc(n.sg)}</strong>
                        ${n.fem ? `<div style="font-size:12px;color:var(--text-soft);margin-top:2px;">♀ ${esc(n.fem)}</div>` : ""}
                      </td>
                      <td>${esc(n.pl)}</td>
                      <td>${esc(n.akk)}</td>
                      <td>${esc(n.dat)}</td>
                      <td class="td-en">${esc(n.en)}</td>
                      <td>
                        <span class="badge-ch">${esc(n.chCode)}</span>
                        ${n.extra ? `<span class="badge-extra">Extra</span>` : ""}
                      </td>
                      <td style="white-space:nowrap;">
                        <button class="mini-btn speak-btn" data-speak="${esc(n.art + " " + n.sg + ", " + n.pl)}" title="Pronounce">🔊</button>
                        <button class="mini-btn master-btn ${learned ? "mastered" : ""}" data-master="${esc(n.key)}" title="${learned ? "Learned (undo)" : "Mark learned"}">✓</button>
                        <button class="mini-btn star-btn ${isStar ? "starred" : ""}" data-star="${esc(n.key)}" title="Star">★</button>
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
            const learned = isMastered(n.key);
            return `
              <article class="word-card c-${n.art} ${learned ? "is-mastered" : ""}">
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
                    <button class="mini-btn copy-btn" data-copy="${esc(n.art + " " + n.sg)}" title="Copy German word">📋</button>
                    <button class="mini-btn master-btn ${learned ? "mastered" : ""}" data-master="${esc(n.key)}" title="${learned ? "Learned (click to undo)" : "Mark as learned"}">✓</button>
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
                  ${n.extra ? `<span class="badge-extra">✨ Extra</span>` : ""}
                  ${learned ? `<span class="badge-mastered">✓ Mastered</span>` : ""}
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
          <button class="pill ${state.verbType === "Separable" ? "active" : ""}" data-vtype="Separable">Separable</button>
          <button class="pill ${state.verbType === "Modal" ? "active" : ""}" data-vtype="Modal">Modal</button>
        </div>
        <div class="pill-group">
          <button class="pill p-mastered ${state.unlearnedOnly ? "active" : ""}" id="toggleUnlearnedBtn">🎯 Unlearned Only</button>
          <button class="pill ${state.sourceFilter === "all" ? "active" : ""}" data-source="all">Core + Extra</button>
          <button class="pill p-extra ${state.sourceFilter === "extra" ? "active" : ""}" data-source="extra">✨ Extra Only</button>
          ${renderRecallSelectHTML()}
        </div>
      </div>
    `;

    if (verbs.length === 0) {
      return (
        filterHTML +
        `<div class="empty-state">
          <p style="margin:0 0 12px;">No verbs match your current filters.</p>
          <button class="btn-secondary" id="resetFiltersBtn">↺ Reset All Filters</button>
        </div>`
      );
    }

    return (
      filterHTML +
      `<div class="verb-grid">
        ${verbs
          .map((v) => {
            const isStar = state.starred.has(v.key);
            const learned = isMastered(v.key);
            return `
              <article class="verb-card ${learned ? "is-mastered" : ""}">
                <div class="card-head">
                  <div>
                    <div class="word-main">${esc(v.inf)}</div>
                    <div class="word-en">${esc(v.en)}</div>
                  </div>
                  <div class="card-actions">
                    <button class="mini-btn speak-btn" data-speak="${esc(v.inf)}" title="Pronounce">🔊</button>
                    <button class="mini-btn copy-btn" data-copy="${esc(v.inf)}" title="Copy verb">📋</button>
                    <button class="mini-btn master-btn ${learned ? "mastered" : ""}" data-master="${esc(v.key)}" title="${learned ? "Learned (click to undo)" : "Mark as learned"}">✓</button>
                    <button class="mini-btn star-btn ${isStar ? "starred" : ""}" data-star="${esc(v.key)}" title="Star">★</button>
                  </div>
                </div>
                <div class="verb-badges">
                  <span class="vtype ${verbTypeClass(v.type)}">${esc(v.type)}</span>
                  <span class="badge-cat">Case: ${esc(v.caseGov)}</span>
                  <span class="badge-ch">${esc(v.chCode)}</span>
                  ${v.extra ? `<span class="badge-extra">✨ Extra</span>` : ""}
                  ${learned ? `<span class="badge-mastered">✓ Mastered</span>` : ""}
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
          <button class="pill ${state.sourceFilter === "all" ? "active" : ""}" data-source="all">Core + Extra</button>
          <button class="pill ${state.sourceFilter === "slides" ? "active" : ""}" data-source="slides">Core Only</button>
          <button class="pill p-extra ${state.sourceFilter === "extra" ? "active" : ""}" data-source="extra">✨ Extra Only</button>
        </div>
        ${renderRecallSelectHTML()}
      </div>
    `;

    if (expressions.length === 0) {
      return (
        filterHTML +
        `<div class="empty-state">
          <p style="margin:0 0 12px;">No phrases match your current filters.</p>
          <button class="btn-secondary" id="resetFiltersBtn">↺ Reset All Filters</button>
        </div>`
      );
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
                    <button class="mini-btn copy-btn" data-copy="${esc(e.de)}" title="Copy phrase">📋</button>
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
    document.querySelectorAll("[data-jump-ch]").forEach((b) =>
      b.addEventListener("click", () => selectView(Number(b.dataset.jumpCh)))
    );
    document.querySelectorAll("[data-switch-tab]").forEach((b) =>
      b.addEventListener("click", () => {
        state.tab = b.dataset.switchTab;
        renderContent();
      })
    );
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

    const unlearnedBtn = $("#toggleUnlearnedBtn");
    if (unlearnedBtn) {
      unlearnedBtn.addEventListener("click", () => {
        state.unlearnedOnly = !state.unlearnedOnly;
        renderContent();
      });
    }

    const recallSel = $("#recallSelect");
    if (recallSel) {
      recallSel.addEventListener("change", () => {
        state.recallMode = recallSel.value;
        localStorage.setItem("german_a1_recall", state.recallMode);
        if (state.recallMode === "en") showToast("🙈 English hidden — hover or tap to reveal");
        else if (state.recallMode === "art") showToast("🎯 Articles hidden — hover or tap to reveal");
        else showToast("👁️ Normal display restored");
        renderContent();
      });
    }

    if (state.recallMode === "en") {
      document.querySelectorAll(".word-en, .ex-en, .expr-en, .td-en").forEach((el) => {
        el.addEventListener("click", () => el.classList.toggle("revealed"));
      });
    } else if (state.recallMode === "art") {
      document.querySelectorAll(".art-der, .art-das, .art-die").forEach((el) => {
        el.addEventListener("click", () => el.classList.toggle("revealed"));
      });
    }

    const resetBtn = $("#resetFiltersBtn");
    if (resetBtn) resetBtn.addEventListener("click", resetBrowseFilters);

    const catSelect = $("#catSelect");
    if (catSelect) {
      catSelect.addEventListener("change", () => {
        state.nounCategory = catSelect.value;
        renderContent();
      });
    }

    document.querySelectorAll(".speak-btn").forEach((b) =>
      b.addEventListener("click", () => speakDE(b.dataset.speak, b))
    );
    document.querySelectorAll(".copy-btn").forEach((b) =>
      b.addEventListener("click", () => copyGerman(b.dataset.copy))
    );
    document.querySelectorAll(".master-btn").forEach((b) =>
      b.addEventListener("click", () => setMastered(b.dataset.master))
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
    const hCheat = $("#heroCheatBtn");
    if (hCheat) hCheat.addEventListener("click", () => openGrammarDrawer());
  }

  // =========================================================================
  // PRACTICE LAB (4 MODES: ARTICLES, 3D FLASHCARDS, VERBS, CASE QUIZ)
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

  function cleanPluralForm(pl) {
    if (!pl || pl.includes("—") || /\(Pl\. only\)|\(singular\)|\(uncountable\)/i.test(pl)) return null;
    return pl.replace(/\s*\([^)]*\)\s*/g, "").trim();
  }

  function buildArticleCaseDistractors(noun, correctFullForm) {
    const stem = correctFullForm.split(" ").slice(1).join(" ") || noun.sg;
    const pool = [`der ${noun.sg}`, `das ${noun.sg}`, `die ${noun.sg}`, `den ${stem}`, `dem ${stem}`];
    const unique = [...new Set(pool)].filter((x) => x.toLowerCase() !== correctFullForm.toLowerCase());
    return shuffle([correctFullForm, ...shuffle(unique).slice(0, 3)]);
  }

  function buildPluralDistractors(noun, cleanPl) {
    const barePl = cleanPl.replace(/^die\s+/i, "");
    const sg = noun.sg;
    const candidates = [`die ${sg}e`, `die ${sg}en`, `die ${sg}n`, `die ${sg}s`, `die ${sg}er`, `die ${sg}`].filter(
      (c) => c.toLowerCase() !== cleanPl.toLowerCase() && c.toLowerCase() !== `die ${barePl}`.toLowerCase()
    );
    return shuffle([cleanPl, ...shuffle([...new Set(candidates)]).slice(0, 3)]);
  }

  function buildCaseQuizDeck(chapters, { starredOnly = false, includeExtra = true, unlearnedOnly = false } = {}) {
    const data = collectAllData(chapters, starredOnly);
    const nouns = data.nouns.filter((n) => {
      if (!includeExtra && n.extra) return false;
      if (unlearnedOnly && state.mastered.has(n.key)) return false;
      return true;
    });

    const questions = [];
    for (const n of nouns) {
      const exEn = getExEn(n.ex);
      let made = false;

      if (n.ex) {
        const datRx = new RegExp(`\\b${escapeRegExp(n.dat)}\\b`, "i");
        const akkRx = new RegExp(`\\b${escapeRegExp(n.akk)}\\b`, "i");
        if (datRx.test(n.ex)) {
          const matched = n.ex.match(datRx)[0];
          questions.push({
            kind: "casequiz",
            subkind: "Dativ in Context",
            chCode: n.chCode,
            key: n.key,
            prompt: n.ex.replace(datRx, "______"),
            en: exEn || `Dativ form of "${n.en}"`,
            answer: matched,
            options: buildArticleCaseDistractors(n, matched),
            fullSentence: n.ex,
            rule: `Base noun: <strong>${n.art} ${n.sg}</strong> → Dativ: <strong>${n.dat}</strong>.`
          });
          made = true;
        } else if (akkRx.test(n.ex) && n.art === "der") {
          const matched = n.ex.match(akkRx)[0];
          questions.push({
            kind: "casequiz",
            subkind: "Akkusativ in Context",
            chCode: n.chCode,
            key: n.key,
            prompt: n.ex.replace(akkRx, "______"),
            en: exEn || `Akkusativ form of "${n.en}"`,
            answer: matched,
            options: buildArticleCaseDistractors(n, matched),
            fullSentence: n.ex,
            rule: `Base noun: <strong>${n.art} ${n.sg}</strong> → Akkusativ: <strong>${n.akk}</strong>.`
          });
          made = true;
        }
      }

      if (!made) {
        const cleanPl = cleanPluralForm(n.pl);
        const roll = Math.random();
        if (roll < 0.36 && n.art === "der") {
          questions.push({
            kind: "casequiz",
            subkind: "Akkusativ Case",
            chCode: n.chCode,
            key: n.key,
            prompt: "Ich suche ______.",
            en: `I am looking for the ${n.en}. (Base: ${n.art} ${n.sg})`,
            answer: n.akk,
            options: buildArticleCaseDistractors(n, n.akk),
            fullSentence: `Ich suche ${n.akk}.`,
            rule: `<em>suchen</em> requires <strong>Akkusativ</strong>: ${n.art} ${n.sg} → <strong>${n.akk}</strong>.`
          });
        } else if (roll < 0.7) {
          questions.push({
            kind: "casequiz",
            subkind: "Dativ (mit + Dat.)",
            chCode: n.chCode,
            key: n.key,
            prompt: "Das hat mit ______ zu tun.",
            en: `That has to do with the ${n.en}. (Base: ${n.art} ${n.sg})`,
            answer: n.dat,
            options: buildArticleCaseDistractors(n, n.dat),
            fullSentence: `Das hat mit ${n.dat} zu tun.`,
            rule: `<code>mit</code> always takes <strong>Dativ</strong>: ${n.art} ${n.sg} → <strong>${n.dat}</strong>.`
          });
        } else if (cleanPl) {
          questions.push({
            kind: "casequiz",
            subkind: "Plural Form",
            chCode: n.chCode,
            key: n.key,
            prompt: `Singular: ${n.art} ${n.sg} → Plural: ______`,
            en: `Plural of "${n.en}"`,
            answer: cleanPl,
            options: buildPluralDistractors(n, cleanPl),
            fullSentence: `${n.art} ${n.sg}, ${cleanPl}`,
            rule: `Plural of <strong>${n.art} ${n.sg}</strong> is <strong>${cleanPl}</strong>.`
          });
        }
      }
    }

    if (!starredOnly) {
      const chIds = new Set(chapters.map((c) => c.id));
      for (const gq of GRAMMAR_CLOZE_BANK) {
        if (chIds.has(gq.chId)) {
          const ch = chapters.find((c) => c.id === gq.chId);
          questions.push({
            kind: "casequiz",
            subkind: `Grammar · ${gq.tag}`,
            chCode: ch ? ch.code : `Kapitel ${gq.chId}`,
            key: null,
            prompt: gq.prompt,
            en: gq.en,
            answer: gq.answer,
            options: shuffle(gq.options),
            fullSentence: gq.prompt.replace("______", gq.answer),
            rule: gq.rule
          });
        }
      }
    }

    return shuffle(questions);
  }

  function initPracticeDeck() {
    const chs =
      typeof state.pScope === "number"
        ? CHAPTERS.filter((c) => c.id === state.pScope)
        : CHAPTERS;
    const starredOnly = state.pScope === "starred";
    const data = collectAllData(chs, starredOnly);

    let items = [];
    if (state.pMode === "articles") {
      items = data.nouns.filter(
        (n) =>
          (state.pIncludeExtra || !n.extra) &&
          (!state.pUnlearnedOnly || !state.mastered.has(n.key)) &&
          ["der", "das", "die"].includes(n.art)
      );
    } else if (state.pMode === "verbs") {
      items = data.verbs.filter(
        (v) => (state.pIncludeExtra || !v.extra) && (!state.pUnlearnedOnly || !state.mastered.has(v.key))
      );
    } else if (state.pMode === "casequiz") {
      items = buildCaseQuizDeck(chs, {
        starredOnly,
        includeExtra: state.pIncludeExtra,
        unlearnedOnly: state.pUnlearnedOnly
      });
    } else {
      const ns = data.nouns
        .filter((n) => (state.pIncludeExtra || !n.extra) && (!state.pUnlearnedOnly || !state.mastered.has(n.key)))
        .map((n) => ({ kind: "noun", ...n }));
      const vs = data.verbs
        .filter((v) => (state.pIncludeExtra || !v.extra) && (!state.pUnlearnedOnly || !state.mastered.has(v.key)))
        .map((v) => ({ kind: "verb", ...v }));
      items = [...ns, ...vs];
    }

    state.pDeck = shuffle(items);
    state.pIdx = 0;
    state.pFlipped = false;
    state.pFeedback = null;
    state.pQuizChoice = null;
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
    state.pQuizChoice = null;
    pickRandomPronoun();
    renderContent();
  }

  function renderPracticeLab(root) {
    const acc = state.pTotal > 0 ? Math.round((state.pCorrect / state.pTotal) * 100) : 0;
    const controlsHTML = `
      <section class="hero">
        <div class="hero-accent-bar" style="background:linear-gradient(90deg,#7c3aed,#1e4fd8,#0f766e)"></div>
        <div class="hero-top">
          <div>
            <div class="hero-kicker" style="color:#7c3aed">⚡ Interactive Practice Lab</div>
            <h2>Train Articles, Flashcards, Verbs &amp; Cases</h2>
            <p class="hero-desc">Master der/das/die, spaced-repetition 3D flashcards, verb conjugations, and real-sentence Akkusativ/Dativ clozes.</p>
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
          <button class="pill ${state.pMode === "flashcards" ? "active" : ""}" data-pmode="flashcards">🃏 3D Flashcards</button>
          <button class="pill ${state.pMode === "verbs" ? "active" : ""}" data-pmode="verbs">⚙️ Verb Drill</button>
          <button class="pill ${state.pMode === "casequiz" ? "active" : ""}" data-pmode="casequiz">🧩 Case &amp; Fill-in Quiz</button>
        </div>
        <div class="pill-group">
          <select class="filter-select" id="pScopeSelect">
            <option value="all" ${state.pScope === "all" ? "selected" : ""}>All Chapters (K2–K8)</option>
            <option value="starred" ${state.pScope === "starred" ? "selected" : ""}>⭐ Starred Only (${state.starred.size})</option>
            ${CHAPTERS.map((c) => `<option value="${c.id}" ${state.pScope === c.id ? "selected" : ""}>${esc(c.code)}: ${esc(c.title)}</option>`).join("")}
          </select>
          <label style="font-size:12.5px;font-weight:600;display:flex;align-items:center;gap:4px;cursor:pointer;">
            <input type="checkbox" id="pUnlearnedCheck" ${state.pUnlearnedOnly ? "checked" : ""} /> Unlearned
          </label>
          <label style="font-size:12.5px;font-weight:600;display:flex;align-items:center;gap:4px;cursor:pointer;">
            <input type="checkbox" id="pExtraCheck" ${state.pIncludeExtra ? "checked" : ""} /> Extras
          </label>
          <label style="font-size:12.5px;font-weight:600;display:flex;align-items:center;gap:4px;cursor:pointer;">
            <input type="checkbox" id="pAudioCheck" ${state.pAutoAudio ? "checked" : ""} /> Auto Audio
          </label>
          <button class="pill" id="shuffleDeckBtn" title="Shuffle deck">🔀 Shuffle</button>
        </div>
      </div>
    `;

    if (state.pDeck.length === 0) {
      root.innerHTML = controlsHTML + `<div class="empty-state">No cards available for this selection (uncheck "Unlearned" or choose another chapter).</div>`;
      bindPracticeControls();
      return;
    }

    const item = state.pDeck[state.pIdx];
    const pct = Math.round(((state.pIdx + 1) / state.pDeck.length) * 100);
    const progressHTML = `<div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>`;
    let stageHTML = "";

    if (state.pMode === "articles") {
      stageHTML = `
        <div class="practice-stage">
          ${progressHTML}
          <div class="card-meta" style="justify-content:center;">
            <span class="badge-ch">${esc(item.chCode)}</span>
            <span class="badge-cat">${esc(item.cat.replace(/^Extra:\s*/, ""))}</span>
            <span class="badge-cat">Card ${state.pIdx + 1} / ${state.pDeck.length}</span>
          </div>
          <div class="flashcard-word">${esc(item.sg)}</div>
          <div class="flashcard-sub">${esc(item.en)}</div>
          <div class="art-choice-row">
            <button class="art-choice-btn b-der" data-art="der">der <span class="quiz-opt-key">1</span></button>
            <button class="art-choice-btn b-das" data-art="das">das <span class="quiz-opt-key">2</span></button>
            <button class="art-choice-btn b-die" data-art="die">die <span class="quiz-opt-key">3</span></button>
          </div>
          ${
            state.pFeedback
              ? `
            <div class="feedback-box ${state.pFeedback.ok ? "feedback-ok" : "feedback-bad"}">
              ${state.pFeedback.ok ? "✅ Correct!" : `❌ It's <strong>${item.art} ${esc(item.sg)}</strong>!`}
              <div style="margin-top:6px;font-weight:500;color:var(--text);">
                Plural: <strong>${esc(item.pl)}</strong> · Akk: <strong>${esc(item.akk)}</strong> · Dat: <strong>${esc(item.dat)}</strong>
              </div>
              <div style="margin-top:5px;font-style:italic;font-weight:500;color:var(--text);">„${esc(item.ex)}“</div>
              ${getExEn(item.ex) ? `<div style="margin-top:2px;font-size:12.5px;font-weight:400;color:var(--text-soft);">${esc(getExEn(item.ex))}</div>` : ""}
            </div>
            <div style="margin-top:16px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
              <button class="btn-secondary speak-btn" data-speak="${esc(item.art + " " + item.sg)}">🔊 Hear</button>
              <button class="btn-secondary master-btn ${isMastered(item.key) ? "mastered" : ""}" data-master="${esc(item.key)}">✓ ${isMastered(item.key) ? "Learned" : "Mark Learned"}</button>
              <button class="btn-secondary star-btn ${state.starred.has(item.key) ? "starred" : ""}" data-star="${esc(item.key)}">★ ${state.starred.has(item.key) ? "Starred" : "Star"}</button>
              <button class="btn-primary" id="nextCardBtn">Next Word →</button>
            </div>
          `
              : `<div class="kbd-hints"><span><kbd>1</kbd> der</span><span><kbd>2</kbd> das</span><span><kbd>3</kbd> die</span><span><kbd>G</kbd> Grammar Sheet</span></div>`
          }
        </div>
      `;
    } else if (state.pMode === "flashcards") {
      const isNoun = item.kind === "noun";
      stageHTML = `
        <div class="practice-stage">
          ${progressHTML}
          <div class="flashcard-scene" id="flashcardScene">
            <div class="flashcard-3d ${state.pFlipped ? "is-flipped" : ""}" id="flashcard3d">
              <div class="flashcard-face flashcard-front">
                <div class="flashcard-kicker">${esc(item.chCode)} · ${isNoun ? "Noun" : "Verb"} · ${state.pIdx + 1}/${state.pDeck.length}${item._requeued ? " · ↻ Review" : ""}</div>
                <div class="flashcard-word">${esc(item.en)}</div>
                <div class="flashcard-hint">${isNoun ? "Recall article, singular, plural & cases" : "Recall infinitive & conjugations"} · Click card or press Space</div>
              </div>
              <div class="flashcard-face flashcard-back">
                ${
                  isNoun
                    ? `
                  <div class="word-main" style="margin-bottom:10px;">
                    <span class="art-${item.art}">${item.art}</span> ${esc(item.sg)}
                    <button class="mini-btn speak-btn" data-speak="${esc(item.art + " " + item.sg)}">🔊</button>
                  </div>
                  <div class="forms-grid" style="margin-bottom:10px;width:100%;">
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
                  <div class="conj-grid" style="margin-bottom:10px;width:100%;">
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
              </div>
            </div>
          </div>
          ${
            !state.pFlipped
              ? `<div style="margin-top:16px;"><button class="btn-primary" id="flipBtn">Flip Card</button></div>
                 <div class="kbd-hints"><span><kbd>Space</kbd> Flip</span><span><kbd>G</kbd> Grammar Sheet</span></div>`
              : `
            <div class="fc-rate-row">
              <button class="fc-rate-btn rate-again" id="requeueCardBtn">↻ Review Again</button>
              <button class="fc-rate-btn rate-good" id="nextCardBtn">Next →</button>
              <button class="fc-rate-btn rate-mastered" id="gotItCardBtn">✓ Got It (Mastered)</button>
            </div>
            <div class="kbd-hints"><span><kbd>A</kbd> Review Again</span><span><kbd>Enter</kbd> Got It</span><span><kbd>R</kbd> Replay Audio</span></div>
          `
          }
        </div>
      `;
    } else if (state.pMode === "casequiz") {
      const promptHTML = esc(item.prompt).replace(
        "______",
        state.pFeedback
          ? `<span class="cloze-blank filled ${state.pFeedback.ok ? "ok" : "bad"}">${esc(item.answer)}</span>`
          : `<span class="cloze-blank">______</span>`
      );
      stageHTML = `
        <div class="practice-stage">
          ${progressHTML}
          <div class="card-meta" style="justify-content:center;">
            <span class="badge-ch">${esc(item.chCode)}</span>
            <span class="badge-cat">${esc(item.subkind)}</span>
            <span class="badge-cat">Card ${state.pIdx + 1} / ${state.pDeck.length}</span>
          </div>
          <div class="cloze-prompt">${promptHTML}</div>
          <div class="flashcard-sub">${esc(item.en)}</div>
          <div class="quiz-options-grid">
            ${item.options
              .map((opt, idx) => {
                let cls = "";
                if (state.pFeedback) {
                  if (opt === item.answer) cls = "opt-correct";
                  else if (idx === state.pQuizChoice) cls = "opt-wrong";
                }
                return `
                  <button class="quiz-opt-btn ${cls}" data-qopt="${idx}" ${state.pFeedback ? "disabled" : ""}>
                    <span>${esc(opt)}</span>
                    <span class="quiz-opt-key">${idx + 1}</span>
                  </button>
                `;
              })
              .join("")}
          </div>
          ${
            state.pFeedback
              ? `
            <div class="feedback-box ${state.pFeedback.ok ? "feedback-ok" : "feedback-bad"}">
              ${state.pFeedback.ok ? "✅ Correct!" : `❌ Correct answer: <strong>${esc(item.answer)}</strong>`}
              <div style="margin-top:6px;font-weight:500;color:var(--text);">${item.rule}</div>
            </div>
            <div style="margin-top:16px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
              <button class="btn-secondary speak-btn" data-speak="${esc(item.fullSentence)}">🔊 Hear Sentence</button>
              ${item.key ? `<button class="btn-secondary star-btn ${state.starred.has(item.key) ? "starred" : ""}" data-star="${esc(item.key)}">★ ${state.starred.has(item.key) ? "Starred" : "Star"}</button>` : ""}
              <button class="btn-primary" id="nextCardBtn">Next Question →</button>
            </div>
          `
              : `<div class="kbd-hints"><span><kbd>1</kbd>–<kbd>4</kbd> Choose</span><span><kbd>G</kbd> Grammar Sheet</span></div>`
          }
        </div>
      `;
    } else {
      const pron = state.pVerbPron;
      const expected = item[pron.key];
      stageHTML = `
        <div class="practice-stage">
          ${progressHTML}
          <div class="card-meta" style="justify-content:center;">
            <span class="badge-ch">${esc(item.chCode)}</span>
            <span class="vtype ${verbTypeClass(item.type)}">${esc(item.type)}</span>
            <span class="badge-cat">Card ${state.pIdx + 1} / ${state.pDeck.length}</span>
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
              <div style="margin-top:5px;font-style:italic;font-weight:500;color:var(--text);">„${esc(item.ex)}“</div>
              ${getExEn(item.ex) ? `<div style="margin-top:2px;font-size:12.5px;font-weight:400;color:var(--text-soft);">${esc(getExEn(item.ex))}</div>` : ""}
            </div>
            <div style="margin-top:16px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
              <button class="btn-secondary speak-btn" data-speak="${esc((pron.key === "er" ? "er " : pron.key + " ") + expected)}">🔊 Hear</button>
              <button class="btn-secondary master-btn ${isMastered(item.key) ? "mastered" : ""}" data-master="${esc(item.key)}">✓ ${isMastered(item.key) ? "Learned" : "Mark Learned"}</button>
              <button class="btn-secondary star-btn ${state.starred.has(item.key) ? "starred" : ""}" data-star="${esc(item.key)}">★ ${state.starred.has(item.key) ? "Starred" : "Star"}</button>
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
    savePracticeStats();
    state.pFeedback = { ok };
    if (state.pAutoAudio) speakDE(item.art + " " + item.sg);
    renderContent();
  }

  function answerCaseQuiz(choiceIdx, item) {
    if (state.pFeedback) return;
    const chosen = item.options[choiceIdx];
    const ok = chosen === item.answer;
    state.pQuizChoice = choiceIdx;
    state.pTotal++;
    if (ok) {
      state.pCorrect++;
      state.pStreak++;
    } else {
      state.pStreak = 0;
    }
    savePracticeStats();
    state.pFeedback = { ok, chosen };
    if (state.pAutoAudio && item.fullSentence) speakDE(item.fullSentence);
    renderContent();
  }

  function flipFlashcard(item) {
    if (state.pFlipped) return;
    state.pFlipped = true;
    if (state.pAutoAudio) {
      speakDE(item.kind === "noun" ? item.art + " " + item.sg : item.inf);
    }
    renderContent();
  }

  function gradeFlashcard(item, mastered) {
    state.pTotal++;
    if (mastered) {
      state.pCorrect++;
      state.pStreak++;
      setMastered(item.key, true, true);
      renderNav();
      showToast("✓ Marked Mastered!");
    } else {
      state.pStreak = 0;
      setMastered(item.key, false, true);
      renderNav();
      const offset = Math.min(Math.max(state.pDeck.length - state.pIdx, 1), 4);
      const insertAt = Math.min(state.pIdx + offset, state.pDeck.length);
      state.pDeck.splice(insertAt, 0, { ...item, _requeued: true });
      showToast(`↻ Re-queued in ${offset} cards`);
    }
    savePracticeStats();
    nextCard();
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
    savePracticeStats();
    state.pFeedback = { ok };
    if (state.pAutoAudio) {
      speakDE((state.pVerbPron.key === "er" ? "er " : state.pVerbPron.key + " ") + item[state.pVerbPron.key]);
    }
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
    const unlCheck = $("#pUnlearnedCheck");
    if (unlCheck) {
      unlCheck.addEventListener("change", () => {
        state.pUnlearnedOnly = unlCheck.checked;
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
    const audioCheck = $("#pAudioCheck");
    if (audioCheck) {
      audioCheck.addEventListener("change", () => {
        state.pAutoAudio = audioCheck.checked;
      });
    }
    const shuffleBtn = $("#shuffleDeckBtn");
    if (shuffleBtn) {
      shuffleBtn.addEventListener("click", () => {
        initPracticeDeck();
        showToast("🔀 Deck shuffled");
        renderContent();
      });
    }

    document.querySelectorAll("[data-art]").forEach((b) =>
      b.addEventListener("click", () => answerArticle(b.dataset.art, item))
    );
    document.querySelectorAll("[data-qopt]").forEach((b) =>
      b.addEventListener("click", () => answerCaseQuiz(Number(b.dataset.qopt), item))
    );

    const flipBtn = $("#flipBtn");
    if (flipBtn) flipBtn.addEventListener("click", () => flipFlashcard(item));
    const fcFront = document.querySelector(".flashcard-front");
    if (fcFront && !state.pFlipped) fcFront.addEventListener("click", () => flipFlashcard(item));

    const requeueBtn = $("#requeueCardBtn");
    if (requeueBtn) requeueBtn.addEventListener("click", () => gradeFlashcard(item, false));
    const gotItBtn = $("#gotItCardBtn");
    if (gotItBtn) gotItBtn.addEventListener("click", () => gradeFlashcard(item, true));

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
        const start = inp.selectionStart ?? inp.value.length;
        const end = inp.selectionEnd ?? inp.value.length;
        inp.value = inp.value.slice(0, start) + b.dataset.char + inp.value.slice(end);
        inp.focus();
        inp.setSelectionRange(start + 1, start + 1);
      })
    );
    document.querySelectorAll(".speak-btn").forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
        speakDE(b.dataset.speak, b);
      })
    );
    document.querySelectorAll(".master-btn").forEach((b) =>
      b.addEventListener("click", () => setMastered(b.dataset.master))
    );
    document.querySelectorAll(".star-btn").forEach((b) =>
      b.addEventListener("click", () => toggleStar(b.dataset.star))
    );
  }

  // =========================================================================
  // GLOBAL INITIALIZATION
  // =========================================================================
  function init() {
    applyTheme();
    applySpeedUI();

    // Compact Audio Speed Popover
    const audioTrig = $("#audioTriggerBtn");
    const audioPop = $("#audioPopover");
    audioTrig.addEventListener("click", (e) => {
      e.stopPropagation();
      audioPop.classList.toggle("open");
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#audioPopoverWrap")) audioPop.classList.remove("open");
    });

    document.querySelectorAll(".speed-btn").forEach((b) => {
      b.addEventListener("click", () => {
        state.speechRate = parseFloat(b.dataset.speed);
        applySpeedUI();
        showToast(`🔊 Audio speed: ${state.speechRate}×`);
        audioPop.classList.remove("open");
      });
    });

    $("#audioStopBtn").addEventListener("click", () => {
      stopAudio();
      audioPop.classList.remove("open");
    });

    // Quick Grammar Drawer
    $("#cheatSheetBtn").addEventListener("click", toggleGrammarDrawer);
    $("#drawerClose").addEventListener("click", closeGrammarDrawer);
    $("#drawerBackdrop").addEventListener("click", closeGrammarDrawer);
    $("#jumpFullGrammarBtn").addEventListener("click", () => {
      closeGrammarDrawer();
      if (state.view === "practice" || state.view === "starred") state.view = "all";
      state.tab = "grammar";
      renderNav();
      renderContent();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    $("#themeToggle").addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme();
    });

    $("#mobileMenuBtn").addEventListener("click", openSidebar);
    $("#sidebarCloseBtn").addEventListener("click", closeSidebar);
    $("#sidebarBackdrop").addEventListener("click", closeSidebar);

    const scrollBtn = $("#scrollTopBtn");
    window.addEventListener(
      "scroll",
      () => scrollBtn.classList.toggle("show", window.scrollY > 380),
      { passive: true }
    );
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const searchInput = $("#globalSearch");
    const searchClear = $("#searchClear");
    const searchKbd = $("#searchKbd");
    searchInput.addEventListener("input", () => {
      state.search = searchInput.value;
      const hasQ = state.search.length > 0;
      searchClear.classList.toggle("show", hasQ);
      if (searchKbd) searchKbd.style.display = hasQ ? "none" : "";
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
      if (searchKbd) searchKbd.style.display = "";
      renderContent();
    });

    document.addEventListener("keydown", (e) => {
      const inInput = document.activeElement && document.activeElement.tagName === "INPUT";
      if (e.key === "/" && !inInput) {
        e.preventDefault();
        searchInput.focus();
        return;
      }
      if (e.key === "Escape") {
        closeGrammarDrawer();
        closeSidebar();
        audioPop.classList.remove("open");
        if (document.activeElement === searchInput) searchInput.blur();
        return;
      }
      if ((e.key === "g" || e.key === "G") && !inInput && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        toggleGrammarDrawer();
        return;
      }
      if (state.grammarOpen && !inInput && ["1", "2", "3", "4", "5"].includes(e.key)) {
        const sheet = CHEATSHEET[Number(e.key) - 1];
        if (sheet) {
          state.grammarTab = sheet.id;
          renderGrammarDrawer();
        }
        return;
      }

      if (state.view === "practice" && state.pDeck.length > 0 && !inInput && !state.grammarOpen) {
        const item = state.pDeck[state.pIdx];
        if (state.pMode === "articles") {
          if (!state.pFeedback) {
            if (e.key === "1") answerArticle("der", item);
            if (e.key === "2") answerArticle("das", item);
            if (e.key === "3") answerArticle("die", item);
          } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            nextCard();
          }
        } else if (state.pMode === "casequiz") {
          if (!state.pFeedback && ["1", "2", "3", "4"].includes(e.key)) {
            const idx = Number(e.key) - 1;
            if (item.options[idx] !== undefined) answerCaseQuiz(idx, item);
          } else if (state.pFeedback && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            nextCard();
          }
        } else if (state.pMode === "flashcards") {
          if (!state.pFlipped && e.key === " ") {
            e.preventDefault();
            flipFlashcard(item);
          } else if (state.pFlipped && e.key === "Enter") {
            e.preventDefault();
            gradeFlashcard(item, true);
          } else if (state.pFlipped && (e.key === "a" || e.key === "A")) {
            e.preventDefault();
            gradeFlashcard(item, false);
          } else if (state.pFlipped && (e.key === "r" || e.key === "R")) {
            speakDE(item.kind === "noun" ? item.art + " " + item.sg : item.inf);
          }
        } else if (state.pMode === "verbs" && state.pFeedback && e.key === "Enter") {
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
