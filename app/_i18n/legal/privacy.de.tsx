import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// German, formal «Sie». Quotes „…“, en dash with spaces, GDPR cited as DSGVO (Art. 6 Abs. 1 lit. b DSGVO)

const SECTIONS: ILegalSection[] = [
  {
    id: "operator",
    title: "Wer Ihre Daten verarbeitet",
    body: (
      <>
        <p>
          Verantwortlicher für die Datenverarbeitung ist <Fill value={LEGAL.operatorName.de} label="Name des Betreibers" />, Anschrift:{" "}
          <Fill value={LEGAL.operatorAddress.de} label="Postanschrift" />. „Wir“ bezeichnet in dieser Erklärung den Verantwortlichen.
        </p>
        <p>
          Diese Erklärung gilt für die mobile App AIFit+ für iOS und Android sowie für die Website aifitplus.com. Bei Fragen zu Ihren Daten
          schreiben Sie an <ContactEmail label="Kontakt-E-Mail" />.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Welche Daten wir erheben",
    body: (
      <>
        <h3>Konto</h3>
        <ul>
          <li>E-Mail-Adresse – für die Anmeldung per Code.</li>
          <li>Name, Sprache der Oberfläche und Profilfoto – sofern Sie diese angeben.</li>
        </ul>
        <h3>Gesundheits- und Körperdaten</h3>
        <p>
          Ihre Antworten beim ersten Start: Geschlecht, Geburtsjahr, Größe, Gewicht und Wiegeverlauf, Zielgewicht und Tempo,
          Aktivitätsniveau, Ernährungsform und was Sie verbessern möchten. Dabei handelt es sich um
          eine besondere Kategorie personenbezogener Daten: Sie gelangen erst auf unseren Server, nachdem Sie bei der Registrierung
          gesondert eingewilligt haben. Bis dahin werden Ihre Antworten ausschließlich auf Ihrem Gerät gespeichert.
        </p>
        <h3>Ernährungstagebuch</h3>
        <ul>
          <li>Fotos von Mahlzeiten, die Sie aufnehmen oder aus Ihrer Galerie auswählen.</li>
          <li>
            Beschreibungen von Mahlzeiten, die Sie eintippen oder diktieren. Die Sprache wird während des Sprechens in Text umgewandelt; wir
            speichern nur den Text, nicht die Aufnahme Ihrer Stimme.
          </li>
          <li>
            Ergebnisse der Erkennung: Gericht, Zutaten, Portionsgewicht, Kalorien, Eiweiß, Fett, Kohlenhydrate, Ihre Korrekturen und Ihre
            Antworten auf Rückfragen.
          </li>
          <li>Uhrzeit und Art der Mahlzeit.</li>
        </ul>
        <h3>Abonnement</h3>
        <p>
          Abo-Status, Tarif, Daten der Testphase und der Verlängerung. Die Zahlungen wickeln der App Store und Google Play ab – wir erhalten
          weder Ihre Kartennummer noch sonstige Zahlungsdaten.
        </p>
        <h3>Einstellungen und technische Daten</h3>
        <ul>
          <li>Erinnerungszeiten, Maßeinheiten, der von Ihnen eingegebene Promo-Code.</li>
          <li>Eine interne Nutzer-ID und ein Sitzungsschlüssel auf Ihrem Gerät.</li>
          <li>
            Technische Serverprotokolle: IP-Adresse, Zeitpunkt und Art der Anfrage. Wir benötigen sie, um den Dienst zu betreiben und zu
            schützen.
          </li>
        </ul>
        <h3>Website</h3>
        <p>
          Wie bei jedem Webserver sieht der Hosting-Anbieter der Website Ihre IP-Adresse und Ihren Browsertyp in seinen technischen
          Protokollen. Die Website merkt sich die von Ihnen gewählte Sprache ein Jahr lang im Cookie NEXT_LOCALE und Ihre Antwort zur
          Statistik im Speicher Ihres Browsers. Beides ist für den Betrieb der Website erforderlich und bedarf keiner Einwilligung.
        </p>
        <p>
          Wenn Sie im Cookie-Banner auf „Akzeptieren“ klicken, lädt die Website Google Analytics. Der Dienst setzt die Cookies _ga und
          _ga_* mit einer zufälligen Browserkennung für bis zu 2 Jahre und erfasst, welche Seiten Sie aufrufen, woher Sie kommen, Ihren
          Geräte- und Browsertyp, Ihre Sprache und Ihren ungefähren Standort (Land, Stadt). Google Analytics speichert keine IP-Adressen.
          Detaillierte Daten werden in Google Analytics 2 Monate lang aufbewahrt; danach bleiben nur aggregierte Statistiken. Wir sehen
          aggregierte Berichte und verknüpfen sie nicht mit Ihrem Konto in der App. Die Werbefunktionen von Google Analytics sind
          deaktiviert.
        </p>
        <p>
          Ohne Ihre Einwilligung wird Google Analytics nicht geladen. Sie können Ihre Entscheidung jederzeit unter „Cookie-Einstellungen“
          am Ende der Seite ändern.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "Wozu und auf welcher Rechtsgrundlage wir Daten verarbeiten",
    body: (
      <ul>
        <li>
          <strong>Betrieb der App</strong>: Anmeldung, Berechnung Ihrer Tagesziele, Erkennung von Mahlzeiten, Tagebuch, Synchronisierung
          zwischen Geräten. Rechtsgrundlage: unser Vertrag mit Ihnen (<Link href="/de/terms">Nutzungsbedingungen</Link>), Art. 6 Abs. 1
          lit. b DSGVO.
        </li>
        <li>
          <strong>Gesundheitsdaten</strong> werden nur verarbeitet, um Ihren Plan zu berechnen und Ihr Tagebuch zu führen. Rechtsgrundlage:
          Ihre gesonderte ausdrückliche Einwilligung, die Sie bei der Registrierung durch Setzen eines Häkchens erteilen, Art. 9 Abs. 2
          lit. a DSGVO.
        </li>
        <li>
          <strong>Abonnement</strong>: Prüfung des Zugangs zu kostenpflichtigen Funktionen. Rechtsgrundlage: Vertrag, Art. 6 Abs. 1 lit. b
          DSGVO.
        </li>
        <li>
          <strong>Sicherheit</strong>: Schutz vor Angriffen und Missbrauch, etwa durch ein Tageslimit für KI-Anfragen. Rechtsgrundlage:
          unser berechtigtes Interesse an einem funktionierenden Dienst, Art. 6 Abs. 1 lit. f DSGVO.
        </li>
        <li>
          <strong>Website-Statistik</strong>: wie viele Menschen die Website besuchen und woher sie kommen, damit wir sie verbessern können.
          Rechtsgrundlage: Ihre Einwilligung im Cookie-Banner, Art. 6 Abs. 1 lit. a DSGVO; Sie können sie unter „Cookie-Einstellungen“ am
          Ende der Seite widerrufen.
        </li>
        <li>
          <strong>Erinnerungen</strong> werden nur gesendet, wenn Sie sie einschalten und Mitteilungen in den Systemeinstellungen erlauben.
        </li>
      </ul>
    ),
  },
  {
    id: "no-sale",
    title: "Was wir nicht tun",
    body: (
      <ul>
        <li>Wir verkaufen oder vermieten Ihre Daten nicht.</li>
        <li>Wir zeigen keine Werbung und geben keine Daten an Werbenetzwerke weiter.</li>
        <li>Wir veröffentlichen Ihre Essensfotos nicht und zeigen sie keinen anderen Nutzern.</li>
        <li>Wir treffen auf Grundlage Ihrer Daten keine Entscheidungen, die rechtliche Wirkung für Sie entfalten.</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "Wie die Fotoerkennung funktioniert",
    body: (
      <>
        <p>
          Das Foto wird auf Ihrem Gerät komprimiert und in einen privaten Speicher hochgeladen, auf den nur Ihr Konto zugreifen kann. Der
          Server sendet es an ein Modell künstlicher Intelligenz, erhält die Aufschlüsselung der Mahlzeit und speichert das Ergebnis in
          Ihrem Tagebuch.
        </p>
        <p>
          Das Modell wird von Anthropic bereitgestellt. Anthropic verarbeitet das Foto in unserem Auftrag und ausschließlich, um die Anfrage
          zu beantworten. Nach den Bedingungen der kommerziellen API werden die Inhalte von Anfragen nicht zum Training von Modellen
          verwendet.
        </p>
        <p>
          Die Schätzungen zu Kalorien und Nährstoffen sind Näherungswerte. Prüfen Sie das Ergebnis und korrigieren Sie es – Ihre
          Korrekturen werden im Tagebuch gespeichert.
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "An wen wir Daten weitergeben",
    body: (
      <>
        <p>
          Nur an Anbieter, ohne die der Dienst nicht funktionieren kann, und – sofern Sie einwilligen – an einen Dienst für
          Website-Statistik. Jeder erhält nur die Daten, die er für seine Aufgabe mindestens benötigt:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> – Datenbank, Anmeldung und Dateispeicher. Alle Kontodaten, das Tagebuch, die Fotos. Server in Irland
            (EU).
          </li>
          <li>
            <strong>Anthropic</strong> – Erkennung von Mahlzeiten. Fotos, Beschreibungen von Mahlzeiten und der Text Ihrer Antworten auf
            Rückfragen. USA.
          </li>
          <li>
            <strong>Google</strong> – Spracherkennung auf Android-Smartphones, die Sprache nicht auf dem Gerät erkennen können. Während Sie
            diktieren, wird die Aufnahme Ihrer Stimme vom Spracherkennungsdienst von Google verarbeitet: auf dem Smartphone, wenn das
            Google-Sprachpaket heruntergeladen ist, sonst auf den Servern von Google. Google gibt den Text zurück; die Aufnahme wird nicht
            an uns übermittelt. Auf dem iPhone und auf Android-Smartphones mit Spracherkennung auf dem Gerät verlässt Ihre Stimme das
            Smartphone nicht. Google LLC, USA.
          </li>
          <li>
            <strong>Resend</strong> – Versand der E-Mails mit dem Anmeldecode. E-Mail-Adresse und Sprache der E-Mail. USA.
          </li>
          <li>
            <strong>RevenueCat</strong> – Abo-Verwaltung. Interne Nutzer-ID und Kaufhistorie aus dem Store. USA.
          </li>
          <li>
            <strong>Google</strong> – Website-Statistik (Google Analytics), nur mit Ihrer Einwilligung. Browserkennung aus dem Cookie,
            aufgerufene Seiten, Gerätetyp, ungefährer Standort. Google Ireland Limited; die Daten können in den USA verarbeitet werden.
          </li>
          <li>
            <strong>Apple und Google</strong> – Abo-Zahlungen und Mitteilungen. Sie verarbeiten Daten nach ihren eigenen Richtlinien als
            eigenständige Verantwortliche.
          </li>
        </ul>
        <p>
          Außerdem legen wir Daten gegenüber Behörden offen, wenn das Gesetz es verlangt, und nur im Umfang der jeweiligen Anfrage.
        </p>
      </>
    ),
  },
  {
    id: "transfer",
    title: "Wo die Daten gespeichert werden",
    body: (
      <>
        <p>
          Unser Hauptspeicher befindet sich in der Europäischen Union (Irland). Fotoerkennung, Spracherkennung auf manchen
          Android-Smartphones, E-Mail-Versand, Abo-Verwaltung und Website-Statistik übernehmen Anbieter in den USA, daher werden einige
          Daten in Länder außerhalb des Europäischen Wirtschaftsraums übermittelt.
        </p>
        <p>
          Diese Übermittlungen stützen sich auf den Angemessenheitsbeschluss der Europäischen Kommission (EU-US Data Privacy Framework) für
          die danach zertifizierten Anbieter oder auf die Standardvertragsklauseln der Europäischen Kommission. Daten werden nur zu den in
          dieser Erklärung genannten Zwecken übermittelt.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Wie lange wir Daten aufbewahren",
    body: (
      <ul>
        <li>Kontodaten, Tagebuch und Fotos – solange Sie ein Konto haben.</li>
        <li>
          Wenn Sie Ihr Konto löschen, werden Ihr Profil, Ihr Plan, Ihr Gewichtsverlauf, Ihr Tagebuch und Ihre Fotos sofort gelöscht. Aus den
          Sicherungskopien des Hosting-Anbieters verschwinden sie innerhalb von {LEGAL.backupRetentionDays} Tagen.
        </li>
        <li>Antworten, die Sie vor der Registrierung eingeben, werden nur auf Ihrem Gerät gespeichert und beim Abmelden gelöscht.</li>
        <li>
          Der App Store, Google Play und RevenueCat bewahren Kaufbelege so lange auf, wie es die handels- und steuerrechtlichen Aufbewahrungspflichten verlangen.
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Ihre Rechte",
    body: (
      <>
        <ul>
          <li>
            <strong>Auskunft</strong> darüber erhalten, welche Daten wir über Sie gespeichert haben, und eine Kopie davon bekommen.
          </li>
          <li>
            <strong>Mitnehmen</strong>: Ihre Daten in einem maschinenlesbaren Format erhalten, um sie zu einem anderen Dienst zu übertragen.
          </li>
          <li>
            <strong>Berichtigen</strong>: Die meisten Felder können Sie direkt in der App bearbeiten.
          </li>
          <li>
            <strong>Löschen</strong>: Ihr Konto und alle Ihre Daten entfernen Sie in der App, indem Sie auf Ihr Profilfoto tippen → „Konto
            löschen“. Ihr Abonnement wird dadurch nicht gekündigt – kündigen Sie es in den Einstellungen des App Store oder von Google Play.
          </li>
          <li>
            <strong>Einwilligung widerrufen</strong>, die Sie in die Verarbeitung Ihrer Gesundheitsdaten gegeben haben. Ohne diese Daten
            kann die App Ihren Plan nicht berechnen, daher bedeutet der Widerruf, dass Ihr Konto gelöscht wird.
          </li>
          <li>
            <strong>Widersprechen</strong>: der Verarbeitung widersprechen oder ihre Einschränkung verlangen.
          </li>
          <li>
            <strong>Beschwerde einlegen</strong> bei der Datenschutzaufsichtsbehörde des Landes, in dem Sie leben oder arbeiten.
          </li>
        </ul>
        <p>
          Senden Sie Ihre Anfragen an <ContactEmail label="Kontakt-E-Mail" /> – von der E-Mail-Adresse, die mit Ihrem Konto verknüpft ist.
          Wir antworten innerhalb eines Monats, in der Regel früher.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Wie wir Daten schützen",
    body: (
      <ul>
        <li>Alle Verbindungen sind verschlüsselt (HTTPS/TLS).</li>
        <li>Zugriffsregeln in der Datenbank: Jedes Konto sieht nur seine eigenen Einträge und seine eigenen Dateien.</li>
        <li>Fotos liegen in einem privaten Speicher, die Links zu ihnen sind nicht öffentlich.</li>
        <li>Geheime Dienstschlüssel werden nur auf dem Server gespeichert, nicht in der App.</li>
        <li>Die Anmeldung erfolgt mit einem Einmalcode – es gibt keine Passwörter, die gestohlen werden könnten.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Alter",
    body: (
      <p>
        Sie können AIFit+ ab {LEGAL.minAge} Jahren nutzen. Wir erheben nicht wissentlich Daten von Kindern. Wenn Sie erfahren, dass ein Kind
        ein Konto erstellt hat, schreiben Sie uns, und wir löschen es.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Änderungen dieser Erklärung",
    body: (
      <p>
        Wenn wir ändern, welche Daten wir erheben oder an wen wir sie weitergeben, informieren wir Sie vorab in der App. Das Datum des
        Inkrafttretens steht am Anfang dieses Dokuments.
      </p>
    ),
  },
];

export const privacyDe: ILegalDocument = {
  title: "Datenschutzerklärung",
  lead: (
    <p>
      AIFit+ zählt Kalorien anhand von Fotos Ihres Essens. Dafür braucht die App Daten über Ihren Körper und Ihre Ernährung. Hier steht kurz
      und auf den Punkt: was wir erheben, wozu, wo wir es speichern und wie Sie alles löschen.
    </p>
  ),
  sections: SECTIONS,
};
