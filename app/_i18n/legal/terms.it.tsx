import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Italian — informal «tu», «…» quotes, typographic apostrophe (’), decimal comma

const SECTIONS: ILegalSection[] = [
  {
    id: "general",
    title: "Disposizioni generali",
    body: (
      <>
        <p>
          Queste condizioni sono un accordo tra te e <Fill value={LEGAL.operatorNameWith.it} label="nome del titolare" /> («noi»)
          sull’uso dell’app AIFit+ e del sito aifitplus.com.
        </p>
        <p>
          Toccando «Continua» al momento della registrazione accetti queste condizioni e l’
          <Link href="/it/privacy">Informativa sulla privacy</Link>. Se non sei d’accordo, non usare l’app.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "Che cosa fa AIFit+",
    body: (
      <>
        <ul>
          <li>Calcola i tuoi obiettivi giornalieri di calorie, proteine, grassi e carboidrati a partire dalle tue risposte.</li>
          <li>
            Riconosce con l’intelligenza artificiale i pasti nelle foto e dalle tue descrizioni, scritte o dettate, e stima il peso della
            porzione, le calorie e i nutrienti.
          </li>
          <li>Trova i prodotti confezionati tramite codice a barre e legge le etichette nutrizionali da una foto.</li>
          <li>Tiene un diario dell’alimentazione e del peso, e ti invia promemoria.</li>
        </ul>
        <p>
          L’app è distribuita tramite App Store e Google Play in alcuni paesi. Non è disponibile nella Federazione Russa.
        </p>
      </>
    ),
  },
  {
    id: "not-medical",
    title: "Non è un servizio medico",
    body: (
      <>
        <p>
          AIFit+ ti aiuta a tenere sotto controllo l’alimentazione, ma non fa diagnosi e non cura nulla. I suoi calcoli e le sue stime hanno
          solo scopo informativo e non sostituiscono il parere di un medico o di un dietista.
        </p>
        <p>
          Il riconoscimento da foto fornisce una <strong>stima</strong>: il piatto, il peso della porzione e le calorie possono essere
          diversi da quelli reali. Controlla il risultato e correggilo a mano.
        </p>
        <p>
          Il riconoscimento dei pasti, la lettura delle etichette e le domande di chiarimento sono generati da un sistema di
          intelligenza artificiale, non da una persona.
        </p>
        <p>
          I dati dei prodotti trovati tramite codice a barre provengono da Open Food Facts, un database gratuito compilato da volontari e
          pubblicato con licenza Open Database License. Possono essere incompleti o errati: confrontali con l’etichetta sulla confezione.
        </p>
        <p>
          <strong>Allergie e intolleranze.</strong> L’app non può vedere tutti gli ingredienti in una foto e non verifica la presenza di
          allergeni né la sicurezza degli alimenti. Se hai un’allergia, un’intolleranza o segui una dieta prescritta dal medico, non fare
          affidamento sugli ingredienti riconosciuti.
        </p>
        <p>
          Consulta un medico prima di cambiare alimentazione se sei in gravidanza o allatti, se hai il diabete o una malattia renale,
          cardiaca o metabolica, se hai o hai avuto un disturbo del comportamento alimentare, oppure se prendi farmaci il cui effetto
          dipende dall’alimentazione.
        </p>
        <p>
          Non usare l’app per raggiungere o mantenere un apporto calorico o un peso corporeo pericolosamente bassi. L’Organizzazione
          mondiale della sanità considera normopeso, per gli adulti, un indice di massa corporea compreso tra 18,5 e 25.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "Account",
    body: (
      <ul>
        <li>Puoi usare l’app a partire dai {LEGAL.minAge} anni.</li>
        <li>
          Accedi con un codice monouso inviato alla tua email, con il tuo ID Apple o con il tuo account Google. All’accesso tramite Apple o
          Google si applicano anche le loro condizioni. Ogni account è destinato a una sola persona.
        </li>
        <li>Fornisci informazioni corrette su di te: i tuoi obiettivi vengono calcolati a partire da quelle.</li>
        <li>Non comunicare i codici di accesso ad altre persone. Le azioni compiute nel tuo account si considerano tue.</li>
        <li>Puoi eliminare l’account in qualsiasi momento dall’app: tocca la foto del profilo → «Elimina account».</li>
      </ul>
    ),
  },
  {
    id: "subscription",
    title: "Abbonamento e prova gratuita",
    body: (
      <ul>
        <li>Alcune funzioni sono disponibili con un abbonamento a pagamento. Prezzo e durata sono indicati nell’app prima del pagamento.</li>
        <li>L’abbonamento si sottoscrive e si paga tramite App Store o Google Play, secondo le regole di questi store.</li>
        <li>
          Se l’abbonamento inizia con una prova gratuita, al termine della prova diventa automaticamente a pagamento, a meno che tu non lo
          disdica almeno 24 ore prima della fine della prova.
        </li>
        <li>L’abbonamento si rinnova automaticamente finché non lo disdici nelle impostazioni di App Store o Google Play.</li>
        <li>
          <strong>Eliminare l’account non annulla l’abbonamento</strong>: disdicilo separatamente nello store.
        </li>
        <li>I rimborsi sono gestiti da App Store e Google Play secondo le loro regole.</li>
        <li>
          Se modifichiamo il prezzo, il nuovo prezzo si applica a partire dal periodo successivo e lo store ti chiederà in anticipo il
          consenso.
        </li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "Regole d’uso",
    body: (
      <>
        <p>Non è consentito:</p>
        <ul>
          <li>Caricare materiale illecito o foto di altre persone senza il loro consenso.</li>
          <li>Inviare richieste in modo automatizzato, aggirando l’app, o oltre un ragionevole uso personale.</li>
          <li>Violare la sicurezza dell’app, decompilarla o copiarla, oppure aggirare le limitazioni dell’abbonamento.</li>
          <li>Rivendere l’accesso al servizio.</li>
        </ul>
        <p>
          Per prevenire gli abusi, il numero di riconoscimenti e ricalcoli con l’IA al giorno è limitato. Il limite non ostacola il
          normale utilizzo.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Le tue foto e i tuoi dati",
    body: (
      <p>
        Le tue foto, le descrizioni e le voci del diario restano tue. Ci autorizzi a conservarle e a trattarle solo per far funzionare il
        servizio per te: mostrarti il diario, riconoscere i pasti e le etichette, sincronizzare i tuoi dispositivi. Non pubblichiamo i
        tuoi contenuti. Per i dettagli consulta l’<Link href="/it/privacy">Informativa sulla privacy</Link>.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Diritti sull’app",
    body: (
      <p>
        L’app, il suo design, i testi, il nome e il logo AIFit+ appartengono a noi. Ti concediamo un diritto personale e non trasferibile
        di usare l’app sui tuoi dispositivi finché queste condizioni restano in vigore.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Disponibilità del servizio",
    body: (
      <p>
        Continuiamo a sviluppare l’app: le funzioni possono cambiare, essere aggiunte o rimosse. Il servizio può essere temporaneamente
        non disponibile a causa di aggiornamenti o di interruzioni presso i nostri fornitori. Ti avviseremo in anticipo delle modifiche
        rilevanti alle funzioni a pagamento.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Responsabilità",
    body: (
      <>
        <p>
          Il servizio è fornito «così com’è». Nei limiti consentiti dalla legge, non rispondiamo delle decisioni su alimentazione e salute
          prese sulla base dei calcoli e delle stime dell’app, né dei danni indiretti.
        </p>
        <p>
          Questa limitazione non si applica ai danni alla vita o alla salute causati per nostra colpa, ai danni che causiamo con dolo o
          colpa grave, né a qualsiasi responsabilità che la legge non consente di escludere.
        </p>
        <p>
          Queste condizioni non limitano i diritti che ti spettano come consumatore secondo le leggi del paese in cui vivi.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Cessazione dell’accesso",
    body: (
      <p>
        Puoi smettere di usare l’app ed eliminare l’account in qualsiasi momento. Possiamo bloccare un account che viola queste
        condizioni. Prima ti avviseremo, a meno che la violazione non metta a rischio altri utenti o il funzionamento del servizio.
      </p>
    ),
  },
  {
    id: "law",
    title: "Legge applicabile e controversie",
    body: (
      <p>
        Queste condizioni sono regolate dalla legge <Fill value={LEGAL.governingLaw.it} label="paese della legge applicabile" />. Cercheremo
        anzitutto di risolvere qualsiasi controversia per corrispondenza: scrivi a <ContactEmail label="email di contatto" /> e ti
        risponderemo entro 10 giorni lavorativi.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Modifiche a queste condizioni",
    body: (
      <p>
        Se modifichiamo queste condizioni, te lo comunicheremo in anticipo nell’app. Continuando a usare l’app dopo l’entrata in vigore
        delle modifiche, le accetti. La data della versione in vigore è indicata all’inizio di questo documento.
      </p>
    ),
  },
  {
    id: "contacts",
    title: "Contatti",
    body: (
      <p>
        <Fill value={LEGAL.operatorName.it} label="nome del titolare" />,{" "}
        <Fill value={LEGAL.operatorAddress.it} label="indirizzo postale" />. Email: <ContactEmail label="email di contatto" />.
      </p>
    ),
  },
];

export const termsIt: ILegalDocument = {
  title: "Condizioni d’uso",
  lead: (
    <p>
      Le regole con cui funziona AIFit+: che cosa ti offre l’app, come funziona l’abbonamento, che cosa non è consentito e di che cosa
      rispondiamo noi.
    </p>
  ),
  sections: SECTIONS,
};
