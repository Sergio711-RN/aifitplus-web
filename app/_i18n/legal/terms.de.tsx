import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// German, formal «Sie». Quotes „…“, en dash with spaces, decimal comma

const SECTIONS: ILegalSection[] = [
  {
    id: "general",
    title: "Allgemeines",
    body: (
      <>
        <p>
          Diese Bedingungen sind eine Vereinbarung zwischen Ihnen und <Fill value={LEGAL.operatorNameWith.de} label="Name des Betreibers" />{" "}
          („wir“) über die Nutzung der App AIFit+ und der Website aifitplus.com.
        </p>
        <p>
          Indem Sie bei der Registrierung auf „Weiter“ tippen, akzeptieren Sie diese Bedingungen und die{" "}
          <Link href="/de/privacy">Datenschutzerklärung</Link>. Wenn Sie nicht einverstanden sind, nutzen Sie die App bitte nicht.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "Was AIFit+ macht",
    body: (
      <>
        <ul>
          <li>Berechnet aus Ihren Antworten Ihre Tagesziele für Kalorien, Eiweiß, Fett und Kohlenhydrate.</li>
          <li>
            Erkennt Mahlzeiten auf Fotos mithilfe künstlicher Intelligenz und schätzt Portionsgewicht, Kalorien und Nährstoffe.
          </li>
          <li>Führt ein Ernährungs- und Gewichtstagebuch und gibt Tipps und Erinnerungen.</li>
        </ul>
        <p>
          Die App wird über den App Store und Google Play in ausgewählten Ländern vertrieben. In der Russischen Föderation ist sie nicht
          verfügbar.
        </p>
      </>
    ),
  },
  {
    id: "not-medical",
    title: "Kein medizinischer Dienst",
    body: (
      <>
        <p>
          AIFit+ hilft Ihnen, Ihre Ernährung im Blick zu behalten, stellt aber keine Diagnosen und behandelt nichts. Die Berechnungen und
          Tipps dienen nur der Information und ersetzen weder ärztlichen Rat noch eine Ernährungsberatung.
        </p>
        <p>
          Die Fotoerkennung liefert eine <strong>Schätzung</strong>: Gericht, Portionsgewicht und Kalorien können von den tatsächlichen
          Werten abweichen. Prüfen Sie das Ergebnis und korrigieren Sie es von Hand.
        </p>
        <p>
          Die Erkennung von Mahlzeiten, die Rückfragen und die Tipps stammen von einem System künstlicher Intelligenz, nicht von einem
          Menschen.
        </p>
        <p>
          <strong>Allergien und Unverträglichkeiten.</strong> Die App kann auf einem Foto nicht jede Zutat erkennen und prüft Lebensmittel
          weder auf Allergene noch auf ihre Unbedenklichkeit. Wenn Sie eine Allergie, eine Unverträglichkeit oder eine ärztlich verordnete
          Diät haben, verlassen Sie sich nicht auf die erkannten Zutaten.
        </p>
        <p>
          Sprechen Sie mit einer Ärztin oder einem Arzt, bevor Sie Ihre Ernährung umstellen, wenn Sie schwanger sind oder stillen, an
          Diabetes, einer Nieren-, Herz- oder Stoffwechselerkrankung leiden, eine Essstörung haben oder hatten oder Medikamente einnehmen,
          deren Wirkung von der Ernährung abhängt.
        </p>
        <p>
          Nutzen Sie die App nicht, um eine gefährlich niedrige Kalorienzufuhr oder ein gefährlich niedriges Körpergewicht zu erreichen oder
          zu halten. Die Weltgesundheitsorganisation betrachtet einen Body-Mass-Index von 18,5 bis 25 als gesundes Gewicht für Erwachsene.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "Konto",
    body: (
      <ul>
        <li>Sie können die App ab {LEGAL.minAge} Jahren nutzen.</li>
        <li>Sie melden sich mit einem Einmalcode an, der an Ihre E-Mail-Adresse gesendet wird. Ein Konto ist für eine Person bestimmt.</li>
        <li>Machen Sie zutreffende Angaben zu Ihrer Person: Daraus werden Ihre Ziele berechnet.</li>
        <li>Geben Sie Anmeldecodes nicht an andere weiter. Handlungen in Ihrem Konto gelten als Ihre eigenen.</li>
        <li>Sie können Ihr Konto jederzeit in der App löschen: Tippen Sie auf Ihr Profilfoto → „Konto löschen“.</li>
      </ul>
    ),
  },
  {
    id: "subscription",
    title: "Abonnement und kostenlose Testphase",
    body: (
      <ul>
        <li>
          Einige Funktionen stehen nur mit einem kostenpflichtigen Abonnement zur Verfügung. Preis und Laufzeit werden vor der Zahlung in
          der App angezeigt.
        </li>
        <li>Abschluss und Zahlung erfolgen über den App Store oder Google Play nach den Regeln dieser Stores.</li>
        <li>
          Beginnt Ihr Abonnement mit einer kostenlosen Testphase, wird es nach deren Ablauf automatisch kostenpflichtig, sofern Sie nicht
          spätestens 24 Stunden vor Ablauf der Testphase kündigen.
        </li>
        <li>
          Das Abonnement verlängert sich automatisch, bis Sie es in den Einstellungen des App Store oder von Google Play kündigen.
        </li>
        <li>
          <strong>Das Löschen Ihres Kontos kündigt Ihr Abonnement nicht</strong> – kündigen Sie es gesondert im Store.
        </li>
        <li>Erstattungen wickeln der App Store und Google Play nach ihren eigenen Regeln ab.</li>
        <li>Ein Promo-Code schenkt Ihnen kostenlose Tage. Er kann nicht gegen Geld eingetauscht werden.</li>
        <li>
          Wenn wir den Preis ändern, gilt der neue Preis ab dem nächsten Abrechnungszeitraum, und der Store holt vorab Ihre Zustimmung ein.
        </li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "Nutzungsregeln",
    body: (
      <>
        <p>Es ist nicht gestattet:</p>
        <ul>
          <li>Rechtswidrige Inhalte oder Fotos anderer Personen ohne deren Einwilligung hochzuladen.</li>
          <li>Anfragen automatisiert, an der App vorbei oder über eine angemessene private Nutzung hinaus zu senden.</li>
          <li>Die App zu hacken, zu dekompilieren oder zu kopieren oder Beschränkungen des Abonnements zu umgehen.</li>
          <li>Den Zugang zum Dienst weiterzuverkaufen.</li>
        </ul>
        <p>
          Um Missbrauch vorzubeugen, ist die Zahl der Erkennungen pro Tag begrenzt. Bei normaler Nutzung stört dieses Limit nicht.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Ihre Fotos und Daten",
    body: (
      <p>
        Ihre Fotos und Tagebucheinträge bleiben Ihre. Sie gestatten uns, sie zu speichern und zu verarbeiten – ausschließlich, damit der
        Dienst für Sie funktioniert: um Ihr Tagebuch anzuzeigen, Mahlzeiten zu erkennen und Ihre Geräte zu synchronisieren. Wir
        veröffentlichen Ihre Inhalte nicht. Einzelheiten finden Sie in der <Link href="/de/privacy">Datenschutzerklärung</Link>.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Rechte an der App",
    body: (
      <p>
        Die App, ihr Design, ihre Texte sowie der Name und das Logo AIFit+ gehören uns. Sie erhalten ein persönliches, nicht übertragbares
        Recht, die App auf Ihren Geräten zu nutzen, solange diese Bedingungen gelten.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Verfügbarkeit des Dienstes",
    body: (
      <p>
        Wir entwickeln die App laufend weiter: Funktionen können sich ändern, hinzukommen oder entfallen. Der Dienst kann wegen Updates oder
        Störungen bei unseren Anbietern vorübergehend nicht erreichbar sein. Über wesentliche Änderungen an kostenpflichtigen Funktionen
        informieren wir Sie vorab.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Haftung",
    body: (
      <>
        <p>
          Der Dienst wird im jeweils aktuellen Zustand („as is“) bereitgestellt. Soweit gesetzlich zulässig, haften wir nicht für
          Entscheidungen zu Ernährung und Gesundheit, die auf Grundlage der Berechnungen und Schätzungen der App getroffen werden, und nicht
          für mittelbare Schäden.
        </p>
        <p>
          Diese Beschränkung gilt nicht für Schäden an Leben oder Gesundheit, die wir zu vertreten haben, nicht für Schäden, die wir
          vorsätzlich oder grob fahrlässig verursachen, und nicht für eine Haftung, die gesetzlich nicht ausgeschlossen werden kann.
        </p>
        <p>
          Diese Bedingungen schränken die Rechte nicht ein, die Ihnen als Verbraucherin oder Verbraucher nach den Gesetzen des Landes
          zustehen, in dem Sie leben.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Beendigung des Zugangs",
    body: (
      <p>
        Sie können die Nutzung der App jederzeit beenden und Ihr Konto löschen. Wir können ein Konto sperren, das gegen diese Bedingungen
        verstößt. Zuvor warnen wir Sie, es sei denn, der Verstoß gefährdet andere Nutzer oder den Betrieb des Dienstes.
      </p>
    ),
  },
  {
    id: "law",
    title: "Anwendbares Recht und Streitigkeiten",
    body: (
      <p>
        Für diese Bedingungen gilt das Recht <Fill value={LEGAL.governingLaw.de} label="Land des anwendbaren Rechts" />. Streitigkeiten
        versuchen wir zunächst auf schriftlichem Weg zu klären – schreiben Sie an <ContactEmail label="Kontakt-E-Mail" />, und wir antworten
        innerhalb von 10 Arbeitstagen.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Änderungen dieser Bedingungen",
    body: (
      <p>
        Wenn wir diese Bedingungen ändern, informieren wir Sie vorab in der App. Nutzen Sie die App nach Inkrafttreten der Änderungen
        weiter, akzeptieren Sie diese damit. Das Datum der aktuellen Fassung steht am Anfang dieses Dokuments.
      </p>
    ),
  },
  {
    id: "contacts",
    title: "Kontakt",
    body: (
      <p>
        <Fill value={LEGAL.operatorName.de} label="Name des Betreibers" />,{" "}
        <Fill value={LEGAL.operatorAddress.de} label="Postanschrift" />. E-Mail: <ContactEmail label="Kontakt-E-Mail" />.
      </p>
    ),
  },
];

export const termsDe: ILegalDocument = {
  title: "Nutzungsbedingungen",
  lead: (
    <p>
      Die Regeln, nach denen AIFit+ funktioniert: was Ihnen die App bietet, wie das Abonnement läuft, was nicht erlaubt ist und wofür wir
      einstehen.
    </p>
  ),
  sections: SECTIONS,
};
