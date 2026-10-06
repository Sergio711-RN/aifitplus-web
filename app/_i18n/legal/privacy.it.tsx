import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Italian — informal «tu», «…» quotes, typographic apostrophe (’); «cookie» is invariable; GDPR cited as «art. 6, par. 1, lett. b) del GDPR»

const SECTIONS: ILegalSection[] = [
  {
    id: "operator",
    title: "Chi tratta i tuoi dati",
    body: (
      <>
        <p>
          Il titolare del trattamento è <Fill value={LEGAL.operatorName.it} label="nome del titolare" />, indirizzo:{" "}
          <Fill value={LEGAL.operatorAddress.it} label="indirizzo postale" />. In questa informativa «noi» indica il titolare del
          trattamento.
        </p>
        <p>
          Questa informativa riguarda l’app mobile AIFit+ per iOS e Android e il sito aifitplus.com. Per qualsiasi domanda sui tuoi dati,
          scrivi a <ContactEmail label="email di contatto" />.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Quali dati raccogliamo",
    body: (
      <>
        <h3>Account</h3>
        <ul>
          <li>Indirizzo email — per accedere con un codice.</li>
          <li>Nome, lingua dell’interfaccia e foto del profilo — se li fornisci.</li>
        </ul>
        <h3>Dati sulla salute e sul corpo</h3>
        <p>
          Le risposte che dai al primo avvio: sesso, anno di nascita, altezza, peso e storico delle pesate, peso obiettivo e ritmo, livello
          di attività, tipo di alimentazione e che cosa vuoi migliorare. Si tratta di una
          categoria particolare di dati: arrivano sul nostro server solo dopo che hai dato un consenso separato al momento della
          registrazione. Fino ad allora le tue risposte restano soltanto sul tuo dispositivo.
        </p>
        <h3>Diario alimentare</h3>
        <ul>
          <li>Le foto dei pasti che scatti o scegli dalla galleria.</li>
          <li>
            Le descrizioni dei pasti che scrivi o detti. La voce viene trasformata in testo mentre parli; salviamo solo il testo, non la
            registrazione della tua voce.
          </li>
          <li>
            I risultati del riconoscimento: piatto, ingredienti, peso della porzione, calorie, proteine, grassi, carboidrati, le tue
            correzioni e le risposte alle domande di chiarimento.
          </li>
          <li>Ora e tipo di pasto.</li>
        </ul>
        <h3>Abbonamento</h3>
        <p>
          Stato dell’abbonamento, piano, date della prova e del rinnovo. I pagamenti sono gestiti da App Store e Google Play: noi non
          riceviamo il numero della tua carta né altri dati di pagamento.
        </p>
        <h3>Impostazioni e dati tecnici</h3>
        <ul>
          <li>Orari dei promemoria, unità di misura, codice promozionale inserito.</li>
          <li>Un identificativo utente interno e una chiave di sessione sul tuo dispositivo.</li>
          <li>
            Log tecnici del server: indirizzo IP, ora e tipo di richiesta. Ci servono per far funzionare il servizio e proteggerlo.
          </li>
        </ul>
        <h3>Sito web</h3>
        <p>
          Come qualsiasi server web, l’hosting del sito registra nei propri log tecnici il tuo indirizzo IP e il tipo di browser. Il sito
          ricorda la lingua che hai scelto nel cookie NEXT_LOCALE per un anno, e la tua risposta sulle statistiche nella memoria del
          browser. Entrambi sono necessari al funzionamento del sito e non richiedono consenso.
        </p>
        <p>
          Se fai clic su «Accetta» nel banner dei cookie, il sito carica Google Analytics. Il servizio imposta i cookie _ga e _ga_* con un
          identificativo casuale del browser, per un massimo di 2 anni, e rileva quali pagine apri, da dove arrivi, il tipo di dispositivo
          e di browser, la lingua e la posizione approssimativa (paese, città). Google Analytics non conserva gli indirizzi IP. I dati
          dettagliati restano in Google Analytics per 2 mesi; dopo rimangono solo statistiche aggregate. Noi vediamo report aggregati e
          non li colleghiamo al tuo account nell’app. Le funzioni pubblicitarie di Google Analytics sono disattivate.
        </p>
        <p>
          Senza il tuo consenso Google Analytics non viene caricato. Puoi cambiare idea in qualsiasi momento da «Impostazioni dei cookie»,
          in fondo alla pagina.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "Perché trattiamo i dati e su quale base giuridica",
    body: (
      <ul>
        <li>
          <strong>Funzionamento dell’app</strong>: accesso, calcolo dei tuoi obiettivi giornalieri, riconoscimento dei pasti, diario,
          sincronizzazione tra dispositivi. Base giuridica: il nostro contratto con te (<Link href="/it/terms">Condizioni d’uso</Link>),
          art. 6, par. 1, lett. b) del GDPR.
        </li>
        <li>
          <strong>I dati sulla salute</strong> sono trattati solo per calcolare il tuo piano e tenere il tuo diario. Base giuridica: il
          tuo consenso esplicito e separato, che dai spuntando una casella al momento della registrazione, art. 9, par. 2, lett. a) del
          GDPR.
        </li>
        <li>
          <strong>Abbonamento</strong>: verifica dell’accesso alle funzioni a pagamento. Base giuridica: contratto, art. 6, par. 1,
          lett. b) del GDPR.
        </li>
        <li>
          <strong>Sicurezza</strong>: protezione da intrusioni e abusi, ad esempio un limite giornaliero alle richieste all’IA. Base
          giuridica: il nostro legittimo interesse a offrire un servizio funzionante, art. 6, par. 1, lett. f) del GDPR.
        </li>
        <li>
          <strong>Statistiche del sito</strong>: quante persone visitano il sito e da dove arrivano, per poterlo migliorare. Base
          giuridica: il tuo consenso nel banner dei cookie, art. 6, par. 1, lett. a) del GDPR; puoi revocarlo da «Impostazioni dei
          cookie», in fondo alla pagina.
        </li>
        <li>
          <strong>I promemoria</strong> vengono inviati solo se li attivi e autorizzi le notifiche nelle impostazioni di sistema.
        </li>
      </ul>
    ),
  },
  {
    id: "no-sale",
    title: "Che cosa non facciamo",
    body: (
      <ul>
        <li>Non vendiamo né cediamo in uso i tuoi dati.</li>
        <li>Non mostriamo pubblicità e non condividiamo dati con reti pubblicitarie.</li>
        <li>Non pubblichiamo le foto dei tuoi pasti e non le mostriamo ad altri utenti.</li>
        <li>Non prendiamo, sulla base dei tuoi dati, decisioni che producano effetti giuridici nei tuoi confronti.</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "Come funziona il riconoscimento delle foto",
    body: (
      <>
        <p>
          La foto viene compressa sul tuo dispositivo e caricata in uno spazio di archiviazione privato a cui può accedere solo il tuo
          account. Il server la invia a un modello di intelligenza artificiale, riceve l’analisi del pasto e salva il risultato nel tuo
          diario.
        </p>
        <p>
          Il modello è fornito da Anthropic. Anthropic tratta la foto per nostro conto e solo per rispondere alla richiesta. Secondo le
          condizioni della sua API commerciale, il contenuto delle richieste non viene usato per addestrare i modelli.
        </p>
        <p>
          Le stime di calorie e nutrienti sono approssimative. Controlla il risultato e correggilo: le tue correzioni vengono salvate nel
          diario.
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "Con chi condividiamo i dati",
    body: (
      <>
        <p>
          Solo con i fornitori senza i quali il servizio non può funzionare e, se acconsenti, con un servizio di statistiche per il sito.
          Ciascuno riceve il minimo di dati necessario al proprio compito:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — database, accesso e archiviazione dei file. Tutti i dati dell’account, il diario, le foto. Server
            in Irlanda (UE).
          </li>
          <li>
            <strong>Anthropic</strong> — riconoscimento dei pasti. Le foto, le descrizioni dei pasti e il testo delle risposte alle domande
            di chiarimento. Stati Uniti.
          </li>
          <li>
            <strong>Google</strong> — riconoscimento vocale sui telefoni Android che non riconoscono la voce sul dispositivo. Mentre detti,
            la registrazione della tua voce viene elaborata dal servizio di riconoscimento vocale di Google: sul telefono, se è scaricato il
            pacchetto lingua di Google, altrimenti sui server di Google. Google restituisce il testo; la registrazione non viene trasmessa a
            noi. Su iPhone e sui telefoni Android con riconoscimento sul dispositivo, la tua voce non lascia il telefono. Google LLC, Stati
            Uniti.
          </li>
          <li>
            <strong>Resend</strong> — invio delle email con il codice di accesso. Indirizzo email e lingua dell’email. Stati Uniti.
          </li>
          <li>
            <strong>RevenueCat</strong> — gestione degli abbonamenti. Identificativo utente interno e cronologia degli acquisti
            proveniente dallo store. Stati Uniti.
          </li>
          <li>
            <strong>Google</strong> — statistiche del sito (Google Analytics), solo con il tuo consenso. Identificativo del browser
            ricavato dal cookie, pagine visitate, tipo di dispositivo, posizione approssimativa. Google Ireland Limited; i dati possono
            essere trattati negli Stati Uniti.
          </li>
          <li>
            <strong>Apple e Google</strong> — pagamento degli abbonamenti e notifiche. Trattano i dati secondo le proprie informative, in
            qualità di titolari autonomi del trattamento.
          </li>
        </ul>
        <p>
          Comunichiamo dati anche alle autorità pubbliche quando la legge lo impone, e solo nei limiti della richiesta.
        </p>
      </>
    ),
  },
  {
    id: "transfer",
    title: "Dove sono conservati i dati",
    body: (
      <>
        <p>
          Il nostro archivio principale si trova nell’Unione europea (Irlanda). Il riconoscimento delle foto, il riconoscimento vocale su
          alcuni telefoni Android, le email, la gestione degli abbonamenti e le statistiche del sito sono affidati a fornitori con sede
          negli Stati Uniti, perciò alcuni dati vengono trasferiti al di fuori dello Spazio economico europeo.
        </p>
        <p>
          Questi trasferimenti si basano sulla decisione di adeguatezza della Commissione europea (EU-US Data Privacy Framework) per i
          fornitori certificati, oppure sulle clausole contrattuali tipo della Commissione europea. I dati vengono trasferiti solo per le
          finalità indicate in questa informativa.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Per quanto tempo conserviamo i dati",
    body: (
      <ul>
        <li>Dati dell’account, diario e foto — finché hai un account.</li>
        <li>
          Quando elimini l’account, il profilo, il piano, lo storico del peso, il diario e le foto vengono eliminati subito. Scompaiono
          dalle copie di backup del fornitore di hosting entro {LEGAL.backupRetentionDays} giorni.
        </li>
        <li>Le risposte inserite prima della registrazione restano soltanto sul tuo dispositivo e vengono cancellate quando esci dall’account.</li>
        <li>
          App Store, Google Play e RevenueCat conservano i dati sugli acquisti per il tempo richiesto dalle leggi sulla contabilità dei
          pagamenti.
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "I tuoi diritti",
    body: (
      <>
        <ul>
          <li>
            <strong>Sapere</strong> quali dati conserviamo e ottenerne una copia.
          </li>
          <li>
            <strong>Ricevere</strong> i tuoi dati in un formato leggibile da dispositivo automatico, per trasferirli a un altro servizio.
          </li>
          <li>
            <strong>Rettificare</strong> i tuoi dati: quasi tutti i campi si modificano direttamente nell’app.
          </li>
          <li>
            <strong>Eliminare</strong> l’account e tutti i tuoi dati: nell’app tocca la foto del profilo → «Elimina account». Questo non
            annulla l’abbonamento: disdicilo nelle impostazioni di App Store o Google Play.
          </li>
          <li>
            <strong>Revocare il consenso</strong> al trattamento dei dati sulla salute. Senza questi dati l’app non può calcolare il tuo
            piano, quindi revocare il consenso comporta l’eliminazione dell’account.
          </li>
          <li>
            <strong>Opporti</strong> al trattamento o chiederne la limitazione.
          </li>
          <li>
            <strong>Presentare un reclamo</strong> all’autorità per la protezione dei dati del paese in cui vivi o lavori.
          </li>
        </ul>
        <p>
          Invia le richieste a <ContactEmail label="email di contatto" /> dall’indirizzo email collegato al tuo account. Rispondiamo entro
          un mese, di solito prima.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Come proteggiamo i dati",
    body: (
      <ul>
        <li>Tutte le connessioni sono cifrate (HTTPS/TLS).</li>
        <li>Regole di accesso al database: ogni account vede solo i propri record e i propri file.</li>
        <li>Le foto sono conservate in uno spazio di archiviazione privato e i relativi link non sono pubblici.</li>
        <li>Le chiavi segrete del servizio sono conservate solo sul server, non nell’app.</li>
        <li>L’accesso avviene con un codice monouso: non ci sono password da rubare.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Età",
    body: (
      <p>
        Puoi usare AIFit+ a partire dai {LEGAL.minAge} anni. Non raccogliamo consapevolmente dati di minori al di sotto di questa età. Se
        vieni a sapere che un bambino ha creato un account, scrivici e lo elimineremo.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Modifiche a questa informativa",
    body: (
      <p>
        Se cambiamo i dati che raccogliamo o i soggetti con cui li condividiamo, te lo comunicheremo in anticipo nell’app. La data di
        entrata in vigore è indicata all’inizio di questo documento.
      </p>
    ),
  },
];

export const privacyIt: ILegalDocument = {
  title: "Informativa sulla privacy",
  lead: (
    <p>
      AIFit+ conta le calorie a partire dalle foto di ciò che mangi. Per farlo ha bisogno di dati sul tuo corpo e sulla tua alimentazione.
      Ecco, in breve e senza giri di parole: che cosa raccogliamo, perché, dove lo conserviamo e come eliminare tutto.
    </p>
  ),
  sections: SECTIONS,
};
