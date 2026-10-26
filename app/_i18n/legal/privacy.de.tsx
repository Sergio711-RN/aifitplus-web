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
          <li>
            E-Mail-Adresse – für die Anmeldung. Sie können sich mit einem Einmalcode anmelden, der an Ihre E-Mail-Adresse gesendet wird, mit
            Ihrer Apple-ID (auf dem iPhone) oder mit Ihrem Google-Konto.
          </li>
          <li>
            Wenn Sie sich mit Apple oder Google anmelden, erhalten wir von dort Ihre E-Mail-Adresse und, sofern Sie es erlauben, Ihren Namen.
            Bei Apple können Sie Ihre E-Mail-Adresse verbergen – dann erhalten wir nur eine Weiterleitungsadresse. Ihr Profilfoto übernehmen
            wir von Google nicht. Nach der Anmeldung mit Apple speichern wir ein von Apple ausgestelltes Token, damit wir den Zugriff der App
            auf Ihre Apple-ID widerrufen können, wenn Sie Ihr Konto löschen.
          </li>
          <li>Name, Sprache der Oberfläche und Profilfoto – sofern Sie diese angeben.</li>
        </ul>
        <h3>Gesundheits- und Körperdaten</h3>
        <p>
          Ihre Antworten beim ersten Start: Geschlecht, Alter, Größe, Gewicht und Wiegeverlauf, Zielgewicht und Tempo,
          Aktivitätsniveau, Ernährungsform und was Sie verbessern möchten. Dabei handelt es sich um
          eine besondere Kategorie personenbezogener Daten: Sie gelangen erst auf unseren Server, nachdem Sie bei der Registrierung
          gesondert eingewilligt haben. Bis dahin werden Ihre Antworten ausschließlich auf Ihrem Gerät gespeichert.
        </p>
        <p>
          Wasser, das Sie erfassen: Menge und Zeitpunkt jedes Eintrags, Ihr Wasserziel, Glasgröße und die Stunden Ihres Tages sowie die
          Angabe, ob Getränke aus dem Tagebuch mitgezählt werden. Wie Ihre Antworten sind dies Gesundheitsdaten und gelangen erst nach Ihrer
          Einwilligung auf unseren Server.
        </p>
        <h3>Ernährungstagebuch</h3>
        <ul>
          <li>Fotos von Mahlzeiten, die Sie aufnehmen oder aus Ihrer Galerie auswählen, einschließlich einer optionalen Seitenansicht.</li>
          <li>
            Beschreibungen von Mahlzeiten, die Sie eintippen oder diktieren. Die Sprache wird während des Sprechens in Text umgewandelt; wir
            speichern nur den Text, nicht die Aufnahme Ihrer Stimme.
          </li>
          <li>
            Barcodes von Produkten, die Sie scannen oder eintippen. Ist ein Produkt nicht in der Datenbank, können Sie seine Nährwerttabelle
            fotografieren: Die KI liest die Zahlen aus, und wir speichern das Produkt in Ihrem Konto (Name, Marke, Nährwerte pro 100 g,
            Packungs- und Portionsgewicht), damit es beim nächsten Scan gefunden wird. Das Foto der Nährwerttabelle selbst wird nicht
            gespeichert.
          </li>
          <li>
            Ergebnisse der Erkennung: Gericht, Zutaten, Portionsgewicht, Kalorien, Eiweiß, Fett, Kohlenhydrate, der geschätzte Wassergehalt
            von Getränken, Ihre Korrekturen und Ihre Antworten auf Rückfragen.
          </li>
          <li>Mahlzeiten, die Sie zu „Gespeichert“ hinzufügen.</li>
          <li>Uhrzeit und Art der Mahlzeit.</li>
        </ul>
        <h3>Abonnement</h3>
        <p>
          Abo-Status, Tarif, Daten der Testphase und der Verlängerung. Die Zahlungen wickeln der App Store und Google Play ab – wir erhalten
          weder Ihre Kartennummer noch sonstige Zahlungsdaten.
        </p>
        <h3>Nachrichten an den Support</h3>
        <p>
          Wenn Sie uns aus der App schreiben, erhalten wir das Thema, die E-Mail-Adresse für unsere Antwort, den Text Ihrer Nachricht, die
          App-Version, das Betriebssystem Ihres Smartphones und die Sprache der Oberfläche. Die Nachricht wird in Ihrem Konto gespeichert und
          an unser Postfach gesendet.
        </p>
        <h3>Einstellungen und technische Daten</h3>
        <ul>
          <li>Einstellungen für Erinnerungen und Maßeinheiten.</li>
          <li>Eine interne Nutzer-ID und ein verschlüsselter Sitzungsschlüssel auf Ihrem Gerät.</li>
          <li>
            Ein Eintrag zu jeder Anfrage an die KI: Art, Zeitpunkt, Ergebnis und Umfang. Wir benötigen ihn für das Tageslimit und um zu
            wissen, was der Dienst kostet.
          </li>
          <li>Das Datum, an dem Sie die KI-Erkennung erlaubt haben, oder ein Vermerk, dass Sie sie nicht erlaubt haben.</li>
          <li>
            Technische Serverprotokolle: IP-Adresse, Zeitpunkt und Art der Anfrage. Wir benötigen sie, um den Dienst zu betreiben und zu
            schützen.
          </li>
          <li>
            Absturz- und Fehlerberichte: interne Nutzer-ID, Gerätemodell, Betriebssystem, App-Version, der Bildschirm, auf dem der Fehler
            aufgetreten ist, und die letzten technischen Schritte der App davor. Die Berichte enthalten weder Ihre E-Mail-Adresse noch Ihre
            IP-Adresse noch Bildschirmfotos.
          </li>
          <li>
            Auf Ihrem Smartphone bewahrt die App eine Kopie des zuletzt geladenen Tagebuchs und der Statistik auf, damit Sie sie auch
            offline sehen können, sowie die per Barcode gefundenen Produkte, offline erfasste und noch nicht gesendete Wassereinträge und
            die Markierung „Heißer Tag oder Training“ für heute. All das wird beim Abmelden gelöscht.
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
          <strong>Betrieb der App</strong>: Anmeldung, Berechnung Ihrer Tagesziele, Suche von Produkten per Barcode, Tagebuch,
          Synchronisierung zwischen Geräten, Antworten auf Ihre Nachrichten. Rechtsgrundlage: unser Vertrag mit Ihnen
          (<Link href="/de/terms">Nutzungsbedingungen</Link>), Art. 6 Abs. 1 lit. b DSGVO.
        </li>
        <li>
          <strong>Erkennung von Mahlzeiten und Nährwerttabellen</strong> mit KI: Ein Foto, eine Beschreibung oder das Foto einer
          Nährwerttabelle senden wir erst an Google Gemini, nachdem Sie dies in der App erlaubt haben. Rechtsgrundlage: Ihre Einwilligung,
          Art. 6 Abs. 1 lit. a DSGVO, und, soweit eine Anfrage Angaben über Ihre Gesundheit erkennen lässt, Ihre ausdrückliche Einwilligung,
          Art. 9 Abs. 2 lit. a DSGVO. Sie können sie jederzeit widerrufen: Tippen Sie auf Ihr Profilfoto → „Persönliche Daten“ →
          „KI-Erkennung“. Ohne sie können Sie weiterhin per Barcode gefundene Produkte und Mahlzeiten aus „Gespeichert“ hinzufügen, das
          Gewicht von Zutaten ändern und Einträge in Ihrem Tagebuch löschen.
        </li>
        <li>
          <strong>Gesundheitsdaten</strong> werden nur verarbeitet, um Ihren Plan und Ihr Wasserziel zu berechnen und Ihr Ernährungs- und
          Wassertagebuch zu führen. Rechtsgrundlage: Ihre gesonderte ausdrückliche Einwilligung, die Sie bei der Registrierung durch Setzen
          eines Häkchens erteilen, Art. 9 Abs. 2 lit. a DSGVO.
        </li>
        <li>
          <strong>Abonnement</strong>: Prüfung des Zugangs zu kostenpflichtigen Funktionen. Rechtsgrundlage: Vertrag, Art. 6 Abs. 1 lit. b
          DSGVO.
        </li>
        <li>
          <strong>Sicherheit und Stabilität</strong>: Schutz vor Angriffen und Missbrauch, etwa durch ein Tageslimit für KI-Anfragen;
          Fehlerberichte, um Fehler zu finden und zu beheben. Rechtsgrundlage: unser berechtigtes Interesse an einem funktionierenden Dienst,
          Art. 6 Abs. 1 lit. f DSGVO.
        </li>
        <li>
          <strong>Website-Statistik</strong>: wie viele Menschen die Website besuchen und woher sie kommen, damit wir sie verbessern können.
          Rechtsgrundlage: Ihre Einwilligung im Cookie-Banner, Art. 6 Abs. 1 lit. a DSGVO; Sie können sie unter „Cookie-Einstellungen“ am
          Ende der Seite widerrufen.
        </li>
        <li>
          <strong>Erinnerungen</strong> werden auf Ihrem Smartphone geplant und nur angezeigt, wenn Sie sie einschalten und Mitteilungen in
          den Systemeinstellungen erlauben. Ihre Einstellungen für Erinnerungen werden in Ihrem Konto gespeichert, damit sie auf ein anderes
          Gerät übernommen werden.
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
    title: "Wie die Erkennung funktioniert",
    body: (
      <>
        <p>
          Das Foto wird auf Ihrem Gerät komprimiert und in einen privaten Speicher hochgeladen, auf den nur Ihr Konto zugreifen kann. Der
          Server sendet es an ein Modell künstlicher Intelligenz, erhält die Aufschlüsselung der Mahlzeit und speichert das Ergebnis in
          Ihrem Tagebuch. Beschreibungen von Mahlzeiten, die Sie eintippen oder diktieren, und Fotos von Nährwerttabellen gelangen auf
          demselben Weg zum Modell.
        </p>
        <p>
          Das Modell ist Gemini von Google. Google verarbeitet die Anfrage in unserem Auftrag und ausschließlich, um sie zu beantworten. Wir
          nutzen die kostenpflichtige Gemini API: Nach ihren Bedingungen werden die Inhalte von Anfragen nicht zum Training der Modelle von
          Google verwendet; Google kann sie für begrenzte Zeit ausschließlich zur Erkennung von Missbrauch aufbewahren.
        </p>
        <p>
          Vor der ersten Anfrage zeigt die App, was an Google gesendet wird, und bittet um Ihre Erlaubnis. Gesendet werden nur das Foto, die
          Beschreibung oder das Foto der Nährwerttabelle, Ihre Antworten auf Rückfragen, Ihre Änderungen an den Zutaten und die Sprache der
          App (damit die Antwort in dieser Sprache zurückkommt) – nicht aber Ihr Name, Ihre E-Mail-Adresse, Ihr Gewicht und die übrigen
          Profildaten. Wir speichern das Datum Ihrer Erlaubnis. Wenn Sie sie widerrufen, wird nichts mehr an Gemini gesendet, Ihr Tagebuch
          bleibt erhalten, und die App fragt erneut, wenn Sie das nächste Mal Essen erkennen lassen möchten.
        </p>
        <p>
          Das Originalfoto und die Seitenansicht werden 30 Tage nach der Aufnahme aus dem Speicher gelöscht; im Tagebuch bleibt eine kleine
          Vorschau, solange die Mahlzeit darin steht. Eine Mahlzeit, die nicht analysiert werden konnte, wird zusammen mit ihren Fotos
          innerhalb eines Tages gelöscht.
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
            <strong>Supabase</strong> – Datenbank, Anmeldung und Dateispeicher. Alle Kontodaten, das Tagebuch, die Fotos, Nachrichten an
            den Support. Server in Irland (EU).
          </li>
          <li>
            <strong>Google</strong> – Erkennung von Mahlzeiten und Nährwerttabellen (Gemini API). Fotos von Mahlzeiten und
            Nährwerttabellen, Beschreibungen von Mahlzeiten, Antworten auf Rückfragen und Korrekturen der Zutaten. Google LLC, USA.
          </li>
          <li>
            <strong>Google</strong> – Spracherkennung auf Android-Smartphones, die Sprache nicht auf dem Gerät erkennen können. Während Sie
            diktieren, wird die Aufnahme Ihrer Stimme vom Spracherkennungsdienst von Google verarbeitet: auf dem Smartphone, wenn das
            Google-Sprachpaket heruntergeladen ist, sonst auf den Servern von Google. Google gibt den Text zurück; die Aufnahme wird nicht
            an uns übermittelt. Auf dem iPhone und auf Android-Smartphones mit Spracherkennung auf dem Gerät verlässt Ihre Stimme das
            Smartphone nicht. Google LLC, USA.
          </li>
          <li>
            <strong>Open Food Facts</strong> – die Produktdatenbank. Wenn Sie einen Barcode scannen, sucht die App das Produkt direkt von
            Ihrem Smartphone aus in Open Food Facts: Open Food Facts erhält die Barcode-Nummer und, wie jede Website, Ihre IP-Adresse. Ihre
            Kontodaten übermitteln wir nicht. Open Food Facts verarbeitet die Anfragen nach seiner eigenen Richtlinie. Verein Open Food
            Facts, Frankreich.
          </li>
          <li>
            <strong>Resend</strong> – Versand der E-Mails mit dem Anmeldecode und Zustellung Ihrer Nachrichten an den Support in unser
            Postfach. E-Mail-Adresse, Sprache der E-Mail, Text der Nachricht. USA.
          </li>
          <li>
            <strong>RevenueCat</strong> – Abo-Verwaltung. Interne Nutzer-ID und Kaufhistorie aus dem Store. USA.
          </li>
          <li>
            <strong>Sentry</strong> – Absturz- und Fehlerberichte (die Daten sind unter „Einstellungen und technische Daten“ aufgeführt).
            Functional Software, Inc., USA; die Daten werden in der EU (Deutschland) gespeichert.
          </li>
          <li>
            <strong>Google</strong> – Website-Statistik (Google Analytics), nur mit Ihrer Einwilligung. Browserkennung aus dem Cookie,
            aufgerufene Seiten, Gerätetyp, ungefährer Standort. Google Ireland Limited; die Daten können in den USA verarbeitet werden.
          </li>
          <li>
            <strong>Apple und Google</strong> – Abo-Zahlungen und, wenn Sie das wählen, die Anmeldung mit Ihrer Apple-ID oder Ihrem
            Google-Konto. Sie verarbeiten Daten nach ihren eigenen Richtlinien als eigenständige Verantwortliche.
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
          Unser Hauptspeicher befindet sich in der Europäischen Union (Irland), Fehlerberichte werden in Deutschland gespeichert, und die
          Produktdatenbank Open Food Facts befindet sich in Frankreich. Die Erkennung von Fotos, Beschreibungen und Nährwerttabellen, die
          Spracherkennung auf manchen Android-Smartphones, E-Mail-Versand, Abo-Verwaltung und Website-Statistik übernehmen Anbieter in den
          USA, daher werden einige Daten in Länder außerhalb des Europäischen Wirtschaftsraums übermittelt.
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
        <li>
          Kontodaten, Ernährungs- und Wassertagebuch, gespeicherte Mahlzeiten und aus Nährwerttabellen ausgelesene Produkte – solange Sie
          ein Konto haben.
        </li>
        <li>
          Originalfotos von Mahlzeiten und Seitenansichten – 30 Tage; die Vorschau im Tagebuch – bis Sie die Mahlzeit oder Ihr Konto
          löschen. Fotos von Nährwerttabellen werden nicht gespeichert.
        </li>
        <li>
          Nachrichten an den Support – bis Sie Ihr Konto löschen; die E-Mail in unserem Postfach – solange wir sie benötigen, um Ihnen zu
          antworten.
        </li>
        <li>Fehlerberichte – höchstens 90 Tage.</li>
        <li>
          Wenn Sie Ihr Konto löschen, werden Ihr Profil, Ihr Plan, Ihr Gewichtsverlauf, Ihr Tagebuch, Ihre Fotos und Ihre Nachrichten an den
          Support sofort gelöscht, ebenso Ihr Kundendatensatz bei RevenueCat; wenn Sie sich mit Apple angemeldet haben, widerrufen wir den
          Zugriff der App auf Ihre Apple-ID. Aus den Sicherungskopien des Hosting-Anbieters verschwinden die Daten innerhalb von{" "}
          {LEGAL.backupRetentionDays} Tagen.
        </li>
        <li>
          Antworten, die Sie vor der Registrierung eingeben, und die Kopien von Daten auf Ihrem Smartphone werden beim Abmelden gelöscht.
        </li>
        <li>
          Der App Store und Google Play bewahren Kaufbelege so lange auf, wie es die handels- und steuerrechtlichen Aufbewahrungspflichten verlangen.
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
            <strong>Auskunft</strong> darüber erhalten, welche Daten wir über Sie gespeichert haben, und eine Kopie davon bekommen. In der
            App: Tippen Sie auf Ihr Profilfoto → „Persönliche Daten“ → „Kopie meiner Daten herunterladen“.
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
            kann die App Ihren Plan nicht berechnen, daher bedeutet der Widerruf, dass Ihr Konto gelöscht wird: „Persönliche Daten“ →
            „Einwilligung widerrufen“.
          </li>
          <li>
            <strong>Erlaubnis widerrufen</strong> für die KI-Erkennung: „Persönliche Daten“ → „KI-Erkennung“. Ihr Konto und Ihr Tagebuch
            bleiben erhalten.
          </li>
          <li>
            <strong>Widersprechen</strong>: der Verarbeitung widersprechen oder ihre Einschränkung verlangen.
          </li>
          <li>
            <strong>Beschwerde einlegen</strong> bei der Datenschutzaufsichtsbehörde des Landes, in dem Sie leben oder arbeiten.
          </li>
          <li>
            Wenn Sie in Washington oder Nevada leben, beachten Sie auch unsere{" "}
            <Link href="/en/health-data" hrefLang="en" lang="en">
              Consumer Health Data Privacy Policy
            </Link>{" "}
            (auf Englisch).
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
        <li>
          Der Sitzungsschlüssel auf Ihrem Smartphone ist verschlüsselt; der Schlüssel dafür liegt im sicheren Speicher des Systems (Keychain
          oder Keystore).
        </li>
        <li>
          Die Anmeldung erfolgt mit einem Einmalcode, der Apple-ID oder einem Google-Konto – es gibt keine Passwörter, die gestohlen werden
          könnten.
        </li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Alter",
    body: (
      <p>
        Sie können AIFit+ ab {LEGAL.minAge} Jahren nutzen. Die App fragt bei der Einrichtung nach Ihrem Alter; sind Sie jünger, wird die App
        auf diesem Gerät gesperrt, Ihre Antworten werden vom Telefon gelöscht, und wenn Sie bereits angemeldet sind, wird das Konto
        gelöscht. Antworten vor der Registrierung erreichen unseren Server nie, daher erhalten wir keine Gesundheitsdaten von
        Minderjährigen. Wir erheben nicht wissentlich Daten von Kindern. Wenn Sie erfahren, dass ein Kind ein Konto erstellt hat, schreiben
        Sie uns, und wir löschen es.
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
      AIFit+ zählt die Kalorien und Nährstoffe in dem, was Sie essen. Dafür braucht die App Daten über Ihren Körper und Ihre Ernährung. Hier
      steht kurz und auf den Punkt: was wir erheben, wozu, wo wir es speichern und wie Sie alles löschen.
    </p>
  ),
  sections: SECTIONS,
};
