import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Canadian French. Spaces before «:» and inside «…» are non-breaking (U+00A0)

const SECTIONS: ILegalSection[] = [
  {
    id: "operator",
    title: "Qui traite vos données",
    body: (
      <>
        <p>
          Le responsable du traitement est <Fill value={LEGAL.operatorName.fr} label="nom de l’exploitant" />, adresse :{" "}
          <Fill value={LEGAL.operatorAddress.fr} label="adresse postale" />. Dans cette politique, « nous » désigne le responsable du
          traitement.
        </p>
        <p>
          Cette politique s’applique à l’application mobile AIFit+ pour iOS et Android et au site aifitplus.com. Pour toute question sur vos
          données, écrivez à <ContactEmail label="courriel de contact" />.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "Quelles données nous recueillons",
    body: (
      <>
        <h3>Compte</h3>
        <ul>
          <li>Adresse courriel — pour vous connecter au moyen d’un code.</li>
          <li>Nom, langue de l’interface et photo de profil — si vous les fournissez.</li>
        </ul>
        <h3>Données sur la santé et le corps</h3>
        <p>
          Vos réponses au premier lancement : sexe, année de naissance, taille, poids et historique des pesées, poids visé et rythme, niveau
          d’activité, type d’alimentation et ce que vous souhaitez améliorer. Il s’agit de données
          sensibles : elles n’arrivent sur notre serveur qu’après votre consentement distinct, donné à l’inscription. Jusque-là, vos réponses
          restent uniquement sur votre appareil.
        </p>
        <h3>Journal alimentaire</h3>
        <ul>
          <li>Photos de repas que vous prenez ou choisissez dans votre galerie.</li>
          <li>
            Descriptions de repas que vous tapez ou dictez. La parole est transformée en texte pendant que vous parlez; nous conservons
            seulement le texte, pas l’enregistrement de votre voix.
          </li>
          <li>
            Résultats de la reconnaissance : plat, ingrédients, poids de la portion, calories, protéines, lipides, glucides, vos corrections
            et vos réponses aux questions de précision.
          </li>
          <li>Heure et type de repas.</li>
        </ul>
        <h3>Abonnement</h3>
        <p>
          État de l’abonnement, forfait, dates de l’essai et du renouvellement. Les paiements sont perçus par l’App Store et Google Play —
          nous ne recevons ni votre numéro de carte ni vos renseignements de paiement.
        </p>
        <h3>Réglages et données techniques</h3>
        <ul>
          <li>Heures des rappels, unités de mesure, code promotionnel saisi.</li>
          <li>Identifiant interne d’utilisateur et clé de session sur votre appareil.</li>
          <li>
            Journaux techniques du serveur : adresse IP, heure et type de requête. Ils sont nécessaires au fonctionnement et à la protection
            du service.
          </li>
        </ul>
        <h3>Site Web</h3>
        <p>
          Comme tout serveur Web, l’hébergeur du site voit votre adresse IP et le type de votre navigateur dans ses journaux techniques. Le
          site retient la langue choisie dans le témoin NEXT_LOCALE pendant un an, et votre réponse au sujet des statistiques dans le stockage
          de votre navigateur. Les deux sont nécessaires au fonctionnement du site et n’exigent pas de consentement.
        </p>
        <p>
          Si vous cliquez sur « Accepter » dans le bandeau des témoins, le site charge Google Analytics. Ce service dépose les témoins _ga et
          _ga_* contenant un identifiant aléatoire du navigateur pour une durée maximale de 2 ans et recueille les pages que vous ouvrez,
          votre provenance, le type d’appareil et de navigateur, la langue et la localisation approximative (pays, ville). Google Analytics
          ne conserve pas les adresses IP. Les données détaillées y sont conservées 2 mois; ensuite, seules des statistiques agrégées
          subsistent. Nous voyons des rapports agrégés et ne les relions pas à votre compte dans l’application. Les fonctions publicitaires
          de Google Analytics sont désactivées.
        </p>
        <p>
          Sans votre consentement, Google Analytics n’est pas chargé. Vous pouvez changer d’avis en tout temps sous « Paramètres des
          témoins », au bas de la page.
        </p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "Pourquoi nous traitons les données et sur quel fondement",
    body: (
      <ul>
        <li>
          <strong>Fonctionnement de l’application</strong> : connexion, calcul de vos objectifs quotidiens, reconnaissance des repas, journal,
          synchronisation entre appareils. Fondement : notre contrat avec vous (<Link href="/fr/terms">Conditions d’utilisation</Link>),
          art. 6(1)(b) du RGPD.
        </li>
        <li>
          <strong>Les données sur la santé</strong> ne sont traitées que pour calculer votre plan et tenir votre journal. Fondement : votre
          consentement explicite et distinct, donné en cochant une case à l’inscription, art. 9(2)(a) du RGPD.
        </li>
        <li>
          <strong>Abonnement</strong> : vérification de l’accès aux fonctions payantes. Fondement : contrat, art. 6(1)(b) du RGPD.
        </li>
        <li>
          <strong>Sécurité</strong> : protection contre le piratage et les abus, par exemple une limite quotidienne de requêtes à l’IA.
          Fondement : notre intérêt légitime à offrir un service qui fonctionne, art. 6(1)(f) du RGPD.
        </li>
        <li>
          <strong>Statistiques du site</strong> : combien de personnes visitent le site et d’où elles viennent, afin de l’améliorer.
          Fondement : votre consentement dans le bandeau des témoins, art. 6(1)(a) du RGPD; vous pouvez le retirer sous « Paramètres des
          témoins », au bas de la page.
        </li>
        <li>
          <strong>Les rappels</strong> ne sont envoyés que si vous les activez et autorisez les notifications dans les réglages de votre
          système.
        </li>
      </ul>
    ),
  },
  {
    id: "no-sale",
    title: "Ce que nous ne faisons pas",
    body: (
      <ul>
        <li>Nous ne vendons ni ne louons vos données.</li>
        <li>Nous n’affichons pas de publicité et ne communiquons pas de données à des réseaux publicitaires.</li>
        <li>Nous ne publions pas vos photos de repas et ne les montrons pas à d’autres utilisateurs.</li>
        <li>Nous ne prenons pas, à partir de vos données, de décisions produisant des effets juridiques à votre égard.</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "Comment fonctionne la reconnaissance des photos",
    body: (
      <>
        <p>
          La photo est compressée sur votre appareil et téléversée dans un espace de stockage privé auquel seul votre compte a accès. Le
          serveur l’envoie à un modèle d’intelligence artificielle, reçoit l’analyse du repas et enregistre le résultat dans votre journal.
        </p>
        <p>
          Le modèle est fourni par Anthropic. Anthropic traite la photo pour notre compte et uniquement pour répondre à la requête. Selon les
          conditions de son API commerciale, le contenu des requêtes ne sert pas à entraîner les modèles.
        </p>
        <p>
          Les estimations de calories et de nutriments sont approximatives. Vérifiez le résultat et corrigez-le — vos corrections sont
          enregistrées dans le journal.
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "À qui nous communiquons des données",
    body: (
      <>
        <p>
          Uniquement aux fournisseurs sans lesquels le service ne peut pas fonctionner et, si vous y consentez, à un service de statistiques
          du site. Chacun reçoit le minimum de données nécessaire à sa tâche :
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — base de données, connexion et stockage de fichiers. Toutes les données du compte, le journal, les
            photos. Serveurs en Irlande (UE).
          </li>
          <li>
            <strong>Anthropic</strong> — reconnaissance des repas. Photos, descriptions de repas et texte des réponses aux questions de
            précision. États-Unis.
          </li>
          <li>
            <strong>Google</strong> — reconnaissance vocale sur les téléphones Android qui ne peuvent pas reconnaître la parole sur
            l’appareil. Pendant que vous dictez, l’enregistrement de votre voix est traité par le service de reconnaissance vocale de Google
            : sur le téléphone si le module de langue Google est téléchargé, sinon sur les serveurs de Google. Google renvoie le texte;
            l’enregistrement ne nous est pas transmis. Sur iPhone et sur les téléphones Android dotés de la reconnaissance sur l’appareil,
            votre voix ne quitte pas le téléphone. Google LLC, États-Unis.
          </li>
          <li>
            <strong>Resend</strong> — envoi des courriels contenant le code de connexion. Adresse courriel et langue du courriel. États-Unis.
          </li>
          <li>
            <strong>RevenueCat</strong> — gestion des abonnements. Identifiant interne d’utilisateur et historique des achats provenant de la
            boutique. États-Unis.
          </li>
          <li>
            <strong>Google</strong> — statistiques du site (Google Analytics), seulement avec votre consentement. Identifiant du navigateur
            tiré du témoin, pages consultées, type d’appareil, localisation approximative. Google Ireland Limited; les données peuvent être
            traitées aux États-Unis.
          </li>
          <li>
            <strong>Apple et Google</strong> — paiement des abonnements et notifications. Ils traitent les données selon leurs propres
            politiques, à titre de responsables du traitement indépendants.
          </li>
        </ul>
        <p>
          Nous communiquons aussi des données aux autorités publiques lorsque la loi l’exige, et seulement dans la mesure de la demande.
        </p>
      </>
    ),
  },
  {
    id: "transfer",
    title: "Où les données sont conservées",
    body: (
      <>
        <p>
          Notre stockage principal se trouve dans l’Union européenne (Irlande). La reconnaissance des photos, la reconnaissance vocale sur
          certains téléphones Android, les courriels, la gestion des abonnements et les statistiques du site sont assurés par des
          fournisseurs situés aux États-Unis; certaines données sont donc transférées à l’extérieur de votre pays ou de votre province et de
          l’Espace économique européen.
        </p>
        <p>
          Ces transferts reposent sur la décision d’adéquation de la Commission européenne (cadre de protection des données UE–États-Unis)
          pour les fournisseurs certifiés, ou sur les clauses contractuelles types de la Commission européenne. Les données ne sont
          transférées qu’aux fins décrites dans cette politique.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Combien de temps nous conservons les données",
    body: (
      <ul>
        <li>Données du compte, journal et photos — tant que vous avez un compte.</li>
        <li>
          Lorsque vous supprimez votre compte, votre profil, votre plan, l’historique de votre poids, votre journal et vos photos sont
          supprimés immédiatement. Ils disparaissent des copies de sauvegarde de l’hébergeur dans un délai de {LEGAL.backupRetentionDays}{" "}
          jours.
        </li>
        <li>Les réponses saisies avant l’inscription restent uniquement sur votre appareil et sont effacées à la déconnexion.</li>
        <li>
          L’App Store, Google Play et RevenueCat conservent les relevés d’achats aussi longtemps que l’exigent les lois sur la comptabilité
          des paiements.
        </li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Vos droits",
    body: (
      <>
        <ul>
          <li>
            <strong>Savoir</strong> quelles données nous détenons et en obtenir une copie.
          </li>
          <li>
            <strong>Récupérer</strong> vos données dans un format lisible par machine pour les transférer à un autre service.
          </li>
          <li>
            <strong>Rectifier</strong> vos données — la plupart des champs se modifient directement dans l’application.
          </li>
          <li>
            <strong>Supprimer</strong> votre compte et toutes vos données : dans l’application, touchez votre photo de profil → « Supprimer
            le compte ». Cela n’annule pas votre abonnement — annulez-le dans les réglages de l’App Store ou de Google Play.
          </li>
          <li>
            <strong>Retirer votre consentement</strong> au traitement de vos données sur la santé. Sans ces données, l’application ne peut pas
            calculer votre plan; retirer le consentement revient donc à supprimer votre compte.
          </li>
          <li>
            <strong>Vous opposer</strong> au traitement ou en demander la limitation.
          </li>
          <li>
            <strong>Porter plainte</strong> auprès de l’autorité de protection des données ou des renseignements personnels du pays ou de la
            province où vous vivez ou travaillez.
          </li>
        </ul>
        <p>
          Envoyez vos demandes à <ContactEmail label="courriel de contact" /> à partir de l’adresse courriel liée à votre compte. Nous
          répondrons dans un délai d’un mois, généralement plus tôt.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Comment nous protégeons les données",
    body: (
      <ul>
        <li>Toutes les connexions sont chiffrées (HTTPS/TLS).</li>
        <li>Règles d’accès à la base de données : chaque compte ne voit que ses propres enregistrements et ses propres fichiers.</li>
        <li>Les photos sont conservées dans un stockage privé, et leurs liens ne sont pas publics.</li>
        <li>Les clés secrètes du service sont conservées uniquement sur le serveur, pas dans l’application.</li>
        <li>La connexion se fait par code à usage unique — il n’y a pas de mot de passe à voler.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Âge",
    body: (
      <p>
        Vous pouvez utiliser AIFit+ à partir de {LEGAL.minAge} ans. Nous ne recueillons pas sciemment de données d’enfants. Si vous apprenez
        qu’un enfant a créé un compte, écrivez-nous et nous le supprimerons.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Modifications de cette politique",
    body: (
      <p>
        Si nous modifions les données recueillies ou les destinataires à qui nous les communiquons, nous vous en informerons à l’avance dans
        l’application. La date d’entrée en vigueur figure en haut de ce document.
      </p>
    ),
  },
];

export const privacyFr: ILegalDocument = {
  title: "Politique de confidentialité",
  lead: (
    <p>
      AIFit+ compte les calories à partir de photos de vos repas. Pour cela, l’application a besoin de données sur votre corps et votre
      alimentation. Voici un résumé court et concret : ce que nous recueillons, pourquoi, où nous le conservons et comment tout supprimer.
    </p>
  ),
  sections: SECTIONS,
};
