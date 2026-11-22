// Quick Grammar Cheat-Sheet Drawer Data & Case Quiz Grammar Spotlight Bank
window.A1_GRAMMAR_CHEATSHEET = [
  {
    id: "articles",
    label: "Articles",
    icon: "🎨",
    title: "Articles: Nominativ · Akkusativ · Dativ",
    summary: "Only Maskulin changes in Akkusativ (der → den). Every gender changes in Dativ — remember <strong>M-R-M-N</strong> (dem, der, dem, den + -n).",
    tables: [
      {
        caption: "Definite (the) & Indefinite (a / no)",
        headers: ["Case", "<span class='art-der'>Mask.</span>", "<span class='art-das'>Neut.</span>", "<span class='art-die'>Fem.</span>", "<span class='g-p'>Plural</span>"],
        rows: [
          ["<strong>Nom</strong><br><small>Subject</small>", "<strong>der</strong> / ein", "<strong>das</strong> / ein", "<strong>die</strong> / eine", "<strong>die</strong> / keine"],
          ["<strong>Akk</strong><br><small>Direct Obj.</small>", "<strong class='hl-change'>den / einen</strong>", "das / ein", "die / eine", "die / keine"],
          ["<strong>Dat</strong><br><small>Indirect / Prep.</small>", "<strong class='hl-dat'>dem / einem</strong>", "<strong class='hl-dat'>dem / einem</strong>", "<strong class='hl-dat'>der / einer</strong>", "<strong class='hl-dat'>den (+ -n!)</strong>"]
        ]
      },
      {
        caption: "Possessive Endings (mein-, dein-, sein-, ihr-, unser-, euer-, Ihr-)",
        headers: ["Case", "Mask.", "Neut.", "Fem.", "Plural"],
        rows: [
          ["<strong>Nom</strong>", "mein", "mein", "mein<strong>e</strong>", "mein<strong>e</strong>"],
          ["<strong>Akk</strong>", "mein<strong>en</strong>", "mein", "mein<strong>e</strong>", "mein<strong>e</strong>"],
          ["<strong>Dat</strong>", "mein<strong>em</strong>", "mein<strong>em</strong>", "mein<strong>er</strong>", "mein<strong>en</strong> (+ -n)"]
        ]
      }
    ],
    examples: [
      { de: "Der Lehrer erklärt dem Studenten den Text.", en: "The teacher (Nom) explains the text (Akk) to the student (Dat)." },
      { de: "Ich fahre mit den Freunden in die Stadt.", en: "I travel with the friends (Dat Pl. + -n) into the city (Akk)." }
    ],
    tip: "Dativ Plural adds <strong>-n</strong> to the noun unless the plural already ends in <code>-n</code> or <code>-s</code> (<em>mit den Kindern, mit den Autos</em>)."
  },
  {
    id: "pronouns",
    label: "Pronouns",
    icon: "👤",
    title: "Personal Pronouns (Nom · Akk · Dat)",
    summary: "Match the pronoun case to the verb or preposition. Watch 3rd person: <strong>ihn/ihm</strong> (masc), <strong>sie/ihr</strong> (fem), <strong>es/ihm</strong> (neut).",
    tables: [
      {
        caption: "Complete Pronoun Table",
        headers: ["Nominativ", "Akkusativ (Wen/Was?)", "Dativ (Wem?)"],
        rows: [
          ["<strong>ich</strong>", "mich", "<strong>mir</strong>"],
          ["<strong>du</strong>", "dich", "<strong>dir</strong>"],
          ["<strong>er</strong> (der)", "<strong class='hl-change'>ihn</strong>", "<strong class='hl-dat'>ihm</strong>"],
          ["<strong>sie</strong> (die)", "sie", "<strong class='hl-dat'>ihr</strong>"],
          ["<strong>es</strong> (das)", "es", "<strong class='hl-dat'>ihm</strong>"],
          ["<strong>wir</strong>", "uns", "uns"],
          ["<strong>ihr</strong>", "euch", "euch"],
          ["<strong>sie / Sie</strong>", "sie / Sie", "<strong class='hl-dat'>ihnen / Ihnen</strong>"]
        ]
      }
    ],
    examples: [
      { de: "Können Sie mir bitte helfen?", en: "Can you help me (Dat), please?" },
      { de: "Ich danke Ihnen für Ihre Hilfe!", en: "I thank you (Dat formal) for your help!" },
      { de: "Kennst du den Film? Ja, ich finde ihn super.", en: "Do you know the film? Yes, I find it (Akk masc) great." }
    ],
    tip: "High-frequency A1 Dativ verbs: <code>helfen, danken, antworten, gefallen, gehören, passen, schmecken, wehtun</code>."
  },
  {
    id: "modals",
    label: "Modals",
    icon: "⚙️",
    title: "Modal Verbs & Sentence Bracket",
    summary: "<strong>ich</strong> and <strong>er/sie/es</strong> are ALWAYS identical (no <code>-e</code> or <code>-t</code> ending!). The second verb goes to the <strong>very end</strong> as an infinitive.",
    tables: [
      {
        caption: "Present Tense Conjugation Matrix",
        headers: ["Pronoun", "können<br><small>can</small>", "müssen<br><small>must</small>", "wollen<br><small>want</small>", "sollen<br><small>should</small>", "dürfen<br><small>may</small>"],
        rows: [
          ["<strong>ich / er,sie,es</strong>", "<strong>kann</strong>", "<strong>muss</strong>", "<strong>will</strong>", "<strong>soll</strong>", "<strong>darf</strong>"],
          ["<strong>du</strong>", "kannst", "musst", "willst", "sollst", "darfst"],
          ["<strong>wir / sie,Sie</strong>", "können", "müssen", "wollen", "sollen", "dürfen"],
          ["<strong>ihr</strong>", "könnt", "müsst", "wollt", "sollt", "dürft"]
        ]
      }
    ],
    examples: [
      { de: "Ich muss heute bis 18 Uhr arbeiten.", en: "I have to work until 6 PM today." },
      { de: "Hier dürfen Sie nicht rauchen.", en: "You are not allowed to smoke here." },
      { de: "Der Arzt sagt, ich soll viel Tee trinken.", en: "The doctor says I should drink lots of tea." }
    ],
    tip: "Politeness ladder: <em>Ich will</em> (blunt) → <em>Ich möchte</em> (polite) → <em>Ich hätte gern</em> (very polite)."
  },
  {
    id: "prepositions",
    label: "Prepositions",
    icon: "📍",
    title: "Key A1 Prepositions & Contractions",
    summary: "<code>mit, zu, bei, aus, von</code> ALWAYS take <strong>Dativ</strong>. <code>in</code> switches: <strong>Wo?</strong> (location) = Dativ · <strong>Wohin?</strong> (direction) = Akkusativ.",
    tables: [
      {
        caption: "Location & Direction (Dativ vs. Wechselpräposition)",
        headers: ["Prep.", "Case / Q", "Contractions", "Usage"],
        rows: [
          ["<strong>mit</strong>", "Dativ", "—", "mit dem Bus, mit meiner Freundin"],
          ["<strong>zu</strong>", "Dativ · Wohin?", "<strong>zum, zur</strong>", "zum Arzt, zur Bank, zu Hause (at home)"],
          ["<strong>bei</strong>", "Dativ · Wo?", "<strong>beim</strong>", "beim Arzt, bei Siemens, beim Essen"],
          ["<strong>aus</strong>", "Dativ · Woher?", "—", "aus Ägypten, aus dem Büro, aus Holz"],
          ["<strong>von</strong>", "Dativ · Woher?", "<strong>vom</strong>", "vom Arzt, vom Bahnhof, von meinem Freund"],
          ["<strong>in</strong>", "Wo? Dat.<br>Wohin? Akk.", "<strong>im</strong> (in+dem)<br><strong>ins</strong> (in+das)", "im Kino (in) vs. ins Kino (into)"]
        ]
      },
      {
        caption: "Temporal Quick-Ref",
        headers: ["Prep.", "Used With", "Examples"],
        rows: [
          ["<strong>um</strong>", "Clock times", "um 8 Uhr, um halb sieben"],
          ["<strong>am</strong>", "Days, parts of day, weekend", "am Montag, am Abend, am Wochenende"],
          ["<strong>im</strong>", "Months, seasons", "im Januar, im Sommer"],
          ["<strong>in der</strong>", "Night (exception!)", "in der Nacht (adverb: nachts)"]
        ]
      }
    ],
    examples: [
      { de: "Ich gehe zum Arzt, bin beim Arzt und komme vom Arzt.", en: "I go to the doctor, am at the doctor's, and come from the doctor." },
      { de: "Am Freitag gehen wir ins Kino.", en: "On Friday we are going to the cinema." }
    ],
    tip: "Remember the Doctor Trio: <strong>zum</strong> (going to) → <strong>beim</strong> (at) → <strong>vom</strong> (coming from)."
  },
  {
    id: "separable",
    label: "Separable",
    icon: "✂️",
    title: "Separable & Inseparable Verb Prefixes",
    summary: "Separable prefixes split off in main clauses and jump to the <strong>very end</strong>. With a modal verb, they stay glued together at the end!",
    tables: [
      {
        caption: "Prefix Split Rules",
        headers: ["Type", "Common Prefixes", "Conjugated Example"],
        rows: [
          ["<strong>Separable</strong><br><small>(stressed)</small>", "<code>ab-, an-, auf-, aus-, ein-, fern-, hoch-, mit-, nach-, vor-, weg-, zu-, zurück-</code>", "aufstehen → Ich <strong>stehe</strong> um 7 Uhr <strong>auf</strong>."],
          ["<strong>With Modal</strong><br><small>(reunited!)</small>", "Modal (Pos 2) + full Infinitiv (End)", "Ich <strong>muss</strong> um 7 Uhr <strong>aufstehen</strong>."],
          ["<strong>Inseparable</strong><br><small>(never split)</small>", "<code>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</code>", "besuchen → Ich <strong>besuche</strong> meine Oma."]
        ]
      }
    ],
    examples: [
      { de: "Zuerst fährt er den Computer hoch.", en: "First he boots up the computer." },
      { de: "Ich rufe dich heute Abend an.", en: "I will call you this evening." },
      { de: "Kannst du bitte das Passwort eingeben?", en: "Can you please enter the password?" }
    ],
    tip: "Quick audio clue: if you stress the prefix when saying the infinitive (<strong>AUF</strong>stehen, <strong>EIN</strong>kaufen), it splits!"
  }
];

window.A1_GRAMMAR_CLOZE_BANK = [
  { chId: 2, tag: "Temporal Prep.", prompt: "______ Montag arbeite ich im Büro.", en: "On Monday I work in the office.", answer: "Am", options: ["Am", "Um", "Im", "Zu"], rule: "Days of the week always use <strong>am</strong> (an + dem)." },
  { chId: 2, tag: "Wohin? (Akk.)", prompt: "Gehen wir am Freitag ______ Kino?", en: "Shall we go to the cinema on Friday?", answer: "ins", options: ["ins", "im", "zum", "am"], rule: "<code>in + das</code> (Wohin? direction) contracts to <strong>ins</strong>." },
  { chId: 3, tag: "Akkusativ", prompt: "Ich suche ______ Bahnhof.", en: "I am looking for the train station (der Bahnhof).", answer: "den", options: ["den", "der", "dem", "das"], rule: "<em>suchen</em> takes Akkusativ; masculine <code>der</code> → <strong>den</strong>." },
  { chId: 4, tag: "Negation", prompt: "Ich trinke ______ Kaffee, ich trinke Tee.", en: "I don't drink coffee, I drink tea.", answer: "keinen", options: ["keinen", "kein", "keine", "nicht"], rule: "Nouns are negated with <code>kein-</code>; <em>der Kaffee</em> in Akkusativ → <strong>keinen</strong>." },
  { chId: 5, tag: "Temporal Prep.", prompt: "Der Kurs beginnt ______ 9 Uhr.", en: "The course starts at 9 o'clock.", answer: "um", options: ["um", "am", "im", "in"], rule: "Clock times always take <strong>um</strong>." },
  { chId: 5, tag: "Temporal Exception", prompt: "______ Nacht schlafe ich acht Stunden.", en: "At night I sleep eight hours.", answer: "In der", options: ["In der", "Am", "Im", "Um die"], rule: "<em>die Nacht</em> is the famous exception: <strong>in der Nacht</strong> (not <em>am</em>!)." },
  { chId: 5, tag: "Modal Bracket", prompt: "Ich muss morgen früh ______.", en: "I have to get up early tomorrow.", answer: "aufstehen", options: ["aufstehen", "stehe auf", "aufstehe", "stehen auf"], rule: "With a modal verb, separable verbs reunite as an infinitive at the end: <strong>aufstehen</strong>." },
  { chId: 6, tag: "Separable Verb", prompt: "Ich kaufe im Supermarkt ______.", en: "I shop at the supermarket (einkaufen).", answer: "ein", options: ["ein", "an", "auf", "aus"], rule: "<em>einkaufen</em> splits in main clauses: stem in Pos 2, prefix <strong>ein</strong> at the end." },
  { chId: 7, tag: "Dativ Contraction", prompt: "Julia geht heute ______ Arzt.", en: "Julia is going to the doctor today.", answer: "zum", options: ["zum", "zur", "beim", "vom"], rule: "<em>Wohin?</em> (to a person/place) uses <code>zu + dem</code> → <strong>zum</strong>." },
  { chId: 7, tag: "Dativ Contraction", prompt: "Tom ist gerade ______ Arzt.", en: "Tom is currently at the doctor's.", answer: "beim", options: ["beim", "zum", "vom", "ins"], rule: "<em>Wo?</em> (at a person's place) uses <code>bei + dem</code> → <strong>beim</strong>." },
  { chId: 7, tag: "Dativ Contraction", prompt: "Sie geht schnell ______ Bank.", en: "She is quickly going to the bank (die Bank).", answer: "zur", options: ["zur", "zum", "in die", "beim"], rule: "<code>zu + der</code> (feminine Dativ) contracts to <strong>zur</strong>." },
  { chId: 7, tag: "Dativ Plural", prompt: "Laura feiert mit den ______.", en: "Laura celebrates with the employees (die Mitarbeiter).", answer: "Mitarbeitern", options: ["Mitarbeitern", "Mitarbeiter", "Mitarbeiters", "Mitarbeitere"], rule: "Dativ Plural adds <strong>-n</strong> to the noun: <em>mit den Mitarbeitern</em>." },
  { chId: 7, tag: "Negative Question", prompt: "Haben Sie keinen Zucker? — ______! Hier steht er.", en: "Don't you have sugar? — Yes we do! Here it is.", answer: "Doch", options: ["Doch", "Ja", "Nein", "Aber"], rule: "Use <strong>Doch!</strong> to say YES to a negative question." },
  { chId: 8, tag: "Dativ Verb", prompt: "Können Sie ______ bitte helfen?", en: "Can you please help me?", answer: "mir", options: ["mir", "mich", "ich", "mein"], rule: "<em>helfen</em> always governs <strong>Dativ</strong>: <em>ich → mir</em>." },
  { chId: 8, tag: "Modal Verb", prompt: "Bei Fieber ______ Sie im Bett bleiben.", en: "With a fever you should stay in bed.", answer: "sollen", options: ["sollen", "sollt", "soll", "sollst"], rule: "Formal <code>Sie</code> uses the infinitive form: <strong>Sie sollen</strong>." }
];
