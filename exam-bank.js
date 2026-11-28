// =============================================================================
// German A1 Study Hub — Per-Kapitel Curated Grammar Exam Bank (Kapitel 2–9)
// 96 targeted exam questions (12 per chapter) aligned to every DMA A1 grammar rule.
// =============================================================================

window.A1_GRAMMAR_EXAM_BANK = [
  // ===========================================================================
  // KAPITEL 2 — Hobbys, Berufe & Wochentage
  // Rules: Verb conjugation (Präsens) & vowel changes (e→i/ie, a→ä),
  //        Statements / Yes-No / W-Questions, Professions (Fem/Pl), Numbers & Years, am/im/ins
  // ===========================================================================
  {
    chId: 2,
    topic: "Vowel-Change Verbs",
    prompt: "Er ______ sehr gern historische Romane.",
    en: "He likes reading historical novels very much. (lesen)",
    answer: "liest",
    options: ["liest", "lest", "lesst", "lese"],
    rule: "<em>lesen</em> has an <strong>e → ie</strong> vowel change in <code>du/er/sie/es</code>: <strong>er liest</strong>."
  },
  {
    chId: 2,
    topic: "Vowel-Change Verbs",
    prompt: "______ du am Wochenende mit dem Fahrrad?",
    en: "Do you ride your bike on the weekend? (fahren)",
    answer: "Fährst",
    options: ["Fährst", "Fahrst", "Fährt", "Fahren"],
    rule: "<em>fahren</em> changes <strong>a → ä</strong> in <code>du</code> and <code>er/sie/es</code>: <strong>du fährst</strong>."
  },
  {
    chId: 2,
    topic: "Vowel-Change Verbs",
    prompt: "Meine Kollegin ______ fließend Deutsch und Englisch.",
    en: "My colleague speaks fluent German and English. (sprechen)",
    answer: "spricht",
    options: ["spricht", "sprecht", "sprichst", "spreche"],
    rule: "<em>sprechen</em> changes <strong>e → i</strong> in <code>du/er/sie/es</code>: <strong>sie spricht</strong>."
  },
  {
    chId: 2,
    topic: "Verb Conjugation (-t/-d stem)",
    prompt: "Tom ______ als Softwareentwickler in Berlin.",
    en: "Tom works as a software developer in Berlin. (arbeiten)",
    answer: "arbeitet",
    options: ["arbeitet", "arbeitt", "arbeitst", "arbeite"],
    rule: "Verbs whose stem ends in <code>-t</code> or <code>-d</code> insert an extra <strong>-e-</strong> before <code>-t/-st</code>: <strong>er arbeitet</strong>."
  },
  {
    chId: 2,
    topic: "Verb Conjugation (ihr)",
    prompt: "Was ______ ihr am Sonntag?",
    en: "What are you (all) doing on Sunday? (machen)",
    answer: "macht",
    options: ["macht", "machen", "machst", "mache"],
    rule: "The <code>ihr</code> (you plural) ending is always <strong>-t</strong>: <strong>ihr macht</strong>."
  },
  {
    chId: 2,
    topic: "W-Questions",
    prompt: "______ bist du von Beruf?",
    en: "What is your profession?",
    answer: "Was",
    options: ["Was", "Wer", "Wo", "Wie"],
    rule: "To ask about someone's job, German uses <strong>Was</strong> (<em>Was bist du / sind Sie von Beruf?</em>)."
  },
  {
    chId: 2,
    topic: "Yes/No Question Word Order",
    prompt: "______ Sie gern ins Kino?",
    en: "Do you (formal) like going to the cinema?",
    answer: "Gehen",
    options: ["Gehen", "Geht", "Gehst", "Gehe"],
    rule: "In Yes/No questions, the conjugated verb stands in <strong>Position 1</strong>. Formal <code>Sie</code> uses the infinitive: <strong>Gehen Sie...?</strong>"
  },
  {
    chId: 2,
    topic: "Professions (Feminine)",
    prompt: "Anna arbeitet im Krankenhaus. Sie ist ______.",
    en: "Anna works in the hospital. She is a doctor. (der Arzt)",
    answer: "Ärztin",
    options: ["Ärztin", "Arztin", "Arzt", "Ärzte"],
    rule: "Feminine professions add <strong>-in</strong> and short <em>a/o/u</em> stems often take an umlaut: <em>der Arzt</em> → <strong>die Ärztin</strong>."
  },
  {
    chId: 2,
    topic: "Professions (Plural)",
    prompt: "Sara und Lena arbeiten in der Schule. Sie sind ______.",
    en: "Sara and Lena work at school. They are female teachers. (die Lehrerin)",
    answer: "Lehrerinnen",
    options: ["Lehrerinnen", "Lehrerinen", "Lehrerin", "Lehrers"],
    rule: "Feminine nouns ending in <code>-in</code> always form the plural with <strong>-innen</strong> (double <em>n</em>): <strong>Lehrerinnen</strong>."
  },
  {
    chId: 2,
    topic: "Temporal Preposition (Days)",
    prompt: "______ Montag habe ich einen Deutschkurs.",
    en: "On Monday I have a German class.",
    answer: "Am",
    options: ["Am", "Um", "Im", "Zu"],
    rule: "Days of the week and weekends always use <strong>am</strong> (<em>an + dem</em>): <strong>am Montag</strong>."
  },
  {
    chId: 2,
    topic: "Direction (ins Kino)",
    prompt: "Am Freitag gehen wir zusammen ______ Kino.",
    en: "On Friday we are going to the cinema together.",
    answer: "ins",
    options: ["ins", "im", "am", "zum"],
    rule: "<em>Wohin?</em> (movement into) with neutral <em>das Kino</em> uses <code>in + das</code> → <strong>ins Kino</strong>."
  },
  {
    chId: 2,
    topic: "Years in German",
    prompt: "Ich bin im Jahr 1996 geboren. Man spricht 1996: ______.",
    en: "How is the year 1996 spoken in German?",
    answer: "neunzehnhundertsechsundneunzig",
    options: [
      "neunzehnhundertsechsundneunzig",
      "eintausendneunhundertsechsundneunzig",
      "neunzehnhundertneunundsechzig",
      "neunzigtausendsechsundneunzig"
    ],
    rule: "Years up to 1999 are read in hundreds (<em>neunzehnhundert-</em>), and ones come before tens (<em>sechsundneunzig</em>)."
  },

  // ===========================================================================
  // KAPITEL 3 — In der Stadt, Jahreszeiten & Wege
  // Rules: Definite/Indefinite/Negation articles (Nominativ), Imperativ with 'Sie',
  //        Seasons (im Frühling/Sommer/...), Directions, Long vs. Short Vowels
  // ===========================================================================
  {
    chId: 3,
    topic: "Definite Article (Nominativ)",
    prompt: "Entschuldigung, wo ist ______ Bahnhof?",
    en: "Excuse me, where is the train station?",
    answer: "der",
    options: ["der", "das", "die", "den"],
    rule: "After <em>sein</em> (<em>wo ist...</em>), the noun stays in <strong>Nominativ</strong>: <strong>der Bahnhof</strong>."
  },
  {
    chId: 3,
    topic: "Indefinite Article (Nominativ)",
    prompt: "Hier gibt es keinen Park, aber dort ist ______ Kirche.",
    en: "There is no park here, but over there is a church. (die Kirche)",
    answer: "eine",
    options: ["eine", "ein", "einen", "einer"],
    rule: "Feminine nouns (<em>die Kirche</em>) take <strong>eine</strong> in Nominativ."
  },
  {
    chId: 3,
    topic: "Negation (kein- in Nominativ)",
    prompt: "Ist das ein Museum? — Nein, das ist ______ Museum.",
    en: "Is that a museum? — No, that is not a museum. (das Museum)",
    answer: "kein",
    options: ["kein", "keine", "keinen", "nicht"],
    rule: "Neutral <em>das Museum</em> in Nominativ is negated with <strong>kein</strong> (no ending)."
  },
  {
    chId: 3,
    topic: "Negation (Plural Nominativ)",
    prompt: "Hier fahren ______ Busse am Sonntag.",
    en: "No buses run here on Sunday. (die Busse)",
    answer: "keine",
    options: ["keine", "kein", "keinen", "nicht"],
    rule: "Plural nouns have no indefinite article (<em>ein</em>), so their negation is always <strong>keine</strong> in Nominativ."
  },
  {
    chId: 3,
    topic: "Imperativ (Sie-Form)",
    prompt: "______ Sie bitte zuerst geradeaus und dann links!",
    en: "Please go straight ahead first and then left! (gehen)",
    answer: "Gehen",
    options: ["Gehen", "Geht", "Geh", "Gehst"],
    rule: "Polite <strong>Sie-Imperativ</strong> puts the infinitive verb in Position 1 followed by <strong>Sie</strong>: <strong>Gehen Sie...</strong>"
  },
  {
    chId: 3,
    topic: "Imperativ (sein — Exception)",
    prompt: "______ Sie bitte vorsichtig im Verkehr!",
    en: "Please be careful in traffic! (sein)",
    answer: "Seien",
    options: ["Seien", "Sind", "Seid", "Sei"],
    rule: "<em>sein</em> has an irregular formal Imperativ: <strong>Seien Sie!</strong> (not <em>Sind Sie</em>)."
  },
  {
    chId: 3,
    topic: "Seasons (Temporal Prep.)",
    prompt: "______ Sommer fahren viele Menschen ans Meer.",
    en: "In summer many people travel to the sea.",
    answer: "Im",
    options: ["Im", "Am", "Um", "Ins"],
    rule: "All seasons and months use <strong>im</strong> (<em>in + dem</em>): <em>im Frühling, im Sommer, im Herbst, im Winter</em>."
  },
  {
    chId: 3,
    topic: "Transport (mit + Dativ)",
    prompt: "Ich fahre jeden Morgen mit ______ U-Bahn zur Arbeit.",
    en: "Every morning I go to work by subway. (die U-Bahn)",
    answer: "der",
    options: ["der", "die", "dem", "den"],
    rule: "<code>mit</code> always takes <strong>Dativ</strong>. Feminine <em>die U-Bahn</em> → <strong>mit der U-Bahn</strong>."
  },
  {
    chId: 3,
    topic: "Transport (mit + Dativ)",
    prompt: "Fährst du mit ______ Zug nach München?",
    en: "Are you going to Munich by train? (der Zug)",
    answer: "dem",
    options: ["dem", "den", "der", "das"],
    rule: "<code>mit</code> takes <strong>Dativ</strong>. Masculine <em>der Zug</em> → <strong>mit dem Zug</strong>."
  },
  {
    chId: 3,
    topic: "Akkusativ after suchen",
    prompt: "Entschuldigung, ich suche ______ Flughafen.",
    en: "Excuse me, I am looking for the airport. (der Flughafen)",
    answer: "den",
    options: ["den", "der", "dem", "das"],
    rule: "<em>suchen</em> requires <strong>Akkusativ</strong>. Masculine <em>der</em> changes to <strong>den</strong>."
  },
  {
    chId: 3,
    topic: "Negation: nicht vs. kein",
    prompt: "Der Bahnhof ist ______ weit von hier.",
    en: "The train station is not far from here.",
    answer: "nicht",
    options: ["nicht", "kein", "keine", "keinen"],
    rule: "Adjectives (like <em>weit</em>) and verbs are negated with <strong>nicht</strong>, never <em>kein</em>."
  },
  {
    chId: 3,
    topic: "Phonetik (Long vs. Short Vowel)",
    prompt: "Welches Wort hat einen <strong>langen</strong> Vokal?",
    en: "Which word has a LONG vowel according to German spelling rules?",
    answer: "die Bahn (Dehnungs-h)",
    options: [
      "die Bahn (Dehnungs-h)",
      "die Stadt (dt)",
      "der Bus (kurzes u)",
      "der Sommer (mm)"
    ],
    rule: "A silent <strong>h</strong> (<em>Bahn, fahren</em>), double vowel (<em>Boot</em>), or <strong>ie</strong> makes the vowel <strong>long</strong>; double consonants (<em>mm, tt</em>) make it short."
  },

  // ===========================================================================
  // KAPITEL 4 — Guten Appetit! Essen & Einkaufen
  // Rules: Der Akkusativ (Direct Object), 'möchten' & 'essen' (e→i),
  //        Negation keinen/kein/keine in Akkusativ, Prices & Quantities
  // ===========================================================================
  {
    chId: 4,
    topic: "Akkusativ (Masculine)",
    prompt: "Ich nehme ______ Apfel und eine Banane.",
    en: "I'll take an apple and a banana. (der Apfel)",
    answer: "einen",
    options: ["einen", "ein", "eine", "einem"],
    rule: "<em>nehmen</em> takes <strong>Akkusativ</strong>. Masculine <em>ein</em> becomes <strong>einen</strong>."
  },
  {
    chId: 4,
    topic: "Akkusativ (Neutral)",
    prompt: "Zum Frühstück esse ich gern ______ Brötchen mit Käse.",
    en: "For breakfast I like eating a bread roll with cheese. (das Brötchen)",
    answer: "ein",
    options: ["ein", "einen", "eine", "einem"],
    rule: "Neutral nouns (<em>das Brötchen</em>) do <strong>not</strong> change in Akkusativ: <strong>ein Brötchen</strong>."
  },
  {
    chId: 4,
    topic: "Akkusativ (Negation Masc.)",
    prompt: "Ich trinke ______ Kaffee, ich trinke lieber Tee.",
    en: "I don't drink coffee, I prefer drinking tea. (der Kaffee)",
    answer: "keinen",
    options: ["keinen", "kein", "keine", "nicht"],
    rule: "<em>trinken</em> takes Akkusativ; masculine <em>der Kaffee</em> negated → <strong>keinen Kaffee</strong>."
  },
  {
    chId: 4,
    topic: "Akkusativ (Negation Fem.)",
    prompt: "Wir haben leider ______ Milch mehr im Kühlschrank.",
    en: "Unfortunately we have no milk left in the fridge. (die Milch)",
    answer: "keine",
    options: ["keine", "kein", "keinen", "nicht"],
    rule: "Feminine <em>die Milch</em> in Akkusativ is negated with <strong>keine</strong>."
  },
  {
    chId: 4,
    topic: "Verb 'essen' (e → i)",
    prompt: "Was ______ du gern zum Mittagessen?",
    en: "What do you like to eat for lunch? (essen)",
    answer: "isst",
    options: ["isst", "esst", "essst", "esse"],
    rule: "<em>essen</em> changes <strong>e → i</strong> in <code>du/er/sie/es</code> (and drops one <em>s</em> in <code>du</code>): <strong>du isst</strong> / <strong>er isst</strong>."
  },
  {
    chId: 4,
    topic: "Verb 'nehmen' (e → i + mm)",
    prompt: "Er ______ ein Stück Kuchen und einen Tee.",
    en: "He takes a piece of cake and a tea. (nehmen)",
    answer: "nimmt",
    options: ["nimmt", "nehmt", "nehmmt", "nimmst"],
    rule: "<em>nehmen</em> is a key irregular vowel-change verb: <code>er/sie/es</code> → <strong>nimmt</strong> (<em>du nimmst</em>)."
  },
  {
    chId: 4,
    topic: "Polite 'möchten' Conjugation",
    prompt: "Ich ______ gern ein Kilo Tomaten, bitte.",
    en: "I would like a kilo of tomatoes, please.",
    answer: "möchte",
    options: ["möchte", "möchtest", "möchtet", "möchten"],
    rule: "<em>möchten</em> has no <code>-t</code> in <code>er/sie/es</code> and ends in <strong>-e</strong> for both <code>ich</code> and <code>er/sie/es</code>: <strong>ich möchte</strong>."
  },
  {
    chId: 4,
    topic: "Polite 'möchten' (er/sie/es)",
    prompt: "Meine Schwester ______ keinen Fisch essen.",
    en: "My sister does not want to eat fish.",
    answer: "möchte",
    options: ["möchte", "möchtet", "möchten", "möchtest"],
    rule: "Just like <code>ich</code>, <code>er/sie/es</code> takes <strong>möchte</strong> (never <em>möchtet</em>!)."
  },
  {
    chId: 4,
    topic: "Plural without Article (Mass/Count)",
    prompt: "Ich kaufe ______ Äpfel und ______ Orangen.",
    en: "I'm buying apples and oranges (no article for plural indefinite).",
    answer: "— / — (kein Artikel)",
    options: ["— / — (kein Artikel)", "ein / eine", "einen / eine", "einen / einen"],
    rule: "German has <strong>no indefinite article in the plural</strong>: <em>Ich kaufe Äpfel</em> (never <em>eine Äpfel</em>)."
  },
  {
    chId: 4,
    topic: "Quantities & Containers",
    prompt: "Ich hätte gern eine ______ Mineralwasser.",
    en: "I would like a bottle of mineral water.",
    answer: "Flasche",
    options: ["Flasche", "Kilo", "Packung", "Stück"],
    rule: "<em>eine Flasche</em> (feminine) fits liquids like water/wine; <em>Kilo</em> and <em>Stück</em> are neuter (<em>ein Kilo / ein Stück</em>)."
  },
  {
    chId: 4,
    topic: "Saying Prices",
    prompt: "Das Brot kostet 2,49 €. Man sagt: „______“",
    en: "How do you say 2,49 € naturally in German?",
    answer: "zwei Euro neunundvierzig",
    options: [
      "zwei Euro neunundvierzig",
      "zwei Komma vier neun Euro",
      "zwei Euro vierundneunzig",
      "zweihundertneunundvierzig Euro"
    ],
    rule: "In German prices, say <strong>[Euro] Euro [Cents]</strong> (ones before tens: <em>neunundvierzig</em>), omitting the word <em>Cent</em>."
  },
  {
    chId: 4,
    topic: "es gibt + Akkusativ",
    prompt: "In der Kantine gibt es heute ______ Salat.",
    en: "In the cafeteria today there is a fresh salad. (der Salat)",
    answer: "einen",
    options: ["einen", "ein", "eine", "einem"],
    rule: "<code>es gibt</code> ALWAYS requires <strong>Akkusativ</strong>: masculine <em>der Salat</em> → <strong>einen Salat</strong>."
  },

  // ===========================================================================
  // KAPITEL 5 — Alltag, Uhrzeit & Familie
  // Rules: Verb Position 2 (Inversion), Telling Time (formal/informal),
  //        Temporal Prepositions (um/am/im/in der/von...bis), Possessive Articles (Nom/Akk),
  //        Modal Verbs & Satzklammer
  // ===========================================================================
  {
    chId: 5,
    topic: "Verb Position 2 (Inversion)",
    prompt: "Am Morgen ______ ich zuerst einen Kaffee.",
    en: "In the morning I drink a coffee first.",
    answer: "trinke",
    options: ["trinke", "ich trinke", "trinkst", "trinken"],
    rule: "When time (<em>Am Morgen</em>) takes Position 1, the conjugated verb MUST stay in <strong>Position 2</strong>, pushing the subject to Position 3."
  },
  {
    chId: 5,
    topic: "Telling Time (halb)",
    prompt: "Es ist 7:30 Uhr. Informell sagt man: „Es ist ______.“",
    en: "It is 7:30. How do you say this informally in German?",
    answer: "halb acht",
    options: ["halb acht", "halb sieben", "Viertel nach sieben", "sieben Uhr halb"],
    rule: "German <strong>halb</strong> looks forward to the <em>next</em> hour: 7:30 = <strong>halb acht</strong> (halfway to eight)!"
  },
  {
    chId: 5,
    topic: "Telling Time (Viertel vor)",
    prompt: "Es ist 9:45 Uhr. Informell sagt man: „Es ist ______.“",
    en: "It is 9:45. How do you say this informally?",
    answer: "Viertel vor zehn",
    options: ["Viertel vor zehn", "Viertel nach neun", "Viertel vor neun", "halb zehn"],
    rule: "15 minutes before the next hour is <strong>Viertel vor + next hour</strong>: 9:45 = <strong>Viertel vor zehn</strong>."
  },
  {
    chId: 5,
    topic: "Temporal Preposition (Clock)",
    prompt: "Der Deutschkurs beginnt genau ______ 18:00 Uhr.",
    en: "The German class starts at exactly 6:00 PM.",
    answer: "um",
    options: ["um", "am", "im", "von"],
    rule: "Exact clock times always use <strong>um</strong> (<em>um 18 Uhr</em>)."
  },
  {
    chId: 5,
    topic: "Temporal Exception (Nacht)",
    prompt: "______ Nacht ist es in der Stadt sehr ruhig.",
    en: "At night it is very quiet in the city.",
    answer: "In der",
    options: ["In der", "Am", "Im", "Um die"],
    rule: "Parts of the day use <em>am</em> (<em>am Morgen, am Abend</em>), EXCEPT <em>die Nacht</em> → <strong>in der Nacht</strong>!"
  },
  {
    chId: 5,
    topic: "Temporal Range (von ... bis)",
    prompt: "Ich arbeite ______ Montag ______ Freitag.",
    en: "I work from Monday to Friday.",
    answer: "von … bis",
    options: ["von … bis", "am … bis", "um … zu", "ab … am"],
    rule: "Time spans use <strong>von … bis</strong> (<em>von 9 bis 17 Uhr</em>, <em>von Montag bis Freitag</em>)."
  },
  {
    chId: 5,
    topic: "Possessive Article (Nominativ Fem.)",
    prompt: "Das ist ______ Schwester. Sie wohnt in Hamburg.",
    en: "That is my sister. She lives in Hamburg. (die Schwester)",
    answer: "meine",
    options: ["meine", "mein", "meinen", "meinem"],
    rule: "Possessive articles follow <em>ein-</em> endings: feminine <em>die Schwester</em> in Nominativ → <strong>meine</strong>."
  },
  {
    chId: 5,
    topic: "Possessive Article (Akkusativ Masc.)",
    prompt: "Ich besuche heute ______ Vater.",
    en: "I am visiting my father today. (der Vater)",
    answer: "meinen",
    options: ["meinen", "mein", "meine", "meinem"],
    rule: "<em>besuchen</em> takes <strong>Akkusativ</strong>. Masculine possessive adds <strong>-en</strong>: <strong>meinen Vater</strong>."
  },
  {
    chId: 5,
    topic: "Possessive Article (ihr / euer)",
    prompt: "Kinder, wo ist ______ Buch?",
    en: "Kids, where is your (plural) book? (das Buch)",
    answer: "euer",
    options: ["euer", "eure", "ihr", "dein"],
    rule: "The possessive for <code>ihr</code> (you plural) is <strong>euer</strong> (<em>euer Buch</em>; drops the inner <em>e</em> when an ending is added: <em>eure Tasche</em>)."
  },
  {
    chId: 5,
    topic: "Modal Verb Conjugation (müssen)",
    prompt: "Er ______ heute leider bis 19 Uhr arbeiten.",
    en: "Unfortunately he has to work until 7 PM today. (müssen)",
    answer: "muss",
    options: ["muss", "musst", "müsst", "müssen"],
    rule: "In modal verbs, <code>ich</code> and <code>er/sie/es</code> are identical and have <strong>no ending</strong>: <strong>er muss</strong>."
  },
  {
    chId: 5,
    topic: "Modal Verb Satzklammer",
    prompt: "Am Samstag kann ich endlich lange ______.",
    en: "On Saturday I can finally sleep in. (schlafen)",
    answer: "schlafen",
    options: ["schlafen", "schlafe", "schläft", "schlafst"],
    rule: "Modal verb in Position 2 + full <strong>Infinitiv at the very end</strong> (<em>Satzklammer</em>): <em>kann ... schlafen</em>."
  },
  {
    chId: 5,
    topic: "Modal + Separable Verb",
    prompt: "Morgen muss ich schon um 6 Uhr ______.",
    en: "Tomorrow I have to get up at 6 AM already. (aufstehen)",
    answer: "aufstehen",
    options: ["aufstehen", "stehe auf", "aufstehe", "stehen auf"],
    rule: "When paired with a modal verb, separable verbs stay <strong>glued together as an infinitive</strong> at the end: <strong>aufstehen</strong>."
  },

  // ===========================================================================
  // KAPITEL 6 — Feste, Datum & Im Restaurant
  // Rules: Ordinal Numbers & Dates (1.–19. -te, 20.+ -ste; am + -ten),
  //        Separable Verbs (Trennbare Verben), Akkusativ Personal Pronouns & für + Akk,
  //        Präteritum of haben & sein
  // ===========================================================================
  {
    chId: 6,
    topic: "Ordinal Numbers (am + Date)",
    prompt: "Mein Geburtstag ist am ______ Mai. (3.)",
    en: "My birthday is on the 3rd of May.",
    answer: "dritten",
    options: ["dritten", "dreiten", "dritte", "drittsten"],
    rule: "<em>3.</em> is irregular (<strong>dritt-</strong>), and after <strong>am</strong> (Dativ), ordinal numbers always end in <strong>-ten</strong>: <strong>am dritten Mai</strong>."
  },
  {
    chId: 6,
    topic: "Ordinal Numbers (20+ Rule)",
    prompt: "Die Party ist am ______ Juli. (21.)",
    en: "The party is on the 21st of July.",
    answer: "einundzwanzigsten",
    options: ["einundzwanzigsten", "einundzwanzigten", "einundzwanzigste", "einundzwanzig"],
    rule: "From <strong>20 upwards</strong>, ordinal numbers take <strong>-ste</strong> (and <strong>-sten</strong> after <em>am</em>): <strong>am einundzwanzigsten</strong>."
  },
  {
    chId: 6,
    topic: "Ordinal Numbers (Nominativ Date)",
    prompt: "Heute ist der ______ Oktober. (1.)",
    en: "Today is the 1st of October.",
    answer: "erste",
    options: ["erste", "ersten", "einte", "erstste"],
    rule: "After <em>Heute ist der...</em> (Nominativ), ordinals end in <strong>-e</strong>. <em>1.</em> is irregular: <strong>der erste</strong>."
  },
  {
    chId: 6,
    topic: "Separable Verbs (Main Clause)",
    prompt: "Ich kaufe heute Nachmittag im Supermarkt ______.",
    en: "This afternoon I'm shopping at the supermarket. (einkaufen)",
    answer: "ein",
    options: ["ein", "an", "auf", "aus"],
    rule: "<em>einkaufen</em> splits in main clauses: conjugated stem in Position 2, stressed prefix <strong>ein</strong> at the very end."
  },
  {
    chId: 6,
    topic: "Separable Verbs (einladen)",
    prompt: "Maria ______ alle Freunde zur Party ______.",
    en: "Maria invites all friends to the party. (einladen, a → ä)",
    answer: "lädt … ein",
    options: ["lädt … ein", "ladet … ein", "einlädt … —", "lädt … an"],
    rule: "<em>einladen</em> is separable AND has a vowel change (<strong>a → ä</strong>): <strong>Maria lädt ... ein</strong>."
  },
  {
    chId: 6,
    topic: "Separable vs. Inseparable",
    prompt: "Welches Verb ist <strong>NICHT</strong> trennbar (inseparable)?",
    en: "Which verb does NOT split its prefix?",
    answer: "bezahlen",
    options: ["bezahlen", "anrufen", "mitbringen", "aufräumen"],
    rule: "Prefixes <code>be-, emp-, ent-, er-, ge-, miss-, ver-, zer-</code> are <strong>never</strong> separable: <em>Ich bezahle die Rechnung</em>."
  },
  {
    chId: 6,
    topic: "Personal Pronoun (Akkusativ)",
    prompt: "Kennst du meinen Bruder? — Ja, ich kenne ______ sehr gut!",
    en: "Do you know my brother? — Yes, I know him very well!",
    answer: "ihn",
    options: ["ihn", "ihm", "er", "es"],
    rule: "<em>kennen</em> takes Akkusativ. Masculine <code>er</code> → <strong>ihn</strong>."
  },
  {
    chId: 6,
    topic: "Preposition 'für' + Akkusativ",
    prompt: "Dieses Geschenk ist für ______!",
    en: "This gift is for you (informal singular)!",
    answer: "dich",
    options: ["dich", "dir", "du", "dein"],
    rule: "<code>für</code> ALWAYS takes <strong>Akkusativ</strong>: <code>du</code> → <strong>dich</strong>."
  },
  {
    chId: 6,
    topic: "Personal Pronoun (Akkusativ — ich)",
    prompt: "Rufst du ______ heute Abend bitte an?",
    en: "Will you please call me this evening?",
    answer: "mich",
    options: ["mich", "mir", "ich", "mein"],
    rule: "<em>anrufen</em> takes <strong>Akkusativ</strong>: <code>ich</code> → <strong>mich</strong>."
  },
  {
    chId: 6,
    topic: "Präteritum (sein)",
    prompt: "Gestern ______ wir in einem tollen italienischen Restaurant.",
    en: "Yesterday we were in a great Italian restaurant. (sein)",
    answer: "waren",
    options: ["waren", "war", "wart", "hatten"],
    rule: "Simple past (<em>Präteritum</em>) of <em>sein</em> for <code>wir</code> is <strong>waren</strong>."
  },
  {
    chId: 6,
    topic: "Präteritum (haben)",
    prompt: "Letzte Woche ______ ich leider keine Zeit.",
    en: "Last week I unfortunately had no time. (haben)",
    answer: "hatte",
    options: ["hatte", "war", "hattest", "hatten"],
    rule: "<em>Präteritum</em> of <em>haben</em>: <code>ich/er/sie/es</code> → <strong>hatte</strong>."
  },
  {
    chId: 6,
    topic: "Präteritum (sein — du)",
    prompt: "Wo ______ du am Samstagabend?",
    en: "Where were you on Saturday evening? (sein)",
    answer: "warst",
    options: ["warst", "war", "wart", "hattest"],
    rule: "<em>Präteritum</em> of <em>sein</em> for <code>du</code> is <strong>warst</strong> (<em>ich war, du warst, er war, wir waren, ihr wart</em>)."
  },

  // ===========================================================================
  // KAPITEL 7 — Arbeitsalltag, Büro & Dativ
  // Rules: Position-0 Connectors (und, oder, aber, denn), Der Dativ (dem/der/dem/den + -n),
  //        Dativ Prepositions & Contractions (zum/zur/beim/vom/mit/aus),
  //        Wo? (Dativ) vs. Wohin? (Akkusativ), Doch!, Phonetik st→scht
  // ===========================================================================
  {
    chId: 7,
    topic: "Position-0 Connectors",
    prompt: "Ich habe viel Arbeit, ______ ich mache trotzdem eine Pause.",
    en: "I have a lot of work, but I am taking a break anyway.",
    answer: "aber",
    options: ["aber", "oder", "denn", "sondern"],
    rule: "<code>aber</code> (but) expresses contrast and sits in <strong>Position 0</strong>, so normal subject–verb order follows."
  },
  {
    chId: 7,
    topic: "Position-0 Word Order",
    prompt: "Wähle den grammatisch richtigen Satz mit „und“:",
    en: "Choose the grammatically correct sentence with 'und' (Position 0).",
    answer: "Ich schreibe eine E-Mail und ich rufe den Kunden an.",
    options: [
      "Ich schreibe eine E-Mail und ich rufe den Kunden an.",
      "Ich schreibe eine E-Mail und rufe ich den Kunden an.",
      "Ich schreibe eine E-Mail und ich den Kunden anrufe.",
      "Ich schreibe eine E-Mail und anrufe ich den Kunden."
    ],
    rule: "<code>und, oder, aber</code> occupy <strong>Position 0</strong> — they do NOT trigger inversion (subject stays in Pos 1, verb in Pos 2)."
  },
  {
    chId: 7,
    topic: "Dativ Contraction (Wohin? Masc.)",
    prompt: "Julia hat Fieber und geht heute ______ Arzt.",
    en: "Julia has a fever and is going to the doctor today. (der Arzt)",
    answer: "zum",
    options: ["zum", "beim", "vom", "zur"],
    rule: "<em>Wohin?</em> (going to a person/place) uses <code>zu + dem</code> → <strong>zum Arzt</strong>."
  },
  {
    chId: 7,
    topic: "Dativ Contraction (Wo? Masc.)",
    prompt: "Tom sitzt im Wartezimmer. Er ist gerade ______ Arzt.",
    en: "Tom is sitting in the waiting room. He is currently at the doctor's.",
    answer: "beim",
    options: ["beim", "zum", "vom", "im"],
    rule: "<em>Wo?</em> (being at a person's/company's place) uses <code>bei + dem</code> → <strong>beim Arzt</strong>."
  },
  {
    chId: 7,
    topic: "Dativ Contraction (Woher?)",
    prompt: "Um 11 Uhr kommt Tom wieder ______ Arzt zurück.",
    en: "At 11 o'clock Tom comes back from the doctor's.",
    answer: "vom",
    options: ["vom", "zum", "beim", "aus"],
    rule: "<em>Woher?</em> (coming from a person/activity) uses <code>von + dem</code> → <strong>vom Arzt</strong>."
  },
  {
    chId: 7,
    topic: "Dativ Contraction (Feminine)",
    prompt: "In der Mittagspause gehe ich kurz ______ Bank.",
    en: "During lunch break I'm quickly going to the bank. (die Bank)",
    answer: "zur",
    options: ["zur", "zum", "beim", "in der"],
    rule: "Feminine Dativ <code>zu + der</code> contracts to <strong>zur Bank</strong>."
  },
  {
    chId: 7,
    topic: "Dativ Plural (+ -n)",
    prompt: "Laura feiert das Projektende mit den ______.",
    en: "Laura celebrates the project finish with the employees. (die Mitarbeiter)",
    answer: "Mitarbeitern",
    options: ["Mitarbeitern", "Mitarbeiter", "Mitarbeiters", "Mitarbeitere"],
    rule: "Dativ Plural uses <strong>den</strong> AND adds <strong>-n</strong> to the noun (unless it already ends in <code>-n</code> or <code>-s</code>)."
  },
  {
    chId: 7,
    topic: "Dativ (Neutral)",
    prompt: "Mein Kollege arbeitet den ganzen Tag in ______ Büro.",
    en: "My colleague works all day in the office. (das Büro)",
    answer: "dem (im)",
    options: ["dem (im)", "das (ins)", "der", "den"],
    rule: "<em>Wo?</em> (static location) takes <strong>Dativ</strong>: <code>in + dem Büro</code> → <strong>im Büro</strong>."
  },
  {
    chId: 7,
    topic: "Dativ (mit + Indefinite Fem.)",
    prompt: "Ich spreche gerade mit ______ Kollegin über das Meeting.",
    en: "I am currently speaking with a female colleague about the meeting. (die Kollegin)",
    answer: "einer",
    options: ["einer", "eine", "einem", "einen"],
    rule: "<code>mit</code> takes Dativ. Feminine <em>eine</em> changes to <strong>einer</strong> in Dativ (M-R-M-N)."
  },
  {
    chId: 7,
    topic: "Dativ Verb (helfen)",
    prompt: "Der Chef hilft ______ Team bei dem Projekt.",
    en: "The boss helps the team with the project. (das Team)",
    answer: "dem",
    options: ["dem", "das", "den", "der"],
    rule: "<em>helfen</em> always governs <strong>Dativ</strong>: neutral <em>das Team</em> → <strong>dem Team</strong>."
  },
  {
    chId: 7,
    topic: "Negative Question (Doch!)",
    prompt: "Hast du heute kein Meeting? — ______! Um 14 Uhr!",
    en: "Don't you have a meeting today? — Yes I do! At 2 PM!",
    answer: "Doch",
    options: ["Doch", "Ja", "Nein", "Aber"],
    rule: "To contradict a <strong>negative question</strong> (say 'Yes, actually!'), German always uses <strong>Doch!</strong>"
  },
  {
    chId: 7,
    topic: "Phonetik ('st' → 'scht' vs. 'st')",
    prompt: "In welchem Wort spricht man „st“ als <strong>„scht“</strong> aus?",
    en: "In which word is 'st' pronounced 'scht'?",
    answer: "die Stunde",
    options: ["die Stunde", "der Gast", "die Post", "gestern"],
    rule: "<code>st</code> and <code>sp</code> are pronounced <strong>scht / schp</strong> at the <strong>beginning of a word or stem</strong> (<em>Stunde, Straße, verstehen</em>), NOT in the middle/end (<em>Gast, Post, gestern</em>)."
  },

  // ===========================================================================
  // KAPITEL 8 — Fit & Gesund, Körper & Beim Arzt
  // Rules: Imperativ (du, ihr, Sie + exceptions), Complete A1 Modal Verbs Matrix
  //        (können, müssen, wollen, sollen, dürfen), Dativ Pronouns (mir/dir/ihm/ihr/Ihnen),
  //        Compound Nouns (Komposita), Formal vs. Informal Letters/Emails
  // ===========================================================================
  {
    chId: 8,
    topic: "Imperativ (du — Regular)",
    prompt: "Du hast Kopfschmerzen. ______ viel Wasser!",
    en: "You have a headache. Drink lots of water! (trinken, du)",
    answer: "Trink",
    options: ["Trink", "Trinkst", "Trinkt", "Trinken"],
    rule: "For regular <strong>du-Imperativ</strong>, drop <code>du</code> and the <code>-st</code> ending: <em>du trinkst</em> → <strong>Trink!</strong>"
  },
  {
    chId: 8,
    topic: "Imperativ (du — e → i)",
    prompt: "______ jeden Tag frisches Obst und Gemüse!",
    en: "Eat fresh fruit and vegetables every day! (essen, du)",
    answer: "Iss",
    options: ["Iss", "Ess", "Isst", "Esst"],
    rule: "Verbs with <strong>e → i/ie</strong> KEEP the vowel change in <code>du-Imperativ</code>: <em>du isst</em> → <strong>Iss!</strong>"
  },
  {
    chId: 8,
    topic: "Imperativ (du — a → ä Exception!)",
    prompt: "______ bitte langsam! Die Straße ist nass.",
    en: "Please drive slowly! The road is wet. (fahren, du)",
    answer: "Fahr",
    options: ["Fahr", "Fähr", "Fährst", "Fahrt"],
    rule: "Important exception: <strong>a → ä</strong> verbs DROP the umlaut in <code>du-Imperativ</code>: <em>du fährst</em> → <strong>Fahr!</strong> (not <em>Fähr!</em>)."
  },
  {
    chId: 8,
    topic: "Imperativ (ihr)",
    prompt: "Kinder, ______ jetzt bitte eure Hausaufgaben!",
    en: "Kids, please do your homework now! (machen, ihr)",
    answer: "macht",
    options: ["macht", "mach", "machen", "machst"],
    rule: "<strong>ihr-Imperativ</strong> is simply the normal <code>ihr</code> present form without the pronoun: <strong>Macht!</strong>"
  },
  {
    chId: 8,
    topic: "Modal Verb (dürfen — Prohibition)",
    prompt: "Im Krankenhaus ______ man nicht rauchen.",
    en: "In the hospital one is not allowed to smoke. (dürfen)",
    answer: "darf",
    options: ["darf", "darft", "dürft", "dürfen"],
    rule: "<code>man</code> conjugates like <code>er/sie/es</code>. <em>dürfen</em> has an irregular stem change: <strong>man darf</strong>."
  },
  {
    chId: 8,
    topic: "Modal Verb (sollen — Doctor's Advice)",
    prompt: "Der Arzt sagt, ich ______ drei Tage im Bett bleiben.",
    en: "The doctor says I should stay in bed for three days. (sollen)",
    answer: "soll",
    options: ["soll", "solle", "sollt", "sollen"],
    rule: "<code>sollen</code> expresses advice or someone else's instruction; <code>ich/er/sie/es</code> → <strong>soll</strong>."
  },
  {
    chId: 8,
    topic: "Modal Verb (wollen)",
    prompt: "Wir ______ am Wochenende Sport machen.",
    en: "We want to do sports on the weekend. (wollen)",
    answer: "wollen",
    options: ["wollen", "willen", "will", "wollt"],
    rule: "<code>wir/sie/Sie</code> always use the full infinitive for modal verbs: <strong>wir wollen</strong>."
  },
  {
    chId: 8,
    topic: "Dativ Pronoun (wehtun)",
    prompt: "Mein Rücken tut ______ sehr weh.",
    en: "My back hurts me very much. (ich → Dativ)",
    answer: "mir",
    options: ["mir", "mich", "ich", "mein"],
    rule: "<em>wehtun</em> always takes <strong>Dativ</strong> for the person feeling pain: <code>ich</code> → <strong>mir</strong>."
  },
  {
    chId: 8,
    topic: "Dativ Pronoun (helfen — formal)",
    prompt: "Guten Tag, wie kann ich ______ helfen?",
    en: "Good day, how can I help you (formal)?",
    answer: "Ihnen",
    options: ["Ihnen", "Sie", "ihnen", "euch"],
    rule: "<em>helfen</em> governs Dativ. Formal <code>Sie</code> in Dativ is capitalized <strong>Ihnen</strong>."
  },
  {
    chId: 8,
    topic: "Compound Nouns (Komposita Gender)",
    prompt: "der Kopf + die Schmerzen (Pl.) = ______ Kopfschmerzen. Was bestimmt den Artikel bei Komposita?",
    en: "der Arzt + die Praxis → ______ Arztpraxis. Which word decides the article of a compound noun?",
    answer: "die Arztpraxis (immer das letzte Wort!)",
    options: [
      "die Arztpraxis (immer das letzte Wort!)",
      "der Arztpraxis (immer das erste Wort)",
      "das Arztpraxis (Komposita sind immer neutral)",
      "den Arztpraxis"
    ],
    rule: "In German compound nouns (<em>Komposita</em>), the <strong>LAST word</strong> ALWAYS determines the article and plural: <em>die Praxis</em> → <strong>die Arztpraxis</strong>."
  },
  {
    chId: 8,
    topic: "Formal Email Greeting",
    prompt: "Du schreibst eine <strong>formelle</strong> E-Mail an Frau Dr. Weber. Wie beginnst du?",
    en: "You are writing a formal email to Dr. Weber (female). How do you open it?",
    answer: "Sehr geehrte Frau Dr. Weber,",
    options: [
      "Sehr geehrte Frau Dr. Weber,",
      "Sehr geehrter Frau Dr. Weber,",
      "Liebe Frau Dr. Weber,",
      "Hallo Frau Dr. Weber,"
    ],
    rule: "Formal greetings: <strong>Sehr geehrte Frau…</strong> (female), <strong>Sehr geehrter Herr…</strong> (male), followed by a comma and a lowercase first word on the next line."
  },
  {
    chId: 8,
    topic: "Formal Email Closing",
    prompt: "Welcher Schluss passt zu einer <strong>formellen</strong> E-Mail an eine Arztpraxis?",
    en: "Which closing fits a formal email to a doctor's office?",
    answer: "Mit freundlichen Grüßen",
    options: [
      "Mit freundlichen Grüßen",
      "Liebe Grüße",
      "Bis bald!",
      "Viele Grüße, dein..."
    ],
    rule: "Standard formal closing in German emails/letters is <strong>Mit freundlichen Grüßen</strong> (no comma after it!)."
  },

  // ===========================================================================
  // KAPITEL 9 — Meine Wohnung, Möbel, Farben & Wechselpräpositionen
  // Rules: 9 Wechselpräpositionen (Wohin? + Akk. vs. Wo? + Dat.), Contractions (ins/im),
  //        Action vs. Position Verbs (stellen/stehen, legen/liegen, setzen/sitzen, hängen),
  //        Dativ Plural (-n), sein + Adjektiv (nicht/sehr/zu), Phonetik (langes vs. kurzes e)
  // ===========================================================================
  {
    chId: 9,
    topic: "Wechselpräposition (in + Akk. Wohin?)",
    prompt: "Carla stellt den Fernseher ______ Schlafzimmer.",
    en: "Carla puts the TV into the bedroom. (das Schlafzimmer, Wohin?)",
    answer: "ins",
    options: ["ins", "im", "in den", "in der"],
    rule: "<em>stellen</em> = Action (<strong>Wohin?</strong>) → <strong>Akkusativ</strong>. <code>in + das</code> contracts to <strong>ins Schlafzimmer</strong>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (in + Dat. Wo?)",
    prompt: "Der Kühlschrank steht ______ Flur.",
    en: "The fridge is standing in the hallway. (der Flur, Wo?)",
    answer: "im",
    options: ["im", "in den", "ins", "in der"],
    rule: "<em>steht</em> = Position (<strong>Wo?</strong>) → <strong>Dativ</strong>. <code>in + dem</code> contracts to <strong>im Flur</strong>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (auf + Akk. Wohin?)",
    prompt: "Ich lege das Buch auf ______ Tisch.",
    en: "I lay the book onto the table. (der Tisch, Wohin?)",
    answer: "den",
    options: ["den", "dem", "der", "das"],
    rule: "<em>legen</em> = Action (<strong>Wohin?</strong>) → <strong>Akkusativ</strong>. Masculine <code>der Tisch</code> → <strong>auf den Tisch</strong>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (auf + Dat. Wo?)",
    prompt: "Das Buch liegt auf ______ Tisch.",
    en: "The book is lying on the table. (der Tisch, Wo?)",
    answer: "dem",
    options: ["dem", "den", "der", "das"],
    rule: "<em>liegt</em> = Position (<strong>Wo?</strong>) → <strong>Dativ</strong>. Masculine <code>der Tisch</code> → <strong>auf dem Tisch</strong>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (an + Dat. Wo?)",
    prompt: "Das Bild hängt an ______ Wand.",
    en: "The picture is hanging on the wall. (die Wand, Wo?)",
    answer: "der",
    options: ["der", "die", "dem", "den"],
    rule: "<em>hängt</em> (static position, <strong>Wo?</strong>) takes <strong>Dativ</strong>. Feminine <code>die Wand</code> → <strong>an der Wand</strong>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (zwischen + Dat. Plural)",
    prompt: "Der Tisch steht zwischen ______.",
    en: "The table is standing between the chairs. (die Stühle, Wo?)",
    answer: "den Stühlen",
    options: ["den Stühlen", "die Stühle", "den Stühle", "dem Stuhl"],
    rule: "<em>steht</em> (<strong>Wo?</strong>) takes <strong>Dativ Plural</strong>: <code>die → den</code> AND add <strong>-n</strong> to the noun → <strong>zwischen den Stühlen</strong>."
  },
  {
    chId: 9,
    topic: "Action vs. Position (stellen vs. stehen)",
    prompt: "Ich ______ die Tasche neben den Schrank.",
    en: "I put the bag next to the cabinet. (Action, Wohin?)",
    answer: "stelle",
    options: ["stelle", "stehe", "liege", "sitze"],
    rule: "Placing something upright (<strong>Wohin? + Akk.</strong>) uses the action verb <strong>stellen</strong> (<em>stehen</em> is static position!)."
  },
  {
    chId: 9,
    topic: "Action vs. Position (setzen vs. sitzen)",
    prompt: "Ich ______ mich auf den Stuhl.",
    en: "I sit down onto the chair. (Action, Wohin?)",
    answer: "setze",
    options: ["setze", "sitze", "stelle", "lege"],
    rule: "Sitting down (movement, <strong>Wohin? + Akk.</strong>) uses reflexive <strong>sich setzen</strong> (<em>Ich setze mich auf den Stuhl</em>). Being seated is <em>Ich sitze auf dem Stuhl</em>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (über + Akk. Wohin?)",
    prompt: "Ich hänge die Lampe über ______ Tisch.",
    en: "I hang the lamp above the table. (der Tisch, Wohin?)",
    answer: "den",
    options: ["den", "dem", "der", "das"],
    rule: "<em>Ich hänge ...</em> (Action, <strong>Wohin?</strong>) takes <strong>Akkusativ</strong>: <code>der Tisch</code> → <strong>über den Tisch</strong>."
  },
  {
    chId: 9,
    topic: "Wechselpräposition (vor + Dat. Wo?)",
    prompt: "Das Auto steht vor ______ Haus.",
    en: "The car is standing in front of the house. (das Haus, Wo?)",
    answer: "dem",
    options: ["dem", "das", "den", "der"],
    rule: "<em>steht</em> (<strong>Wo?</strong>) takes <strong>Dativ</strong>. Neuter <code>das Haus</code> → <strong>vor dem Haus</strong>."
  },
  {
    chId: 9,
    topic: "sein + Adjektiv (zu vs. sehr)",
    prompt: "Carla und Alex haben maximal 800 Euro. Die Wohnung kostet 950 Euro. Sie ist ______ teuer.",
    en: "Carla and Alex have at most 800 euros. The apartment costs 950 euros. It is too expensive.",
    answer: "zu",
    options: ["zu", "nicht", "kein", "gern"],
    rule: "Use <strong>zu + Adjektiv</strong> when something exceeds your limit (<em>zu teuer</em> = too expensive!)."
  },
  {
    chId: 9,
    topic: "Phonetik (Langes vs. Kurzes 'e')",
    prompt: "Wie spricht man <strong>eh</strong> oder <strong>ee</strong> (z. B. <em>sehr, mehr, steht, Idee</em>) immer aus?",
    en: "How are 'eh' or 'ee' (e.g. sehr, mehr, steht, Idee) always pronounced in German?",
    answer: "immer lang",
    options: ["immer lang", "immer kurz", "manchmal lang, manchmal kurz", "stumm (silent)"],
    rule: "<code>eh</code> and <code>ee</code> are <strong>immer lang</strong> (always pronounced long)! Single <code>e</code> can be long (<em>neben</em>) or short (<em>hell, Bett</em>)."
  }
];
