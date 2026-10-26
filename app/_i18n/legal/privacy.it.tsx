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
          <li>
            Indirizzo email — per accedere. Puoi accedere con un codice monouso inviato alla tua email, con il tuo ID Apple (su iPhone) o con
            il tuo account Google.
          </li>
          <li>
            Se accedi con Apple o Google, riceviamo da loro il tuo indirizzo email e, se lo consenti, il tuo nome. Apple ti permette di
            nascondere la tua email: in quel caso riceviamo solo un indirizzo di inoltro. Non prendiamo la tua foto del profilo da Google.
            Dopo l’accesso con Apple conserviamo un token rilasciato da Apple, per poter revocare l’accesso dell’app al tuo ID Apple quando
            elimini l’account.
          </li>
          <li>Nome, lingua dell’interfaccia e foto del profilo — se li fornisci.</li>
        </ul>
        <h3>Dati sulla salute e sul corpo</h3>
        <p>
          Le risposte che dai al primo avvio: sesso, età, altezza, peso e storico delle pesate, peso obiettivo e ritmo, livello
          di attività, tipo di alimentazione e che cosa vuoi migliorare. Si tratta di una
          categoria particolare di dati: arrivano sul nostro server solo dopo che hai dato un consenso separato al momento della
          registrazione. Fino ad allora le tue risposte restano soltanto sul tuo dispositivo.
        </p>
        <p>
          L’acqua che registri: quantità e ora di ogni voce, il tuo obiettivo di acqua, la dimensione del bicchiere e le ore della tua
          giornata, e se le bevande del diario contano nell’acqua. Come le tue risposte, sono dati sulla salute: arrivano sul nostro server
          solo dopo il tuo consenso.
        </p>
        <h3>Diario alimentare</h3>
        <ul>
          <li>Le foto dei pasti che scatti o scegli dalla galleria, compresa una vista laterale facoltativa.</li>
          <li>
            Le descrizioni dei pasti che scrivi o detti. La voce viene trasformata in testo mentre parli; salviamo solo il testo, non la
            registrazione della tua voce.
          </li>
          <li>
            I codici a barre dei prodotti che scansioni o inserisci. Se un prodotto non è nel database, puoi fotografarne l’etichetta
            nutrizionale: l’IA legge i valori e salviamo il prodotto nel tuo account (nome, marca, valori nutrizionali per 100 g, peso della
            confezione e della porzione), così la scansione successiva lo trova. La foto dell’etichetta non viene salvata.
          </li>
          <li>
            I risultati del riconoscimento: piatto, ingredienti, peso della porzione, calorie, proteine, grassi, carboidrati, il contenuto
            d’acqua stimato delle bevande, le tue correzioni e le risposte alle domande di chiarimento.
          </li>
          <li>I pasti che aggiungi a «Salvati».</li>
          <li>Ora e tipo di pasto.</li>
        </ul>
        <h3>Abbonamento</h3>
        <p>
          Stato dell’abbonamento, piano, date della prova e del rinnovo. I pagamenti sono gestiti da App Store e Google Play: noi non
          riceviamo il numero della tua carta né altri dati di pagamento.
        </p>
        <h3>Messaggi all’assistenza</h3>
        <p>
          Se ci scrivi dall’app, riceviamo l’argomento, l’indirizzo email per la nostra risposta, il testo del messaggio, la versione
          dell’app, il sistema operativo del telefono e la lingua dell’interfaccia. Il messaggio viene salvato nel tuo account e inviato
          alla nostra casella di posta.
        </p>
        <h3>Impostazioni e dati tecnici</h3>
        <ul>
          <li>Impostazioni dei promemoria e unità di misura.</li>
          <li>Un identificativo utente interno e una chiave di sessione cifrata sul tuo dispositivo.</li>
          <li>
            Un registro di ogni richiesta all’IA: tipo, ora, esito e dimensione. Ci serve per il limite giornaliero e per sapere quanto
            costa il servizio.
          </li>
          <li>La data in cui hai consentito il riconoscimento IA, oppure l’indicazione che non l’hai consentito.</li>
          <li>
            Log tecnici del server: indirizzo IP, ora e tipo di richiesta. Ci servono per far funzionare il servizio e proteggerlo.
          </li>
          <li>
            Report di arresti anomali ed errori: identificativo utente interno, modello del dispositivo, sistema operativo, versione
            dell’app, la schermata in cui si è verificato l’errore e gli ultimi passaggi tecnici dell’app prima dell’errore. I report non
            contengono la tua email, il tuo indirizzo IP né screenshot.
          </li>
          <li>
            Sul telefono l’app conserva una copia del diario e delle statistiche caricati più di recente, per poterli vedere anche offline,
            dei prodotti trovati tramite codice a barre, delle voci d’acqua non ancora inviate perché eri offline e del segno «Giornata
            calda o allenamento» di oggi. Tutto questo viene cancellato quando esci dall’account.
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
          <strong>Funzionamento dell’app</strong>: accesso, calcolo dei tuoi obiettivi giornalieri, ricerca dei prodotti tramite codice a
          barre, diario, sincronizzazione tra dispositivi, risposte ai tuoi messaggi. Base giuridica: il nostro contratto con te
          (<Link href="/it/terms">Condizioni d’uso</Link>), art. 6, par. 1, lett. b) del GDPR.
        </li>
        <li>
          <strong>Riconoscimento dei pasti e delle etichette nutrizionali</strong> con l’IA: inviamo una foto, una descrizione o la foto di
          un’etichetta a Google Gemini solo dopo che l’hai consentito nell’app. Base giuridica: il tuo consenso, art. 6, par. 1, lett. a)
          del GDPR, e, nella misura in cui una richiesta rivela informazioni sulla tua salute, il tuo consenso esplicito, art. 9, par. 2,
          lett. a) del GDPR. Puoi revocarlo in qualsiasi momento: tocca la foto del profilo → «Dati personali» → «Riconoscimento IA». Senza
          di esso puoi comunque aggiungere i prodotti trovati tramite codice a barre e i pasti dai «Salvati», cambiare il peso degli
          ingredienti ed eliminare le voci del diario.
        </li>
        <li>
          <strong>I dati sulla salute</strong> sono trattati solo per calcolare il tuo piano e il tuo obiettivo di acqua e tenere il tuo
          diario di cibo e acqua. Base giuridica: il tuo consenso esplicito e separato, che dai spuntando una casella al momento della
          registrazione, art. 9, par. 2, lett. a) del GDPR.
        </li>
        <li>
          <strong>Abbonamento</strong>: verifica dell’accesso alle funzioni a pagamento. Base giuridica: contratto, art. 6, par. 1,
          lett. b) del GDPR.
        </li>
        <li>
          <strong>Sicurezza e stabilità</strong>: protezione da intrusioni e abusi, ad esempio un limite giornaliero alle richieste
          all’IA; report degli errori per individuare e correggere i bug. Base giuridica: il nostro legittimo interesse a offrire un
          servizio funzionante, art. 6, par. 1, lett. f) del GDPR.
        </li>
        <li>
          <strong>Statistiche del sito</strong>: quante persone visitano il sito e da dove arrivano, per poterlo migliorare. Base
          giuridica: il tuo consenso nel banner dei cookie, art. 6, par. 1, lett. a) del GDPR; puoi revocarlo da «Impostazioni dei
          cookie», in fondo alla pagina.
        </li>
        <li>
          <strong>I promemoria</strong> vengono programmati sul tuo telefono e mostrati solo se li attivi e autorizzi le notifiche nelle
          impostazioni di sistema. Le impostazioni dei promemoria vengono salvate nel tuo account, così le ritrovi su un altro
          dispositivo.
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
    title: "Come funziona il riconoscimento",
    body: (
      <>
        <p>
          La foto viene compressa sul tuo dispositivo e caricata in uno spazio di archiviazione privato a cui può accedere solo il tuo
          account. Il server la invia a un modello di intelligenza artificiale, riceve l’analisi del pasto e salva il risultato nel tuo
          diario. Le descrizioni dei pasti che scrivi o detti e le foto delle etichette nutrizionali arrivano al modello nello stesso modo.
        </p>
        <p>
          Il modello è Gemini di Google. Google tratta la richiesta per nostro conto e solo per rispondere. Usiamo l’API Gemini a
          pagamento: secondo le sue condizioni, il contenuto delle richieste non viene usato per addestrare i modelli di Google; Google può
          conservarlo per un periodo limitato al solo scopo di individuare abusi.
        </p>
        <p>
          Prima di inviare la prima richiesta, l’app ti mostra cosa verrà inviato a Google e ti chiede il permesso. Vengono inviati solo la
          foto, la descrizione o la foto dell’etichetta, le tue risposte alle domande di chiarimento, le modifiche agli ingredienti e la
          lingua dell’interfaccia (perché la risposta arrivi in quella lingua); il tuo nome, il tuo indirizzo email, il tuo peso e gli altri
          dati del profilo no. Registriamo la data in cui hai dato il permesso. Se lo revochi, a Gemini non viene più inviato nulla, il
          diario resta e l’app te lo chiederà di nuovo la prossima volta che vorrai far riconoscere un alimento.
        </p>
        <p>
          La foto originale e la vista laterale vengono eliminate dall’archivio 30 giorni dopo lo scatto; il diario conserva una piccola
          anteprima finché il pasto vi rimane. Un pasto che non è stato possibile analizzare viene eliminato insieme alle sue foto entro un
          giorno.
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
            <strong>Supabase</strong> — database, accesso e archiviazione dei file. Tutti i dati dell’account, il diario, le foto, i
            messaggi all’assistenza. Server in Irlanda (UE).
          </li>
          <li>
            <strong>Google</strong> — riconoscimento dei pasti e delle etichette nutrizionali (API Gemini). Le foto dei pasti e delle
            etichette, le descrizioni dei pasti, le risposte alle domande di chiarimento e le correzioni degli ingredienti. Google LLC, Stati
            Uniti.
          </li>
          <li>
            <strong>Google</strong> — riconoscimento vocale sui telefoni Android che non riconoscono la voce sul dispositivo. Mentre detti,
            la registrazione della tua voce viene elaborata dal servizio di riconoscimento vocale di Google: sul telefono, se è scaricato il
            pacchetto lingua di Google, altrimenti sui server di Google. Google restituisce il testo; la registrazione non viene trasmessa a
            noi. Su iPhone e sui telefoni Android con riconoscimento sul dispositivo, la tua voce non lascia il telefono. Google LLC, Stati
            Uniti.
          </li>
          <li>
            <strong>Open Food Facts</strong> — il database dei prodotti. Quando scansioni un codice a barre, l’app cerca il prodotto in Open
            Food Facts direttamente dal tuo telefono: Open Food Facts riceve il numero del codice a barre e, come qualsiasi sito web, il tuo
            indirizzo IP. Non gli inviamo i dati del tuo account. Open Food Facts tratta le richieste secondo la propria informativa.
            Associazione Open Food Facts, Francia.
          </li>
          <li>
            <strong>Resend</strong> — invio delle email con il codice di accesso e consegna dei tuoi messaggi all’assistenza alla nostra
            casella di posta. Indirizzo email, lingua dell’email, testo del messaggio. Stati Uniti.
          </li>
          <li>
            <strong>RevenueCat</strong> — gestione degli abbonamenti. Identificativo utente interno e cronologia degli acquisti
            proveniente dallo store. Stati Uniti.
          </li>
          <li>
            <strong>Sentry</strong> — report di arresti anomali ed errori (i dati sono elencati in «Impostazioni e dati tecnici»).
            Functional Software, Inc., Stati Uniti; i dati sono conservati nell’UE (Germania).
          </li>
          <li>
            <strong>Google</strong> — statistiche del sito (Google Analytics), solo con il tuo consenso. Identificativo del browser
            ricavato dal cookie, pagine visitate, tipo di dispositivo, posizione approssimativa. Google Ireland Limited; i dati possono
            essere trattati negli Stati Uniti.
          </li>
          <li>
            <strong>Apple e Google</strong> — pagamento degli abbonamenti e, se lo scegli, accesso con il tuo ID Apple o account Google.
            Trattano i dati secondo le proprie informative, in qualità di titolari autonomi del trattamento.
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
          Il nostro archivio principale si trova nell’Unione europea (Irlanda), i report degli errori sono conservati in Germania e il
          database dei prodotti Open Food Facts si trova in Francia. Il riconoscimento di foto, descrizioni ed etichette, il riconoscimento
          vocale su alcuni telefoni Android, le email, la gestione degli abbonamenti e le statistiche del sito sono affidati a fornitori
          con sede negli Stati Uniti, perciò alcuni dati vengono trasferiti al di fuori dello Spazio economico europeo.
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
        <li>Dati dell’account, diario di cibo e acqua, pasti salvati e prodotti letti dalle etichette — finché hai un account.</li>
        <li>
          Foto originali dei pasti e viste laterali — 30 giorni; l’anteprima nel diario — finché non elimini il pasto o l’account. Le foto
          delle etichette non vengono salvate.
        </li>
        <li>
          Messaggi all’assistenza — finché non elimini l’account; l’email nella nostra casella di posta — per il tempo necessario a
          risponderti.
        </li>
        <li>Report degli errori — non oltre 90 giorni.</li>
        <li>
          Quando elimini l’account, il profilo, il piano, lo storico del peso, il diario, le foto e i messaggi all’assistenza vengono
          eliminati subito, così come il tuo record cliente presso RevenueCat; se hai effettuato l’accesso con Apple, revochiamo l’accesso
          dell’app al tuo ID Apple. I dati scompaiono dalle copie di backup del fornitore di hosting
          entro {LEGAL.backupRetentionDays} giorni.
        </li>
        <li>
          Le risposte inserite prima della registrazione e le copie dei dati sul tuo telefono vengono cancellate quando esci dall’account.
        </li>
        <li>
          App Store e Google Play conservano i dati sugli acquisti per il tempo richiesto dalle leggi sulla contabilità dei pagamenti.
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
            <strong>Sapere</strong> quali dati conserviamo e ottenerne una copia. Nell’app: tocca la foto del profilo → «Dati personali» →
            «Scarica una copia dei miei dati».
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
            piano, quindi revocare il consenso comporta l’eliminazione dell’account: «Dati personali» → «Revoca il consenso».
          </li>
          <li>
            <strong>Revocare il permesso</strong> per il riconoscimento IA: «Dati personali» → «Riconoscimento IA». L’account e il diario
            restano.
          </li>
          <li>
            <strong>Opporti</strong> al trattamento o chiederne la limitazione.
          </li>
          <li>
            <strong>Presentare un reclamo</strong> all’autorità per la protezione dei dati del paese in cui vivi o lavori.
          </li>
          <li>
            Se vivi nello Stato di Washington o in Nevada, consulta anche la nostra{" "}
            <Link href="/en/health-data" hrefLang="en" lang="en">
              Consumer Health Data Privacy Policy
            </Link>{" "}
            (in inglese).
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
        <li>
          La chiave di sessione sul tuo telefono è cifrata; la chiave di cifratura è conservata nell’archivio sicuro del sistema (Keychain
          o Keystore).
        </li>
        <li>L’accesso avviene con un codice monouso, con l’ID Apple o con un account Google: non ci sono password da rubare.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Età",
    body: (
      <p>
        Puoi usare AIFit+ a partire dai {LEGAL.minAge} anni. L’app ti chiede l’età durante la configurazione; se sei più giovane, l’app su
        quel dispositivo si blocca, le risposte vengono cancellate dal telefono e, se hai già effettuato l’accesso, l’account viene
        eliminato. Le risposte date prima della registrazione non arrivano mai al nostro server, quindi non riceviamo dati sulla salute di
        minori. Non raccogliamo consapevolmente dati di minori al di sotto di questa età. Se vieni a sapere che un bambino ha creato un
        account, scrivici e lo elimineremo.
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
      AIFit+ conta le calorie e i nutrienti di ciò che mangi. Per farlo ha bisogno di dati sul tuo corpo e sulla tua alimentazione.
      Ecco, in breve e senza giri di parole: che cosa raccogliamo, perché, dove lo conserviamo e come eliminare tutto.
    </p>
  ),
  sections: SECTIONS,
};
