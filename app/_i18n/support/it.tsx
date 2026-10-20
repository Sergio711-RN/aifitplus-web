import Link from "next/link";
import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "../legal/contact-email";
import type { ILegalDocument } from "../legal/types";
import { EmailButton } from "./email-button";

export const supportIt: ILegalDocument = {
  title: "Assistenza",
  lead: (
    <>
      <p>
        Hai una domanda su AIFit+, un problema con l’app o l’abbonamento, o un’idea? Scrivici: ti risponderemo via email entro un paio di
        giorni lavorativi.
      </p>
      <EmailButton label="email di contatto" />
    </>
  ),
  sections: [
    {
      id: "contact",
      title: "Come contattarci",
      body: (
        <ul>
          <li>
            <strong>Via email:</strong> <ContactEmail label="email di contatto" />. Se la domanda riguarda il tuo account, scrivici
            dall’indirizzo collegato: così lo troviamo più in fretta.
          </li>
          <li>
            <strong>Nell’app:</strong> tocca la foto del profilo → «Scrivici». L’app aggiunge al messaggio la sua versione, il sistema
            operativo del telefono e la lingua dell’interfaccia: ci aiuta a risolvere prima.
          </li>
          <li>
            <strong>Se non riesci ad accedere:</strong> tocca «Non riesci ad accedere?» nella schermata di accesso, oppure scrivici
            semplicemente via email.
          </li>
        </ul>
      ),
    },
    {
      id: "sign-in",
      title: "Accesso",
      body: (
        <ul>
          <li>
            Ti inviamo via email un codice di 6 cifre. Può volerci fino a un minuto: controlla anche la cartella spam. Se il codice è scaduto,
            richiedine uno nuovo.
          </li>
          <li>
            Su un nuovo telefono accedi come la prima volta: con la stessa email, lo stesso ID Apple o lo stesso account Google. Piano e diario
            si caricano da soli.
          </li>
          <li>
            Se hai effettuato l’accesso con Apple nascondendo la tua email, abbiamo solo l’indirizzo di inoltro di Apple: accedi di nuovo con
            Apple.
          </li>
        </ul>
      ),
    },
    {
      id: "subscription",
      title: "Abbonamento e pagamento",
      body: (
        <ul>
          <li>L’abbonamento si attiva e si paga tramite App Store o Google Play. Non vediamo i dati della tua carta.</li>
          <li>
            Per disdire l’abbonamento usa le impostazioni dello store: vedi le istruzioni di <a href="https://support.apple.com/118428">Apple</a>{" "}
            e di <a href="https://support.google.com/googleplay/answer/7018481?hl=it">Google</a>. Disdici almeno 24 ore prima della fine del
            periodo.
          </li>
          <li>
            <strong>Eliminare l’account non disdice l’abbonamento</strong>: disdicilo a parte nello store.
          </li>
          <li>
            Nuovo telefono o app reinstallata? Accedi allo stesso account. Se l’abbonamento non compare, tocca «Ripristina acquisti» nella
            schermata dell’abbonamento, con lo stesso ID Apple o account Google con cui hai pagato.
          </li>
          <li>Se l’app segnala che il pagamento non è riuscito, aggiorna il metodo di pagamento in App Store o Google Play.</li>
          <li>
            I rimborsi sono gestiti dagli store secondo le loro regole: <a href="https://support.apple.com/118223">Apple</a>,{" "}
            <a href="https://support.google.com/googleplay/answer/2479637?hl=it">Google Play</a>.
          </li>
        </ul>
      ),
    },
    {
      id: "data",
      title: "I tuoi dati e l’account",
      body: (
        <>
          <ul>
            <li>
              <strong>Ottenere una copia dei dati:</strong> tocca la foto del profilo → «Dati personali» → «Scarica una copia dei miei dati».
            </li>
            <li>
              <strong>Eliminare l’account:</strong> tocca la foto del profilo → «Elimina account». Profilo, piano, diario e foto vengono
              eliminati definitivamente. L’abbonamento non viene disdetto.
            </li>
            <li>
              <strong>Revocare il consenso</strong> al trattamento dei dati sulla salute: «Dati personali» → «Revoca il consenso». Senza questi
              dati l’app non può calcolare il piano, quindi viene eliminato anche l’account.
            </li>
            <li>
              Se non riesci a entrare nell’app, scrivi a <ContactEmail label="email di contatto" /> dall’indirizzo collegato al tuo account e ti
              aiuteremo.
            </li>
          </ul>
          <p>
            Cosa raccogliamo e per quanto lo conserviamo è spiegato nell’<Link href="/it/privacy">Informativa sulla privacy</Link>.
          </p>
        </>
      ),
    },
    {
      id: "accuracy",
      title: "Precisione del riconoscimento",
      body: (
        <ul>
          <li>
            L’IA fornisce una <strong>stima</strong>: piatto, peso della porzione e calorie possono differire da quelli reali. Controlla il
            risultato e, se serve, correggilo a mano.
          </li>
          <li>
            Per un risultato migliore scatta la foto con una buona luce e con tutto il pasto nell’inquadratura. Per i prodotti confezionati
            scansiona il codice a barre o fotografa la tabella nutrizionale.
          </li>
          <li>
            AIFit+ non è un servizio medico e non controlla gli allergeni negli alimenti: vedi le <Link href="/it/terms">Condizioni d’uso</Link>.
          </li>
          <li>Se l’app sbaglia spesso un piatto, segnalacelo con «Scrivici»: ci aiuta a migliorare il riconoscimento.</li>
        </ul>
      ),
    },
    {
      id: "about",
      title: "Chi gestisce AIFit+",
      body: (
        <p>
          <Fill value={LEGAL.operatorName.it} label="nome del gestore" />, <Fill value={LEGAL.operatorAddress.it} label="indirizzo postale" />.
          Email: <ContactEmail label="email di contatto" />.
        </p>
      ),
    },
  ],
};
