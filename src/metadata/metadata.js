module.exports = {
  name: "Marco Kappeller",
  title: "Junior Frontend Developer",
  facts: {
    Wohnort: {
      icon: "home",
      text: "Sterzhausen",
    },
    "E-Mail": {
      icon: "envelope",
      text: '<a href="mailto:marco-kappeller.lebenslauf@gmx.de">marco-kappeller.lebenslauf@gmx.de</a>',
    },
    Geburtstag: {
      icon: "star",
      text: "23.05.1986",
    },
  },
  techskills: [
    ["React", "++++"],
    ["React-Native", "+++++"],
    ["Redux", "+++"],
    ["JavaScript", "++++"],
    ["TypeScript", "+++"],
    ["HTML5", "++"],
    ["CSS3", "+++"],
    ["Ergonomie", "++++"],
  ],
  methodskills: [
    ["Scrum", "+++"],
    ["Kanban", "++++"],
    ["Statistik", "+++"],
  ],
  education: [
    {
      title: "Umschulung zum Fachinformatiker Anwendungsentwicklung ",
      org: "Deutsche Angestellten Akademie Marburg",
      datespan: "02/2020 - 02/2022",
      contents:
        "2mt Software Solutions GmbH, Launsbach in Zusammenarbeit mit der Deutschen Angestellten Akademie, Marburg. Abschluss Projekt: Corona-App Daicy App zur Unterbrechung von Infektionsketten auf Basis von React-Native für den Main-Kinzig-Kreis.",
      details: [
        "Überarbeiten des Frontends (nach rechtlichen Kriterien für Barrierefreiheit)",
        "Rolle / Rechte für Testzentren im Backend",
        "Zertifikate erweitern um Impfzertifikate ",
        "Testen",
        "Demonstration neuer Features beim Kunden",
        "Qualitätssicherung",
      ],
      badges: [],
    },

    {
      title: "Diplom Soziologie Studium ",
      org: "Philipps Universität Marburg",
      datespan: "10/2006 - 10/2016",
      contents: "Philipps-Universität Marburg",
      details: [],
      badges: [],
    },
    {
      title: "Diplom Chemie Studium",
      org: "Philipps Universität Marburg",
      datespan: "10/2005 - 10/2006",
      contents: "Philipps-Universität Marburg",
      details: [],
      badges: [],
    },
    {
      title: "Abitur",
      org: "Philippinum Marburg",
      datespan: "02/2002 - 06/2005",
      contents: "Gymnasium Philippinum Marburg",
      details: [],
      badges: [],
    },
  ],

  experience: [
    {
      header: "Corona-App Daicy",
      skills: ["React", "React-Native", "Redux", "Ergonomie", "TypeScript"],
      contents:
        "Entwicklung einer App zur Unterbrechung von Infektionsketten auf Basis von React-Native für den Main-Kinzig-Kreis. Ein auf React basierendes Backend empfängt Antigentest-Ergebnisse aus der App und dient zur Verwaltung von Testterminen. Über die GraphQL Schnittstelle können auch Nachrichten aus dem Backend in die App gepusht werden. Bei Bedarf können die Begegnungen aus dem Kalender im pdf Format exportiert werden.",
      tasks: [
        "Überarbeiten des Fontends damit die rechtlichen Kriterien für Barrierefreiheit eingehalten werden",
        "Rolle bzw Rechte für Testzentren im Backend ",
        "Zertifikate um Impfzertifikate erweitern",
        "Testen",
        "Demonstration der neuen Features beim Kunden",
        "Qualitätssicherung",
      ],
      duration: "9 Monate",
      scope: ["4 Frontend-Entwickler", "1 Backend-Entwickler", "1 UI-Designer"],
    },
    {
      header: "Michel CNC Stellenangebote",
      skills: ["Wordpress", "HTML"],
      contents:
        "Erstellen eines neuen Bereichs für Stellenangebote in einer bereits vorhandenen Webseite, die mit Wordpress erstellt wurde ",
      tasks: [
        "Eigenverantwortliches Umsetzen der Vorgaben",
        "Kommunikation mit dem Kunden",
      ],
      duration: "1 Woche",
      scope: ["1 Frontend-Entwickler"],
    },
    {
      header: "Werbeseite für die App Daicy",
      skills: ["October CMS", "HTML", "CSS"],
      contents:
        "Bei der Webseite der App Daicy sollen das Aussehen und die Inhalte auf dem Stand mit der App gehalten werden. Außerdem musste bei den veralteten Plug-ins und dem October CMS ein Update gemacht werden  ",
      tasks: [
        "Eigenverantwortliches Anpassen des Layouts an die Änderungen in der App",
        "Aufsetzen einer Erklärung zur Barrierefreiheit",
        "Pflege der Inhalte",
      ],
      duration: "9 Monate",
      scope: ["1 Frontend-Entwickler"],
    },
    {
      header: "Empirische Untersuchung zur Mitarbeiterzufriedenheit",
      skills: ["SPSS", "Statistik", "Projektplanung"],
      contents:
        "Durchführung und Auswertung einer Zufriedenheitsumfrage im Auftrag der Elkamet GmbH. Die Zufriedenheit der Mitarbeiter wurde in 4 Kategorien quantitativ geprüft. Die Ergebnisse sollten Rückschlüsse auf die von Elkamet einsetzten Arbeitsmethoden zulassen. Die Auswertung der gesammelten Daten erfolgte mit SPSS 22.",
      tasks: [
        "Design des Fragebogens",
        "Schreiben eines R-Scripts um 'fehlende Werte' zu ersetzten",
        "Datenauswertung",
        "Graphisches Aufbereiten der Ergebnisse",
      ],
      duration: "6 Monate",
      scope: ["4 studentische Kräfte"],
    },
  ],
  languages: [["Englisch, ", "verhandlungssicher"]],
  hobbys: ["Mitarbeit an Open-Source Softwareprojekten", "Fahrradfahren"],
};
