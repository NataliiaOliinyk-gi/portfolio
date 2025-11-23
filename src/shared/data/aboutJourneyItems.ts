export interface IAboutJourneyItem {
  id: number;
  period: string;
  title: string;
  location: string;
  description: string;
}

const aboutJourneyItems: IAboutJourneyItem[] = [
  {
    id: 1,
    period: "09/1994 - 07/1999",
    title: "Studium Wirtschaftswissenschaften / Management im Produktionsbereich",
    location: "Staatliche Technische Universität Winnyzja, Ukraine",
    description:
      "Vollzeit-Studium mit Schwerpunkt Ökonomie und Management im Produktionsbereich. Theoretisches Fundament in Betriebswirtschaft, Analyse und strukturiertem Arbeiten."
  },
  {
    id: 2,
    period: "1997 - 2003",
    title: "Buchhaltung / Ökonomie (diverse Stationen)",
    location: "Winnyzja, Ukraine",
    description:
      "Tätigkeiten im Bereich Buchhaltung und Ökonomie parallel bzw. im Anschluss an das Studium.  Aufgaben unter anderem: Kassenführung, buchhalterische Erfassung und Unterstützung im administrativen Tagesgeschäft."
  },
  {
    id: 3,
    period: "02/2003 - 11/2011",
    title: "Familienphase & IT-Selbststudium",
    location: "Winnyzja, Ukraine",
    description:
      "Kinderbetreuung und paralleles Selbststudium in Informatik und IT-Grundlagen. Schrittweiser Fokuswechsel hin zur IT - seit 2011 liegt der berufliche Schwerpunkt klar auf dem IT-Bereich."
  },
  {
    id: 4,
    period: "12/2011 - 11/2012",
    title: "Leitende Spezialistin für Informationstechnologie",
    location: "Verwaltungsgericht des Bezirks, Winnyzja, Ukraine",
    description:
      "Sicherstellung der IT-Verfügbarkeit, Betreuung von Richter*innen und Kanzleien, Rollout und Pflege von Fachanwendungen sowie Fehleranalyse und -behebung."
  },
  {
    id: 5,
    period: "11/2012 - 10/2019",
    title: "Assistentin des Systemadministrators",
    location: "RIA.com Gruppe, Winnyzja, Ukraine",
    description:
      "Verwaltung von Benutzerrechten und Rollen für interne Systeme, Stabilität und Sicherheit der Infrastruktur, Einführung einer eigenen E-Mail-Domain und Aufbau strukturierter Prozesse im IT-Betrieb."
  },
  {
    id: 6,
    period: "10/2019 - 06/2020",
    title: "Spezialistin für Informationstechnologie (selbstständig)",
    location: "Winnyzja, Ukraine",
    description:
      "Selbstständige Tätigkeit im IT-Bereich, Unterstützung bei technischen Fragestellungen, Pflege und Betreuung von IT-Systemen sowie Beratung zu Infrastruktur und Anwendungen."
  },
  {
    id: 7,
    period: "12/2020 - 03/2022",
    title: "Selbststudium Android, Java & Kotlin",
    location: "Udemy (Online)",
    description:
      "Intensives Selbststudium von Grundlagen der Programmierung mit Java und Kotlin sowie Android-Entwicklung. Erste eigene App-Projekte, unter anderem zur Unterstützung beim Deutschlernen."
  },
  {
    id: 8,
    period: "05/2022 - 08/2023",
    title: "Integrationskurs mit Zertifikat (B1)",
    location: "Learn and Speak, Dessau-Roßlau",
    description:
      "Erwerb solider Deutschkenntnisse (B1) sowie Grundlagen zu Leben und Arbeiten in Deutschland. Sprachliche Basis für weitere berufliche Qualifizierung im IT-Bereich."
  },
  {
    id: 9,
    period: "08/2023 - 05/2024",
    title: "Deutschkurs für den Beruf (B2)",
    location: "Learn and Speak, Dessau-Roßlau",
    description:
      "Vertiefung berufsbezogener Deutschkenntnisse (B2) mit Fokus auf Kommunikation im beruflichen Kontext, schriftliche und mündliche Ausdrucksfähigkeit sowie Vorbereitung auf den Einsatz der Sprache im IT-Umfeld."
  },
  {
    id: 10,
    period: "10/2024 - 08/2025",
    title: "Weiterbildung Webentwicklerin (Frontend & Full-Stack)",
    location: "IT Career Hub",
    description:
      "Vertiefung in HTML, CSS/Sass, JavaScript, TypeScript, React, Node.js, REST-APIs, MySQL, PostgreSQL und MongoDB. Umsetzung mehrerer praxisnaher Projekte im Rahmen der Weiterbildung."
  },
  {
    id: 11,
    period: "09/2025 - 10/2025",
    title: "Praktikum - Teamleiterin Webprojekt „Penguin-Tracker“",
    location: "IT Career Hub GmbH, Berlin (remote)",
    description:
      "API-Konzeption und technische Dokumentation, Koordination im Team, Code-Reviews und Implementierung von Backend-Komponenten für eine Webanwendung zur Visualisierung von Lernfortschritt."
  },
  {
    id: 12,
    period: "seit 2025",
    title: "Junior Frontend- & Full-Stack-Entwicklerin",
    location: "Dessau-Roßlau, Deutschland",
    description:
      "Fokus auf moderne Webanwendungen mit React, TypeScript, Node.js und Datenbanken. Kombination aus Infrastruktur-Erfahrung, solider IT-Basis und moderner Webentwicklung mit klarer Ausrichtung auf Qualität und Wartbarkeit."
  }
];

export default aboutJourneyItems;