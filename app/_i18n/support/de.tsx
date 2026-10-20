import Link from "next/link";
import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "../legal/contact-email";
import type { ILegalDocument } from "../legal/types";
import { EmailButton } from "./email-button";

// «Sie», as in the app's German texts («Schreiben Sie uns»)
export const supportDe: ILegalDocument = {
  title: "Support",
  lead: (
    <>
      <p>
        Eine Frage zu AIFit+, ein Problem mit der App oder dem Abo oder eine Idee? Schreiben Sie uns – wir antworten innerhalb weniger
        Werktage per E-Mail.
      </p>
      <EmailButton label="Kontakt-E-Mail" />
    </>
  ),
  sections: [
    {
      id: "contact",
      title: "So erreichen Sie uns",
      body: (
        <ul>
          <li>
            <strong>Per E-Mail:</strong> <ContactEmail label="Kontakt-E-Mail" />. Geht es um Ihr Konto, schreiben Sie bitte von der
            E-Mail-Adresse, die damit verknüpft ist – so finden wir es schneller.
          </li>
          <li>
            <strong>In der App:</strong> Tippen Sie auf Ihr Profilfoto → „Schreiben Sie uns“. Die App fügt der Nachricht ihre Version, das
            Betriebssystem Ihres Telefons und die Sprache der Oberfläche hinzu – so können wir schneller helfen.
          </li>
          <li>
            <strong>Wenn die Anmeldung nicht klappt:</strong> Tippen Sie auf dem Anmeldebildschirm auf „Anmeldung klappt nicht?“ oder schreiben
            Sie uns einfach eine E-Mail.
          </li>
        </ul>
      ),
    },
    {
      id: "sign-in",
      title: "Anmeldung",
      body: (
        <ul>
          <li>
            Wir senden Ihnen einen 6-stelligen Code per E-Mail. Das kann bis zu einer Minute dauern – sehen Sie auch im Spam-Ordner nach. Ist
            der Code abgelaufen, fordern Sie einen neuen an.
          </li>
          <li>
            Melden Sie sich auf einem neuen Telefon genauso an wie beim ersten Mal: mit derselben E-Mail-Adresse, Apple-ID oder demselben
            Google-Konto. Plan und Tagebuch werden automatisch geladen.
          </li>
          <li>
            Wenn Sie sich mit Apple angemeldet und Ihre E-Mail-Adresse verborgen haben, kennen wir nur die Weiterleitungsadresse von Apple –
            melden Sie sich deshalb wieder mit Apple an.
          </li>
        </ul>
      ),
    },
    {
      id: "subscription",
      title: "Abo und Zahlung",
      body: (
        <ul>
          <li>Sie schließen das Abo über den App Store oder Google Play ab und bezahlen dort. Ihre Kartendaten sehen wir nicht.</li>
          <li>
            Kündigen können Sie das Abo in den Einstellungen des Stores: siehe die Anleitungen von{" "}
            <a href="https://support.apple.com/118428">Apple</a> und{" "}
            <a href="https://support.google.com/googleplay/answer/7018481?hl=de">Google</a>. Kündigen Sie spätestens 24 Stunden vor Ende des
            Zeitraums.
          </li>
          <li>
            <strong>Wenn Sie Ihr Konto löschen, wird das Abo nicht gekündigt</strong> – kündigen Sie es separat im Store.
          </li>
          <li>
            Neues Telefon oder App neu installiert? Melden Sie sich beim selben Konto an. Wird das Abo nicht angezeigt, tippen Sie auf dem
            Abo-Bildschirm auf „Käufe wiederherstellen“ – mit derselben Apple-ID oder demselben Google-Konto, mit dem Sie bezahlt haben.
          </li>
          <li>Meldet die App eine fehlgeschlagene Zahlung, aktualisieren Sie Ihre Zahlungsmethode im App Store oder bei Google Play.</li>
          <li>
            Erstattungen bearbeiten die Stores nach ihren eigenen Regeln: <a href="https://support.apple.com/118223">Apple</a>,{" "}
            <a href="https://support.google.com/googleplay/answer/2479637?hl=de">Google Play</a>.
          </li>
        </ul>
      ),
    },
    {
      id: "data",
      title: "Ihre Daten und Ihr Konto",
      body: (
        <>
          <ul>
            <li>
              <strong>Kopie Ihrer Daten:</strong> Tippen Sie auf Ihr Profilfoto → „Persönliche Daten“ → „Kopie meiner Daten herunterladen“.
            </li>
            <li>
              <strong>Konto löschen:</strong> Tippen Sie auf Ihr Profilfoto → „Konto löschen“. Profil, Plan, Tagebuch und Fotos werden
              endgültig gelöscht. Das Abo wird dadurch nicht gekündigt.
            </li>
            <li>
              <strong>Einwilligung widerrufen</strong> in die Verarbeitung Ihrer Gesundheitsdaten: „Persönliche Daten“ → „Einwilligung
              widerrufen“. Ohne diese Daten kann die App Ihren Plan nicht berechnen, daher wird auch Ihr Konto gelöscht.
            </li>
            <li>
              Kommen Sie nicht in die App, schreiben Sie an <ContactEmail label="Kontakt-E-Mail" /> von der E-Mail-Adresse, die mit Ihrem Konto
              verknüpft ist – wir helfen Ihnen.
            </li>
          </ul>
          <p>
            Was wir erheben und wie lange wir es speichern, steht in der <Link href="/de/privacy">Datenschutzerklärung</Link>.
          </p>
        </>
      ),
    },
    {
      id: "accuracy",
      title: "Genauigkeit der Erkennung",
      body: (
        <ul>
          <li>
            Die KI liefert eine <strong>Schätzung</strong>: Gericht, Portionsgewicht und Kalorien können von den tatsächlichen Werten
            abweichen. Prüfen Sie das Ergebnis und korrigieren Sie es bei Bedarf von Hand.
          </li>
          <li>
            Für ein besseres Ergebnis fotografieren Sie bei gutem Licht und mit der ganzen Mahlzeit im Bild. Bei verpackten Lebensmitteln
            scannen Sie den Barcode oder fotografieren die Nährwerttabelle.
          </li>
          <li>
            AIFit+ ist kein medizinischer Dienst und prüft Lebensmittel nicht auf Allergene – siehe die{" "}
            <Link href="/de/terms">Nutzungsbedingungen</Link>.
          </li>
          <li>
            Liegt die App bei einem Gericht immer wieder falsch, sagen Sie es uns über „Schreiben Sie uns“ – das hilft uns, die Erkennung zu
            verbessern.
          </li>
        </ul>
      ),
    },
    {
      id: "about",
      title: "Wer hinter AIFit+ steht",
      body: (
        <p>
          <Fill value={LEGAL.operatorName.de} label="Name des Betreibers" />,{" "}
          <Fill value={LEGAL.operatorAddress.de} label="Postanschrift" />. E-Mail: <ContactEmail label="Kontakt-E-Mail" />.
        </p>
      ),
    },
  ],
};
