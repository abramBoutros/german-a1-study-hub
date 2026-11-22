window.A1_CHAPTERS = window.A1_CHAPTERS || [];

window.A1_CHAPTERS.push(
  // =========================================================================
  // KAPITEL 5: ALLTAG, UHRZEIT, FAMILIE & MODALVERBEN
  // =========================================================================
  {
    id: 5,
    code: "Kapitel 5",
    title: "Alltag, Uhrzeit & Familie",
    subtitle: "Daily routine, telling time (formal & informal), temporal prepositions, family, possessive articles & modal verbs",
    color: "#7c3aed",
    icon: "⏰",
    summary: "Describe your daily routine with Verb-Position-2 word order, tell formal and informal time, use temporal prepositions (um/am/im/in/von…bis/ab), talk about family with possessive articles (Nominativ & Akkusativ), and use modal verbs (können, müssen, wollen).",
    nouns: [
      // Daily Routine & Times of Day
      { art: "der", sg: "Alltag", pl: "— (singular)", akk: "den Alltag", dat: "dem Alltag", en: "everyday life / daily routine", cat: "Alltag & Tageszeiten", ex: "Was ist Ihr Alltag?", extra: false },
      { art: "die", sg: "Tageszeit", pl: "die Tageszeiten", akk: "die Tageszeit", dat: "der Tageszeit", en: "time of day", cat: "Alltag & Tageszeiten", ex: "Am Morgen, am Mittag, am Abend.", extra: false },
      { art: "der", sg: "Morgen", pl: "die Morgen", akk: "den Morgen", dat: "dem Morgen", en: "morning (06:00–10:00)", cat: "Alltag & Tageszeiten", ex: "Am Morgen duscht Kaan.", extra: false },
      { art: "der", sg: "Vormittag", pl: "die Vormittage", akk: "den Vormittag", dat: "dem Vormittag", en: "late morning (10:00–12:00)", cat: "Alltag & Tageszeiten", ex: "Vormittags esse ich einen Joghurt.", extra: false },
      { art: "der", sg: "Mittag", pl: "die Mittage", akk: "den Mittag", dat: "dem Mittag", en: "noon / midday (12:00–14:00)", cat: "Alltag & Tageszeiten", ex: "Am Mittag isst Lina im Kindergarten.", extra: false },
      { art: "der", sg: "Nachmittag", pl: "die Nachmittage", akk: "den Nachmittag", dat: "dem Nachmittag", en: "afternoon (14:00–18:00)", cat: "Alltag & Tageszeiten", ex: "Am Nachmittag mögen wir Kuchen.", extra: false },
      { art: "der", sg: "Abend", pl: "die Abende", akk: "den Abend", dat: "dem Abend", en: "evening (18:00–22:00)", cat: "Alltag & Tageszeiten", ex: "Am Abend koche ich oft Fisch.", extra: false },
      { art: "die", sg: "Nacht", pl: "die Nächte", akk: "die Nacht", dat: "der Nacht", en: "night (22:00–06:00)", cat: "Alltag & Tageszeiten", ex: "In der Nacht schlafe ich. (Adverb: nachts)", extra: false },
      { art: "die", sg: "Kantine", pl: "die Kantinen", akk: "die Kantine", dat: "der Kantine", en: "workplace cafeteria / canteen", cat: "Alltag & Tageszeiten", ex: "Ich esse in der Kantine oft Nudeln.", extra: false },
      { art: "die", sg: "Mensa", pl: "die Mensen", akk: "die Mensa", dat: "der Mensa", en: "university cafeteria", cat: "Alltag & Tageszeiten", ex: "Kaan geht in die Mensa.", extra: false },
      { art: "die", sg: "Bibliothek", pl: "die Bibliotheken", akk: "die Bibliothek", dat: "der Bibliothek", en: "library", cat: "Alltag & Tageszeiten", ex: "Er lernt in der Bibliothek.", extra: false },
      { art: "die", sg: "Nachricht", pl: "die Nachrichten", akk: "die Nachricht", dat: "der Nachricht", en: "news / message", cat: "Alltag & Tageszeiten", ex: "Kaan frühstückt und liest Nachrichten.", extra: false },
      { art: "die", sg: "Zeitung", pl: "die Zeitungen", akk: "die Zeitung", dat: "der Zeitung", en: "newspaper", cat: "Alltag & Tageszeiten", ex: "Am Sonntag lese ich Zeitung.", extra: false },
      { art: "der", sg: "Kindergarten", pl: "die Kindergärten", akk: "den Kindergarten", dat: "dem Kindergarten", en: "kindergarten / preschool", cat: "Alltag & Tageszeiten", ex: "Lina isst im Kindergarten.", extra: false },
      { art: "die", sg: "Arbeit", pl: "die Arbeiten", akk: "die Arbeit", dat: "der Arbeit", en: "work / job", cat: "Alltag & Tageszeiten", ex: "Wann gehen Sie zur Arbeit?", extra: false },
      { art: "die", sg: "Hausaufgabe", pl: "die Hausaufgaben", akk: "die Hausaufgabe", dat: "der Hausaufgabe", en: "homework", cat: "Alltag & Tageszeiten", ex: "Du musst deine Hausaufgaben machen.", extra: false },
      { art: "der", sg: "Termin", pl: "die Termine", akk: "den Termin", dat: "dem Termin", en: "appointment", cat: "Alltag & Tageszeiten", ex: "Ich hätte gern einen Termin.", extra: false },
      { art: "die", sg: "Verspätung", pl: "die Verspätungen", akk: "die Verspätung", dat: "der Verspätung", en: "delay / lateness", cat: "Alltag & Tageszeiten", ex: "Es ist nur eine kleine Verspätung.", extra: false },

      // Telling Time
      { art: "die", sg: "Uhrzeit", pl: "die Uhrzeiten", akk: "die Uhrzeit", dat: "der Uhrzeit", en: "time (of day)", cat: "Die Uhrzeit", ex: "Wie spät ist es? / Wie viel Uhr ist es?", extra: false },
      { art: "die", sg: "Uhr", pl: "die Uhren", akk: "die Uhr", dat: "der Uhr", en: "clock / watch / o'clock", cat: "Die Uhrzeit", ex: "Es ist vierzehn Uhr fünfundvierzig.", extra: false },
      { art: "die", sg: "Armbanduhr", pl: "die Armbanduhren", akk: "die Armbanduhr", dat: "der Armbanduhr", en: "wristwatch", cat: "Die Uhrzeit", ex: "Meine Armbanduhr geht genau.", extra: false },
      { art: "die", sg: "Wanduhr", pl: "die Wanduhren", akk: "die Wanduhr", dat: "der Wanduhr", en: "wall clock", cat: "Die Uhrzeit", ex: "Die Wanduhr hängt in der Küche.", extra: false },
      { art: "die", sg: "Stunde", pl: "die Stunden", akk: "die Stunde", dat: "der Stunde", en: "hour", cat: "Die Uhrzeit", ex: "30 Minuten = eine halbe Stunde.", extra: false },
      { art: "die", sg: "Minute", pl: "die Minuten", akk: "die Minute", dat: "der Minute", en: "minute", cat: "Die Uhrzeit", ex: "Der Kurs beginnt in 20 Minuten.", extra: false },
      { art: "die", sg: "Sekunde", pl: "die Sekunden", akk: "die Sekunde", dat: "der Sekunde", en: "second", cat: "Die Uhrzeit", ex: "60 Sekunden = 1 Minute.", extra: false },
      { art: "die", sg: "Öffnungszeit", pl: "die Öffnungszeiten", akk: "die Öffnungszeit", dat: "der Öffnungszeit", en: "opening hours", cat: "Die Uhrzeit", ex: "Die Öffnungszeiten sind von 8 bis 18 Uhr.", extra: false },

      // Family
      { art: "die", sg: "Familie", pl: "die Familien", akk: "die Familie", dat: "der Familie", en: "family", cat: "Die Familie", ex: "Am Sonntag esse ich mit der Familie zu Mittag.", extra: false },
      { art: "die", sg: "Eltern", pl: "die Eltern (Pl. only)", akk: "die Eltern", dat: "den Eltern", en: "parents", cat: "Die Familie", ex: "Ich besuche meine Eltern.", extra: false },
      { art: "der", sg: "Vater", pl: "die Väter", akk: "den Vater", dat: "dem Vater", en: "father", cat: "Die Familie", ex: "Das ist mein Vater. Ich sehe meinen Vater.", extra: false },
      { art: "die", sg: "Mutter", pl: "die Mütter", akk: "die Mutter", dat: "der Mutter", en: "mother", cat: "Die Familie", ex: "Ich besuche meine Mutter.", extra: false },
      { art: "der", sg: "Großvater", pl: "die Großväter", akk: "den Großvater", dat: "dem Großvater", en: "grandfather (der Opa, -s)", cat: "Die Familie", ex: "Mein Großvater wohnt in München.", extra: false },
      { art: "die", sg: "Großmutter", pl: "die Großmütter", akk: "die Großmutter", dat: "der Großmutter", en: "grandmother (die Oma, -s)", cat: "Die Familie", ex: "Kaan besucht seine Oma.", extra: false },
      { art: "der", sg: "Sohn", pl: "die Söhne", akk: "den Sohn", dat: "dem Sohn", en: "son", cat: "Die Familie", ex: "Mein Sohn Florian ist 12.", extra: false },
      { art: "die", sg: "Tochter", pl: "die Töchter", akk: "die Tochter", dat: "der Tochter", en: "daughter", cat: "Die Familie", ex: "Meine Tochter Lena ist 14.", extra: false },
      { art: "das", sg: "Kind", pl: "die Kinder", akk: "das Kind", dat: "dem Kind", en: "child", cat: "Die Familie", ex: "Die Kinder wollen im Park spielen.", extra: false },
      { art: "der", sg: "Bruder", pl: "die Brüder", akk: "den Bruder", dat: "dem Bruder", en: "brother", cat: "Die Familie", ex: "Am Wochenende besuche ich meinen Bruder.", extra: false },
      { art: "die", sg: "Schwester", pl: "die Schwestern", akk: "die Schwester", dat: "der Schwester", en: "sister", cat: "Die Familie", ex: "Meine Schwester will ein neues Handy kaufen.", extra: false },
      { art: "der", sg: "Onkel", pl: "die Onkel", akk: "den Onkel", dat: "dem Onkel", en: "uncle", cat: "Die Familie", ex: "Mein Onkel ist sehr lustig.", extra: false },
      { art: "die", sg: "Tante", pl: "die Tanten", akk: "die Tante", dat: "der Tante", en: "aunt", cat: "Die Familie", ex: "Meine Tante wohnt in Berlin.", extra: false },
      { art: "der", sg: "Cousin", pl: "die Cousins", fem: "die Cousine (Pl. -n)", akk: "den Cousin", dat: "dem Cousin", en: "cousin", cat: "Die Familie", ex: "Mein Cousin und meine Cousine kommen zu Besuch.", extra: false },
      { art: "der", sg: "Enkel", pl: "die Enkel", fem: "die Enkelin (Pl. -innen)", akk: "den Enkel", dat: "dem Enkel", en: "grandson / granddaughter", cat: "Die Familie", ex: "Die Oma liebt ihre Enkel.", extra: false },
      { art: "der", sg: "Schwiegersohn", pl: "die Schwiegersöhne", fem: "die Schwiegertochter (Pl. -töchter)", akk: "den Schwiegersohn", dat: "dem Schwiegersohn", en: "son-in-law / daughter-in-law", cat: "Die Familie", ex: "Unser Schwiegersohn ist Techniker.", extra: false },
      { art: "der", sg: "Mann", pl: "die Männer", akk: "den Mann", dat: "dem Mann", en: "husband / man (der Ehemann)", cat: "Die Familie", ex: "Mein Mann heißt Hannes.", extra: false },
      { art: "die", sg: "Frau", pl: "die Frauen", akk: "die Frau", dat: "der Frau", en: "wife / woman (die Ehefrau)", cat: "Die Familie", ex: "Seine Frau ist Ärztin.", extra: false },
      { art: "der", sg: "Hund", pl: "die Hunde", akk: "den Hund", dat: "dem Hund", en: "dog", cat: "Die Familie", ex: "Unser Hund Otto liebt seinen Ball.", extra: false },

      // EXTRA Family & Daily Routine Vocab
      { art: "die", sg: "Geschwister", pl: "die Geschwister (Pl. only)", akk: "die Geschwister", dat: "den Geschwistern", en: "siblings", cat: "Extra: Familie & Alltag", ex: "Hast du Geschwister? Ja, zwei Brüder.", extra: true },
      { art: "die", sg: "Großeltern", pl: "die Großeltern (Pl. only)", akk: "die Großeltern", dat: "den Großeltern", en: "grandparents", cat: "Extra: Familie & Alltag", ex: "Meine Großeltern leben auf dem Land.", extra: true },
      { art: "der", sg: "Neffe", pl: "die Neffen", fem: "die Nichte (Pl. -n)", akk: "den Neffen", dat: "dem Neffen", en: "nephew / niece", cat: "Extra: Familie & Alltag", ex: "Mein Neffe ist fünf Jahre alt.", extra: true },
      { art: "der", sg: "Schwager", pl: "die Schwäger", fem: "die Schwägerin (Pl. -innen)", akk: "den Schwager", dat: "dem Schwager", en: "brother-in-law / sister-in-law", cat: "Extra: Familie & Alltag", ex: "Mein Schwager kommt aus Hamburg.", extra: true },
      { art: "der", sg: "Wecker", pl: "die Wecker", akk: "den Wecker", dat: "dem Wecker", en: "alarm clock", cat: "Extra: Familie & Alltag", ex: "Mein Wecker klingelt um halb sieben.", extra: true },
      { art: "die", sg: "Pause", pl: "die Pausen", akk: "die Pause", dat: "der Pause", en: "break / pause", cat: "Extra: Familie & Alltag", ex: "Um 12 Uhr mache ich Mittagspause.", extra: true },
      { art: "der", sg: "Haushalt", pl: "die Haushalte", akk: "den Haushalt", dat: "dem Haushalt", en: "household / chores", cat: "Extra: Familie & Alltag", ex: "Am Samstag mache ich den Haushalt.", extra: true },
      // Extra: Software Engineering (Kapitel 5)
      { art: "die", sg: "Frist", pl: "die Fristen", akk: "die Frist", dat: "der Frist", en: "deadline", cat: "Extra: Software Engineering", ex: "Die Frist für das Feature ist am Freitag.", extra: true },
      { art: "der", sg: "Zeitplan", pl: "die Zeitpläne", akk: "den Zeitplan", dat: "dem Zeitplan", en: "schedule / timeline", cat: "Extra: Software Engineering", ex: "Wir sind gut im Zeitplan.", extra: true },
      { art: "der", sg: "Kalender", pl: "die Kalender", akk: "den Kalender", dat: "dem Kalender", en: "calendar", cat: "Extra: Software Engineering", ex: "Ich schaue kurz in meinen Kalender.", extra: true },
      { art: "der", sg: "Feierabend", pl: "die Feierabende", akk: "den Feierabend", dat: "dem Feierabend", en: "end of the workday / quitting time", cat: "Extra: Software Engineering", ex: "Um 18 Uhr mache ich Feierabend.", extra: true },
      { art: "die", sg: "Gleitzeit", pl: "die Gleitzeiten", akk: "die Gleitzeit", dat: "der Gleitzeit", en: "flexible working hours (flextime)", cat: "Extra: Software Engineering", ex: "Unsere Firma bietet Gleitzeit an.", extra: true },
      { art: "das", sg: "Homeoffice", pl: "— (singular)", akk: "das Homeoffice", dat: "dem Homeoffice", en: "work from home / remote office", cat: "Extra: Software Engineering", ex: "Am Mittwoch arbeite ich im Homeoffice.", extra: true }
    ],
    verbs: [
      { inf: "können", en: "can / to be able to", type: "Modalverb", caseGov: "+ Inf.", ich: "kann", du: "kannst", er: "kann", wir: "können", ihr: "könnt", sie: "können", imp: "—", prt: "konnte", ex: "Ich kann gut schwimmen. Können Sie mir helfen?", extra: false },
      { inf: "müssen", en: "must / to have to", type: "Modalverb", caseGov: "+ Inf.", ich: "muss", du: "musst", er: "muss", wir: "müssen", ihr: "müsst", sie: "müssen", imp: "—", prt: "musste", ex: "Ich muss heute arbeiten. Er muss früh aufstehen.", extra: false },
      { inf: "wollen", en: "to want to", type: "Modalverb", caseGov: "+ Inf.", ich: "will", du: "willst", er: "will", wir: "wollen", ihr: "wollt", sie: "wollen", imp: "—", prt: "wollte", ex: "Die Kinder wollen im Park spielen.", extra: false },
      { inf: "mögen", en: "to like (nouns)", type: "Modalverb", caseGov: "+ Akk.", ich: "mag", du: "magst", er: "mag", wir: "mögen", ihr: "mögt", sie: "mögen", imp: "—", prt: "mochte", ex: "Magst du Katzen? Wir mögen deutsche Musik.", extra: false },
      { inf: "lieben", en: "to love", type: "Regular", caseGov: "+ Akk.", ich: "liebe", du: "liebst", er: "liebt", wir: "lieben", ihr: "liebt", sie: "lieben", imp: "Lieb! / Liebt!", prt: "liebte", ex: "Ich liebe dich. Unser Hund liebt seinen Ball.", extra: false },
      { inf: "aufstehen", en: "to get up", type: "Separable", caseGov: "—", ich: "stehe auf", du: "stehst auf", er: "steht auf", wir: "stehen auf", ihr: "steht auf", sie: "stehen auf", imp: "Steh auf! / Steht auf! / Stehen Sie auf!", prt: "stand auf", ex: "Ich stehe um sieben Uhr auf.", extra: false },
      { inf: "aufwachen", en: "to wake up", type: "Separable", caseGov: "—", ich: "wache auf", du: "wachst auf", er: "wacht auf", wir: "wachen auf", ihr: "wacht auf", sie: "wachen auf", imp: "Wach auf! / Wacht auf!", prt: "wachte auf", ex: "Wann wachen Sie auf?", extra: false },
      { inf: "duschen", en: "to shower", type: "Regular", caseGov: "—", ich: "dusche", du: "duschst", er: "duscht", wir: "duschen", ihr: "duscht", sie: "duschen", imp: "Dusch! / Duscht!", prt: "duschte", ex: "Am Morgen duscht Kaan.", extra: false },
      { inf: "schlafen", en: "to sleep", type: "Vowel Change (a→ä)", caseGov: "—", ich: "schlafe", du: "schläfst", er: "schläft", wir: "schlafen", ihr: "schlaft", sie: "schlafen", imp: "Schlaf! / Schlaft! / Schlafen Sie!", prt: "schlief", ex: "Am Wochenende schlafe ich lange.", extra: false },
      { inf: "besuchen", en: "to visit", type: "Regular", caseGov: "+ Akk.", ich: "besuche", du: "besuchst", er: "besucht", wir: "besuchen", ihr: "besucht", sie: "besuchen", imp: "Besuch! / Besuchen Sie!", prt: "besuchte", ex: "Er besucht seine Oma.", extra: false },
      { inf: "lernen", en: "to learn / study", type: "Regular", caseGov: "+ Akk.", ich: "lerne", du: "lernst", er: "lernt", wir: "lernen", ihr: "lernt", sie: "lernen", imp: "Lern! / Lernt! / Lernen Sie!", prt: "lernte", ex: "Er lernt in der Bibliothek.", extra: false },
      { inf: "telefonieren", en: "to talk on the phone", type: "Regular", caseGov: "mit + Dat.", ich: "telefoniere", du: "telefonierst", er: "telefoniert", wir: "telefonieren", ihr: "telefoniert", sie: "telefonieren", imp: "Telefonier! / Telefonieren Sie!", prt: "telefonierte", ex: "Mara telefoniert mit der Musikschule.", extra: false },
      { inf: "beginnen", en: "to begin / start", type: "Regular", caseGov: "—", ich: "beginne", du: "beginnst", er: "beginnt", wir: "beginnen", ihr: "beginnt", sie: "beginnen", imp: "Beginn! / Beginnen Sie!", prt: "begann", ex: "Der Kurs beginnt in 20 Minuten.", extra: false },
      { inf: "zurückkommen", en: "to come back / return", type: "Separable", caseGov: "—", ich: "komme zurück", du: "kommst zurück", er: "kommt zurück", wir: "kommen zurück", ihr: "kommt zurück", sie: "kommen zurück", imp: "Komm zurück! / Kommen Sie zurück!", prt: "kam zurück", ex: "Wann kommen Sie nach Hause zurück?", extra: false },
      // Extra Daily Routine Verbs
      { inf: "sich anziehen", en: "to get dressed", type: "Separable + Reflexive", caseGov: "—", ich: "ziehe mich an", du: "ziehst dich an", er: "zieht sich an", wir: "ziehen uns an", ihr: "zieht euch an", sie: "ziehen sich an", imp: "Zieh dich an!", prt: "zog sich an", ex: "Nach dem Duschen ziehe ich mich an.", extra: true },
      { inf: "einschlafen", en: "to fall asleep", type: "Separable + Vowel (a→ä)", caseGov: "—", ich: "schlafe ein", du: "schläfst ein", er: "schläft ein", wir: "schlafen ein", ihr: "schlaft ein", sie: "schlafen ein", imp: "Schlaf ein!", prt: "schlief ein", ex: "Ich kann oft nicht einschlafen.", extra: true },
      { inf: "putzen", en: "to clean / brush", type: "Regular (-z)", caseGov: "+ Akk.", ich: "putze", du: "putzt", er: "putzt", wir: "putzen", ihr: "putzt", sie: "putzen", imp: "Putz! / Putzt! / Putzen Sie!", prt: "putzte", ex: "Ich putze morgens und abends die Zähne.", extra: true },
      { inf: "planen", en: "to plan", type: "Regular", caseGov: "+ Akk.", ich: "plane", du: "planst", er: "plant", wir: "planen", ihr: "plant", sie: "planen", imp: "Plan! / Planen Sie!", prt: "plante", ex: "Am Montag planen wir den neuen Sprint.", extra: true },
      { inf: "verschieben", en: "to postpone / reschedule", type: "Regular", caseGov: "+ Akk.", ich: "verschiebe", du: "verschiebst", er: "verschiebt", wir: "verschieben", ihr: "verschiebt", sie: "verschieben", imp: "Verschieb! / Verschieben Sie!", prt: "verschob", ex: "Können wir das Meeting auf 15 Uhr verschieben?", extra: true },
      { inf: "absagen", en: "to cancel (meeting/appointment)", type: "Separable", caseGov: "+ Akk.", ich: "sage ab", du: "sagst ab", er: "sagt ab", wir: "sagen ab", ihr: "sagt ab", sie: "sagen ab", imp: "Sag ab! / Sagen Sie ab!", prt: "sagte ab", ex: "Leider muss ich den Termin heute absagen.", extra: true }
    ],
    expressions: [
      { de: "morgens / vormittags / mittags / nachmittags / abends / nachts", en: "in the mornings / afternoons / evenings / at night", note: "Lowercase adverbs = 'jeden Morgen' (habitual).", extra: false },
      { de: "Wie spät ist es? / Wie viel Uhr ist es?", en: "What time is it?", note: "Answer: Es ist… / Wann? → Um … Uhr.", extra: false },
      { de: "Viertel nach / Viertel vor / halb", en: "quarter past / quarter to / half TO the next hour", note: "WATCH OUT: halb acht = 7:30 (halfway to 8)!", extra: false },
      { de: "Ich hätte gern einen Termin.", en: "I would like an appointment (very polite).", note: "Politeness scale: Ich will (rude) < Ich möchte / Kann ich < Ich hätte gern.", extra: false },
      { de: "Es tut mir leid, ich bin zu spät. — Kein Problem / Macht nichts.", en: "I'm sorry, I'm late. — No problem / Never mind.", note: "Apologizing for lateness.", extra: false },
      { de: "verheiratet / ledig / geschieden / verlobt", en: "married / single / divorced / engaged", note: "Marital status adjectives (Er ist verheiratet. Sie ist ledig.).", extra: false },
      { de: "pünktlich ↔ zu spät / verspätet", en: "punctual / on time ↔ late", note: "Bei Arztterminen muss man pünktlich sein.", extra: false },
      { de: "vorgestern / gestern / heute / morgen / übermorgen", en: "day before yesterday / yesterday / today / tomorrow / day after tomorrow", note: "Essential relative day adverbs.", extra: true },
      { de: "bis spätestens Freitag", en: "by Friday at the latest", note: "Common deadline phrase in German teams.", extra: true },
      { de: "Schönen Feierabend!", en: "Have a great evening after work!", note: "What German colleagues say when logging off.", extra: true }
    ],
    grammar: [
      {
        title: "1. Verb Position 2 (Inversion)",
        badge: "Word Order",
        explanation: "The conjugated verb is <strong>ALWAYS Position 2</strong>. If you start a sentence with a time expression (Position 1), the <strong>subject moves to Position 3</strong>!",
        table: {
          headers: ["Position 1", "Position 2 (VERB)", "Position 3 (Subject)", "Rest"],
          rows: [
            ["Lina", "<strong>isst</strong>", "morgens", "Müsli."],
            ["Morgens", "<strong>isst</strong>", "Lina", "Müsli."],
            ["Am Wochenende", "<strong>schlafe</strong>", "ich", "lange."]
          ]
        },
        tip: "Never put TWO elements before the verb! WRONG: <em>Morgens Lina isst Müsli.</em> RIGHT: <strong>Morgens isst Lina Müsli.</strong>"
      },
      {
        title: "2. Telling Time: Formal vs. Informal",
        badge: "Essential",
        explanation: "<strong>Formal (24h)</strong> is used on TV, trains, and appointments: <code>Hours + Uhr + Minutes</code>. <strong>Informal (12h)</strong> uses <code>nach</code> (past), <code>vor</code> (to), <code>Viertel</code> (quarter), and <code>halb</code> (halfway to the NEXT hour!).",
        table: {
          headers: ["Time", "Formal (Offiziell)", "Informal (Inoffiziell)"],
          rows: [
            ["12:00", "zwölf Uhr", "zwölf (Uhr)"],
            ["12:15", "zwölf Uhr fünfzehn", "<strong>Viertel nach</strong> zwölf"],
            ["12:25", "zwölf Uhr fünfundzwanzig", "fünf <strong>vor halb</strong> eins"],
            ["12:30", "zwölf Uhr dreißig", "<strong>halb eins</strong> (NOT halb zwölf!)"],
            ["12:35", "zwölf Uhr fünfunddreißig", "fünf <strong>nach halb</strong> eins"],
            ["12:45", "zwölf Uhr fünfundvierzig", "<strong>Viertel vor</strong> eins"],
            ["01:00 / 01:15", "ein Uhr / ein Uhr fünfzehn", "eins / Viertel nach <strong>eins</strong>"]
          ]
        },
        tip: "With <code>Uhr</code> say <strong>ein Uhr</strong> (no 's'). Without <code>Uhr</code> say <strong>eins</strong> (<em>halb eins, Viertel nach eins</em>)."
      },
      {
        title: "3. Temporal Prepositions (Wann?)",
        badge: "Prepositions",
        explanation: "Memorize which preposition pairs with each unit of time:",
        table: {
          headers: ["Preposition", "Used With", "Examples"],
          rows: [
            ["<strong>um</strong>", "Clock times (Uhrzeiten)", "<strong>um</strong> 7 Uhr, <strong>um</strong> 14:45 Uhr"],
            ["<strong>am</strong> (= an dem)", "Days of week, parts of day, weekend, dates", "<strong>am</strong> Montag, <strong>am</strong> Morgen, <strong>am</strong> Wochenende (Exception: <em>in der Nacht</em>)"],
            ["<strong>im</strong> (= in dem)", "Months & Seasons", "<strong>im</strong> August, <strong>im</strong> Sommer"],
            ["<strong>in</strong>", "Duration from now (in X minutes/days…)", "Der Kurs beginnt <strong>in</strong> 20 Minuten."],
            ["<strong>von … bis …</strong>", "Start to end point", "<strong>von</strong> Montag <strong>bis</strong> Freitag, <strong>von</strong> 8 <strong>bis</strong> 17 Uhr"],
            ["<strong>ab</strong>", "Starting from (open-ended)", "Das Restaurant hat <strong>ab</strong> 9 Uhr geöffnet."]
          ]
        },
        tip: "Trap: <strong>in der Nacht</strong> (not <em>am Nacht</em>), OR use the adverb <strong>nachts</strong>!"
      },
      {
        title: "4. Possessive Articles (Nominativ & Akkusativ)",
        badge: "Core",
        explanation: "Possessives take the EXACT same endings as <code>ein / eine</code>: add <strong>-e</strong> for Feminine & Plural, and <strong>-en</strong> for Masculine Akkusativ!",
        table: {
          headers: ["Pronoun", "Masc. Nom / Akk", "Neut. (Nom=Akk)", "Fem. (Nom=Akk)", "Plural (Nom=Akk)"],
          rows: [
            ["ich", "mein / <strong>meinen</strong>", "mein", "meine", "meine"],
            ["du", "dein / <strong>deinen</strong>", "dein", "deine", "deine"],
            ["er / es", "sein / <strong>seinen</strong>", "sein", "seine", "seine"],
            ["sie (she)", "ihr / <strong>ihren</strong>", "ihr", "ihre", "ihre"],
            ["wir", "unser / <strong>unseren</strong>", "unser", "unsere", "unsere"],
            ["ihr (you pl.)", "euer / <strong>euren</strong>", "euer", "<strong>eure</strong>", "<strong>eure</strong>"],
            ["sie (they) / Sie", "ihr / Ihr (Akk: -en)", "ihr / Ihr", "ihre / Ihre", "ihre / Ihre"]
          ]
        },
        tip: "Watch <strong>euer</strong>: when you add an ending (<code>-e/-en</code>), the middle <em>e</em> drops → <strong>eure</strong>, <strong>euren</strong>!"
      },
      {
        title: "5. Modal Verbs & Sentence Bracket (Satzklammer)",
        badge: "Core",
        explanation: "The <strong>modal verb</strong> is conjugated in <strong>Position 2</strong>, and the <strong>main verb infinitive</strong> goes to the <strong>VERY END</strong> of the sentence. In singular (ich/du/er), the vowel changes and <strong>ich = er/sie/es</strong> (no -t)!",
        table: {
          headers: ["Pronoun", "können (can)", "müssen (must)", "wollen (want)"],
          rows: [
            ["ich", "<strong>kann</strong>", "<strong>muss</strong>", "<strong>will</strong>"],
            ["du", "kannst", "musst", "willst"],
            ["er / sie / es", "<strong>kann</strong>", "<strong>muss</strong>", "<strong>will</strong>"],
            ["wir / sie / Sie", "können", "müssen", "wollen"],
            ["ihr", "könnt", "müsst", "wollt"]
          ]
        },
        tip: "Sentence bracket: <em>Meine Schwester <strong>will</strong> ein neues Handy <strong>kaufen</strong>.</em>"
      }
    ]
  },

  // =========================================================================
  // KAPITEL 6: FESTE, DATUM, TRENNBARE VERBEN, RESTAURANT & PRÄTERITUM
  // =========================================================================
  {
    id: 6,
    code: "Kapitel 6",
    title: "Feste, Datum & Im Restaurant",
    subtitle: "Ordinal numbers & dates, separable verbs, Akkusativ pronouns (für + Akk), restaurant dialogues & Präteritum (war/hatte)",
    color: "#db2777",
    icon: "🎉",
    summary: "Say dates and birthdays with ordinal numbers, master separable verbs (both alone and with modals), use Akkusativ personal pronouns with 'für', order & tip in a restaurant, and talk about the past with 'war' and 'hatte'.",
    nouns: [
      // Celebrations & Invitations
      { art: "der", sg: "Geburtstag", pl: "die Geburtstage", akk: "den Geburtstag", dat: "dem Geburtstag", en: "birthday", cat: "Feste & Einladungen", ex: "Ich habe am fünften Mai Geburtstag.", extra: false },
      { art: "das", sg: "Fest", pl: "die Feste", akk: "das Fest", dat: "dem Fest", en: "celebration / festival / party", cat: "Feste & Einladungen", ex: "Wir möchten euch zu unserem Fest einladen.", extra: false },
      { art: "die", sg: "Party", pl: "die Partys", akk: "die Party", dat: "der Party", en: "party", cat: "Feste & Einladungen", ex: "Am Freitag macht Albert eine Party.", extra: false },
      { art: "die", sg: "Überraschung", pl: "die Überraschungen", akk: "die Überraschung", dat: "der Überraschung", en: "surprise", cat: "Feste & Einladungen", ex: "Psst — eine Überraschung für Sofia!", extra: false },
      { art: "das", sg: "Geschenk", pl: "die Geschenke", akk: "das Geschenk", dat: "dem Geschenk", en: "gift / present", cat: "Feste & Einladungen", ex: "Unsere Idee für das Geschenk ist ein Tag mit Freunden.", extra: false },
      { art: "die", sg: "Einladung", pl: "die Einladungen", akk: "die Einladung", dat: "der Einladung", en: "invitation", cat: "Feste & Einladungen", ex: "Danke für die Einladung!", extra: false },
      { art: "der", sg: "Gast", pl: "die Gäste", akk: "den Gast", dat: "dem Gast", en: "guest", cat: "Feste & Einladungen", ex: "Bringen deine Gäste etwas mit?", extra: false },
      { art: "der", sg: "Ausflug", pl: "die Ausflüge", akk: "den Ausflug", dat: "dem Ausflug", en: "excursion / day trip", cat: "Feste & Einladungen", ex: "Wir machen einen Ausflug mit dem Fahrrad.", extra: false },
      { art: "die", sg: "Fahrradtour", pl: "die Fahrradtouren", akk: "die Fahrradtour", dat: "der Fahrradtour", en: "bike tour", cat: "Feste & Einladungen", ex: "Wir machen eine Fahrradtour und ein Picknick.", extra: false },
      { art: "das", sg: "Picknick", pl: "die Picknicks", akk: "das Picknick", dat: "dem Picknick", en: "picnic", cat: "Feste & Einladungen", ex: "Wir machen ein Picknick im Park.", extra: false },
      { art: "der", sg: "Treffpunkt", pl: "die Treffpunkte", akk: "den Treffpunkt", dat: "dem Treffpunkt", en: "meeting point", cat: "Feste & Einladungen", ex: "Treffpunkt am Bahnhof um 10 Uhr.", extra: false },
      { art: "der", sg: "Regen", pl: "— (uncountable)", akk: "den Regen", dat: "dem Regen", en: "rain", cat: "Feste & Einladungen", ex: "Bei Regen gehen wir ins Kino.", extra: false },
      { art: "das", sg: "Datum", pl: "die Daten", akk: "das Datum", dat: "dem Datum", en: "date", cat: "Feste & Einladungen", ex: "Welches Datum ist heute?", extra: false },
      { art: "der", sg: "Zwilling", pl: "die Zwillinge", akk: "den Zwilling", dat: "dem Zwilling", en: "twin", cat: "Feste & Einladungen", ex: "Susanne und Laura sind Zwillinge.", extra: false },
      { art: "das", sg: "Schaltjahr", pl: "die Schaltjahre", akk: "das Schaltjahr", dat: "dem Schaltjahr", en: "leap year", cat: "Feste & Einladungen", ex: "Lena hat nur im Schaltjahr am 29.2. Geburtstag.", extra: false },
      { art: "das", sg: "Silvester", pl: "—", akk: "das Silvester", dat: "dem Silvester", en: "New Year's Eve (31.12.)", cat: "Feste & Einladungen", ex: "Sven hat an Silvester Geburtstag.", extra: false },

      // Restaurant & Lokale
      { art: "die", sg: "Bestellung", pl: "die Bestellungen", akk: "die Bestellung", dat: "der Bestellung", en: "order", cat: "Im Restaurant", ex: "Der Kellner nimmt die Bestellung auf.", extra: false },
      { art: "die", sg: "Speisekarte", pl: "die Speisekarten", akk: "die Speisekarte", dat: "der Speisekarte", en: "menu", cat: "Im Restaurant", ex: "Die Kneipe hat manchmal eine große Speisekarte.", extra: false },
      { art: "das", sg: "Trinkgeld", pl: "die Trinkgelder", akk: "das Trinkgeld", dat: "dem Trinkgeld", en: "tip (gratuity)", cat: "Im Restaurant", ex: "In Deutschland gibt man etwa 10% Trinkgeld.", extra: false },
      { art: "die", sg: "Apfelsaftschorle", pl: "die Apfelsaftschorlen", akk: "die Apfelsaftschorle", dat: "der Apfelsaftschorle", en: "apple juice spritzer", cat: "Im Restaurant", ex: "Für mich bitte eine Apfelsaftschorle.", extra: false },
      { art: "die", sg: "Tomatensuppe", pl: "die Tomatensuppen", akk: "die Tomatensuppe", dat: "der Tomatensuppe", en: "tomato soup", cat: "Im Restaurant", ex: "Ich möchte eine Tomatensuppe.", extra: false },
      { art: "das", sg: "Schnitzel", pl: "die Schnitzel", akk: "das Schnitzel", dat: "dem Schnitzel", en: "schnitzel", cat: "Im Restaurant", ex: "Schnitzel mit Pommes kostet 14,80 €.", extra: false },
      { art: "das", sg: "Eis", pl: "— (uncountable)", akk: "das Eis", dat: "dem Eis", en: "ice cream", cat: "Im Restaurant", ex: "Eis mit Sahne kostet 3,50 €.", extra: false },
      { art: "der", sg: "Hunger", pl: "— (uncountable)", akk: "den Hunger", dat: "dem Hunger", en: "hunger", cat: "Im Restaurant", ex: "Ich habe Hunger. (= Ich bin hungrig.)", extra: false },
      { art: "der", sg: "Durst", pl: "— (uncountable)", akk: "den Durst", dat: "dem Durst", en: "thirst", cat: "Im Restaurant", ex: "Der Hund hatte Durst. (= Ich bin durstig.)", extra: false },
      { art: "der", sg: "Spaß", pl: "die Späße", akk: "den Spaß", dat: "dem Spaß", en: "fun", cat: "Im Restaurant", ex: "Jan und Leela hatten viel Spaß.", extra: false },
      { art: "das", sg: "Kaffeehaus", pl: "die Kaffeehäuser", akk: "das Kaffeehaus", dat: "dem Kaffeehaus", en: "Viennese coffeehouse", cat: "Lokale in D-A-CH", ex: "Kaffeehäuser sind typisch für Wien.", extra: false },
      { art: "der", sg: "Biergarten", pl: "die Biergärten", akk: "den Biergarten", dat: "dem Biergarten", en: "beer garden", cat: "Lokale in D-A-CH", ex: "Biergärten sind typisch für Bayern.", extra: false },
      { art: "die", sg: "Strandbar", pl: "die Strandbars", akk: "die Strandbar", dat: "der Strandbar", en: "beach bar", cat: "Lokale in D-A-CH", ex: "Strandbars sind meistens an einem Fluss oder See.", extra: false },
      { art: "die", sg: "Kneipe", pl: "die Kneipen", akk: "die Kneipe", dat: "der Kneipe", en: "pub / tavern", cat: "Lokale in D-A-CH", ex: "Kneipen gibt es überall.", extra: false },

      // EXTRA Celebration & Restaurant Vocab
      { art: "die", sg: "Torte", pl: "die Torten", akk: "die Torte", dat: "der Torte", en: "layered cake / birthday cake", cat: "Extra: Feste & Restaurant", ex: "Wir essen eine Geburtstagstorte.", extra: true },
      { art: "die", sg: "Kerze", pl: "die Kerzen", akk: "die Kerze", dat: "der Kerze", en: "candle", cat: "Extra: Feste & Restaurant", ex: "Auf der Torte sind 30 Kerzen.", extra: true },
      { art: "der", sg: "Glückwunsch", pl: "die Glückwünsche", akk: "den Glückwunsch", dat: "dem Glückwunsch", en: "congratulation", cat: "Extra: Feste & Restaurant", ex: "Herzlichen Glückwunsch zum Geburtstag!", extra: true },
      { art: "die", sg: "Vorspeise", pl: "die Vorspeisen", akk: "die Vorspeise", dat: "der Vorspeise", en: "appetizer / starter", cat: "Extra: Feste & Restaurant", ex: "Als Vorspeise nehme ich die Tomatensuppe.", extra: true },
      { art: "das", sg: "Hauptgericht", pl: "die Hauptgerichte", akk: "das Hauptgericht", dat: "dem Hauptgericht", en: "main course", cat: "Extra: Feste & Restaurant", ex: "Als Hauptgericht möchte ich Fisch.", extra: true },
      { art: "der", sg: "Nachtisch", pl: "die Nachtische", akk: "den Nachtisch", dat: "dem Nachtisch", en: "dessert (also: das Dessert)", cat: "Extra: Feste & Restaurant", ex: "Möchten Sie noch einen Nachtisch?", extra: true },
      { art: "der", sg: "Tisch", pl: "die Tische", akk: "den Tisch", dat: "dem Tisch", en: "table", cat: "Extra: Feste & Restaurant", ex: "Ich möchte einen Tisch für zwei Personen reservieren.", extra: true },
      // Extra: Software Engineering (Kapitel 6)
      { art: "die", sg: "Veröffentlichung", pl: "die Veröffentlichungen", akk: "die Veröffentlichung", dat: "der Veröffentlichung", en: "release / publication", cat: "Extra: Software Engineering", ex: "Die Veröffentlichung der neuen Version ist am 15. Mai.", extra: true },
      { art: "der", sg: "Meilenstein", pl: "die Meilensteine", akk: "den Meilenstein", dat: "dem Meilenstein", en: "milestone", cat: "Extra: Software Engineering", ex: "Wir feiern heute einen wichtigen Meilenstein.", extra: true },
      { art: "die", sg: "Konferenz", pl: "die Konferenzen", akk: "die Konferenz", dat: "der Konferenz", en: "conference", cat: "Extra: Software Engineering", ex: "Nächsten Monat fahre ich zu einer Tech-Konferenz.", extra: true },
      { art: "der", sg: "Vortrag", pl: "die Vorträge", akk: "den Vortrag", dat: "dem Vortrag", en: "talk / presentation", cat: "Extra: Software Engineering", ex: "Er hält einen Vortrag über Cloud-Sicherheit.", extra: true }
    ],
    verbs: [
      { inf: "einladen", en: "to invite", type: "Separable + Vowel (a→ä)", caseGov: "+ Akk.", ich: "lade ein", du: "lädst ein", er: "lädt ein", wir: "laden ein", ihr: "ladet ein", sie: "laden ein", imp: "Lad ein! / Ladet ein! / Laden Sie ein!", prt: "lud ein", ex: "Marc und Anne laden alle Freunde ein.", extra: false },
      { inf: "anfangen", en: "to start / begin", type: "Separable + Vowel (a→ä)", caseGov: "—", ich: "fange an", du: "fängst an", er: "fängt an", wir: "fangen an", ihr: "fangt an", sie: "fangen an", imp: "Fang an! / Fangt an! / Fangen Sie an!", prt: "fing an", ex: "Der Tag fängt um 10 Uhr an.", extra: false },
      { inf: "aufhören", en: "to stop / end", type: "Separable", caseGov: "—", ich: "höre auf", du: "hörst auf", er: "hört auf", wir: "hören auf", ihr: "hört auf", sie: "hören auf", imp: "Hör auf! / Hört auf!", prt: "hörte auf", ex: "Wann hört das Fest auf?", extra: false },
      { inf: "abholen", en: "to pick up", type: "Separable", caseGov: "+ Akk.", ich: "hole ab", du: "holst ab", er: "holt ab", wir: "holen ab", ihr: "holt ab", sie: "holen ab", imp: "Hol ab! / Holt ab! / Holen Sie ab!", prt: "holte ab", ex: "Sie holen Sofia zusammen ab.", extra: false },
      { inf: "mitbringen", en: "to bring along", type: "Separable", caseGov: "+ Akk.", ich: "bringe mit", du: "bringst mit", er: "bringt mit", wir: "bringen mit", ihr: "bringt mit", sie: "bringen mit", imp: "Bring mit! / Bringt mit!", prt: "brachte mit", ex: "Wir bringen Essen und Getränke mit.", extra: false },
      { inf: "mitkommen", en: "to come along", type: "Separable", caseGov: "—", ich: "komme mit", du: "kommst mit", er: "kommt mit", wir: "kommen mit", ihr: "kommt mit", sie: "kommen mit", imp: "Komm mit! / Kommt mit!", prt: "kam mit", ex: "Hoffentlich könnt ihr alle mitkommen!", extra: false },
      { inf: "anrufen", en: "to call (phone)", type: "Separable", caseGov: "+ Akk.", ich: "rufe an", du: "rufst an", er: "ruft an", wir: "rufen an", ihr: "ruft an", sie: "rufen an", imp: "Ruf an! / Ruft an! / Rufen Sie an!", prt: "rief an", ex: "Wir rufen morgens alle an.", extra: false },
      { inf: "einkaufen", en: "to go shopping", type: "Separable", caseGov: "+ Akk.", ich: "kaufe ein", du: "kaufst ein", er: "kauft ein", wir: "kaufen ein", ihr: "kauft ein", sie: "kaufen ein", imp: "Kauf ein! / Kauft ein!", prt: "kaufte ein", ex: "Ich kaufe im Supermarkt ein.", extra: false },
      { inf: "einsammeln", en: "to collect", type: "Separable (-eln)", caseGov: "+ Akk.", ich: "sammle ein", du: "sammelst ein", er: "sammelt ein", wir: "sammeln ein", ihr: "sammelt ein", sie: "sammeln ein", imp: "Sammle ein!", prt: "sammelte ein", ex: "Wir sammeln 10 Euro pro Person ein.", extra: false },
      { inf: "aufmachen", en: "to open", type: "Separable", caseGov: "+ Akk.", ich: "mache auf", du: "machst auf", er: "macht auf", wir: "machen auf", ihr: "macht auf", sie: "machen auf", imp: "Mach auf! / Machen Sie auf!", prt: "machte auf", ex: "Mach bitte das Fenster auf!", extra: false },
      { inf: "zumachen", en: "to close", type: "Separable", caseGov: "+ Akk.", ich: "mache zu", du: "machst zu", er: "macht zu", wir: "machen zu", ihr: "macht zu", sie: "machen zu", imp: "Mach zu! / Machen Sie zu!", prt: "machte zu", ex: "Mach bitte die Tür zu!", extra: false },
      { inf: "anmachen", en: "to turn on", type: "Separable", caseGov: "+ Akk.", ich: "mache an", du: "machst an", er: "macht an", wir: "machen an", ihr: "macht an", sie: "machen an", imp: "Mach an!", prt: "machte an", ex: "Mach das Licht an!", extra: false },
      { inf: "ausmachen", en: "to turn off", type: "Separable", caseGov: "+ Akk.", ich: "mache aus", du: "machst aus", er: "macht aus", wir: "machen aus", ihr: "macht aus", sie: "machen aus", imp: "Mach aus!", prt: "machte aus", ex: "Mach bitte den Drucker aus!", extra: false },
      { inf: "aufräumen", en: "to tidy up", type: "Separable", caseGov: "+ Akk.", ich: "räume auf", du: "räumst auf", er: "räumt auf", wir: "räumen auf", ihr: "räumt auf", sie: "räumen auf", imp: "Räum auf! / Räumt auf!", prt: "räumte auf", ex: "Am Samstag räume ich mein Zimmer auf.", extra: false },
      { inf: "vorbereiten", en: "to prepare", type: "Separable (-e-)", caseGov: "+ Akk.", ich: "bereite vor", du: "bereitest vor", er: "bereitet vor", wir: "bereiten vor", ihr: "bereitet vor", sie: "bereiten vor", imp: "Bereite vor!", prt: "bereitete vor", ex: "Wir bereiten das Fest vor.", extra: false },
      { inf: "ankommen", en: "to arrive", type: "Separable", caseGov: "—", ich: "komme an", du: "kommst an", er: "kommt an", wir: "kommen an", ihr: "kommt an", sie: "kommen an", imp: "Komm gut an!", prt: "kam an", ex: "Der Zug kommt um 14 Uhr an.", extra: false },
      { inf: "abfahren", en: "to depart", type: "Separable + Vowel (a→ä)", caseGov: "—", ich: "fahre ab", du: "fährst ab", er: "fährt ab", wir: "fahren ab", ihr: "fahrt ab", sie: "fahren ab", imp: "Fahr ab!", prt: "fuhr ab", ex: "Wann fährt der Bus ab?", extra: false },
      { inf: "wegwerfen", en: "to throw away", type: "Separable + Vowel (e→i)", caseGov: "+ Akk.", ich: "werfe weg", du: "wirfst weg", er: "wirft weg", wir: "werfen weg", ihr: "werft weg", sie: "werfen weg", imp: "Wirf weg!", prt: "warf weg", ex: "Wirf das Papier nicht weg!", extra: false },
      { inf: "feiern", en: "to celebrate", type: "Regular (-ern)", caseGov: "+ Akk.", ich: "feiere", du: "feierst", er: "feiert", wir: "feiern", ihr: "feiert", sie: "feiern", imp: "Feiere! / Feiert!", prt: "feierte", ex: "Wann wollen wir Sofias Geburtstag feiern?", extra: false },
      { inf: "schenken", en: "to gift / give as a present", type: "Regular", caseGov: "+ Dat. + Akk.", ich: "schenke", du: "schenkst", er: "schenkt", wir: "schenken", ihr: "schenkt", sie: "schenken", imp: "Schenk! / Schenkt!", prt: "schenkte", ex: "Was möchtest du ihr schenken?", extra: false },
      { inf: "bestellen", en: "to order", type: "Regular", caseGov: "+ Akk.", ich: "bestelle", du: "bestellst", er: "bestellt", wir: "bestellen", ihr: "bestellt", sie: "bestellen", imp: "Bestell! / Bestellen Sie!", prt: "bestellte", ex: "Was bestellen Jan und Leela?", extra: false },
      { inf: "zahlen", en: "to pay", type: "Regular", caseGov: "+ Akk.", ich: "zahle", du: "zahlst", er: "zahlt", wir: "zahlen", ihr: "zahlt", sie: "zahlen", imp: "Zahl! / Zahlen Sie!", prt: "zahlte", ex: "Entschuldigung, können wir bitte zahlen?", extra: false },
      // Extra Verbs
      { inf: "gratulieren", en: "to congratulate", type: "Regular", caseGov: "+ Dat.", ich: "gratuliere", du: "gratulierst", er: "gratuliert", wir: "gratulieren", ihr: "gratuliert", sie: "gratulieren", imp: "Gratulier!", prt: "gratulierte", ex: "Ich gratuliere dir zum Geburtstag!", extra: true },
      { inf: "reservieren", en: "to reserve / book", type: "Regular", caseGov: "+ Akk.", ich: "reserviere", du: "reservierst", er: "reserviert", wir: "reservieren", ihr: "reserviert", sie: "reservieren", imp: "Reservieren Sie!", prt: "reservierte", ex: "Wir reservieren einen Tisch für vier Personen.", extra: true },
      { inf: "empfehlen", en: "to recommend", type: "Vowel Change (e→ie)", caseGov: "+ Dat. + Akk.", ich: "empfehle", du: "empfiehlst", er: "empfiehlt", wir: "empfehlen", ihr: "empfehlt", sie: "empfehlen", imp: "Empfiehl! / Empfehlen Sie!", prt: "empfahl", ex: "Was können Sie empfehlen?", extra: true },
      { inf: "veröffentlichen", en: "to release / publish", type: "Regular", caseGov: "+ Akk.", ich: "veröffentliche", du: "veröffentlichst", er: "veröffentlicht", wir: "veröffentlichen", ihr: "veröffentlicht", sie: "veröffentlichen", imp: "Veröffentlichen Sie!", prt: "veröffentlichte", ex: "Am Dienstag veröffentlichen wir das Update.", extra: true },
      { inf: "präsentieren", en: "to present / demo", type: "Regular", caseGov: "+ Dat. + Akk.", ich: "präsentiere", du: "präsentierst", er: "präsentiert", wir: "präsentieren", ihr: "präsentiert", sie: "präsentieren", imp: "Präsentier! / Präsentieren Sie!", prt: "präsentierte", ex: "Im Review präsentiere ich die neue Funktion.", extra: true },
      { inf: "teilnehmen", en: "to participate / attend", type: "Separable + Vowel (e→i)", caseGov: "an + Dat.", ich: "nehme teil", du: "nimmst teil", er: "nimmt teil", wir: "nehmen teil", ihr: "nehmt teil", sie: "nehmen teil", imp: "Nimm teil! / Nehmen Sie teil!", prt: "nahm teil", ex: "Alle Entwickler nehmen am Daily teil.", extra: true }
    ],
    expressions: [
      { de: "Zusammen oder getrennt?", en: "Together or separate (bills)?", note: "Waiter asks this when you pay in Germany.", extra: false },
      { de: "Stimmt so! / Machen Sie 18 Euro, bitte.", en: "Keep the change! / Make it €18, please.", note: "How to tip in Germany — say the total you want to pay!", extra: false },
      { de: "Für mich bitte eine Apfelsaftschorle.", en: "For me an apple spritzer, please.", note: "für ALWAYS takes Akkusativ!", extra: false },
      { de: "Ich habe Hunger / Durst. = Ich bin hungrig / durstig.", en: "I am hungry / thirsty.", note: "Both forms are super common.", extra: false },
      { de: "Wann haben Sie Geburtstag? — Ich habe am 5. Mai Geburtstag.", en: "When is your birthday? — On May 5th.", note: "am + Ordinal + -n: am fünften Mai.", extra: false },
      { de: "Heute ist der zweite November.", en: "Today is November 2nd.", note: "Nominativ date uses 'der' + -e ending.", extra: false },
      { de: "Herzlichen Glückwunsch zum Geburtstag! / Alles Gute!", en: "Happy Birthday! / All the best!", note: "Essential birthday wishes.", extra: true },
      { de: "Ich lade dich ein!", en: "It's on me! / I'm treating you!", note: "Literally: I invite you (and pay).", extra: true }
    ],
    grammar: [
      {
        title: "1. Ordinal Numbers & Dates (Ordinalzahlen)",
        badge: "Core",
        explanation: "Write ordinal numbers with a <strong>dot</strong> (<code>1.</code>, <code>5.</code>). From <strong>1. to 19.</strong> add <code>-te</code>; from <strong>20. onward</strong> add <code>-ste</code>. Watch the 4 irregulars: <strong>erste, dritte, siebte, achte</strong>!",
        table: {
          headers: ["Number", "Nominativ (der …)", "With 'am' (am …-n)", "Note"],
          rows: [
            ["1.", "der <strong>erste</strong>", "am <strong>ersten</strong>", "Irregular!"],
            ["2.", "der zweite", "am zweiten", "Regular (-te)"],
            ["3.", "der <strong>dritte</strong>", "am <strong>dritten</strong>", "Irregular!"],
            ["7.", "der <strong>siebte</strong>", "am <strong>siebten</strong>", "Drops -en!"],
            ["8.", "der <strong>achte</strong>", "am <strong>achten</strong>", "Only one 't'!"],
            ["15.", "der fünfzehnte", "am fünfzehnten", "Regular (-te)"],
            ["20.", "der zwanzig<strong>ste</strong>", "am zwanzig<strong>sten</strong>", "20+ adds -ste!"],
            ["31.", "der einunddreißig<strong>ste</strong>", "am einunddreißig<strong>sten</strong>", "Heute ist der 31. Mai / am 31. Mai"]
          ]
        },
        tip: "Question <em>Welcher Tag ist heute?</em> → <strong>Heute ist der fünfte Mai.</strong> Question <em>Wann?</em> → <strong>am fünften Mai</strong> (adds <code>-n</code>!)."
      },
      {
        title: "2. Separable Verbs (Trennbare Verben)",
        badge: "Core",
        explanation: "Prefixes <code>ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, weg-</code> split off and go to the <strong>VERY END</strong> of the sentence! With a <strong>modal verb</strong>, the separable verb stays <strong>together</strong> at the end.",
        table: {
          headers: ["Infinitiv", "Present Tense (Splits!)", "With Modal Verb (Stays Together!)"],
          rows: [
            ["<strong>ein</strong>kaufen", "Ich <strong>kaufe</strong> im Supermarkt <strong>ein</strong>.", "Ich möchte Tomaten <strong>einkaufen</strong>."],
            ["<strong>ein</strong>laden", "Marc und Anne <strong>laden</strong> alle Freunde <strong>ein</strong>.", "Sie wollen Sofia <strong>einladen</strong>."],
            ["<strong>an</strong>fangen", "Der Tag <strong>fängt</strong> um 10 Uhr <strong>an</strong>.", "Das Fest soll um 10 Uhr <strong>anfangen</strong>."],
            ["<strong>ab</strong>holen", "Sie <strong>holen</strong> Sofia zusammen <strong>ab</strong>.", "Sie wollen Sofia <strong>abholen</strong>."]
          ]
        },
        tip: "Watch stem-changing separable verbs: <code>einladen → du lädst … ein</code>, <code>anfangen → es fängt … an</code>, <code>abfahren → er fährt … ab</code>."
      },
      {
        title: "3. Personal Pronouns in Akkusativ & 'für + Akkusativ'",
        badge: "Pronouns",
        explanation: "The preposition <strong>für</strong> ALWAYS triggers Akkusativ! Use Akkusativ pronouns after <em>für</em> and after Akkusativ verbs (<em>einladen, sehen, anrufen, besuchen, treffen</em>).",
        table: {
          headers: ["Nominativ", "Akkusativ", "Example"],
          rows: [
            ["ich / du", "<strong>mich</strong> / <strong>dich</strong>", "Für <strong>mich</strong> eine Cola! Ich lade <strong>dich</strong> ein."],
            ["er / sie / es", "<strong>ihn</strong> / sie / es", "Ich bringe Wasser für <strong>ihn</strong> (den Hund)."],
            ["wir / ihr", "<strong>uns</strong> / <strong>euch</strong>", "Wir möchten <strong>euch</strong> einladen!"],
            ["sie / Sie", "sie / Sie", "Für <strong>Sie</strong> bitte eine Pizza."]
          ]
        },
        tip: "Only <code>ich→mich</code>, <code>du→dich</code>, <code>er→ihn</code>, <code>wir→uns</code>, <code>ihr→euch</code> change!"
      },
      {
        title: "4. Präteritum (Simple Past): 'haben' & 'sein'",
        badge: "Past Tense",
        explanation: "For talking about the past in spoken German, always use Präteritum for <strong>haben</strong> (<code>hatte</code>) and <strong>sein</strong> (<code>war</code>)!",
        table: {
          headers: ["Pronoun", "haben → hatte", "sein → war", "Example"],
          rows: [
            ["ich", "<strong>hatte</strong>", "<strong>war</strong>", "Ich <strong>war</strong> gestern krank. Ich <strong>hatte</strong> viel Arbeit."],
            ["du", "hattest", "warst", "<strong>Hattest</strong> du Zeit? <strong>Warst</strong> du zu Hause?"],
            ["er / sie / es", "<strong>hatte</strong>", "<strong>war</strong>", "Das Wetter <strong>war</strong> schön. Der Hund <strong>hatte</strong> Durst."],
            ["wir / sie / Sie", "hatten", "waren", "Wir <strong>waren</strong> im Restaurant und <strong>hatten</strong> viel Spaß."],
            ["ihr", "hattet", "wart", "<strong>Wart</strong> ihr im Kino?"]
          ]
        },
        tip: "Notice the pattern: <strong>ich</strong> and <strong>er/sie/es</strong> are ALWAYS identical in Präteritum (no ending)!"
      }
    ]
  }
);
