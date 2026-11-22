window.A1_CHAPTERS = window.A1_CHAPTERS || [];

window.A1_CHAPTERS.push(
  // =========================================================================
  // KAPITEL 2: HOBBYS, BERUFE, WOCHENTAGE & ZAHLEN
  // =========================================================================
  {
    id: 2,
    code: "Kapitel 2",
    title: "Hobbys, Berufe & Wochentage",
    subtitle: "Hobbies, professions, making plans, weekdays & large numbers",
    color: "#2563eb",
    icon: "🎯",
    summary: "Talk about hobbies and free time, arrange to meet friends, name professions (masculine, feminine & plural), use weekdays with 'am', and read compound numbers & years.",
    nouns: [
      // From Slides: Hobbies & Free Time
      { art: "das", sg: "Hobby", pl: "die Hobbys", akk: "das Hobby", dat: "dem Hobby", en: "hobby", cat: "Hobbys & Freizeit", ex: "Was sind deine Hobbys? Meine Hobbys sind Malen und Lesen.", extra: false },
      { art: "das", sg: "Kino", pl: "die Kinos", akk: "das Kino", dat: "dem Kino", en: "cinema", cat: "Hobbys & Freizeit", ex: "Gehen wir am Freitag ins Kino?", extra: false },
      { art: "die", sg: "Musik", pl: "— (uncountable)", akk: "die Musik", dat: "der Musik", en: "music", cat: "Hobbys & Freizeit", ex: "Ich höre gern Musik.", extra: false },
      { art: "der", sg: "Fußball", pl: "die Fußbälle", akk: "den Fußball", dat: "dem Fußball", en: "football / soccer", cat: "Hobbys & Freizeit", ex: "Spielst du gern Fußball?", extra: false },
      { art: "das", sg: "Schach", pl: "— (uncountable)", akk: "das Schach", dat: "dem Schach", en: "chess", cat: "Hobbys & Freizeit", ex: "Mein Vater spielt gern Schach.", extra: false },
      { art: "der", sg: "Sport", pl: "— (uncountable)", akk: "den Sport", dat: "dem Sport", en: "sport", cat: "Hobbys & Freizeit", ex: "Ich mache gern Sport.", extra: false },
      { art: "das", sg: "Tennis", pl: "— (uncountable)", akk: "das Tennis", dat: "dem Tennis", en: "tennis", cat: "Hobbys & Freizeit", ex: "Ich spiele gern Tennis und ich jogge.", extra: false },
      { art: "das", sg: "Internet", pl: "— (uncountable)", akk: "das Internet", dat: "dem Internet", en: "internet", cat: "Hobbys & Freizeit", ex: "Am Abend surfe ich im Internet.", extra: false },
      { art: "der", sg: "Freund", pl: "die Freunde", fem: "die Freundin (Pl. -nen)", akk: "den Freund", dat: "dem Freund", en: "friend", cat: "Hobbys & Freizeit", ex: "Am Wochenende treffe ich Freunde.", extra: false },
      { art: "das", sg: "Schwimmbad", pl: "die Schwimmbäder", akk: "das Schwimmbad", dat: "dem Schwimmbad", en: "swimming pool", cat: "Hobbys & Freizeit", ex: "Gehen wir am Samstag ins Schwimmbad?", extra: false },
      { art: "das", sg: "Stadion", pl: "die Stadien", akk: "das Stadion", dat: "dem Stadion", en: "stadium", cat: "Hobbys & Freizeit", ex: "Wir gehen am Sonntag ins Stadion.", extra: false },
      { art: "das", sg: "Café", pl: "die Cafés", akk: "das Café", dat: "dem Café", en: "café", cat: "Hobbys & Freizeit", ex: "Gehen wir zusammen ins Café?", extra: false },
      { art: "das", sg: "Restaurant", pl: "die Restaurants", akk: "das Restaurant", dat: "dem Restaurant", en: "restaurant", cat: "Hobbys & Freizeit", ex: "Ich arbeite in zwei Restaurants.", extra: false },
      { art: "das", sg: "Theater", pl: "die Theater", akk: "das Theater", dat: "dem Theater", en: "theater", cat: "Hobbys & Freizeit", ex: "Sie geht gern ins Theater.", extra: false },
      { art: "das", sg: "Museum", pl: "die Museen", akk: "das Museum", dat: "dem Museum", en: "museum", cat: "Hobbys & Freizeit", ex: "Am Sonntag gehen wir ins Museum.", extra: false },

      // From Slides: Wochentage & Zeit
      { art: "der", sg: "Wochentag", pl: "die Wochentage", akk: "den Wochentag", dat: "dem Wochentag", en: "day of the week", cat: "Wochentage", ex: "Alle Wochentage haben den Artikel 'der'.", extra: false },
      { art: "der", sg: "Montag", pl: "die Montage", akk: "den Montag", dat: "dem Montag", en: "Monday", cat: "Wochentage", ex: "Am Montag arbeite ich.", extra: false },
      { art: "der", sg: "Dienstag", pl: "die Dienstage", akk: "den Dienstag", dat: "dem Dienstag", en: "Tuesday", cat: "Wochentage", ex: "Am Dienstag habe ich frei.", extra: false },
      { art: "der", sg: "Mittwoch", pl: "die Mittwoche", akk: "den Mittwoch", dat: "dem Mittwoch", en: "Wednesday", cat: "Wochentage", ex: "Gehen wir am Mittwoch ins Kino?", extra: false },
      { art: "der", sg: "Donnerstag", pl: "die Donnerstage", akk: "den Donnerstag", dat: "dem Donnerstag", en: "Thursday", cat: "Wochentage", ex: "Am Donnerstag habe ich Deutschkurs.", extra: false },
      { art: "der", sg: "Freitag", pl: "die Freitage", akk: "den Freitag", dat: "dem Freitag", en: "Friday", cat: "Wochentage", ex: "Am Freitag ist gut!", extra: false },
      { art: "der", sg: "Samstag", pl: "die Samstage", akk: "den Samstag", dat: "dem Samstag", en: "Saturday", cat: "Wochentage", ex: "Am Samstag arbeite ich im Kino.", extra: false },
      { art: "der", sg: "Sonntag", pl: "die Sonntage", akk: "den Sonntag", dat: "dem Sonntag", en: "Sunday", cat: "Wochentage", ex: "Am Sonntag schlafe ich lange.", extra: false },
      { art: "das", sg: "Wochenende", pl: "die Wochenenden", akk: "das Wochenende", dat: "dem Wochenende", en: "weekend", cat: "Wochentage", ex: "Am Wochenende kochen wir Spaghetti.", extra: false },
      { art: "die", sg: "Woche", pl: "die Wochen", akk: "die Woche", dat: "der Woche", en: "week", cat: "Wochentage", ex: "Ich arbeite 40 Stunden pro Woche.", extra: false },
      { art: "der", sg: "Tag", pl: "die Tage", akk: "den Tag", dat: "dem Tag", en: "day", cat: "Wochentage", ex: "Ich habe zwei Tage frei.", extra: false },
      { art: "das", sg: "Jahr", pl: "die Jahre", akk: "das Jahr", dat: "dem Jahr", en: "year", cat: "Wochentage", ex: "Ich fahre 68.000 Kilometer pro Jahr.", extra: false },

      // From Slides: Berufe (Jobs — Masc + Fem + Pl)
      { art: "der", sg: "Beruf", pl: "die Berufe", akk: "den Beruf", dat: "dem Beruf", en: "profession / job", cat: "Berufe", ex: "Was bist du von Beruf?", extra: false },
      { art: "der", sg: "Lehrer", pl: "die Lehrer", fem: "die Lehrerin (Pl. -innen)", akk: "den Lehrer", dat: "dem Lehrer", en: "teacher", cat: "Berufe", ex: "Meine Schwester ist Lehrerin.", extra: false },
      { art: "der", sg: "Arzt", pl: "die Ärzte", fem: "die Ärztin (Pl. -innen)", akk: "den Arzt", dat: "dem Arzt", en: "doctor", cat: "Berufe", ex: "Hier arbeiten 920 Ärzte und Krankenpfleger.", extra: false },
      { art: "der", sg: "Zahnarzt", pl: "die Zahnärzte", fem: "die Zahnärztin (Pl. -innen)", akk: "den Zahnarzt", dat: "dem Zahnarzt", en: "dentist", cat: "Berufe", ex: "Die Zahnärztin ist sehr nett.", extra: false },
      { art: "der", sg: "Krankenpfleger", pl: "die Krankenpfleger", fem: "die Krankenpflegerin (Pl. -innen)", akk: "den Krankenpfleger", dat: "dem Krankenpfleger", en: "nurse", cat: "Berufe", ex: "Der Krankenpfleger arbeitet im Krankenhaus.", extra: false },
      { art: "der", sg: "Ingenieur", pl: "die Ingenieure", fem: "die Ingenieurin (Pl. -innen)", akk: "den Ingenieur", dat: "dem Ingenieur", en: "engineer", cat: "Berufe", ex: "Marc ist Ingenieur.", extra: false },
      { art: "der", sg: "Informatiker", pl: "die Informatiker", fem: "die Informatikerin (Pl. -innen)", akk: "den Informatiker", dat: "dem Informatiker", en: "IT specialist / computer scientist", cat: "Berufe", ex: "Sie arbeitet als Informatikerin.", extra: false },
      { art: "der", sg: "Programmierer", pl: "die Programmierer", fem: "die Programmiererin (Pl. -innen)", akk: "den Programmierer", dat: "dem Programmierer", en: "programmer", cat: "Berufe", ex: "Er ist Programmierer.", extra: false },
      { art: "der", sg: "Koch", pl: "die Köche", fem: "die Köchin (Pl. -innen)", akk: "den Koch", dat: "dem Koch", en: "cook / chef", cat: "Berufe", ex: "Der Koch arbeitet meistens am Abend.", extra: false },
      { art: "der", sg: "Bäcker", pl: "die Bäcker", fem: "die Bäckerin (Pl. -innen)", akk: "den Bäcker", dat: "dem Bäcker", en: "baker", cat: "Berufe", ex: "Der Bäcker steht früh auf.", extra: false },
      { art: "der", sg: "Verkäufer", pl: "die Verkäufer", fem: "die Verkäuferin (Pl. -innen)", akk: "den Verkäufer", dat: "dem Verkäufer", en: "salesperson", cat: "Berufe", ex: "Die Verkäuferin hilft dem Kunden.", extra: false },
      { art: "der", sg: "Fahrer", pl: "die Fahrer", fem: "die Fahrerin (Pl. -innen)", akk: "den Fahrer", dat: "dem Fahrer", en: "driver", cat: "Berufe", ex: "Der Taxifahrer fährt 68.000 Kilometer pro Jahr.", extra: false },
      { art: "der", sg: "Taxifahrer", pl: "die Taxifahrer", fem: "die Taxifahrerin (Pl. -innen)", akk: "den Taxifahrer", dat: "dem Taxifahrer", en: "taxi driver", cat: "Berufe", ex: "Ich bin Taxifahrer bei Taxi-Zentral.", extra: false },
      { art: "der", sg: "Busfahrer", pl: "die Busfahrer", fem: "die Busfahrerin (Pl. -innen)", akk: "den Busfahrer", dat: "dem Busfahrer", en: "bus driver", cat: "Berufe", ex: "Der Busfahrer arbeitet am Wochenende.", extra: false },
      { art: "der", sg: "Mechaniker", pl: "die Mechaniker", fem: "die Mechanikerin (Pl. -innen)", akk: "den Mechaniker", dat: "dem Mechaniker", en: "mechanic", cat: "Berufe", ex: "Der Mechaniker repariert das Auto.", extra: false },
      { art: "der", sg: "Polizist", pl: "die Polizisten", fem: "die Polizistin (Pl. -innen)", akk: "den Polizisten", dat: "dem Polizisten", en: "police officer", cat: "Berufe", ex: "Der Polizist arbeitet oft nachts.", extra: false },
      { art: "der", sg: "Journalist", pl: "die Journalisten", fem: "die Journalistin (Pl. -innen)", akk: "den Journalisten", dat: "dem Journalisten", en: "journalist", cat: "Berufe", ex: "Die Journalisten schreiben Artikel.", extra: false },
      { art: "der", sg: "Student", pl: "die Studenten", fem: "die Studentin (Pl. -innen)", akk: "den Studenten", dat: "dem Studenten", en: "university student", cat: "Berufe", ex: "Die Universität hat 25.000 Studenten und Studentinnen.", extra: false },
      { art: "der", sg: "Praktikant", pl: "die Praktikanten", fem: "die Praktikantin (Pl. -innen)", akk: "den Praktikanten", dat: "dem Praktikanten", en: "intern", cat: "Berufe", ex: "Sie macht ein Praktikum als Praktikantin.", extra: false },
      { art: "der", sg: "Assistent", pl: "die Assistenten", fem: "die Assistentin (Pl. -innen)", akk: "den Assistenten", dat: "dem Assistenten", en: "assistant", cat: "Berufe", ex: "Der Assistent organisiert Termine.", extra: false },
      { art: "der", sg: "Präsident", pl: "die Präsidenten", fem: "die Präsidentin (Pl. -innen)", akk: "den Präsidenten", dat: "dem Präsidenten", en: "president", cat: "Berufe", ex: "Der Präsident hält eine Rede.", extra: false },
      { art: "der", sg: "Psychologe", pl: "die Psychologen", fem: "die Psychologin (Pl. -innen)", akk: "den Psychologen", dat: "dem Psychologen", en: "psychologist", cat: "Berufe", ex: "Die Psychologin spricht mit Patienten.", extra: false },
      { art: "der", sg: "Architekt", pl: "die Architekten", fem: "die Architektin (Pl. -innen)", akk: "den Architekten", dat: "dem Architekten", en: "architect", cat: "Berufe", ex: "Die Architektin plant ein Haus.", extra: false },
      { art: "der", sg: "Friseur", pl: "die Friseure", fem: "die Friseurin (Pl. -innen)", akk: "den Friseur", dat: "dem Friseur", en: "hairdresser", cat: "Berufe", ex: "Ich brauche einen Termin beim Friseur.", extra: false },
      { art: "der", sg: "Kellner", pl: "die Kellner", fem: "die Kellnerin (Pl. -innen)", akk: "den Kellner", dat: "dem Kellner", en: "waiter / waitress", cat: "Berufe", ex: "Der Kellner bringt die Rechnung.", extra: false },
      { art: "der", sg: "Sekretär", pl: "die Sekretäre", fem: "die Sekretärin (Pl. -innen)", akk: "den Sekretär", dat: "dem Sekretär", en: "secretary", cat: "Berufe", ex: "Die Sekretärin arbeitet im Büro.", extra: false },
      { art: "der", sg: "Jurist", pl: "die Juristen", fem: "die Juristin (Pl. -innen)", akk: "den Juristen", dat: "dem Juristen", en: "lawyer / jurist", cat: "Berufe", ex: "Er ist Jurist.", extra: false },
      { art: "der", sg: "Gärtner", pl: "die Gärtner", fem: "die Gärtnerin (Pl. -innen)", akk: "den Gärtner", dat: "dem Gärtner", en: "gardener", cat: "Berufe", ex: "Die Gärtnerin arbeitet im Park.", extra: false },
      { art: "der", sg: "Maler", pl: "die Maler", fem: "die Malerin (Pl. -innen)", akk: "den Maler", dat: "dem Maler", en: "painter", cat: "Berufe", ex: "Der Maler malt ein Bild.", extra: false },
      { art: "der", sg: "Musiker", pl: "die Musiker", fem: "die Musikerin (Pl. -innen)", akk: "den Musiker", dat: "dem Musiker", en: "musician", cat: "Berufe", ex: "Die Musikerin spielt Geige.", extra: false },
      { art: "der", sg: "Manager", pl: "die Manager", fem: "die Managerin (Pl. -innen)", akk: "den Manager", dat: "dem Manager", en: "manager", cat: "Berufe", ex: "Die Managerin hat viele Termine.", extra: false },
      { art: "der", sg: "Bauer", pl: "die Bauern", fem: "die Bäuerin (Pl. -innen)", akk: "den Bauern", dat: "dem Bauern", en: "farmer", cat: "Berufe", ex: "Der Bauer und die Bäuerin arbeiten auf dem Land.", extra: false },
      { art: "der", sg: "Kaufmann", pl: "die Kaufleute", fem: "die Kauffrau (Pl. -en)", akk: "den Kaufmann", dat: "dem Kaufmann", en: "merchant / businessperson", cat: "Berufe", ex: "Sie ist Kauffrau.", extra: false },
      { art: "der", sg: "Feuerwehrmann", pl: "die Feuerwehrleute", fem: "die Feuerwehrfrau (Pl. -en)", akk: "den Feuerwehrmann", dat: "dem Feuerwehrmann", en: "firefighter", cat: "Berufe", ex: "Der Feuerwehrmann hilft bei Unfällen.", extra: false },
      { art: "der", sg: "Hausmann", pl: "die Hausmänner", fem: "die Hausfrau (Pl. -en)", akk: "den Hausmann", dat: "dem Hausmann", en: "homemaker", cat: "Berufe", ex: "Er ist Hausmann und kümmert sich um die Kinder.", extra: false },

      // From Slides: Everyday Nouns & Personal Data
      { art: "das", sg: "Auto", pl: "die Autos", akk: "das Auto", dat: "dem Auto", en: "car", cat: "Alltag & Artikel", ex: "Das Auto steht auf der Straße.", extra: false },
      { art: "das", sg: "Buch", pl: "die Bücher", akk: "das Buch", dat: "dem Buch", en: "book", cat: "Alltag & Artikel", ex: "Ich lese im Moment ein Buch.", extra: false },
      { art: "das", sg: "Geld", pl: "die Gelder (rare)", akk: "das Geld", dat: "dem Geld", en: "money", cat: "Alltag & Artikel", ex: "Ich habe genug Geld.", extra: false },
      { art: "die", sg: "Straße", pl: "die Straßen", akk: "die Straße", dat: "der Straße", en: "street", cat: "Alltag & Artikel", ex: "Die Straße heißt Goethestraße.", extra: false },
      { art: "das", sg: "Glas", pl: "die Gläser", akk: "das Glas", dat: "dem Glas", en: "glass", cat: "Alltag & Artikel", ex: "Ein Glas Wasser, bitte.", extra: false },
      { art: "der", sg: "Stuhl", pl: "die Stühle", akk: "den Stuhl", dat: "dem Stuhl", en: "chair", cat: "Alltag & Artikel", ex: "Der Stuhl ist bequem.", extra: false },
      { art: "der", sg: "Computer", pl: "die Computer", akk: "den Computer", dat: "dem Computer", en: "computer", cat: "Alltag & Artikel", ex: "Max spielt gern Computer.", extra: false },
      { art: "das", sg: "Medikament", pl: "die Medikamente", akk: "das Medikament", dat: "dem Medikament", en: "medication / medicine", cat: "Alltag & Artikel", ex: "Der Arzt gibt das Medikament.", extra: false },
      { art: "die", sg: "Rechnung", pl: "die Rechnungen", akk: "die Rechnung", dat: "der Rechnung", en: "bill / invoice", cat: "Alltag & Artikel", ex: "Die Rechnung, bitte!", extra: false },
      { art: "der", sg: "Schlüssel", pl: "die Schlüssel", akk: "den Schlüssel", dat: "dem Schlüssel", en: "key", cat: "Alltag & Artikel", ex: "Wo ist mein Schlüssel?", extra: false },
      { art: "die", sg: "Spritze", pl: "die Spritzen", akk: "die Spritze", dat: "der Spritze", en: "syringe / injection", cat: "Alltag & Artikel", ex: "Die Ärztin gibt eine Spritze.", extra: false },
      { art: "die", sg: "Tablette", pl: "die Tabletten", akk: "die Tablette", dat: "der Tablette", en: "tablet / pill", cat: "Alltag & Artikel", ex: "Nehmen Sie eine Tablette.", extra: false },
      { art: "das", sg: "Krankenhaus", pl: "die Krankenhäuser", akk: "das Krankenhaus", dat: "dem Krankenhaus", en: "hospital", cat: "Alltag & Artikel", ex: "Das Krankenhaus hat 480 Zimmer.", extra: false },
      { art: "die", sg: "Universität", pl: "die Universitäten", akk: "die Universität", dat: "der Universität", en: "university", cat: "Alltag & Artikel", ex: "Die Universität ist sehr groß.", extra: false },
      { art: "das", sg: "Seminar", pl: "die Seminare", akk: "das Seminar", dat: "dem Seminar", en: "seminar", cat: "Alltag & Artikel", ex: "Ich habe 24 Stunden Seminare pro Woche.", extra: false },
      { art: "der", sg: "Patient", pl: "die Patienten", fem: "die Patientin (Pl. -innen)", akk: "den Patienten", dat: "dem Patienten", en: "patient", cat: "Alltag & Artikel", ex: "Wir haben Platz für 1.250 Patienten.", extra: false },
      { art: "der", sg: "Kilometer", pl: "die Kilometer", akk: "den Kilometer", dat: "dem Kilometer", en: "kilometer", cat: "Alltag & Artikel", ex: "Das sind 100 Kilometer.", extra: false },
      { art: "der", sg: "Vorname", pl: "die Vornamen", akk: "den Vornamen", dat: "dem Vornamen", en: "first name", cat: "Persönliche Angaben", ex: "Mein Vorname ist Jonathan.", extra: false },
      { art: "der", sg: "Nachname", pl: "die Nachnamen", akk: "den Nachnamen", dat: "dem Nachnamen", en: "last name / surname", cat: "Persönliche Angaben", ex: "Mein Nachname ist Miller.", extra: false },
      { art: "das", sg: "Geburtsdatum", pl: "die Geburtsdaten", akk: "das Geburtsdatum", dat: "dem Geburtsdatum", en: "date of birth", cat: "Persönliche Angaben", ex: "Mein Geburtsdatum ist der 01.04.1994.", extra: false },
      { art: "der", sg: "Geburtsort", pl: "die Geburtsorte", akk: "den Geburtsort", dat: "dem Geburtsort", en: "place of birth", cat: "Persönliche Angaben", ex: "Mein Geburtsort ist Kairo.", extra: false },
      { art: "die", sg: "Adresse", pl: "die Adressen", akk: "die Adresse", dat: "der Adresse", en: "address", cat: "Persönliche Angaben", ex: "Meine Adresse ist Goethestr. 7.", extra: false },
      { art: "die", sg: "Telefonnummer", pl: "die Telefonnummern", akk: "die Telefonnummer", dat: "der Telefonnummer", en: "phone number", cat: "Persönliche Angaben", ex: "Wie ist Ihre Telefonnummer?", extra: false },

      // EXTRA Topic Vocab (Hobbys & Berufe)
      { art: "die", sg: "Freizeit", pl: "— (uncountable)", akk: "die Freizeit", dat: "der Freizeit", en: "free time / leisure", cat: "Extra: Hobbys & Berufe", ex: "Was machst du in deiner Freizeit?", extra: true },
      { art: "das", sg: "Instrument", pl: "die Instrumente", akk: "das Instrument", dat: "dem Instrument", en: "musical instrument", cat: "Extra: Hobbys & Berufe", ex: "Spielst du ein Instrument?", extra: true },
      { art: "die", sg: "Gitarre", pl: "die Gitarren", akk: "die Gitarre", dat: "der Gitarre", en: "guitar", cat: "Extra: Hobbys & Berufe", ex: "Ich spiele gern Gitarre.", extra: true },
      { art: "das", sg: "Klavier", pl: "die Klaviere", akk: "das Klavier", dat: "dem Klavier", en: "piano", cat: "Extra: Hobbys & Berufe", ex: "Sie lernt Klavier spielen.", extra: true },
      { art: "das", sg: "Foto", pl: "die Fotos", akk: "das Foto", dat: "dem Foto", en: "photo", cat: "Extra: Hobbys & Berufe", ex: "Er macht gern Fotos auf Reisen.", extra: true },
      { art: "der", sg: "Verein", pl: "die Vereine", akk: "den Verein", dat: "dem Verein", en: "club / association", cat: "Extra: Hobbys & Berufe", ex: "Ich spiele Fußball im Verein.", extra: true },
      { art: "der", sg: "Arbeitsplatz", pl: "die Arbeitsplätze", akk: "den Arbeitsplatz", dat: "dem Arbeitsplatz", en: "workplace", cat: "Extra: Hobbys & Berufe", ex: "Mein Arbeitsplatz ist im Zentrum.", extra: true },
      { art: "der", sg: "Kollege", pl: "die Kollegen", fem: "die Kollegin (Pl. -innen)", akk: "den Kollegen", dat: "dem Kollegen", en: "colleague", cat: "Extra: Hobbys & Berufe", ex: "Meine Kollegen sind sehr freundlich.", extra: true },
      { art: "der", sg: "Anwalt", pl: "die Anwälte", fem: "die Anwältin (Pl. -innen)", akk: "den Anwalt", dat: "dem Anwalt", en: "attorney / lawyer", cat: "Extra: Hobbys & Berufe", ex: "Mein Onkel ist Anwalt.", extra: true },
      { art: "der", sg: "Pilot", pl: "die Piloten", fem: "die Pilotin (Pl. -innen)", akk: "den Piloten", dat: "dem Piloten", en: "pilot", cat: "Extra: Hobbys & Berufe", ex: "Die Pilotin fliegt nach München.", extra: true },
      // Extra: Software Engineering (Kapitel 2)
      { art: "der", sg: "Softwareentwickler", pl: "die Softwareentwickler", fem: "die Softwareentwicklerin (Pl. -innen)", akk: "den Softwareentwickler", dat: "dem Softwareentwickler", en: "software engineer / developer", cat: "Extra: Software Engineering", ex: "Ich arbeite als Softwareentwickler.", extra: true },
      { art: "der", sg: "Entwickler", pl: "die Entwickler", fem: "die Entwicklerin (Pl. -innen)", akk: "den Entwickler", dat: "dem Entwickler", en: "developer", cat: "Extra: Software Engineering", ex: "Unser Team sucht einen neuen Entwickler.", extra: true },
      { art: "der", sg: "Projektleiter", pl: "die Projektleiter", fem: "die Projektleiterin (Pl. -innen)", akk: "den Projektleiter", dat: "dem Projektleiter", en: "project manager / lead", cat: "Extra: Software Engineering", ex: "Die Projektleiterin plant den Sprint.", extra: true },
      { art: "das", sg: "Team", pl: "die Teams", akk: "das Team", dat: "dem Team", en: "team", cat: "Extra: Software Engineering", ex: "Ich arbeite gern in einem internationalen Team.", extra: true },
      { art: "das", sg: "Projekt", pl: "die Projekte", akk: "das Projekt", dat: "dem Projekt", en: "project", cat: "Extra: Software Engineering", ex: "Das Projekt ist sehr spannend.", extra: true },
      { art: "die", sg: "Aufgabe", pl: "die Aufgaben", akk: "die Aufgabe", dat: "der Aufgabe", en: "task / ticket", cat: "Extra: Software Engineering", ex: "Ich habe heute drei wichtige Aufgaben.", extra: true },
      { art: "die", sg: "Abteilung", pl: "die Abteilungen", akk: "die Abteilung", dat: "der Abteilung", en: "department", cat: "Extra: Software Engineering", ex: "Ich arbeite in der IT-Abteilung.", extra: true },
      { art: "der", sg: "Lebenslauf", pl: "die Lebensläufe", akk: "den Lebenslauf", dat: "dem Lebenslauf", en: "CV / resume", cat: "Extra: Software Engineering", ex: "Ich schicke meinen Lebenslauf als PDF.", extra: true },
      { art: "das", sg: "Vorstellungsgespräch", pl: "die Vorstellungsgespräche", akk: "das Vorstellungsgespräch", dat: "dem Vorstellungsgespräch", en: "job interview", cat: "Extra: Software Engineering", ex: "Am Donnerstag habe ich ein Vorstellungsgespräch.", extra: true }
    ],
    verbs: [
      { inf: "kochen", en: "to cook", type: "Regular", caseGov: "+ Akk.", ich: "koche", du: "kochst", er: "kocht", wir: "kochen", ihr: "kocht", sie: "kochen", imp: "Koch! / Kocht! / Kochen Sie!", prt: "kochte", ex: "Kochen wir am Wochenende Spaghetti?", extra: false },
      { inf: "arbeiten", en: "to work", type: "Regular (-e-)", caseGov: "—", ich: "arbeite", du: "arbeitest", er: "arbeitet", wir: "arbeiten", ihr: "arbeitet", sie: "arbeiten", imp: "Arbeite! / Arbeitet! / Arbeiten Sie!", prt: "arbeitete", ex: "Ich arbeite von Montag bis Freitag.", extra: false },
      { inf: "lesen", en: "to read", type: "Vowel Change (e→ie)", caseGov: "+ Akk.", ich: "lese", du: "liest", er: "liest", wir: "lesen", ihr: "lest", sie: "lesen", imp: "Lies! / Lest! / Lesen Sie!", prt: "las", ex: "Ich lese im Moment ein Buch.", extra: false },
      { inf: "sprechen", en: "to speak", type: "Vowel Change (e→i)", caseGov: "+ Akk.", ich: "spreche", du: "sprichst", er: "spricht", wir: "sprechen", ihr: "sprecht", sie: "sprechen", imp: "Sprich! / Sprecht! / Sprechen Sie!", prt: "sprach", ex: "Sprichst du Französisch?", extra: false },
      { inf: "spielen", en: "to play", type: "Regular", caseGov: "+ Akk.", ich: "spiele", du: "spielst", er: "spielt", wir: "spielen", ihr: "spielt", sie: "spielen", imp: "Spiel! / Spielt! / Spielen Sie!", prt: "spielte", ex: "Sie spielen super Fußball!", extra: false },
      { inf: "schwimmen", en: "to swim", type: "Regular", caseGov: "—", ich: "schwimme", du: "schwimmst", er: "schwimmt", wir: "schwimmen", ihr: "schwimmt", sie: "schwimmen", imp: "Schwimm! / Schwimmt! / Schwimmen Sie!", prt: "schwamm", ex: "Schwimmen Sie gern? Ja, ich schwimme gern.", extra: false },
      { inf: "singen", en: "to sing", type: "Regular", caseGov: "+ Akk.", ich: "singe", du: "singst", er: "singt", wir: "singen", ihr: "singt", sie: "singen", imp: "Sing! / Singt! / Singen Sie!", prt: "sang", ex: "Singst du auch so gut?", extra: false },
      { inf: "tanzen", en: "to dance", type: "Regular (-z)", caseGov: "—", ich: "tanze", du: "tanzt", er: "tanzt", wir: "tanzen", ihr: "tanzt", sie: "tanzen", imp: "Tanz! / Tanzt! / Tanzen Sie!", prt: "tanzte", ex: "Am Samstag tanzen wir gern.", extra: false },
      { inf: "malen", en: "to paint", type: "Regular", caseGov: "+ Akk.", ich: "male", du: "malst", er: "malt", wir: "malen", ihr: "malt", sie: "malen", imp: "Mal! / Malt! / Malen Sie!", prt: "malte", ex: "Meine Hobbys sind Malen und Lesen.", extra: false },
      { inf: "fotografieren", en: "to take photos", type: "Regular", caseGov: "+ Akk.", ich: "fotografiere", du: "fotografierst", er: "fotografiert", wir: "fotografieren", ihr: "fotografiert", sie: "fotografieren", imp: "Fotografier! / Fotografiert! / Fotografieren Sie!", prt: "fotografierte", ex: "Er fotografiert gern die Natur.", extra: false },
      { inf: "joggen", en: "to jog", type: "Regular", caseGov: "—", ich: "jogge", du: "joggst", er: "joggt", wir: "joggen", ihr: "joggt", sie: "joggen", imp: "Jogg! / Joggt! / Joggen Sie!", prt: "joggte", ex: "Joggt ihr morgen auch?", extra: false },
      { inf: "wandern", en: "to hike", type: "Regular (-ern)", caseGov: "—", ich: "wandere", du: "wanderst", er: "wandert", wir: "wandern", ihr: "wandert", sie: "wandern", imp: "Wandere! / Wandert! / Wandern Sie!", prt: "wanderte", ex: "Im Herbst wandern wir in den Bergen.", extra: false },
      { inf: "klettern", en: "to climb", type: "Regular (-ern)", caseGov: "—", ich: "klettere", du: "kletterst", er: "klettert", wir: "klettern", ihr: "klettert", sie: "klettern", imp: "Klettere! / Klettert! / Klettern Sie!", prt: "kletterte", ex: "Er klettert gern am Wochenende.", extra: false },
      { inf: "backen", en: "to bake", type: "Regular (A1)", caseGov: "+ Akk.", ich: "backe", du: "backst", er: "backt", wir: "backen", ihr: "backt", sie: "backen", imp: "Back! / Backt! / Backen Sie!", prt: "backte", ex: "Ich backe gern Kuchen.", extra: false },
      { inf: "reisen", en: "to travel", type: "Regular (-s)", caseGov: "—", ich: "reise", du: "reist", er: "reist", wir: "reisen", ihr: "reist", sie: "reisen", imp: "Reis! / Reist! / Reisen Sie!", prt: "reiste", ex: "Tom und ich reisen gern. Wir lieben Paris!", extra: false },
      { inf: "surfen", en: "to surf / browse", type: "Regular", caseGov: "—", ich: "surfe", du: "surfst", er: "surft", wir: "surfen", ihr: "surft", sie: "surfen", imp: "Surf! / Surft! / Surfen Sie!", prt: "surfte", ex: "Sie surft gern im Internet.", extra: false },
      { inf: "fahren", en: "to drive / ride", type: "Vowel Change (a→ä)", caseGov: "— / + Akk.", ich: "fahre", du: "fährst", er: "fährt", wir: "fahren", ihr: "fahrt", sie: "fahren", imp: "Fahr! / Fahrt! / Fahren Sie!", prt: "fuhr", ex: "Ich fahre gern Rad.", extra: false },
      { inf: "treffen", en: "to meet", type: "Vowel Change (e→i)", caseGov: "+ Akk.", ich: "treffe", du: "triffst", er: "trifft", wir: "treffen", ihr: "trefft", sie: "treffen", imp: "Triff! / Trefft! / Treffen Sie!", prt: "traf", ex: "Er trifft Freunde am Freitag.", extra: false },
      { inf: "fernsehen", en: "to watch TV", type: "Separable + Vowel (e→ie)", caseGov: "—", ich: "sehe fern", du: "siehst fern", er: "sieht fern", wir: "sehen fern", ihr: "seht fern", sie: "sehen fern", imp: "Sieh fern! / Seht fern! / Sehen Sie fern!", prt: "sah fern", ex: "Abends sehe ich manchmal fern.", extra: false },
      { inf: "spazieren gehen", en: "to go for a walk", type: "Compound Verb", caseGov: "—", ich: "gehe spazieren", du: "gehst spazieren", er: "geht spazieren", wir: "gehen spazieren", ihr: "geht spazieren", sie: "gehen spazieren", imp: "Geh spazieren! / Geht spazieren!", prt: "ging spazieren", ex: "Am Sonntag gehen wir im Park spazieren.", extra: false },
      { inf: "hören", en: "to hear / listen", type: "Regular", caseGov: "+ Akk.", ich: "höre", du: "hörst", er: "hört", wir: "hören", ihr: "hört", sie: "hören", imp: "Hör! / Hört! / Hören Sie!", prt: "hörte", ex: "Ich höre gern Musik.", extra: false },
      { inf: "studieren", en: "to study (university)", type: "Regular", caseGov: "+ Akk.", ich: "studiere", du: "studierst", er: "studiert", wir: "studieren", ihr: "studiert", sie: "studieren", imp: "Studier! / Studiert! / Studieren Sie!", prt: "studierte", ex: "Sie studiert Informatik in Berlin.", extra: false },
      { inf: "sein", en: "to be", type: "Irregular", caseGov: "+ Nom.", ich: "bin", du: "bist", er: "ist", wir: "sind", ihr: "seid", sie: "sind", imp: "Sei! / Seid! / Seien Sie!", prt: "war", ex: "Ich bin Ingenieur.", extra: false },
      { inf: "haben", en: "to have", type: "Irregular", caseGov: "+ Akk.", ich: "habe", du: "hast", er: "hat", wir: "haben", ihr: "habt", sie: "haben", imp: "Hab! / Habt! / Haben Sie!", prt: "hatte", ex: "Am Sonntag habe ich frei.", extra: false },
      { inf: "sich verabreden", en: "to arrange to meet", type: "Reflexive (-e-)", caseGov: "—", ich: "verabrede mich", du: "verabredest dich", er: "verabredet sich", wir: "verabreden uns", ihr: "verabredet euch", sie: "verabreden sich", imp: "Verabrede dich!", prt: "verabredete sich", ex: "Wir verabreden uns für Freitag.", extra: false },
      { inf: "sich verabschieden", en: "to say goodbye", type: "Reflexive (-e-)", caseGov: "—", ich: "verabschiede mich", du: "verabschiedest dich", er: "verabschiedet sich", wir: "verabschieden uns", ihr: "verabschiedet euch", sie: "verabschieden sich", imp: "Verabschiede dich!", prt: "verabschiedete sich", ex: "Um 20 Uhr verabschieden wir uns.", extra: false },
      // Extra Verbs
      { inf: "trainieren", en: "to train / work out", type: "Regular", caseGov: "— / + Akk.", ich: "trainiere", du: "trainierst", er: "trainiert", wir: "trainieren", ihr: "trainiert", sie: "trainieren", imp: "Trainier! / Trainiert! / Trainieren Sie!", prt: "trainierte", ex: "Ich trainiere dreimal pro Woche.", extra: true },
      { inf: "zeichnen", en: "to draw", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "zeichne", du: "zeichnest", er: "zeichnet", wir: "zeichnen", ihr: "zeichnet", sie: "zeichnen", imp: "Zeichne! / Zeichnet! / Zeichnen Sie!", prt: "zeichnete", ex: "Er zeichnet sehr gut.", extra: true },
      { inf: "verdienen", en: "to earn (money)", type: "Regular", caseGov: "+ Akk.", ich: "verdiene", du: "verdienst", er: "verdient", wir: "verdienen", ihr: "verdient", sie: "verdienen", imp: "Verdien! / Verdient!", prt: "verdiente", ex: "Ein Ingenieur verdient gut.", extra: true },
      { inf: "programmieren", en: "to program / code", type: "Regular", caseGov: "+ Akk.", ich: "programmiere", du: "programmierst", er: "programmiert", wir: "programmieren", ihr: "programmiert", sie: "programmieren", imp: "Programmier! / Programmieren Sie!", prt: "programmierte", ex: "Ich programmiere jeden Tag mit Java und Python.", extra: true },
      { inf: "entwickeln", en: "to develop", type: "Regular (-eln)", caseGov: "+ Akk.", ich: "entwickle", du: "entwickelst", er: "entwickelt", wir: "entwickeln", ihr: "entwickelt", sie: "entwickeln", imp: "Entwickle! / Entwickeln Sie!", prt: "entwickelte", ex: "Wir entwickeln eine neue Web-Anwendung.", extra: true },
      { inf: "testen", en: "to test", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "teste", du: "testest", er: "testet", wir: "testen", ihr: "testet", sie: "testen", imp: "Teste! / Testen Sie!", prt: "testete", ex: "Ich teste den neuen Code vor dem Release.", extra: true }
    ],
    expressions: [
      { de: "gern / nicht gern", en: "gladly (like doing) / don't like doing", note: "Adverb — placed after the verb: Ich lese gern.", extra: false },
      { de: "frei haben", en: "to have time off", note: "Am Freitag habe ich frei.", extra: false },
      { de: "Was sind deine Hobbys?", en: "What are your hobbies?", note: "Use 'sind' (plural), not 'ist'!", extra: false },
      { de: "Gehen wir am Freitag ins Kino?", en: "Shall we go to the cinema on Friday?", note: "Making plans (sich verabreden).", extra: false },
      { de: "Ja, gern. / Ja, super!", en: "Yes, gladly. / Yes, great!", note: "Accepting an invitation.", extra: false },
      { de: "Nein / Nee / Nö, das geht leider nicht.", en: "No, unfortunately that doesn't work.", note: "Colloquial 'nein': nee / nö (Bayern/Österreich: na).", extra: false },
      { de: "Was bist du von Beruf? / Was sind Sie von Beruf?", en: "What is your profession?", note: "Answer without article: Ich bin Arzt / Ärztin.", extra: false },
      { de: "Ich bin 1994 geboren.", en: "I was born in 1994.", note: "Years 1100–1999: neunzehnhundertvierundneunzig.", extra: false },
      { de: "in meiner Freizeit", en: "in my free time", note: "Useful opener when talking about hobbies.", extra: true },
      { de: "Es macht mir Spaß!", en: "I enjoy it / It's fun for me!", note: "Kochen macht mir viel Spaß.", extra: true },
      { de: "Ich arbeite als Softwareentwickler.", en: "I work as a software engineer.", note: "No article after 'als' for professions!", extra: true },
      { de: "Ich arbeite im Homeoffice / hybrid.", en: "I work from home / hybrid.", note: "Very common in German tech job talks.", extra: true }
    ],
    grammar: [
      {
        title: "1. Verb Conjugation (Präsens) & Vowel Changes",
        badge: "Core",
        explanation: "Drop <code>-en</code> from the infinitive to get the stem, then add the personal ending. Watch verbs whose stem ends in <code>-t/-d</code> (add an extra <code>-e-</code>) and strong verbs with a vowel change in <strong>du</strong> and <strong>er/sie/es</strong> only!",
        table: {
          headers: ["Pronoun", "Ending", "kochen (reg.)", "arbeiten (-e-)", "lesen (e→ie)", "sprechen (e→i)", "sein / haben"],
          rows: [
            ["ich", "-e", "koche", "arbeite", "lese", "spreche", "bin / habe"],
            ["du", "-st", "kochst", "arbeit<strong>e</strong>st", "l<strong>ie</strong>st", "spr<strong>i</strong>chst", "bist / hast"],
            ["er / sie / es", "-t", "kocht", "arbeit<strong>e</strong>t", "l<strong>ie</strong>st", "spr<strong>i</strong>cht", "ist / hat"],
            ["wir", "-en", "kochen", "arbeiten", "lesen", "sprechen", "sind / haben"],
            ["ihr", "-t", "kocht", "arbeit<strong>e</strong>t", "lest", "sprecht", "seid / habt"],
            ["sie / Sie", "-en", "kochen", "arbeiten", "lesen", "sprechen", "sind / haben"]
          ]
        },
        tip: "Trap: <strong>ihr</strong> NEVER has a vowel change! Say <em>ihr lest</em>, <em>ihr sprecht</em>, <em>ihr fahrt</em>."
      },
      {
        title: "2. Statements, Yes/No Questions & W-Questions",
        badge: "Word Order",
        explanation: "In statements and W-questions, the conjugated verb is always in <strong>Position 2</strong>. In Yes/No questions, the verb jumps to <strong>Position 1</strong>.",
        table: {
          headers: ["Type", "Pos. 1", "Pos. 2 (Verb)", "Rest of Sentence"],
          rows: [
            ["Statement", "Ich", "<strong>schwimme</strong>", "gern."],
            ["W-Question", "Was", "<strong>machst</strong>", "du gern?"],
            ["Ja/Nein-Question", "<strong>Schwimmen</strong>", "Sie", "gern? → Ja, ich schwimme. / Nein, ich schwimme nicht."]
          ]
        },
        tip: "Remember: <strong>Was sind deine Hobbys?</strong> (plural) — not 'Was ist deine Hobbys?'."
      },
      {
        title: "3. Professions: Feminine Forms & Plurals",
        badge: "Nouns",
        explanation: "After <em>sein</em>, professions normally take <strong>no article</strong>: <em>Ich bin Ingenieur. / Sie ist Ärztin.</em>",
        table: {
          headers: ["Pattern", "Masculine Sg.", "Masculine Pl.", "Feminine Sg. (+in)", "Feminine Pl. (+innen)"],
          rows: [
            ["-er → - (no change)", "der Lehrer", "die Lehrer", "die Lehrer<strong>in</strong>", "die Lehrer<strong>innen</strong>"],
            ["-ist/-ent/-ant/-oge → -en", "der Student", "die Student<strong>en</strong>", "die Student<strong>in</strong>", "die Student<strong>innen</strong>"],
            ["Umlaut + -in", "der Arzt / der Koch", "die Ärzte / die Köche", "die <strong>Ärztin</strong> / die <strong>Köchin</strong>", "die Ärztinnen / die Köchinnen"],
            ["-mann → -frau", "der Kaufmann", "die Kaufleute", "die Kauf<strong>frau</strong>", "die Kauffrauen"],
            ["Irregular Pl.", "der Ingenieur", "die Ingenieur<strong>e</strong>", "die Ingenieurin", "die Ingenieurinnen"]
          ]
        },
        tip: "Noun endings <strong>-ung, -keit, -heit</strong> are ALWAYS feminine (<code>die</code>) and form plural with <code>-en</code>. Nouns ending in <code>-e</code> usually add <code>-n</code>."
      },
      {
        title: "4. Compound Numbers & Years",
        badge: "Numbers",
        explanation: "For 21–99, read <strong>ones + und + tens</strong> (24 = vierundzwanzig). For years before 2000, read in hundreds; from 2000 onward, read in thousands!",
        table: {
          headers: ["Number / Year", "German Spelling", "Rule"],
          rows: [
            ["101", "(ein)hunderteins", "Standard number"],
            ["1954 (amount)", "eintausendneunhundertvierundfünfzig", "Euro / quantity = tausend"],
            ["1954 (year)", "<strong>neunzehnhundert</strong>vierundfünfzig", "Year 1100–1999 = hundreds"],
            ["2005 (both)", "zweitausendfünf", "Year 2000+ = zweitausend..."],
            ["345.617", "dreihundertfünfundvierzigtausendsechshundertsiebzehn", "Written as one word!"]
          ]
        },
        tip: "Watch spelling exceptions: <strong>sechzehn</strong> (no s), <strong>siebzehn</strong> (no en), <strong>dreißig</strong> (ß not z)."
      }
    ]
  },

  // =========================================================================
  // KAPITEL 3: IN DER STADT, MONATE, JAHRESZEITEN & WEGBESCHREIBUNG
  // =========================================================================
  {
    id: 3,
    code: "Kapitel 3",
    title: "In der Stadt, Jahreszeiten & Wege",
    subtitle: "Months, seasons, city landmarks (Hamburg), transport, articles & giving directions",
    color: "#059669",
    icon: "🏙️",
    summary: "Name months & seasons, describe places in a city, use definite/indefinite/negative articles (der/ein/kein), distinguish long vs. short vowels, and give polite directions with Imperativ (Sie).",
    nouns: [
      // Months & Seasons
      { art: "der", sg: "Monat", pl: "die Monate", akk: "den Monat", dat: "dem Monat", en: "month", cat: "Monate & Jahreszeiten", ex: "Der erste Monat ist Januar.", extra: false },
      { art: "der", sg: "Januar", pl: "die Januare", akk: "den Januar", dat: "dem Januar", en: "January", cat: "Monate & Jahreszeiten", ex: "Im Januar ist es kalt.", extra: false },
      { art: "der", sg: "Februar", pl: "die Februare", akk: "den Februar", dat: "dem Februar", en: "February", cat: "Monate & Jahreszeiten", ex: "Im Februar schneit es oft.", extra: false },
      { art: "der", sg: "März", pl: "die Märze", akk: "den März", dat: "dem März", en: "March", cat: "Monate & Jahreszeiten", ex: "Im März beginnt der Frühling.", extra: false },
      { art: "der", sg: "April", pl: "die Aprile", akk: "den April", dat: "dem April", en: "April", cat: "Monate & Jahreszeiten", ex: "Im April fahren wir Fahrrad.", extra: false },
      { art: "der", sg: "Mai", pl: "die Maie", akk: "den Mai", dat: "dem Mai", en: "May", cat: "Monate & Jahreszeiten", ex: "Im Mai ist das Wetter schön.", extra: false },
      { art: "der", sg: "Juni", pl: "die Junis", akk: "den Juni", dat: "dem Juni", en: "June", cat: "Monate & Jahreszeiten", ex: "Im Juni beginnt der Sommer.", extra: false },
      { art: "der", sg: "Juli", pl: "die Julis", akk: "den Juli", dat: "dem Juli", en: "July", cat: "Monate & Jahreszeiten", ex: "Im Juli gehen wir schwimmen.", extra: false },
      { art: "der", sg: "August", pl: "die Auguste", akk: "den August", dat: "dem August", en: "August", cat: "Monate & Jahreszeiten", ex: "Die Party ist im August.", extra: false },
      { art: "der", sg: "September", pl: "die September", akk: "den September", dat: "dem September", en: "September", cat: "Monate & Jahreszeiten", ex: "Im September beginnt der Herbst.", extra: false },
      { art: "der", sg: "Oktober", pl: "die Oktober", akk: "den Oktober", dat: "dem Oktober", en: "October", cat: "Monate & Jahreszeiten", ex: "Im Oktober ist das Theater-Festival.", extra: false },
      { art: "der", sg: "November", pl: "die November", akk: "den November", dat: "dem November", en: "November", cat: "Monate & Jahreszeiten", ex: "Heute ist der zweite November.", extra: false },
      { art: "der", sg: "Dezember", pl: "die Dezember", akk: "den Dezember", dat: "dem Dezember", en: "December", cat: "Monate & Jahreszeiten", ex: "Im Dezember ist Winter.", extra: false },
      { art: "die", sg: "Jahreszeit", pl: "die Jahreszeiten", akk: "die Jahreszeit", dat: "der Jahreszeit", en: "season", cat: "Monate & Jahreszeiten", ex: "Welche Jahreszeit magst du?", extra: false },
      { art: "der", sg: "Frühling", pl: "die Frühlinge", akk: "den Frühling", dat: "dem Frühling", en: "spring", cat: "Monate & Jahreszeiten", ex: "Im Frühling fahre ich Fahrrad.", extra: false },
      { art: "der", sg: "Sommer", pl: "die Sommer", akk: "den Sommer", dat: "dem Sommer", en: "summer", cat: "Monate & Jahreszeiten", ex: "Im Sommer schwimme ich gern.", extra: false },
      { art: "der", sg: "Herbst", pl: "die Herbste", akk: "den Herbst", dat: "dem Herbst", en: "autumn / fall", cat: "Monate & Jahreszeiten", ex: "Im Herbst reisen wir nach Hamburg.", extra: false },
      { art: "der", sg: "Winter", pl: "die Winter", akk: "den Winter", dat: "dem Winter", en: "winter", cat: "Monate & Jahreszeiten", ex: "Im Winter gehen wir ins Museum.", extra: false },

      // City Landmarks (Hamburg)
      { art: "die", sg: "Stadt", pl: "die Städte", akk: "die Stadt", dat: "der Stadt", en: "city", cat: "In der Stadt", ex: "Hamburg ist eine schöne Stadt.", extra: false },
      { art: "der", sg: "Bahnhof", pl: "die Bahnhöfe", akk: "den Bahnhof", dat: "dem Bahnhof", en: "train station", cat: "In der Stadt", ex: "Jeden Tag fahren hier 720 Züge.", extra: false },
      { art: "der", sg: "Zug", pl: "die Züge", akk: "den Zug", dat: "dem Zug", en: "train", cat: "In der Stadt", ex: "Der Zug fährt nach Berlin.", extra: false },
      { art: "das", sg: "Konzerthaus", pl: "die Konzerthäuser", akk: "das Konzerthaus", dat: "dem Konzerthaus", en: "concert hall", cat: "In der Stadt", ex: "Die Elbphilharmonie ist ein Konzerthaus.", extra: false },
      { art: "das", sg: "Konzert", pl: "die Konzerte", akk: "das Konzert", dat: "dem Konzert", en: "concert", cat: "In der Stadt", ex: "Im ersten Jahr gab es 600 Konzerte.", extra: false },
      { art: "die", sg: "Oper", pl: "die Opern", akk: "die Oper", dat: "der Oper", en: "opera", cat: "In der Stadt", ex: "Die Oper ist im Zentrum.", extra: false },
      { art: "der", sg: "Hafen", pl: "die Häfen", akk: "den Hafen", dat: "dem Hafen", en: "harbor / port", cat: "In der Stadt", ex: "Die Schiffe sind im Hafen.", extra: false },
      { art: "das", sg: "Schiff", pl: "die Schiffe", akk: "das Schiff", dat: "dem Schiff", en: "ship", cat: "In der Stadt", ex: "12.000 Schiffe fahren pro Jahr in den Hafen.", extra: false },
      { art: "das", sg: "Meer", pl: "die Meere", akk: "das Meer", dat: "dem Meer", en: "sea / ocean", cat: "In der Stadt", ex: "Bis zum Meer sind es 100 km.", extra: false },
      { art: "der", sg: "Fluss", pl: "die Flüsse", akk: "den Fluss", dat: "dem Fluss", en: "river", cat: "In der Stadt", ex: "Das ist kein See, das ist ein Fluss.", extra: false },
      { art: "der", sg: "See", pl: "die Seen", akk: "den See", dat: "dem See", en: "lake", cat: "In der Stadt", ex: "Wie heißt der See?", extra: false },
      { art: "das", sg: "Land", pl: "die Länder", akk: "das Land", dat: "dem Land", en: "country", cat: "In der Stadt", ex: "Die Schiffe fahren in 175 Länder.", extra: false },
      { art: "der", sg: "Platz", pl: "die Plätze", akk: "den Platz", dat: "dem Platz", en: "square / space / seat", cat: "In der Stadt", ex: "Hier ist Platz für 2.500 Menschen.", extra: false },
      { art: "der", sg: "Mensch", pl: "die Menschen", akk: "den Menschen", dat: "dem Menschen", en: "person / human", cat: "In der Stadt", ex: "Viele Menschen besuchen Hamburg.", extra: false },
      { art: "der", sg: "Turm", pl: "die Türme", akk: "den Turm", dat: "dem Turm", en: "tower", cat: "In der Stadt", ex: "Der Turm ist 132 Meter hoch.", extra: false },
      { art: "die", sg: "Kirche", pl: "die Kirchen", akk: "die Kirche", dat: "der Kirche", en: "church (vs. die Kirsche = cherry!)", cat: "In der Stadt", ex: "Hier ist eine Kirche: die Michaeliskirche.", extra: false },
      { art: "das", sg: "Rathaus", pl: "die Rathäuser", akk: "das Rathaus", dat: "dem Rathaus", en: "town hall / city hall", cat: "In der Stadt", ex: "Das Rathaus ist über 120 Jahre alt.", extra: false },
      { art: "das", sg: "Hotel", pl: "die Hotels", akk: "das Hotel", dat: "dem Hotel", en: "hotel", cat: "In der Stadt", ex: "Das Hotel heißt 'Alster'.", extra: false },
      { art: "der", sg: "Park", pl: "die Parks", akk: "den Park", dat: "dem Park", en: "park", cat: "In der Stadt", ex: "Entschuldigung, wo ist der Park?", extra: false },

      // Transport & Directions
      { art: "der", sg: "Bus", pl: "die Busse", akk: "den Bus", dat: "dem Bus", en: "bus", cat: "Verkehr & Wegbeschreibung", ex: "Nein, das ist kein Bus, das ist eine U-Bahn.", extra: false },
      { art: "die", sg: "U-Bahn", pl: "die U-Bahnen", akk: "die U-Bahn", dat: "der U-Bahn", en: "subway / underground", cat: "Verkehr & Wegbeschreibung", ex: "Wo ist die U-Bahn?", extra: false },
      { art: "das", sg: "Fahrrad", pl: "die Fahrräder", akk: "das Fahrrad", dat: "dem Fahrrad", en: "bicycle", cat: "Verkehr & Wegbeschreibung", ex: "Oje, kein Fahrrad!", extra: false },
      { art: "die", sg: "Fahrkarte", pl: "die Fahrkarten", akk: "die Fahrkarte", dat: "der Fahrkarte", en: "transit ticket", cat: "Verkehr & Wegbeschreibung", ex: "Oh nein, keine Fahrkarte!", extra: false },
      { art: "der", sg: "Weg", pl: "die Wege", akk: "den Weg", dat: "dem Weg", en: "way / path", cat: "Verkehr & Wegbeschreibung", ex: "Der Weg zum Hotel ist einfach.", extra: false },
      { art: "die", sg: "Kreuzung", pl: "die Kreuzungen", akk: "die Kreuzung", dat: "der Kreuzung", en: "intersection / crossroads", cat: "Verkehr & Wegbeschreibung", ex: "Gehen Sie an der Kreuzung links.", extra: false },
      { art: "die", sg: "Ampel", pl: "die Ampeln", akk: "die Ampel", dat: "der Ampel", en: "traffic light", cat: "Verkehr & Wegbeschreibung", ex: "An der Ampel fahren Sie rechts.", extra: false },
      { art: "die", sg: "Kurve", pl: "die Kurven", akk: "die Kurve", dat: "der Kurve", en: "curve / bend", cat: "Verkehr & Wegbeschreibung", ex: "Nach der Kurve sehen Sie das Hotel.", extra: false },
      { art: "der", sg: "Zebrastreifen", pl: "die Zebrastreifen", akk: "den Zebrastreifen", dat: "dem Zebrastreifen", en: "crosswalk", cat: "Verkehr & Wegbeschreibung", ex: "Gehen Sie über den Zebrastreifen.", extra: false },
      { art: "der", sg: "Fahrradweg", pl: "die Fahrradwege", akk: "den Fahrradweg", dat: "dem Fahrradweg", en: "bike lane", cat: "Verkehr & Wegbeschreibung", ex: "Fahren Sie auf dem Fahrradweg.", extra: false },
      { art: "die", sg: "Autobahn", pl: "die Autobahnen", akk: "die Autobahn", dat: "der Autobahn", en: "highway / motorway", cat: "Verkehr & Wegbeschreibung", ex: "Die Autobahn nach Berlin ist frei.", extra: false },

      // Culture & Events
      { art: "das", sg: "Festival", pl: "die Festivals", akk: "das Festival", dat: "dem Festival", en: "festival", cat: "Kultur & Events", ex: "Das Theater-Festival ist im Oktober.", extra: false },
      { art: "das", sg: "Orchester", pl: "die Orchester", akk: "das Orchester", dat: "dem Orchester", en: "orchestra", cat: "Kultur & Events", ex: "Das Orchester spielt Mozart.", extra: false },
      { art: "der", sg: "Chor", pl: "die Chöre", akk: "den Chor", dat: "dem Chor", en: "choir", cat: "Kultur & Events", ex: "Der Chor singt sehr schön.", extra: false },
      { art: "der", sg: "Film", pl: "die Filme", akk: "den Film", dat: "dem Film", en: "film / movie", cat: "Kultur & Events", ex: "40.000 Filmfans sehen über 100 Filme.", extra: false },
      { art: "das", sg: "Publikum", pl: "— (singular)", akk: "das Publikum", dat: "dem Publikum", en: "audience", cat: "Kultur & Events", ex: "Der Regisseur präsentiert dem Publikum seinen Film.", extra: false },

      // EXTRA City & Transport Vocab
      { art: "die", sg: "Haltestelle", pl: "die Haltestellen", akk: "die Haltestelle", dat: "der Haltestelle", en: "bus / tram stop", cat: "Extra: Stadt & Verkehr", ex: "Die Haltestelle ist gleich links.", extra: true },
      { art: "die", sg: "Straßenbahn", pl: "die Straßenbahnen", akk: "die Straßenbahn", dat: "der Straßenbahn", en: "tram / streetcar", cat: "Extra: Stadt & Verkehr", ex: "Ich fahre mit der Straßenbahn zur Arbeit.", extra: true },
      { art: "der", sg: "Flughafen", pl: "die Flughäfen", akk: "den Flughafen", dat: "dem Flughafen", en: "airport", cat: "Extra: Stadt & Verkehr", ex: "Wie komme ich zum Flughafen?", extra: true },
      { art: "die", sg: "Brücke", pl: "die Brücken", akk: "die Brücke", dat: "der Brücke", en: "bridge", cat: "Extra: Stadt & Verkehr", ex: "Gehen Sie über die Brücke.", extra: true },
      { art: "die", sg: "Ecke", pl: "die Ecken", akk: "die Ecke", dat: "der Ecke", en: "corner", cat: "Extra: Stadt & Verkehr", ex: "Das Café ist gleich um die Ecke.", extra: true },
      { art: "das", sg: "Zentrum", pl: "die Zentren", akk: "das Zentrum", dat: "dem Zentrum", en: "city center / downtown", cat: "Extra: Stadt & Verkehr", ex: "Das Rathaus liegt im Zentrum.", extra: true },
      { art: "die", sg: "Sehenswürdigkeit", pl: "die Sehenswürdigkeiten", akk: "die Sehenswürdigkeit", dat: "der Sehenswürdigkeit", en: "sight / tourist attraction", cat: "Extra: Stadt & Verkehr", ex: "Hamburg hat viele Sehenswürdigkeiten.", extra: true },
      { art: "die", sg: "Apotheke", pl: "die Apotheken", akk: "die Apotheke", dat: "der Apotheke", en: "pharmacy", cat: "Extra: Stadt & Verkehr", ex: "Gibt es hier eine Apotheke?", extra: true },
      { art: "der", sg: "Stadtplan", pl: "die Stadtpläne", akk: "den Stadtplan", dat: "dem Stadtplan", en: "city map", cat: "Extra: Stadt & Verkehr", ex: "Zeigen Sie den Weg auf dem Stadtplan.", extra: true },
      { art: "der", sg: "Arbeitsweg", pl: "die Arbeitswege", akk: "den Arbeitsweg", dat: "dem Arbeitsweg", en: "commute to work", cat: "Extra: Software Engineering", ex: "Mein Arbeitsweg dauert 30 Minuten.", extra: true },
      { art: "das", sg: "Gebäude", pl: "die Gebäude", akk: "das Gebäude", dat: "dem Gebäude", en: "building", cat: "Extra: Software Engineering", ex: "Unser Büro ist im zweiten Gebäude.", extra: true },
      { art: "der", sg: "Aufzug", pl: "die Aufzüge", akk: "den Aufzug", dat: "dem Aufzug", en: "elevator / lift", cat: "Extra: Software Engineering", ex: "Ich nehme den Aufzug in den dritten Stock.", extra: true },
      { art: "der", sg: "Konferenzraum", pl: "die Konferenzräume", akk: "den Konferenzraum", dat: "dem Konferenzraum", en: "conference / meeting room", cat: "Extra: Software Engineering", ex: "Das Meeting ist im Konferenzraum B.", extra: true }
    ],
    verbs: [
      { inf: "gehen", en: "to go / walk", type: "Regular", caseGov: "—", ich: "gehe", du: "gehst", er: "geht", wir: "gehen", ihr: "geht", sie: "gehen", imp: "Geh! / Geht! / Gehen Sie!", prt: "ging", ex: "Gehen Sie links und dann geradeaus!", extra: false },
      { inf: "kennen", en: "to know (a place/person)", type: "Regular", caseGov: "+ Akk.", ich: "kenne", du: "kennst", er: "kennt", wir: "kennen", ihr: "kennt", sie: "kennen", imp: "Kenn! / Kennt! / Kennen Sie!", prt: "kannte", ex: "Kennen Sie Hamburg?", extra: false },
      { inf: "suchen", en: "to search / look for", type: "Regular", caseGov: "+ Akk.", ich: "suche", du: "suchst", er: "sucht", wir: "suchen", ihr: "sucht", sie: "suchen", imp: "Such! / Sucht! / Suchen Sie!", prt: "suchte", ex: "Ich suche den Bahnhof.", extra: false },
      { inf: "sehen", en: "to see", type: "Vowel Change (e→ie)", caseGov: "+ Akk.", ich: "sehe", du: "siehst", er: "sieht", wir: "sehen", ihr: "seht", sie: "sehen", imp: "Sieh! / Seht! / Sehen Sie!", prt: "sah", ex: "Da sieht man den Hafen.", extra: false },
      { inf: "geben", en: "to give", type: "Vowel Change (e→i)", caseGov: "+ Dat. + Akk.", ich: "gebe", du: "gibst", er: "gibt", wir: "geben", ihr: "gebt", sie: "geben", imp: "Gib! / Gebt! / Geben Sie!", prt: "gab", ex: "Tickets gibt es ab 12,50 Euro.", extra: false },
      { inf: "finden", en: "to find", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "finde", du: "findest", er: "findet", wir: "finden", ihr: "findet", sie: "finden", imp: "Finde! / Findet! / Finden Sie!", prt: "fand", ex: "Welches Event finden Sie interessant?", extra: false },
      { inf: "zeigen", en: "to show", type: "Regular", caseGov: "+ Dat. + Akk.", ich: "zeige", du: "zeigst", er: "zeigt", wir: "zeigen", ihr: "zeigt", sie: "zeigen", imp: "Zeig! / Zeigt! / Zeigen Sie!", prt: "zeigte", ex: "Das Theater zeigt neue Produktionen.", extra: false },
      { inf: "vermuten", en: "to guess / suppose", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "vermute", du: "vermutest", er: "vermutet", wir: "vermuten", ihr: "vermutet", sie: "vermuten", imp: "Vermute! / Vermuten Sie!", prt: "vermutete", ex: "Vermuten Sie den Ort!", extra: false },
      // Extra Verbs
      { inf: "abbiegen", en: "to turn (a corner)", type: "Separable", caseGov: "—", ich: "biege ab", du: "biegst ab", er: "biegt ab", wir: "biegen ab", ihr: "biegt ab", sie: "biegen ab", imp: "Bieg ab! / Biegen Sie ab!", prt: "bog ab", ex: "Biegen Sie an der Ampel links ab!", extra: true },
      { inf: "umsteigen", en: "to transfer / change trains", type: "Separable", caseGov: "—", ich: "steige um", du: "steigst um", er: "steigt um", wir: "steigen um", ihr: "steigt um", sie: "steigen um", imp: "Steig um! / Steigen Sie um!", prt: "stieg um", ex: "Sie müssen am Hauptbahnhof umsteigen.", extra: true },
      { inf: "überqueren", en: "to cross (street/bridge)", type: "Regular", caseGov: "+ Akk.", ich: "überquere", du: "überquerst", er: "überquert", wir: "überqueren", ihr: "überquert", sie: "überqueren", imp: "Überqueren Sie!", prt: "überquerte", ex: "Überqueren Sie die Straße am Zebrastreifen.", extra: true },
      { inf: "pendeln", en: "to commute", type: "Regular (-eln)", caseGov: "—", ich: "pendle", du: "pendelst", er: "pendelt", wir: "pendeln", ihr: "pendelt", sie: "pendeln", imp: "—", prt: "pendelte", ex: "Zweimal pro Woche pendle ich ins Büro.", extra: true }
    ],
    expressions: [
      { de: "geradeaus / links / rechts / zurück", en: "straight ahead / left / right / back", note: "Core direction adverbs.", extra: false },
      { de: "zu Fuß gehen", en: "to go on foot / walk", note: "Ich gehe zu Fuß zur Arbeit.", extra: false },
      { de: "Entschuldigung, wo ist bitte…?", en: "Excuse me, where is … please?", note: "Polite way to ask for directions.", extra: false },
      { de: "Das ist ganz einfach.", en: "That is very simple.", note: "Giving reassuring directions.", extra: false },
      { de: "Moin! / Grüß Gott! / Grüezi!", en: "Hello! (Northern DE / Southern DE & AT / CH)", note: "Regional D-A-CH greetings.", extra: false },
      { de: "So ein Glück!", en: "What luck!", note: "Heute kein Test! So ein Glück!", extra: false },
      { de: "im Frühling / im Sommer / im April", en: "in spring / in summer / in April", note: "All months & seasons are 'der' → use 'im' (= in dem).", extra: false },
      { de: "gleich um die Ecke", en: "right around the corner", note: "Die U-Bahn ist gleich um die Ecke.", extra: true },
      { de: "gegenüber von / neben", en: "across from / next to", note: "Die Kirche ist neben dem Rathaus.", extra: true }
    ],
    grammar: [
      {
        title: "1. Definite, Indefinite & Negation Articles (Nominativ)",
        badge: "Core",
        explanation: "Use <strong>ein/eine</strong> when introducing something new, <strong>der/das/die</strong> when it is already known/specific, and <strong>kein/keine</strong> to negate a noun (replaces 'nicht ein'). Plural has NO indefinite article (—), only <code>keine</code>!",
        table: {
          headers: ["Gender", "Bestimmt (the)", "Unbestimmt (a/an)", "Negation (no / not a)", "Example"],
          rows: [
            ["Maskulin (der)", "<span class='g-m'>der</span> Mann", "<span class='g-m'>ein</span> Mann", "<span class='g-m'>kein</span> Mann", "Das ist <strong>ein</strong> Fluss. Das ist <strong>kein</strong> See."],
            ["Neutrum (das)", "<span class='g-n'>das</span> Hotel", "<span class='g-n'>ein</span> Hotel", "<span class='g-n'>kein</span> Hotel", "Das ist <strong>ein</strong> Fahrrad. Das ist <strong>kein</strong> Auto."],
            ["Feminin (die)", "<span class='g-f'>die</span> Kirche", "<span class='g-f'>eine</span> Kirche", "<span class='g-f'>keine</span> Kirche", "Das ist <strong>eine</strong> U-Bahn. Das ist <strong>keine</strong> Kirche."],
            ["Plural (die)", "<span class='g-p'>die</span> Schiffe", "<strong>—</strong> Schiffe", "<span class='g-p'>keine</span> Schiffe", "Das sind <strong>—</strong> Kinder. Das sind <strong>keine</strong> Busse."]
          ]
        },
        tip: "Trap: Never say <em>nicht ein Bus</em>! Always use <strong>kein Bus</strong> / <strong>keine U-Bahn</strong>."
      },
      {
        title: "2. Imperativ with 'Sie' (Polite Commands & Directions)",
        badge: "Directions",
        explanation: "Super simple: take the <strong>Sie</strong> present-tense form and put the <strong>verb first</strong>, followed by <strong>Sie</strong>!",
        table: {
          headers: ["Infinitiv", "Präsens (Sie)", "Imperativ (Sie)", "Meaning"],
          rows: [
            ["gehen", "Sie gehen", "<strong>Gehen Sie</strong> links!", "Go left!"],
            ["fahren", "Sie fahren", "<strong>Fahren Sie</strong> geradeaus!", "Drive/Go straight ahead!"],
            ["kommen", "Sie kommen", "<strong>Kommen Sie</strong>!", "Come!"],
            ["schreiben", "Sie schreiben", "<strong>Schreiben Sie</strong> den Text!", "Write the text!"]
          ]
        },
        tip: "Only exception in Sie-Imperativ: <strong>sein → Seien Sie</strong>! (e.g. Seien Sie vorsichtig!)"
      },
      {
        title: "3. Phonetik: Long vs. Short Vowels",
        badge: "Pronunciation",
        explanation: "Vowel length changes meaning in German (e.g., <em>Kirche</em> vs <em>Kirsche</em>, <em>Stadt</em> vs <em>Staat</em>).",
        table: {
          headers: ["Type", "Rule", "Examples"],
          rows: [
            ["<strong>Short Vowel</strong>", "Before a <strong>double consonant</strong> (ff, nn, mm, ss, tt…)", "Schiff, Mann, Fluss, Mitte, bitte, können"],
            ["<strong>Long Vowel</strong>", "1) Before a <strong>single consonant</strong><br>2) Before silent <strong>h</strong><br>3) Written as <strong>ie</strong>", "1) Hafen, Weg, Zug, gut, spät<br>2) Jahr, zehn, fahren<br>3) sieben, wie, hier"]
          ]
        },
        tip: "All 12 months and 4 seasons are masculine (<strong>der</strong>) and take <strong>im</strong>: <em>im Mai, im Sommer</em>."
      }
    ]
  },

  // =========================================================================
  // KAPITEL 4: GUTEN APPETIT! ESSEN, TRINKEN & EINKAUFEN
  // =========================================================================
  {
    id: 4,
    code: "Kapitel 4",
    title: "Guten Appetit! Essen & Einkaufen",
    subtitle: "Meals, food & drinks, fruits & vegetables, shops, Akkusativ & möchten",
    color: "#d97706",
    icon: "🥐",
    summary: "Name meals, foods, drinks, fruits, and vegetables with their articles; shop at the bakery, market, butcher, and supermarket; master the Akkusativ case, 'möchten', and prices.",
    nouns: [
      // Meals
      { art: "die", sg: "Mahlzeit", pl: "die Mahlzeiten", akk: "die Mahlzeit", dat: "der Mahlzeit", en: "meal (also: Enjoy your meal!)", cat: "Mahlzeiten", ex: "Welche Mahlzeit magst du am liebsten?", extra: false },
      { art: "das", sg: "Frühstück", pl: "die Frühstücke", akk: "das Frühstück", dat: "dem Frühstück", en: "breakfast", cat: "Mahlzeiten", ex: "Ich esse Müsli zum Frühstück.", extra: false },
      { art: "das", sg: "Mittagessen", pl: "die Mittagessen", akk: "das Mittagessen", dat: "dem Mittagessen", en: "lunch", cat: "Mahlzeiten", ex: "Ich esse Reis und Fleisch zum Mittagessen.", extra: false },
      { art: "das", sg: "Abendessen", pl: "die Abendessen", akk: "das Abendessen", dat: "dem Abendessen", en: "dinner", cat: "Mahlzeiten", ex: "Ich esse Salat zum Abendessen.", extra: false },
      { art: "der", sg: "Snack", pl: "die Snacks", akk: "den Snack", dat: "dem Snack", en: "snack", cat: "Mahlzeiten", ex: "Nachmittags esse ich einen kleinen Snack.", extra: false },
      { art: "die", sg: "Zwischenmahlzeit", pl: "die Zwischenmahlzeiten", akk: "die Zwischenmahlzeit", dat: "der Zwischenmahlzeit", en: "between-meal snack", cat: "Mahlzeiten", ex: "Obst ist eine gesunde Zwischenmahlzeit.", extra: false },

      // Breakfast & Bakery
      { art: "das", sg: "Müsli", pl: "die Müslis", akk: "das Müsli", dat: "dem Müsli", en: "muesli / cereal", cat: "Frühstück & Backwaren", ex: "Ich esse morgens Müsli mit Milch.", extra: false },
      { art: "das", sg: "Brot", pl: "die Brote", akk: "das Brot", dat: "dem Brot", en: "bread", cat: "Frühstück & Backwaren", ex: "Ich kaufe das Brot in der Bäckerei.", extra: false },
      { art: "das", sg: "Brötchen", pl: "die Brötchen", akk: "das Brötchen", dat: "dem Brötchen", en: "bread roll", cat: "Frühstück & Backwaren", ex: "Zum Frühstück esse ich zwei Brötchen.", extra: false },
      { art: "das", sg: "Croissant", pl: "die Croissants", akk: "das Croissant", dat: "dem Croissant", en: "croissant", cat: "Frühstück & Backwaren", ex: "Ich möchte ein Croissant.", extra: false },
      { art: "das", sg: "Ei", pl: "die Eier", akk: "das Ei", dat: "dem Ei", en: "egg", cat: "Frühstück & Backwaren", ex: "Ich gehe zum Markt und kaufe die Eier.", extra: false },
      { art: "das", sg: "Spiegelei", pl: "die Spiegeleier", akk: "das Spiegelei", dat: "dem Spiegelei", en: "fried egg", cat: "Frühstück & Backwaren", ex: "Am Sonntag esse ich ein Spiegelei.", extra: false },
      { art: "die", sg: "Butter", pl: "— (uncountable)", akk: "die Butter", dat: "der Butter", en: "butter", cat: "Frühstück & Backwaren", ex: "Ich esse Brot mit Butter und Käse.", extra: false },
      { art: "der", sg: "Käse", pl: "die Käse (types)", akk: "den Käse", dat: "dem Käse", en: "cheese", cat: "Frühstück & Backwaren", ex: "Wir haben keinen Käse mehr.", extra: false },
      { art: "der", sg: "Joghurt", pl: "die Joghurts", akk: "den Joghurt", dat: "dem Joghurt", en: "yogurt", cat: "Frühstück & Backwaren", ex: "Vormittags esse ich einen Joghurt.", extra: false },
      { art: "die", sg: "Marmelade", pl: "die Marmeladen", akk: "die Marmelade", dat: "der Marmelade", en: "jam / marmalade", cat: "Frühstück & Backwaren", ex: "Lars mag Brötchen mit Marmelade.", extra: false },
      { art: "der", sg: "Honig", pl: "— (uncountable)", akk: "den Honig", dat: "dem Honig", en: "honey", cat: "Frühstück & Backwaren", ex: "Ich trinke Tee mit Honig.", extra: false },
      { art: "der", sg: "Kuchen", pl: "die Kuchen", akk: "den Kuchen", dat: "dem Kuchen", en: "cake", cat: "Frühstück & Backwaren", ex: "Am Nachmittag essen wir Kuchen.", extra: false },
      { art: "der", sg: "Keks", pl: "die Kekse", akk: "den Keks", dat: "dem Keks", en: "cookie / biscuit", cat: "Frühstück & Backwaren", ex: "Möchtest du einen Keks zum Kaffee?", extra: false },
      { art: "die", sg: "Schokolade", pl: "die Schokoladen", akk: "die Schokolade", dat: "der Schokolade", en: "chocolate", cat: "Frühstück & Backwaren", ex: "Der Mann möchte keine Schokolade.", extra: false },
      { art: "die", sg: "Sahne", pl: "— (uncountable)", akk: "die Sahne", dat: "der Sahne", en: "cream", cat: "Frühstück & Backwaren", ex: "Kuchen mit Sahne ist lecker.", extra: false },
      { art: "der", sg: "Zucker", pl: "— (uncountable)", akk: "den Zucker", dat: "dem Zucker", en: "sugar", cat: "Frühstück & Backwaren", ex: "Ich trinke Kaffee ohne Zucker.", extra: false },

      // Meat, Main Dishes & Pantry
      { art: "das", sg: "Fleisch", pl: "— (uncountable)", akk: "das Fleisch", dat: "dem Fleisch", en: "meat", cat: "Hauptgerichte & Vorrat", ex: "Das Fleisch schmeckt sehr gut!", extra: false },
      { art: "das", sg: "Hähnchen", pl: "die Hähnchen", akk: "das Hähnchen", dat: "dem Hähnchen", en: "chicken", cat: "Hauptgerichte & Vorrat", ex: "Wir essen Hähnchen mit Reis.", extra: false },
      { art: "der", sg: "Fisch", pl: "die Fische", akk: "den Fisch", dat: "dem Fisch", en: "fish", cat: "Hauptgerichte & Vorrat", ex: "Am Abend koche ich oft Fisch.", extra: false },
      { art: "die", sg: "Wurst", pl: "die Würste", akk: "die Wurst", dat: "der Wurst", en: "sausage", cat: "Hauptgerichte & Vorrat", ex: "Die Wurst kaufe ich in der Metzgerei.", extra: false },
      { art: "das", sg: "Würstchen", pl: "die Würstchen", akk: "das Würstchen", dat: "dem Würstchen", en: "small sausage / hot dog", cat: "Hauptgerichte & Vorrat", ex: "Möchtet ihr noch ein Würstchen?", extra: false },
      { art: "der", sg: "Schinken", pl: "die Schinken", akk: "den Schinken", dat: "dem Schinken", en: "ham", cat: "Hauptgerichte & Vorrat", ex: "Ich nehme noch 150 Gramm Schinken.", extra: false },
      { art: "die", sg: "Salami", pl: "die Salamis", akk: "die Salami", dat: "der Salami", en: "salami", cat: "Hauptgerichte & Vorrat", ex: "Eine Pizza mit Salami, bitte.", extra: false },
      { art: "das", sg: "Steak", pl: "die Steaks", akk: "das Steak", dat: "dem Steak", en: "steak", cat: "Hauptgerichte & Vorrat", ex: "Der Mann möchte ein Steak.", extra: false },
      { art: "der", sg: "Reis", pl: "— (uncountable)", akk: "den Reis", dat: "dem Reis", en: "rice", cat: "Hauptgerichte & Vorrat", ex: "Entschuldigung, wo finde ich Reis?", extra: false },
      { art: "die", sg: "Nudel", pl: "die Nudeln", akk: "die Nudel", dat: "der Nudel", en: "noodle / pasta (usually Pl.)", cat: "Hauptgerichte & Vorrat", ex: "In der Kantine esse ich oft Nudeln.", extra: false },
      { art: "die", sg: "Pommes frites", pl: "die Pommes frites (Pl.)", akk: "die Pommes frites", dat: "den Pommes frites", en: "french fries", cat: "Hauptgerichte & Vorrat", ex: "Schnitzel mit Pommes, bitte.", extra: false },
      { art: "die", sg: "Suppe", pl: "die Suppen", akk: "die Suppe", dat: "der Suppe", en: "soup", cat: "Hauptgerichte & Vorrat", ex: "Wir kochen keine Suppe.", extra: false },
      { art: "der", sg: "Salat", pl: "die Salate", akk: "den Salat", dat: "dem Salat", en: "salad / lettuce", cat: "Hauptgerichte & Vorrat", ex: "Wir machen einen Salat.", extra: false },
      { art: "das", sg: "Salz", pl: "die Salze", akk: "das Salz", dat: "dem Salz", en: "salt", cat: "Hauptgerichte & Vorrat", ex: "Gib bitte etwas Salz in die Suppe.", extra: false },
      { art: "der", sg: "Pfeffer", pl: "— (uncountable)", akk: "den Pfeffer", dat: "dem Pfeffer", en: "pepper", cat: "Hauptgerichte & Vorrat", ex: "Salz und Pfeffer stehen auf dem Tisch.", extra: false },
      { art: "das", sg: "Öl", pl: "die Öle", akk: "das Öl", dat: "dem Öl", en: "oil", cat: "Hauptgerichte & Vorrat", ex: "Wir brauchen Öl für den Salat.", extra: false },
      { art: "der", sg: "Essig", pl: "die Essige", akk: "den Essig", dat: "dem Essig", en: "vinegar", cat: "Hauptgerichte & Vorrat", ex: "Salat mit Essig und Öl.", extra: false },

      // Fruits & Vegetables
      { art: "das", sg: "Obst", pl: "— (uncountable)", akk: "das Obst", dat: "dem Obst", en: "fruit (collective)", cat: "Obst & Gemüse", ex: "Obst schmeckt gut und ist gesund.", extra: false },
      { art: "der", sg: "Apfel", pl: "die Äpfel", akk: "den Apfel", dat: "dem Apfel", en: "apple", cat: "Obst & Gemüse", ex: "Der Apfel ist rot. Ich esse den Apfel.", extra: false },
      { art: "die", sg: "Banane", pl: "die Bananen", akk: "die Banane", dat: "der Banane", en: "banana", cat: "Obst & Gemüse", ex: "Ich esse gern Bananen.", extra: false },
      { art: "die", sg: "Birne", pl: "die Birnen", akk: "die Birne", dat: "der Birne", en: "pear", cat: "Obst & Gemüse", ex: "Ich kaufe Äpfel und Birnen.", extra: false },
      { art: "die", sg: "Orange", pl: "die Orangen", akk: "die Orange", dat: "der Orange", en: "orange", cat: "Obst & Gemüse", ex: "Orangen haben viel Vitamin C.", extra: false },
      { art: "die", sg: "Erdbeere", pl: "die Erdbeeren", akk: "die Erdbeere", dat: "der Erdbeere", en: "strawberry", cat: "Obst & Gemüse", ex: "Im Sommer esse ich gern Erdbeeren.", extra: false },
      { art: "die", sg: "Kirsche", pl: "die Kirschen", akk: "die Kirsche", dat: "der Kirsche", en: "cherry", cat: "Obst & Gemüse", ex: "Kirschen sind süß.", extra: false },
      { art: "die", sg: "Traube", pl: "die Trauben", akk: "die Traube", dat: "der Traube", en: "grape", cat: "Obst & Gemüse", ex: "Ich kaufe Trauben auf dem Markt.", extra: false },
      { art: "der", sg: "Pfirsich", pl: "die Pfirsiche", akk: "den Pfirsich", dat: "dem Pfirsich", en: "peach", cat: "Obst & Gemüse", ex: "Der Pfirsich ist sehr reif.", extra: false },
      { art: "die", sg: "Zitrone", pl: "die Zitronen", akk: "die Zitrone", dat: "der Zitrone", en: "lemon", cat: "Obst & Gemüse", ex: "Tee mit Zitrone und Honig.", extra: false },
      { art: "die", sg: "Kiwi", pl: "die Kiwis", akk: "die Kiwi", dat: "der Kiwi", en: "kiwi", cat: "Obst & Gemüse", ex: "Eine Kiwi hat viele Vitamine.", extra: false },
      { art: "die", sg: "Mango", pl: "die Mangos", akk: "die Mango", dat: "der Mango", en: "mango", cat: "Obst & Gemüse", ex: "Ich mag Mango sehr gern.", extra: false },
      { art: "die", sg: "Ananas", pl: "die Ananas(se)", akk: "die Ananas", dat: "der Ananas", en: "pineapple", cat: "Obst & Gemüse", ex: "Die Ananas kommt aus dem Supermarkt.", extra: false },
      { art: "die", sg: "Melone", pl: "die Melonen", akk: "die Melone", dat: "der Melone", en: "melon", cat: "Obst & Gemüse", ex: "Im Sommer schmeckt Melone super.", extra: false },
      { art: "das", sg: "Gemüse", pl: "— (uncountable)", akk: "das Gemüse", dat: "dem Gemüse", en: "vegetables (collective)", cat: "Obst & Gemüse", ex: "Gemüse ist sehr gesund.", extra: false },
      { art: "die", sg: "Tomate", pl: "die Tomaten", akk: "die Tomate", dat: "der Tomate", en: "tomato", cat: "Obst & Gemüse", ex: "Wir brauchen Tomaten für den Salat.", extra: false },
      { art: "die", sg: "Gurke", pl: "die Gurken", akk: "die Gurke", dat: "der Gurke", en: "cucumber", cat: "Obst & Gemüse", ex: "Wir brauchen eine Gurke.", extra: false },
      { art: "die", sg: "Kartoffel", pl: "die Kartoffeln", akk: "die Kartoffel", dat: "der Kartoffel", en: "potato", cat: "Obst & Gemüse", ex: "Wir essen Fisch mit Kartoffeln.", extra: false },
      { art: "die", sg: "Karotte", pl: "die Karotten", akk: "die Karotte", dat: "der Karotte", en: "carrot (also: die Möhre)", cat: "Obst & Gemüse", ex: "Karotten sind gut für die Augen.", extra: false },
      { art: "die", sg: "Zwiebel", pl: "die Zwiebeln", akk: "die Zwiebel", dat: "der Zwiebel", en: "onion", cat: "Obst & Gemüse", ex: "Für die Suppe brauche ich eine Zwiebel.", extra: false },
      { art: "der", sg: "Knoblauch", pl: "— (uncountable)", akk: "den Knoblauch", dat: "dem Knoblauch", en: "garlic", cat: "Obst & Gemüse", ex: "Ich koche gern mit Knoblauch.", extra: false },
      { art: "der", sg: "Pilz", pl: "die Pilze", akk: "den Pilz", dat: "dem Pilz", en: "mushroom", cat: "Obst & Gemüse", ex: "Pizza mit Pilzen ist lecker.", extra: false },
      { art: "der", sg: "Paprika", pl: "die Paprikas", akk: "den Paprika", dat: "dem Paprika", en: "bell pepper (also: die Paprika)", cat: "Obst & Gemüse", ex: "Ich schneide einen Paprika.", extra: false },
      { art: "der", sg: "Brokkoli", pl: "die Brokkolis", akk: "den Brokkoli", dat: "dem Brokkoli", en: "broccoli", cat: "Obst & Gemüse", ex: "Brokkoli ist ein gesundes Gemüse.", extra: false },
      { art: "die", sg: "Aubergine", pl: "die Auberginen", akk: "die Aubergine", dat: "der Aubergine", en: "eggplant / aubergine", cat: "Obst & Gemüse", ex: "Wir grillen Auberginen und Zucchini.", extra: false },
      { art: "die", sg: "Zucchini", pl: "die Zucchinis", akk: "die Zucchini", dat: "der Zucchini", en: "zucchini / courgette", cat: "Obst & Gemüse", ex: "Ich kaufe zwei Zucchini.", extra: false },
      { art: "der", sg: "Mais", pl: "— (uncountable)", akk: "den Mais", dat: "dem Mais", en: "corn", cat: "Obst & Gemüse", ex: "Mais passt gut in den Salat.", extra: false },
      { art: "der", sg: "Kürbis", pl: "die Kürbisse", akk: "den Kürbis", dat: "dem Kürbis", en: "pumpkin", cat: "Obst & Gemüse", ex: "Im Herbst koche ich Kürbissuppe.", extra: false },

      // Drinks
      { art: "das", sg: "Getränk", pl: "die Getränke", akk: "das Getränk", dat: "dem Getränk", en: "drink / beverage", cat: "Getränke", ex: "Wir kaufen die Getränke im Supermarkt.", extra: false },
      { art: "das", sg: "Wasser", pl: "die Wässer (types)", akk: "das Wasser", dat: "dem Wasser", en: "water", cat: "Getränke", ex: "Ich trinke jeden Tag viel Wasser.", extra: false },
      { art: "der", sg: "Saft", pl: "die Säfte", akk: "den Saft", dat: "dem Saft", en: "juice", cat: "Getränke", ex: "Der Orangensaft kostet 1,09 Euro.", extra: false },
      { art: "der", sg: "Apfelsaft", pl: "die Apfelsäfte", akk: "den Apfelsaft", dat: "dem Apfelsaft", en: "apple juice", cat: "Getränke", ex: "Was kostet der Apfelsaft?", extra: false },
      { art: "der", sg: "Orangensaft", pl: "die Orangensäfte", akk: "den Orangensaft", dat: "dem Orangensaft", en: "orange juice", cat: "Getränke", ex: "Die Frau trinkt gern Orangensaft.", extra: false },
      { art: "die", sg: "Milch", pl: "— (uncountable)", akk: "die Milch", dat: "der Milch", en: "milk", cat: "Getränke", ex: "Müsli mit Milch.", extra: false },
      { art: "der", sg: "Tee", pl: "die Tees", akk: "den Tee", dat: "dem Tee", en: "tea", cat: "Getränke", ex: "Möchtest du Tee oder Kaffee?", extra: false },
      { art: "der", sg: "Kaffee", pl: "die Kaffees", akk: "den Kaffee", dat: "dem Kaffee", en: "coffee", cat: "Getränke", ex: "Morgens trinke ich einen Kaffee.", extra: false },
      { art: "der", sg: "Kakao", pl: "die Kakaos", akk: "den Kakao", dat: "dem Kakao", en: "hot chocolate / cocoa", cat: "Getränke", ex: "Kinder trinken gern Kakao.", extra: false },
      { art: "die", sg: "Cola", pl: "die Colas", akk: "die Cola", dat: "der Cola", en: "cola", cat: "Getränke", ex: "Ich möchte eine Cola, bitte.", extra: false },
      { art: "das", sg: "Bier", pl: "die Biere", akk: "das Bier", dat: "dem Bier", en: "beer", cat: "Getränke", ex: "Ein Bier, bitte.", extra: false },
      { art: "der", sg: "Wein", pl: "die Weine", akk: "den Wein", dat: "dem Wein", en: "wine", cat: "Getränke", ex: "Rotwein oder Weißwein?", extra: false },

      // Shops & Shopping
      { art: "die", sg: "Bäckerei", pl: "die Bäckereien", akk: "die Bäckerei", dat: "der Bäckerei", en: "bakery", cat: "Einkaufen & Geschäfte", ex: "Ich kaufe Brot in der Bäckerei.", extra: false },
      { art: "der", sg: "Markt", pl: "die Märkte", akk: "den Markt", dat: "dem Markt", en: "market", cat: "Einkaufen & Geschäfte", ex: "Obst kaufe ich auf dem Markt.", extra: false },
      { art: "der", sg: "Supermarkt", pl: "die Supermärkte", akk: "den Supermarkt", dat: "dem Supermarkt", en: "supermarket", cat: "Einkaufen & Geschäfte", ex: "Im Supermarkt kaufe ich Getränke.", extra: false },
      { art: "die", sg: "Metzgerei", pl: "die Metzgereien", akk: "die Metzgerei", dat: "der Metzgerei", en: "butcher shop", cat: "Einkaufen & Geschäfte", ex: "Fleisch und Wurst kaufe ich in der Metzgerei.", extra: false },
      { art: "der", sg: "Einkaufswagen", pl: "die Einkaufswagen", akk: "den Einkaufswagen", dat: "dem Einkaufswagen", en: "shopping cart", cat: "Einkaufen & Geschäfte", ex: "Ich brauche einen Euro für den Einkaufswagen.", extra: false },
      { art: "die", sg: "Tüte", pl: "die Tüten", akk: "die Tüte", dat: "der Tüte", en: "bag (shopping bag)", cat: "Einkaufen & Geschäfte", ex: "Ich brauche noch eine Tüte, bitte.", extra: false },
      { art: "der", sg: "Kassenzettel", pl: "die Kassenzettel", akk: "den Kassenzettel", dat: "dem Kassenzettel", en: "receipt", cat: "Einkaufen & Geschäfte", ex: "Brauchen Sie den Kassenzettel?", extra: false },
      { art: "das", sg: "Stück", pl: "die Stücke", akk: "das Stück", dat: "dem Stück", en: "piece", cat: "Einkaufen & Geschäfte", ex: "Ich möchte ein Stück Emmentaler, bitte.", extra: false },
      { art: "das", sg: "Gramm", pl: "die Gramm", akk: "das Gramm", dat: "dem Gramm", en: "gram", cat: "Einkaufen & Geschäfte", ex: "Ich nehme 150 Gramm Schinken.", extra: false },
      { art: "das", sg: "Lebensmittel", pl: "die Lebensmittel", akk: "das Lebensmittel", dat: "dem Lebensmittel", en: "groceries / food item", cat: "Einkaufen & Geschäfte", ex: "Wo kaufen Sie die Lebensmittel?", extra: false },

      // EXTRA Shopping & Food Vocab
      { art: "die", sg: "Flasche", pl: "die Flaschen", akk: "die Flasche", dat: "der Flasche", en: "bottle", cat: "Extra: Verpackung & Küche", ex: "Ich kaufe eine Flasche Wasser.", extra: true },
      { art: "die", sg: "Packung", pl: "die Packungen", akk: "die Packung", dat: "der Packung", en: "pack / carton", cat: "Extra: Verpackung & Küche", ex: "Eine Packung Milch, bitte.", extra: true },
      { art: "die", sg: "Dose", pl: "die Dosen", akk: "die Dose", dat: "der Dose", en: "can / tin", cat: "Extra: Verpackung & Küche", ex: "Eine Dose Tomaten für die Soße.", extra: true },
      { art: "der", sg: "Becher", pl: "die Becher", akk: "den Becher", dat: "dem Becher", en: "cup / tub (yogurt)", cat: "Extra: Verpackung & Küche", ex: "Zwei Becher Joghurt, bitte.", extra: true },
      { art: "das", sg: "Kilo", pl: "die Kilos", akk: "das Kilo", dat: "dem Kilo", en: "kilogram", cat: "Extra: Verpackung & Küche", ex: "Ich kaufe ein Kilo Äpfel.", extra: true },
      { art: "die", sg: "Kasse", pl: "die Kassen", akk: "die Kasse", dat: "der Kasse", en: "checkout / cash register", cat: "Extra: Verpackung & Küche", ex: "Ich bezahle an der Kasse.", extra: true },
      { art: "das", sg: "Sonderangebot", pl: "die Sonderangebote", akk: "das Sonderangebot", dat: "dem Sonderangebot", en: "special offer / sale", cat: "Extra: Verpackung & Küche", ex: "Die Erdbeeren sind heute im Sonderangebot.", extra: true },
      { art: "die", sg: "Kaffeemaschine", pl: "die Kaffeemaschinen", akk: "die Kaffeemaschine", dat: "der Kaffeemaschine", en: "coffee machine", cat: "Extra: Software Engineering", ex: "Die Kaffeemaschine im Büro ist super.", extra: true },
      { art: "die", sg: "Teeküche", pl: "die Teeküchen", akk: "die Teeküche", dat: "der Teeküche", en: "office kitchenette", cat: "Extra: Software Engineering", ex: "Wir treffen uns kurz in der Teeküche.", extra: true }
    ],
    verbs: [
      { inf: "essen", en: "to eat", type: "Vowel Change (e→i)", caseGov: "+ Akk.", ich: "esse", du: "isst", er: "isst", wir: "essen", ihr: "esst", sie: "essen", imp: "Iss! / Esst! / Essen Sie!", prt: "aß", ex: "Ich esse den Apfel. Was isst du gern?", extra: false },
      { inf: "trinken", en: "to drink", type: "Regular", caseGov: "+ Akk.", ich: "trinke", du: "trinkst", er: "trinkt", wir: "trinken", ihr: "trinkt", sie: "trinken", imp: "Trink! / Trinkt! / Trinken Sie!", prt: "trank", ex: "Ich trinke gern Orangensaft.", extra: false },
      { inf: "frühstücken", en: "to eat breakfast", type: "Regular", caseGov: "—", ich: "frühstücke", du: "frühstückst", er: "frühstückt", wir: "frühstücken", ihr: "frühstückt", sie: "frühstücken", imp: "Frühstücke! / Frühstückt!", prt: "frühstückte", ex: "Wir frühstücken morgens zusammen.", extra: false },
      { inf: "möchten", en: "would like", type: "Modal-like (Konj. II)", caseGov: "+ Akk. / Inf.", ich: "möchte", du: "möchtest", er: "möchte", wir: "möchten", ihr: "möchtet", sie: "möchten", imp: "—", prt: "wollte", ex: "Ich möchte ein Stück Emmentaler, bitte.", extra: false },
      { inf: "kaufen", en: "to buy", type: "Regular", caseGov: "+ Akk.", ich: "kaufe", du: "kaufst", er: "kauft", wir: "kaufen", ihr: "kauft", sie: "kaufen", imp: "Kauf! / Kauft! / Kaufen Sie!", prt: "kaufte", ex: "Ich kaufe einen Salat und ein Brot.", extra: false },
      { inf: "brauchen", en: "to need", type: "Regular", caseGov: "+ Akk.", ich: "brauche", du: "brauchst", er: "braucht", wir: "brauchen", ihr: "braucht", sie: "brauchen", imp: "—", prt: "brauchte", ex: "Ich brauche noch eine Tüte, bitte.", extra: false },
      { inf: "nehmen", en: "to take", type: "Vowel Change (e→i)", caseGov: "+ Akk.", ich: "nehme", du: "nimmst", er: "nimmt", wir: "nehmen", ihr: "nehmt", sie: "nehmen", imp: "Nimm! / Nehmt! / Nehmen Sie!", prt: "nahm", ex: "Ja, ich nehme noch 150 Gramm Schinken.", extra: false },
      { inf: "kosten", en: "to cost", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "koste", du: "kostest", er: "kostet", wir: "kosten", ihr: "kostet", sie: "kosten", imp: "—", prt: "kostete", ex: "Was kostet der Apfelsaft? 99 Cent.", extra: false },
      { inf: "schmecken", en: "to taste (good)", type: "Regular", caseGov: "+ Dat.", ich: "schmecke", du: "schmeckst", er: "schmeckt", wir: "schmecken", ihr: "schmeckt", sie: "schmecken", imp: "—", prt: "schmeckte", ex: "Das Fleisch schmeckt sehr gut!", extra: false },
      { inf: "wechseln", en: "to exchange / break money", type: "Regular (-eln)", caseGov: "+ Akk.", ich: "wechsle", du: "wechselst", er: "wechselt", wir: "wechseln", ihr: "wechselt", sie: "wechseln", imp: "Wechseln Sie!", prt: "wechselte", ex: "Können Sie wechseln, bitte?", extra: false },
      { inf: "grillen", en: "to grill / barbecue", type: "Regular", caseGov: "+ Akk.", ich: "grille", du: "grillst", er: "grillt", wir: "grillen", ihr: "grillt", sie: "grillen", imp: "Grill! / Grillt!", prt: "grillte", ex: "Wir grillen heute Abend bei uns.", extra: false },
      // Extra Verbs
      { inf: "bezahlen", en: "to pay", type: "Regular", caseGov: "+ Akk.", ich: "bezahle", du: "bezahlst", er: "bezahlt", wir: "bezahlen", ihr: "bezahlt", sie: "bezahlen", imp: "Bezahl! / Bezahlen Sie!", prt: "bezahlte", ex: "Ich bezahle mit Karte.", extra: true },
      { inf: "probieren", en: "to taste / try", type: "Regular", caseGov: "+ Akk.", ich: "probiere", du: "probierst", er: "probiert", wir: "probieren", ihr: "probiert", sie: "probieren", imp: "Probier! / Probieren Sie!", prt: "probierte", ex: "Probier mal die Suppe!", extra: true },
      { inf: "schneiden", en: "to cut / slice", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "schneide", du: "schneidest", er: "schneidet", wir: "schneiden", ihr: "schneidet", sie: "schneiden", imp: "Schneide! / Schneiden Sie!", prt: "schnitt", ex: "Ich schneide die Tomaten und die Gurke.", extra: true }
    ],
    expressions: [
      { de: "Guten Appetit! — Danke, gleichfalls!", en: "Enjoy your meal! — Thanks, you too!", note: "Standard mealtime greeting.", extra: false },
      { de: "Prost! / Zum Wohl!", en: "Cheers!", note: "When clinking glasses.", extra: false },
      { de: "Schmeckt's? — Ja, sehr lecker!", en: "Does it taste good? — Yes, very delicious!", note: "Asking about the food.", extra: false },
      { de: "Nein, danke, ich bin satt.", en: "No thanks, I'm full.", note: "satt = full (never say 'ich bin voll'!).", extra: false },
      { de: "Sonst noch etwas? — Ist das alles?", en: "Anything else? — Is that all?", note: "At the bakery/deli counter.", extra: false },
      { de: "Das macht dann 18,65 Euro.", en: "That comes to €18.65.", note: "Checkout phrase.", extra: false },
      { de: "in der Bäckerei / auf dem Markt / im Supermarkt / in der Metzgerei", en: "at the bakery / at the market / at the supermarket / at the butcher", note: "Note 'auf dem Markt' (open air) vs 'in'!", extra: false },
      { de: "süß / sauer / salzig / scharf / frisch", en: "sweet / sour / salty / spicy / fresh", note: "Essential taste adjectives.", extra: true },
      { de: "Mit Karte oder bar?", en: "By card or cash?", note: "Common checkout question in Germany.", extra: true }
    ],
    grammar: [
      {
        title: "1. Der Akkusativ (Direct Object)",
        badge: "Core",
        explanation: "When a noun is the <strong>direct object</strong> of a verb (answers <em>Wen oder was?</em>), <strong>ONLY masculine (<code>der</code>) changes!</strong> Neutrum, Feminin, and Plural stay exactly the same as Nominativ.",
        table: {
          headers: ["Gender", "Nominativ (Subject)", "Akkusativ (Object)", "Example"],
          rows: [
            ["<span class='g-m'>Maskulin (der)</span>", "der / ein / kein", "<strong>den / einen / keinen</strong>", "Ich esse <strong>den</strong> Apfel. Wir haben <strong>keinen</strong> Käse."],
            ["<span class='g-n'>Neutrum (das)</span>", "das / ein / kein", "das / ein / kein", "Ich kaufe <strong>das</strong> Brot / <strong>ein</strong> Brot."],
            ["<span class='g-f'>Feminin (die)</span>", "die / eine / keine", "die / eine / keine", "Ich brauche <strong>eine</strong> Gurke / <strong>keine</strong> Tüte."],
            ["<span class='g-p'>Plural (die)</span>", "die / — / keine", "die / — / keine", "Ich kaufe <strong>die</strong> Tomaten / <strong>keine</strong> Getränke."]
          ]
        },
        tip: "Verbs that ALWAYS take Akkusativ: <code>haben, brauchen, kaufen, essen, trinken, nehmen, machen, kochen, sehen, suchen, besuchen, möchten</code>."
      },
      {
        title: "2. 'möchten' (would like) & 'essen' (e→i)",
        badge: "Verbs",
        explanation: "Notice that in <code>möchten</code>, <strong>ich</strong> and <strong>er/sie/es</strong> have the same form (<code>möchte</code> — NO <code>-t</code>!). And <code>essen</code> changes <code>e → i</code> in <em>du/er</em>.",
        table: {
          headers: ["Pronoun", "möchten", "essen", "nehmen"],
          rows: [
            ["ich", "möchte", "esse", "nehme"],
            ["du", "möchtest", "<strong>isst</strong>", "<strong>nimmst</strong>"],
            ["er / sie / es", "<strong>möchte</strong>", "<strong>isst</strong>", "<strong>nimmt</strong>"],
            ["wir / sie / Sie", "möchten", "essen", "nehmen"],
            ["ihr", "möchtet", "esst", "nehmt"]
          ]
        },
        tip: "With <code>möchten</code> + another verb, the second verb goes to the END: <em>Ich möchte ein Steak essen.</em>"
      },
      {
        title: "3. Saying Prices in German",
        badge: "Practical",
        explanation: "Say the Euros, then <code>Euro</code>, then the Cents (you usually drop the word 'Cent' if there are Euros before it).",
        table: {
          headers: ["Written", "Spoken German"],
          rows: [
            ["0,99 €", "neunundneunzig Cent"],
            ["1,09 €", "ein Euro neun"],
            ["2,20 €", "zwei Euro zwanzig"],
            ["18,65 €", "achtzehn Euro fünfundsechzig"]
          ]
        },
        tip: "In German, a <strong>comma</strong> separates Euros and Cents (<code>1,09 €</code>), not a decimal point!"
      }
    ]
  }
);
