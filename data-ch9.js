window.A1_CHAPTERS = window.A1_CHAPTERS || [];

window.A1_CHAPTERS.push(
  // =========================================================================
  // KAPITEL 9: MEINE WOHNUNG, MÖBEL, FARBEN & WECHSELPRÄPOSITIONEN
  // =========================================================================
  {
    id: 9,
    code: "Kapitel 9",
    title: "Meine Wohnung, Möbel & Wechselpräpositionen",
    subtitle: "Rooms & house types, furniture & appliances, apartment hunting, colors, Action vs. Position verbs & all 9 Wechselpräpositionen",
    color: "#ea580c",
    icon: "🏠",
    summary: "Describe apartments, rooms, furniture, appliances, house types, and colors; understand apartment ads and housewarming invitations; master Action vs. Position verb pairs (stellen/stehen, legen/liegen, setzen/sitzen, hängen) with all 9 Wechselpräpositionen (Wohin? + Akk. vs. Wo? + Dat.).",
    nouns: [
      // Zimmer & Haus
      { art: "die", sg: "Wohnung", pl: "die Wohnungen", akk: "die Wohnung", dat: "der Wohnung", en: "apartment / flat", cat: "Zimmer & Haus", ex: "Unsere neue Wohnung ist hell, ruhig und zentral.", extra: false },
      { art: "das", sg: "Zimmer", pl: "die Zimmer", akk: "das Zimmer", dat: "dem Zimmer", en: "room", cat: "Zimmer & Haus", ex: "Wir suchen eine 3-Zimmer-Wohnung im Zentrum.", extra: false },
      { art: "das", sg: "Wohnzimmer", pl: "die Wohnzimmer", akk: "das Wohnzimmer", dat: "dem Wohnzimmer", en: "living room", cat: "Zimmer & Haus", ex: "Das Wohnzimmer ist ja super und echt gemütlich!", extra: false },
      { art: "das", sg: "Schlafzimmer", pl: "die Schlafzimmer", akk: "das Schlafzimmer", dat: "dem Schlafzimmer", en: "bedroom", cat: "Zimmer & Haus", ex: "Carla stellt den Fernseher ins Schlafzimmer.", extra: false },
      { art: "das", sg: "Kinderzimmer", pl: "die Kinderzimmer", akk: "das Kinderzimmer", dat: "dem Kinderzimmer", en: "children's room", cat: "Zimmer & Haus", ex: "Das Kinderzimmer liegt neben dem Arbeitszimmer.", extra: false },
      { art: "das", sg: "Arbeitszimmer", pl: "die Arbeitszimmer", akk: "das Arbeitszimmer", dat: "dem Arbeitszimmer", en: "study / home office room", cat: "Zimmer & Haus", ex: "Eva Neumann arbeitet am liebsten im Arbeitszimmer.", extra: false },
      { art: "das", sg: "Badezimmer", pl: "die Badezimmer", akk: "das Badezimmer", dat: "dem Badezimmer", en: "bathroom (short: das Bad, die Bäder)", cat: "Zimmer & Haus", ex: "Das Badezimmer hat eine Dusche und eine Badewanne.", extra: false },
      { art: "die", sg: "Küche", pl: "die Küchen", akk: "die Küche", dat: "der Küche", en: "kitchen", cat: "Zimmer & Haus", ex: "Jan kocht am liebsten in der Küche.", extra: false },
      { art: "die", sg: "Toilette", pl: "die Toiletten", akk: "die Toilette", dat: "der Toilette", en: "toilet / WC", cat: "Zimmer & Haus", ex: "Die Toilette ist direkt neben dem Bad.", extra: false },
      { art: "der", sg: "Flur", pl: "die Flure", akk: "den Flur", dat: "dem Flur", en: "hallway / corridor", cat: "Zimmer & Haus", ex: "Der Kühlschrank steht im Flur.", extra: false },
      { art: "der", sg: "Waschraum", pl: "die Waschräume", akk: "den Waschraum", dat: "dem Waschraum", en: "laundry room", cat: "Zimmer & Haus", ex: "Die Waschmaschine steht im Waschraum.", extra: false },
      { art: "der", sg: "Balkon", pl: "die Balkone", akk: "den Balkon", dat: "dem Balkon", en: "balcony", cat: "Zimmer & Haus", ex: "Leo Babel sitzt abends gern auf dem Balkon.", extra: false },
      { art: "die", sg: "Terrasse", pl: "die Terrassen", akk: "die Terrasse", dat: "der Terrasse", en: "terrace / patio", cat: "Zimmer & Haus", ex: "Die Terrasse ist wirklich super!", extra: false },
      { art: "der", sg: "Garten", pl: "die Gärten", akk: "den Garten", dat: "dem Garten", en: "garden / yard", cat: "Zimmer & Haus", ex: "Das Reihenhaus hat einen großen Garten für die Kinder.", extra: false },
      { art: "der", sg: "Keller", pl: "die Keller", akk: "den Keller", dat: "dem Keller", en: "basement / cellar", cat: "Zimmer & Haus", ex: "Die Fahrräder stehen im Keller.", extra: false },
      { art: "der", sg: "Dachboden", pl: "die Dachböden", akk: "den Dachboden", dat: "dem Dachboden", en: "attic", cat: "Zimmer & Haus", ex: "Alte Kartons liegen auf dem Dachboden.", extra: false },
      { art: "das", sg: "Dach", pl: "die Dächer", akk: "das Dach", dat: "dem Dach", en: "roof", cat: "Zimmer & Haus", ex: "Das Dach des Fachwerkhauses ist sehr alt.", extra: false },
      { art: "der", sg: "Schornstein", pl: "die Schornsteine", akk: "den Schornstein", dat: "dem Schornstein", en: "chimney", cat: "Zimmer & Haus", ex: "Im Winter kommt Rauch aus dem Schornstein.", extra: false },
      { art: "die", sg: "Garage", pl: "die Garagen", akk: "die Garage", dat: "der Garage", en: "garage", cat: "Zimmer & Haus", ex: "Das Auto steht in der Garage.", extra: false },
      { art: "die", sg: "Haustür", pl: "die Haustüren", akk: "die Haustür", dat: "der Haustür", en: "front door", cat: "Zimmer & Haus", ex: "Die Haustür ist immer abgeschlossen.", extra: false },
      { art: "die", sg: "Tür", pl: "die Türen", akk: "die Tür", dat: "der Tür", en: "door", cat: "Zimmer & Haus", ex: "Der Stuhl steht hinter der Tür.", extra: false },
      { art: "das", sg: "Fenster", pl: "die Fenster", akk: "das Fenster", dat: "dem Fenster", en: "window", cat: "Zimmer & Haus", ex: "Das Loft hat sehr große Fenster und viel Licht.", extra: false },
      { art: "die", sg: "Wand", pl: "die Wände", akk: "die Wand", dat: "der Wand", en: "wall (interior)", cat: "Zimmer & Haus", ex: "Ich hänge das Bild an die Wand.", extra: false },
      { art: "die", sg: "Decke", pl: "die Decken", akk: "die Decke", dat: "der Decke", en: "ceiling (also: blanket)", cat: "Zimmer & Haus", ex: "Die Altbauwohnung hat sehr hohe Decken.", extra: false },
      { art: "der", sg: "Boden", pl: "die Böden", akk: "den Boden", dat: "dem Boden", en: "floor / ground", cat: "Zimmer & Haus", ex: "Er legt den Ball auf den Boden.", extra: false },
      { art: "das", sg: "Erdgeschoss", pl: "die Erdgeschosse", akk: "das Erdgeschoss", dat: "dem Erdgeschoss", en: "ground floor", cat: "Zimmer & Haus", ex: "Kims Zimmer liegt im Erdgeschoss an einer Straße.", extra: false },
      { art: "der", sg: "Stock", pl: "die Stockwerke", akk: "den Stock", dat: "dem Stock", en: "floor / story", cat: "Zimmer & Haus", ex: "Die Wohnung liegt im 6. Stock mit Aufzug.", extra: false },
      { art: "der", sg: "Aufzug", pl: "die Aufzüge", akk: "den Aufzug", dat: "dem Aufzug", en: "elevator / lift", cat: "Zimmer & Haus", ex: "Leider hat die Altbauwohnung keinen Aufzug.", extra: false },
      { art: "die", sg: "Treppe", pl: "die Treppen", akk: "die Treppe", dat: "der Treppe", en: "stairs / staircase", cat: "Zimmer & Haus", ex: "Im Altbau gibt es schöne Treppen aus Holz.", extra: false },

      // Möbel & Einrichtung
      { art: "das", sg: "Sofa", pl: "die Sofas", akk: "das Sofa", dat: "dem Sofa", en: "sofa / couch", cat: "Möbel & Einrichtung", ex: "Das Sofa steht im Wohnzimmer.", extra: false },
      { art: "der", sg: "Sessel", pl: "die Sessel", akk: "den Sessel", dat: "dem Sessel", en: "armchair", cat: "Möbel & Einrichtung", ex: "Der grüne Sessel ist sehr bequem.", extra: false },
      { art: "der", sg: "Tisch", pl: "die Tische", akk: "den Tisch", dat: "dem Tisch", en: "table", cat: "Möbel & Einrichtung", ex: "Das Buch liegt auf dem Tisch.", extra: false },
      { art: "der", sg: "Couchtisch", pl: "die Couchtische", akk: "den Couchtisch", dat: "dem Couchtisch", en: "coffee table", cat: "Möbel & Einrichtung", ex: "Der Couchtisch steht vor dem Sofa.", extra: false },
      { art: "der", sg: "Schreibtisch", pl: "die Schreibtische", akk: "den Schreibtisch", dat: "dem Schreibtisch", en: "desk", cat: "Möbel & Einrichtung", ex: "Ich stelle den Schreibtisch ins Arbeitszimmer.", extra: false },
      { art: "der", sg: "Stuhl", pl: "die Stühle", akk: "den Stuhl", dat: "dem Stuhl", en: "chair", cat: "Möbel & Einrichtung", ex: "Ich setze mich auf den Stuhl.", extra: false },
      { art: "das", sg: "Bett", pl: "die Betten", akk: "das Bett", dat: "dem Bett", en: "bed", cat: "Möbel & Einrichtung", ex: "Das Bett steht neben dem Fenster.", extra: false },
      { art: "der", sg: "Schrank", pl: "die Schränke", akk: "den Schrank", dat: "dem Schrank", en: "cabinet / cupboard / wardrobe", cat: "Möbel & Einrichtung", ex: "Ich stelle die Tasche neben den Schrank.", extra: false },
      { art: "der", sg: "Kleiderschrank", pl: "die Kleiderschränke", akk: "den Kleiderschrank", dat: "dem Kleiderschrank", en: "wardrobe / clothes closet", cat: "Möbel & Einrichtung", ex: "Meine Jacken hängen im Kleiderschrank.", extra: false },
      { art: "das", sg: "Regal", pl: "die Regale", akk: "das Regal", dat: "dem Regal", en: "shelf / shelving unit", cat: "Möbel & Einrichtung", ex: "Die Bücher stehen in den Regalen.", extra: false },
      { art: "das", sg: "Bücherregal", pl: "die Bücherregale", akk: "das Bücherregal", dat: "dem Bücherregal", en: "bookshelf", cat: "Möbel & Einrichtung", ex: "Das Bücherregal ist schon voll.", extra: false },
      { art: "die", sg: "Kommode", pl: "die Kommoden", akk: "die Kommode", dat: "der Kommode", en: "chest of drawers / dresser", cat: "Möbel & Einrichtung", ex: "Die Kommode steht im Schlafzimmer.", extra: false },
      { art: "der", sg: "Nachttisch", pl: "die Nachttische", akk: "den Nachttisch", dat: "dem Nachttisch", en: "nightstand / bedside table", cat: "Möbel & Einrichtung", ex: "Die Lampe steht auf dem Nachttisch.", extra: false },
      { art: "die", sg: "Lampe", pl: "die Lampen", akk: "die Lampe", dat: "der Lampe", en: "lamp", cat: "Möbel & Einrichtung", ex: "Ich hänge die Lampe über den Tisch.", extra: false },
      { art: "der", sg: "Teppich", pl: "die Teppiche", akk: "den Teppich", dat: "dem Teppich", en: "carpet / rug", cat: "Möbel & Einrichtung", ex: "Ich lege den Teppich unter den Tisch.", extra: false },
      { art: "das", sg: "Bild", pl: "die Bilder", akk: "das Bild", dat: "dem Bild", en: "picture / painting", cat: "Möbel & Einrichtung", ex: "Das Bild über dem Fernseher sieht schön aus.", extra: false },
      { art: "der", sg: "Vorhang", pl: "die Vorhänge", akk: "den Vorhang", dat: "dem Vorhang", en: "curtain", cat: "Möbel & Einrichtung", ex: "Die Vorhänge im Wohnzimmer sind hellblau.", extra: false },
      { art: "das", sg: "Kissen", pl: "die Kissen", akk: "das Kissen", dat: "dem Kissen", en: "pillow / cushion", cat: "Möbel & Einrichtung", ex: "Auf dem Bett liegen drei weiche Kissen.", extra: false },
      { art: "die", sg: "Matratze", pl: "die Matratzen", akk: "die Matratze", dat: "der Matratze", en: "mattress", cat: "Möbel & Einrichtung", ex: "Wir brauchen eine neue Matratze fürs Bett.", extra: false },
      { art: "die", sg: "Pflanze", pl: "die Pflanzen", akk: "die Pflanze", dat: "der Pflanze", en: "plant", cat: "Möbel & Einrichtung", ex: "In der Ecke steht eine große grüne Pflanze.", extra: false },
      { art: "die", sg: "Vase", pl: "die Vasen", akk: "die Vase", dat: "der Vase", en: "vase", cat: "Möbel & Einrichtung", ex: "Die Blumen stehen in der Vase auf dem Tisch.", extra: false },
      { art: "der", sg: "Spiegel", pl: "die Spiegel", akk: "den Spiegel", dat: "dem Spiegel", en: "mirror", cat: "Möbel & Einrichtung", ex: "Der Spiegel hängt über dem Waschbecken.", extra: false },
      { art: "die", sg: "Heizung", pl: "die Heizungen", akk: "die Heizung", dat: "der Heizung", en: "heater / heating", cat: "Möbel & Einrichtung", ex: "Im Winter machen wir die Heizung an.", extra: false },
      { art: "der", sg: "Wäschekorb", pl: "die Wäschekörbe", akk: "den Wäschekorb", dat: "dem Wäschekorb", en: "laundry basket", cat: "Möbel & Einrichtung", ex: "Der Wäschekorb steht neben der Waschmaschine.", extra: false },
      { art: "der", sg: "Mülleimer", pl: "die Mülleimer", akk: "den Mülleimer", dat: "dem Mülleimer", en: "trash can / waste bin", cat: "Möbel & Einrichtung", ex: "Der Mülleimer steht unter dem Waschbecken.", extra: false },

      // Küche, Bad & Elektrogeräte
      { art: "der", sg: "Kühlschrank", pl: "die Kühlschränke", akk: "den Kühlschrank", dat: "dem Kühlschrank", en: "refrigerator / fridge", cat: "Küche, Bad & Geräte", ex: "Alex will den Kühlschrank in die Küche stellen.", extra: false },
      { art: "der", sg: "Herd", pl: "die Herde", akk: "den Herd", dat: "dem Herd", en: "stove / cooker", cat: "Küche, Bad & Geräte", ex: "Der Topf steht auf dem Herd.", extra: false },
      { art: "der", sg: "Backofen", pl: "die Backöfen", akk: "den Backofen", dat: "dem Backofen", en: "oven (also: der Ofen)", cat: "Küche, Bad & Geräte", ex: "Der Kuchen ist noch im Backofen.", extra: false },
      { art: "die", sg: "Spülmaschine", pl: "die Spülmaschinen", akk: "die Spülmaschine", dat: "der Spülmaschine", en: "dishwasher", cat: "Küche, Bad & Geräte", ex: "Wir haben zum Glück eine Spülmaschine in der Küche.", extra: false },
      { art: "die", sg: "Waschmaschine", pl: "die Waschmaschinen", akk: "die Waschmaschine", dat: "der Waschmaschine", en: "washing machine", cat: "Küche, Bad & Geräte", ex: "Die Waschmaschine läuft gerade im Waschraum.", extra: false },
      { art: "der", sg: "Trockner", pl: "die Trockner", akk: "den Trockner", dat: "dem Trockner", en: "dryer", cat: "Küche, Bad & Geräte", ex: "Nach dem Waschen kommt die Wäsche in den Trockner.", extra: false },
      { art: "die", sg: "Mikrowelle", pl: "die Mikrowellen", akk: "die Mikrowelle", dat: "der Mikrowelle", en: "microwave", cat: "Küche, Bad & Geräte", ex: "Ich mache das Essen kurz in der Mikrowelle warm.", extra: false },
      { art: "die", sg: "Kaffeemaschine", pl: "die Kaffeemaschinen", akk: "die Kaffeemaschine", dat: "der Kaffeemaschine", en: "coffee machine", cat: "Küche, Bad & Geräte", ex: "Die Kaffeemaschine steht rechts auf der Arbeitsplatte.", extra: false },
      { art: "der", sg: "Wasserkocher", pl: "die Wasserkocher", akk: "den Wasserkocher", dat: "dem Wasserkocher", en: "electric kettle", cat: "Küche, Bad & Geräte", ex: "Ich mache heißes Wasser im Wasserkocher.", extra: false },
      { art: "der", sg: "Toaster", pl: "die Toaster", akk: "den Toaster", dat: "dem Toaster", en: "toaster", cat: "Küche, Bad & Geräte", ex: "Morgens benutze ich den Toaster für mein Brot.", extra: false },
      { art: "der", sg: "Staubsauger", pl: "die Staubsauger", akk: "den Staubsauger", dat: "dem Staubsauger", en: "vacuum cleaner", cat: "Küche, Bad & Geräte", ex: "Am Samstag benutze ich den Staubsauger im ganzen Flur.", extra: false },
      { art: "das", sg: "Bügeleisen", pl: "die Bügeleisen", akk: "das Bügeleisen", dat: "dem Bügeleisen", en: "iron (for clothes)", cat: "Küche, Bad & Geräte", ex: "Das Bügeleisen ist noch heiß.", extra: false },
      { art: "der", sg: "Fernseher", pl: "die Fernseher", akk: "den Fernseher", dat: "dem Fernseher", en: "TV / television", cat: "Küche, Bad & Geräte", ex: "Der Fernseher steht im Wohnzimmer.", extra: false },
      { art: "der", sg: "Ventilator", pl: "die Ventilatoren", akk: "den Ventilator", dat: "dem Ventilator", en: "fan", cat: "Küche, Bad & Geräte", ex: "Im Sommer brauchen wir einen Ventilator im Schlafzimmer.", extra: false },
      { art: "der", sg: "Föhn", pl: "die Föhne", akk: "den Föhn", dat: "dem Föhn", en: "hairdryer", cat: "Küche, Bad & Geräte", ex: "Der Föhn liegt im Badezimmer.", extra: false },
      { art: "die", sg: "Spüle", pl: "die Spülen", akk: "die Spüle", dat: "der Spüle", en: "kitchen sink", cat: "Küche, Bad & Geräte", ex: "Das schmutzige Geschirr steht in der Spüle.", extra: false },
      { art: "das", sg: "Waschbecken", pl: "die Waschbecken", akk: "das Waschbecken", dat: "dem Waschbecken", en: "sink / washbasin", cat: "Küche, Bad & Geräte", ex: "Die Seife liegt neben dem Waschbecken.", extra: false },
      { art: "die", sg: "Dusche", pl: "die Duschen", akk: "die Dusche", dat: "der Dusche", en: "shower", cat: "Küche, Bad & Geräte", ex: "Das Apartment hat ein kleines Bad mit Dusche.", extra: false },
      { art: "die", sg: "Badewanne", pl: "die Badewannen", akk: "die Badewanne", dat: "der Badewanne", en: "bathtub", cat: "Küche, Bad & Geräte", ex: "Nach einem langen Tag nehme ich gern ein Bad in der Badewanne.", extra: false },
      { art: "der", sg: "Wasserhahn", pl: "die Wasserhähne", akk: "den Wasserhahn", dat: "dem Wasserhahn", en: "faucet / tap", cat: "Küche, Bad & Geräte", ex: "Der Wasserhahn in der Küche tropft.", extra: false },
      { art: "das", sg: "Handtuch", pl: "die Handtücher", akk: "das Handtuch", dat: "dem Handtuch", en: "towel", cat: "Küche, Bad & Geräte", ex: "Das blaue Handtuch hängt am Handtuchhalter.", extra: false },
      { art: "die", sg: "Seife", pl: "die Seifen", akk: "die Seife", dat: "der Seife", en: "soap", cat: "Küche, Bad & Geräte", ex: "Bitte wasch dir die Hände mit Seife.", extra: false },
      { art: "der", sg: "Topf", pl: "die Töpfe", akk: "den Topf", dat: "dem Topf", en: "pot", cat: "Küche, Bad & Geräte", ex: "Der Topf steht schon auf dem Herd.", extra: false },
      { art: "die", sg: "Pfanne", pl: "die Pfannen", akk: "die Pfanne", dat: "der Pfanne", en: "pan / frying pan", cat: "Küche, Bad & Geräte", ex: "Ich brate das Gemüse in der Pfanne.", extra: false },
      { art: "die", sg: "Schüssel", pl: "die Schüsseln", akk: "die Schüssel", dat: "der Schüssel", en: "bowl", cat: "Küche, Bad & Geräte", ex: "Der Salat ist in einer großen Schüssel.", extra: false },
      { art: "das", sg: "Schneidebrett", pl: "die Schneidebretter", akk: "das Schneidebrett", dat: "dem Schneidebrett", en: "cutting board", cat: "Küche, Bad & Geräte", ex: "Ich schneide das Brot auf dem Schneidebrett.", extra: false },

      // Wohnungssuche & Haustypen
      { art: "die", sg: "Miete", pl: "die Mieten", akk: "die Miete", dat: "der Miete", en: "rent", cat: "Wohnungssuche & Haustypen", ex: "Die Miete beträgt maximal 800 Euro im Monat.", extra: false },
      { art: "die", sg: "Wohnfläche", pl: "die Wohnflächen", akk: "die Wohnfläche", dat: "der Wohnfläche", en: "living space / floor area (qm)", cat: "Wohnungssuche & Haustypen", ex: "Die Wohnung hat eine Wohnfläche von 81 Quadratmetern.", extra: false },
      { art: "die", sg: "Lage", pl: "die Lagen", akk: "die Lage", dat: "der Lage", en: "location", cat: "Wohnungssuche & Haustypen", ex: "Die Lage ist sehr zentral, aber trotzdem ruhig.", extra: false },
      { art: "die", sg: "Wohnungsanzeige", pl: "die Wohnungsanzeigen", akk: "die Wohnungsanzeige", dat: "der Wohnungsanzeige", en: "apartment listing / ad", cat: "Wohnungssuche & Haustypen", ex: "Carla und Alex lesen fünf Wohnungsanzeigen.", extra: false },
      { art: "die", sg: "Einweihungsfeier", pl: "die Einweihungsfeiern", akk: "die Einweihungsfeier", dat: "der Einweihungsfeier", en: "housewarming party", cat: "Wohnungssuche & Haustypen", ex: "Am Samstag feiern wir unsere Einweihungsfeier!", extra: false },
      { art: "die", sg: "WG", pl: "die WGs", akk: "die WG", dat: "der WG", en: "shared apartment (Wohngemeinschaft)", cat: "Wohnungssuche & Haustypen", ex: "Zurzeit habe ich ein Zimmer in einer WG.", extra: false },
      { art: "das", sg: "Hochhaus", pl: "die Hochhäuser", akk: "das Hochhaus", dat: "dem Hochhaus", en: "high-rise building", cat: "Wohnungssuche & Haustypen", ex: "Im Hochhaus sieht man über die ganze Stadt.", extra: false },
      { art: "das", sg: "Reihenhaus", pl: "die Reihenhäuser", akk: "das Reihenhaus", dat: "dem Reihenhaus", en: "terraced house / townhouse", cat: "Wohnungssuche & Haustypen", ex: "Unser Reihenhaus hat einen Garten und eine Terrasse.", extra: false },
      { art: "das", sg: "Einfamilienhaus", pl: "die Einfamilienhäuser", akk: "das Einfamilienhaus", dat: "dem Einfamilienhaus", en: "single-family house", cat: "Wohnungssuche & Haustypen", ex: "Familie Weber wohnt in einem Einfamilienhaus am Stadtrand.", extra: false },
      { art: "das", sg: "Mehrfamilienhaus", pl: "die Mehrfamilienhäuser", akk: "das Mehrfamilienhaus", dat: "dem Mehrfamilienhaus", en: "apartment building", cat: "Wohnungssuche & Haustypen", ex: "In der Stadt wohnen viele Leute im Mehrfamilienhaus.", extra: false },
      { art: "die", sg: "Altbauwohnung", pl: "die Altbauwohnungen", akk: "die Altbauwohnung", dat: "der Altbauwohnung", en: "old-building apartment (high ceilings)", cat: "Wohnungssuche & Haustypen", ex: "Die Altbauwohnung hat große Zimmer und hohe Decken.", extra: false },
      { art: "das", sg: "Fachwerkhaus", pl: "die Fachwerkhäuser", akk: "das Fachwerkhaus", dat: "dem Fachwerkhaus", en: "half-timbered house", cat: "Wohnungssuche & Haustypen", ex: "Das Fachwerkhaus ist gemütlich, aber innen etwas dunkel.", extra: false },
      { art: "das", sg: "Loft", pl: "die Lofts", akk: "das Loft", dat: "dem Loft", en: "loft apartment", cat: "Wohnungssuche & Haustypen", ex: "Cool — wohnen im Loft, alles in einem Raum!", extra: false },
      { art: "die", sg: "Villa", pl: "die Villen", akk: "die Villa", dat: "der Villa", en: "villa / mansion", cat: "Wohnungssuche & Haustypen", ex: "Die weiße Villa hat einen großen Garten.", extra: false },
      { art: "das", sg: "Bauernhaus", pl: "die Bauernhäuser", akk: "das Bauernhaus", dat: "dem Bauernhaus", en: "farmhouse", cat: "Wohnungssuche & Haustypen", ex: "Auf dem Land steht ein altes Bauernhaus.", extra: false },
      { art: "der", sg: "Bungalow", pl: "die Bungalows", akk: "den Bungalow", dat: "dem Bungalow", en: "bungalow (single-story house)", cat: "Wohnungssuche & Haustypen", ex: "Ein Bungalow hat keine Treppen, alles liegt auf einer Ebene.", extra: false },
      { art: "der", sg: "Vorteil", pl: "die Vorteile", akk: "den Vorteil", dat: "dem Vorteil", en: "advantage / pro", cat: "Wohnungssuche & Haustypen", ex: "Ein großer Vorteil der Wohnung ist der Südbalkon.", extra: false },
      { art: "der", sg: "Nachteil", pl: "die Nachteile", akk: "den Nachteil", dat: "dem Nachteil", en: "disadvantage / con", cat: "Wohnungssuche & Haustypen", ex: "Ein Nachteil ist: Es gibt keinen Aufzug.", extra: false },
      { art: "die", sg: "Farbe", pl: "die Farben", akk: "die Farbe", dat: "der Farbe", en: "color", cat: "Wohnungssuche & Haustypen", ex: "Welche Farbe hat dein Sofa? Es ist grau.", extra: false },

      // Extra: Renting in Germany
      { art: "die", sg: "Kaution", pl: "die Kautionen", akk: "die Kaution", dat: "der Kaution", en: "security deposit", cat: "Extra: Mieten in Deutschland", ex: "Die Kaution beträgt meistens drei Monatsmieten.", extra: true },
      { art: "die", sg: "Nebenkosten", pl: "die Nebenkosten (Pl.)", akk: "die Nebenkosten", dat: "den Nebenkosten", en: "utilities / additional costs", cat: "Extra: Mieten in Deutschland", ex: "Wie hoch sind die Nebenkosten für Heizung und Wasser?", extra: true },
      { art: "der", sg: "Mietvertrag", pl: "die Mietverträge", akk: "den Mietvertrag", dat: "dem Mietvertrag", en: "rental contract / lease", cat: "Extra: Mieten in Deutschland", ex: "Wir unterschreiben morgen den Mietvertrag.", extra: true },
      { art: "der", sg: "Vermieter", pl: "die Vermieter", fem: "die Vermieterin (Pl. -innen)", akk: "den Vermieter", dat: "dem Vermieter", en: "landlord", cat: "Extra: Mieten in Deutschland", ex: "Der Vermieter hat die Wohnung top renoviert.", extra: true },
      { art: "der", sg: "Mieter", pl: "die Mieter", fem: "die Mieterin (Pl. -innen)", akk: "den Mieter", dat: "dem Mieter", en: "tenant", cat: "Extra: Mieten in Deutschland", ex: "Die neuen Mieter ziehen am 1. Juni ein.", extra: true },
      { art: "der", sg: "Umzug", pl: "die Umzüge", akk: "den Umzug", dat: "dem Umzug", en: "move / relocation", cat: "Extra: Mieten in Deutschland", ex: "Der Umzug in die neue Wohnung war anstrengend.", extra: true },

      // Extra: Software Engineering Home-Office
      { art: "das", sg: "Homeoffice", pl: "— (singular)", akk: "das Homeoffice", dat: "dem Homeoffice", en: "work from home / home office", cat: "Extra: Software Engineering", ex: "Ich arbeite dreimal pro Woche im Homeoffice.", extra: true },
      { art: "der", sg: "Schreibtischstuhl", pl: "die Schreibtischstühle", akk: "den Schreibtischstuhl", dat: "dem Schreibtischstuhl", en: "ergonomic desk chair", cat: "Extra: Software Engineering", ex: "Für mein Arbeitszimmer kaufe ich einen ergonomischen Schreibtischstuhl.", extra: true },
      { art: "die", sg: "Steckdose", pl: "die Steckdosen", akk: "die Steckdose", dat: "der Steckdose", en: "power outlet / socket", cat: "Extra: Software Engineering", ex: "Neben dem Schreibtisch gibt es leider nur eine Steckdose.", extra: true },
      { art: "das", sg: "Kabel", pl: "die Kabel", akk: "das Kabel", dat: "dem Kabel", en: "cable / cord", cat: "Extra: Software Engineering", ex: "Das Kabel liegt unter dem Schreibtisch.", extra: true },
      { art: "der", sg: "Router", pl: "die Router", akk: "den Router", dat: "dem Router", en: "Wi-Fi router", cat: "Extra: Software Engineering", ex: "Der Router steht im Flur für gutes WLAN.", extra: true }
    ],
    verbs: [
      { inf: "wohnen", en: "to live / reside", type: "Regular", caseGov: "in + Dat.", ich: "wohne", du: "wohnst", er: "wohnt", wir: "wohnen", ihr: "wohnt", sie: "wohnen", imp: "Wohn! / Wohnen Sie!", prt: "wohnte", ex: "Wir wohnen in einem Fachwerkhaus in der Nähe der Uni.", extra: false },
      { inf: "stellen", en: "to put / place upright (Wohin?)", type: "Regular (Action)", caseGov: "+ Akk. (Wohin?)", ich: "stelle", du: "stellst", er: "stellt", wir: "stellen", ihr: "stellt", sie: "stellen", imp: "Stell! / Stellen Sie!", prt: "stellte", ex: "Ich stelle den Tisch zwischen die Stühle.", extra: false },
      { inf: "stehen", en: "to stand / be standing (Wo?)", type: "Regular (Position)", caseGov: "+ Dat. (Wo?)", ich: "stehe", du: "stehst", er: "steht", wir: "stehen", ihr: "steht", sie: "stehen", imp: "Steh! / Stehen Sie!", prt: "stand", ex: "Der Tisch steht zwischen den Stühlen.", extra: false },
      { inf: "legen", en: "to lay / put flat (Wohin?)", type: "Regular (Action)", caseGov: "+ Akk. (Wohin?)", ich: "lege", du: "legst", er: "legt", wir: "legen", ihr: "legt", sie: "legen", imp: "Leg! / Legen Sie!", prt: "legte", ex: "Ich lege das Buch auf den Tisch.", extra: false },
      { inf: "liegen", en: "to lie / be lying (Wo?)", type: "Regular (Position)", caseGov: "+ Dat. (Wo?)", ich: "liege", du: "liegst", er: "liegt", wir: "liegen", ihr: "liegt", sie: "liegen", imp: "Lieg! / Liegen Sie!", prt: "lag", ex: "Das Buch liegt auf dem Tisch.", extra: false },
      { inf: "setzen", en: "to set / sit down (Wohin?)", type: "Regular (-z / Reflexive)", caseGov: "+ Akk. (Wohin?)", ich: "setze", du: "setzt", er: "setzt", wir: "setzen", ihr: "setzt", sie: "setzen", imp: "Setz dich! / Setzen Sie sich!", prt: "setzte", ex: "Ich setze mich auf den Stuhl.", extra: false },
      { inf: "sitzen", en: "to sit / be sitting (Wo?)", type: "Regular (-z / Position)", caseGov: "+ Dat. (Wo?)", ich: "sitze", du: "sitzt", er: "sitzt", wir: "sitzen", ihr: "sitzt", sie: "sitzen", imp: "Sitz!", prt: "saß", ex: "Ich sitze auf dem Stuhl.", extra: false },
      { inf: "hängen", en: "to hang (Action + Akk. / Position + Dat.)", type: "Regular (Both!)", caseGov: "Akk. / Dat.", ich: "hänge", du: "hängst", er: "hängt", wir: "hängen", ihr: "hängt", sie: "hängen", imp: "Häng! / Hängen Sie!", prt: "hängte / hing", ex: "Ich hänge das Bild an die Wand. Das Bild hängt an der Wand.", extra: false },
      { inf: "mieten", en: "to rent (as tenant)", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "miete", du: "mietest", er: "mietet", wir: "mieten", ihr: "mietet", sie: "mieten", imp: "Miete! / Mieten Sie!", prt: "mietete", ex: "Carla und Alex mieten eine helle 3-Zimmer-Wohnung.", extra: false },
      { inf: "vermieten", en: "to rent out / let (as landlord)", type: "Regular (-e-)", caseGov: "+ Akk.", ich: "vermiete", du: "vermietest", er: "vermietet", wir: "vermieten", ihr: "vermietet", sie: "vermieten", imp: "Vermieten Sie!", prt: "vermietete", ex: "Wir vermieten eine Wohnung mit Süd-Balkon, top renoviert.", extra: false },
      { inf: "aussehen", en: "to look / appear", type: "Separable + Vowel (e→ie)", caseGov: "—", ich: "sehe aus", du: "siehst aus", er: "sieht aus", wir: "sehen aus", ihr: "seht aus", sie: "sehen aus", imp: "—", prt: "sah aus", ex: "Das Bild über dem Fernseher sieht total gut aus!", extra: false },
      { inf: "sich freuen", en: "to look forward to / be happy", type: "Reflexive", caseGov: "auf + Akk.", ich: "freue mich", du: "freust dich", er: "freut sich", wir: "freuen uns", ihr: "freut euch", sie: "freuen sich", imp: "Freu dich!", prt: "freute sich", ex: "Ich freue mich schon sehr auf die Einweihungsfeier.", extra: false },
      { inf: "mitbringen", en: "to bring along", type: "Separable", caseGov: "+ Akk.", ich: "bringe mit", du: "bringst mit", er: "bringt mit", wir: "bringen mit", ihr: "bringt mit", sie: "bringen mit", imp: "Bring mit! / Bringen Sie mit!", prt: "brachte mit", ex: "Ich bringe einen Kuchen oder einen Salat mit, okay?", extra: false },
      { inf: "mitkommen", en: "to come along", type: "Separable", caseGov: "—", ich: "komme mit", du: "kommst mit", er: "kommt mit", wir: "kommen mit", ihr: "kommt mit", sie: "kommen mit", imp: "Komm mit! / Kommen Sie mit!", prt: "kam mit", ex: "Kann meine Freundin am Samstag mitkommen?", extra: false },
      { inf: "stattfinden", en: "to take place", type: "Separable (-e-)", caseGov: "—", ich: "finde statt", du: "findest statt", er: "findet statt", wir: "finden statt", ihr: "findet statt", sie: "finden statt", imp: "—", prt: "fand statt", ex: "Wann findet die Feier statt? Am 3. Juni um 19 Uhr.", extra: false },
      { inf: "grillen", en: "to barbecue / grill", type: "Regular", caseGov: "+ Akk.", ich: "grille", du: "grillst", er: "grillt", wir: "grillen", ihr: "grillt", sie: "grillen", imp: "Grill! / Grillen Sie!", prt: "grillte", ex: "Im Reihenhaus mit Garten kann man im Sommer grillen.", extra: false },
      // Extra Housing Verbs
      { inf: "einziehen", en: "to move in", type: "Separable", caseGov: "in + Akk.", ich: "ziehe ein", du: "ziehst ein", er: "zieht ein", wir: "ziehen ein", ihr: "zieht ein", sie: "ziehen ein", imp: "Zieh ein!", prt: "zog ein", ex: "Nächste Woche ziehen wir in die neue Wohnung ein.", extra: true },
      { inf: "ausziehen", en: "to move out", type: "Separable", caseGov: "aus + Dat.", ich: "ziehe aus", du: "ziehst aus", er: "zieht aus", wir: "ziehen aus", ihr: "zieht aus", sie: "ziehen aus", imp: "Zieh aus!", prt: "zog aus", ex: "Am Ende des Monats zieht er aus der WG aus.", extra: true },
      { inf: "umziehen", en: "to move house / relocate", type: "Separable", caseGov: "in + Akk.", ich: "ziehe um", du: "ziehst um", er: "zieht um", wir: "ziehen um", ihr: "zieht um", sie: "ziehen um", imp: "Zieh um!", prt: "zog um", ex: "Nächstes Jahr ziehen wir vielleicht in die Stadt um.", extra: true },
      { inf: "renovieren", en: "to renovate", type: "Regular", caseGov: "+ Akk.", ich: "renoviere", du: "renovierst", er: "renoviert", wir: "renovieren", ihr: "renoviert", sie: "renovieren", imp: "Renovier!", prt: "renovierte", ex: "Die Wohnung ist neu renoviert und sehr hell.", extra: true },
      { inf: "aufräumen", en: "to tidy up / clean up", type: "Separable", caseGov: "+ Akk.", ich: "räume auf", du: "räumst auf", er: "räumt auf", wir: "räumen auf", ihr: "räumt auf", sie: "räumen auf", imp: "Räum auf! / Räumen Sie auf!", prt: "räumte auf", ex: "Vor der Einweihungsfeier räumen wir die ganze Wohnung auf.", extra: true }
    ],
    expressions: [
      { de: "ruhig ↔ laut | klein ↔ groß | hell ↔ dunkel | teuer ↔ günstig/billig | zentral", en: "quiet ↔ loud | small ↔ big | bright ↔ dark | expensive ↔ affordable/cheap | central", note: "Core apartment-hunting adjective pairs.", extra: false },
      { de: "Die Wohnung ist teuer / nicht billig / sehr teuer / zu teuer.", en: "The apartment is expensive / not cheap / very expensive / too expensive.", note: "sein + Adjektiv with gradations (nicht, sehr, zu).", extra: false },
      { de: "Das ist ganz toll. / Ich finde das echt super. / Das finde ich wirklich schön. / Das sieht total gut aus.", en: "That's really great. / I think that's truly awesome. / I find that really pretty. / That looks totally great.", note: "Gut gesagt: expressing enthusiasm (ganz, echt, wirklich, total).", extra: false },
      { de: "Ich finde die Wohnung echt gemütlich! / Sie ist nicht langweilig, aber hässlich.", en: "I find the apartment really cozy! / It's not boring, but ugly.", note: "Key opinion adjectives: gemütlich (cozy), langweilig (boring), hässlich (ugly), schön (pretty).", extra: false },
      { de: "Ich freue mich schon auf Samstag und komme sehr gern.", en: "I'm already looking forward to Saturday and will gladly come.", note: "Accepting a housewarming invitation.", extra: false },
      { de: "Kann ich etwas mitbringen? — Ich bringe einen Kuchen mit, okay?", en: "Can I bring something? — I'll bring a cake, okay?", note: "Polite guest phrase in Germany.", extra: false },
      { de: "Es tut mir leid, aber ich kann leider nicht kommen. Ich habe leider keine Zeit.", en: "I'm sorry, but unfortunately I can't come. I don't have time.", note: "Politely declining an invitation.", extra: false },
      { de: "Die Farben: gelb, orange, rot, rosa, lila, blau, hellblau, grün, hellgrün, braun, weiß, grau, schwarz, beige, türkis", en: "Colors: yellow, orange, red, pink, purple, blue, light blue, green, light green, brown, white, gray, black, beige, turquoise", note: "All 15 colors from Kapitel 9 (add hell- for light, dunkel- for dark!).", extra: false },
      { de: "Meine Wohnung ist schön, aber klein. Die Lage ist nicht so gut.", en: "My apartment is nice, but small. The location isn't so great.", note: "Useful Textbausteine for describing your home.", extra: false },
      { de: "Kaltmiete vs. Warmmiete", en: "Base rent (without heating/utilities) vs. total rent (with utilities)", note: "Crucial German apartment listing terms (Warmmiete = Kaltmiete + Nebenkosten).", extra: true },
      { de: "Ich arbeite heute im Homeoffice.", en: "I'm working from home today.", note: "Standard German tech-team status message.", extra: true }
    ],
    grammar: [
      {
        title: "1. Die 9 Wechselpräpositionen: Wohin? (Akk.) vs. Wo? (Dat.)",
        badge: "Core",
        explanation: "These <strong>9 two-way prepositions</strong> take <strong>Akkusativ</strong> for direction/movement (<strong>Wohin?</strong>) and <strong>Dativ</strong> for static location (<strong>Wo?</strong>).",
        table: {
          headers: ["Preposition", "Meaning", "Wohin? → <strong>Akkusativ</strong> (Action)", "Wo? → <strong>Dativ</strong> (Position)"],
          rows: [
            ["<strong>an</strong>", "at / on (vertical)", "Ich hänge das Bild <strong>an die</strong> Wand.", "Das Bild hängt <strong>an der</strong> Wand."],
            ["<strong>auf</strong>", "on / onto (horizontal)", "Ich lege das Buch <strong>auf den</strong> Tisch.", "Das Buch liegt <strong>auf dem</strong> Tisch."],
            ["<strong>hinter</strong>", "behind", "Ich stelle den Stuhl <strong>hinter die</strong> Tür.", "Der Stuhl steht <strong>hinter der</strong> Tür."],
            ["<strong>in</strong>", "in / into", "Ich gehe <strong>in die</strong> Küche. (in+das = <strong>ins</strong>)", "Ich bin <strong>in der</strong> Küche. (in+dem = <strong>im</strong>)"],
            ["<strong>neben</strong>", "next to / beside", "Ich stelle die Tasche <strong>neben den</strong> Schrank.", "Die Tasche steht <strong>neben dem</strong> Schrank."],
            ["<strong>über</strong>", "over / above", "Ich hänge die Lampe <strong>über den</strong> Tisch.", "Die Lampe hängt <strong>über dem</strong> Tisch."],
            ["<strong>unter</strong>", "under / beneath", "Ich lege den Teppich <strong>unter den</strong> Tisch.", "Der Teppich liegt <strong>unter dem</strong> Tisch."],
            ["<strong>vor</strong>", "in front of", "Ich stelle das Auto <strong>vor das</strong> Haus.", "Das Auto steht <strong>vor dem</strong> Haus."],
            ["<strong>zwischen</strong>", "between", "Ich stelle den Tisch <strong>zwischen die</strong> Stühle.", "Der Tisch steht <strong>zwischen den</strong> Stühlen (+ -n!)."]
          ]
        },
        tip: "Watch the contractions! <code>in + das = ins</code> (Akk.), <code>in + dem = im</code> (Dat.), <code>an + das = ans</code> (Akk.), <code>an + dem = am</code> (Dat.). And remember Dativ Plural adds <strong>-n</strong> (<em>zwischen den Stühlen, in den Regalen</em>)!"
      },
      {
        title: "2. Aktionsverben (Wohin? + Akk.) vs. Positionsverben (Wo? + Dat.)",
        badge: "Essential",
        explanation: "German uses <strong>paired verbs</strong> to distinguish the <em>action</em> of putting something somewhere (<strong>Akkusativ</strong>) from the <em>resulting position</em> where it stays (<strong>Dativ</strong>).",
        table: {
          headers: ["Action Verb (Wohin? → <strong>Akkusativ</strong>)", "Position Verb (Wo? → <strong>Dativ</strong>)", "Contrast Example"],
          rows: [
            ["<strong>stellen</strong> (to place upright)", "<strong>stehen</strong> (to be standing)", "Er <strong>stellt</strong> die Flasche auf <strong>den</strong> Boden. → Sie <strong>steht</strong> auf <strong>dem</strong> Boden."],
            ["<strong>legen</strong> (to lay flat)", "<strong>liegen</strong> (to be lying)", "Er <strong>legt</strong> den Ball auf <strong>den</strong> Boden. → Er <strong>liegt</strong> auf <strong>dem</strong> Boden."],
            ["<strong>(sich) setzen</strong> (to sit down / set)", "<strong>sitzen</strong> (to be sitting)", "Ich <strong>setze mich</strong> auf <strong>den</strong> Stuhl. → Ich <strong>sitze</strong> auf <strong>dem</strong> Stuhl."],
            ["<strong>hängen</strong> (to hang up)", "<strong>hängen</strong> (to be hanging)", "Ich <strong>hänge</strong> das Bild an <strong>die</strong> Wand. → Es <strong>hängt</strong> an <strong>der</strong> Wand."]
          ]
        },
        tip: "Easy memory trick: the <strong>Action verbs</strong> have an <strong>E</strong> (st<strong>e</strong>llen, l<strong>e</strong>gen, s<strong>e</strong>tzen) → <strong>Wohin? + Akkusativ</strong>! The <strong>Position verbs</strong> have <strong>I/E</strong> (st<strong>e</strong>hen, l<strong>ie</strong>gen, s<strong>i</strong>tzen) → <strong>Wo? + Dativ</strong>!"
      },
      {
        title: "3. sein + Adjektiv & Intensifiers (nicht, sehr, zu, echt, total)",
        badge: "Expression",
        explanation: "When describing a home or furniture with <code>sein</code>, the adjective stays in its <strong>base form</strong> (no ending!). Modify its strength with particles before the adjective:",
        table: {
          headers: ["Pattern", "Meaning", "Example"],
          rows: [
            ["<code>sein + Adjektiv</code>", "basic statement", "Die Wohnung ist <strong>teuer</strong>. / Das Zimmer ist <strong>hell</strong>."],
            ["<code>nicht + Adjektiv</code>", "negation", "Die Wohnung ist <strong>nicht billig</strong>. / Sie ist <strong>nicht langweilig</strong>."],
            ["<code>sehr / ganz / echt / wirklich / total</code>", "strong positive/intensifier", "Das ist <strong>ganz toll</strong>! / Ich finde die Wohnung <strong>echt gemütlich</strong>!"],
            ["<code>zu + Adjektiv</code>", "excessive (too ...)", "Die Wohnung ist <strong>zu teuer</strong> / <strong>zu klein</strong>."]
          ]
        },
        tip: "Watch the difference: <strong>sehr teuer</strong> = very expensive (still possible), <strong>zu teuer</strong> = TOO expensive (deal-breaker!)."
      },
      {
        title: "4. Phonetik: Langes 'e' vs. Kurzes 'e'",
        badge: "Pronunciation",
        explanation: "How to tell whether German <code>e</code> is pronounced long [eː] or short [ɛ]:",
        table: {
          headers: ["Spelling", "Pronunciation Rule", "Kapitel 9 Examples"],
          rows: [
            ["<strong>eh</strong> or <strong>ee</strong>", "<strong>immer lang</strong> (ALWAYS long!)", "s<strong>eh</strong>r, m<strong>eh</strong>r, st<strong>eh</strong>t, Id<strong>ee</strong>, T<strong>ee</strong>"],
            ["<strong>e</strong> alone (before 1 consonant)", "often <strong>lang</strong>", "n<strong>e</strong>ben, r<strong>e</strong>den, R<strong>e</strong>gal"],
            ["<strong>e</strong> alone (before 2+ consonants)", "<strong>kurz</strong> (short!)", "h<strong>e</strong>ll, T<strong>e</strong>ppich, Z<strong>e</strong>ntrum, B<strong>e</strong>tt, gem<strong>ü</strong>tlich"]
          ]
        },
        tip: "Double consonant after a vowel (<em>hell, Bett, Teppich</em>) makes the vowel <strong>short</strong>; <code>eh</code> or <code>ee</code> (<em>sehr, mehr, steht, Idee</em>) is <strong>always long</strong>!"
      }
    ]
  }
);
