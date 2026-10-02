import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Canadian French. Spaces before «:» and inside «…» are non-breaking (U+00A0)

const SECTIONS: ILegalSection[] = [
  {
    id: "general",
    title: "Dispositions générales",
    body: (
      <>
        <p>
          Les présentes conditions sont un contrat entre vous et <Fill value={LEGAL.operatorNameWith.fr} label="nom de l’exploitant" />{" "}
          (« nous ») portant sur l’utilisation de l’application AIFit+ et du site aifitplus.com.
        </p>
        <p>
          En touchant « Continuer » à l’inscription, vous acceptez ces conditions et la{" "}
          <Link href="/fr/privacy">Politique de confidentialité</Link>. Si vous n’êtes pas d’accord, n’utilisez pas l’application.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "Ce que fait AIFit+",
    body: (
      <>
        <ul>
          <li>Calcule vos objectifs quotidiens de calories, de protéines, de lipides et de glucides à partir de vos réponses.</li>
          <li>
            Reconnaît les repas sur les photos à l’aide de l’intelligence artificielle et estime le poids de la portion, les calories et les
            nutriments.
          </li>
          <li>Tient un journal de l’alimentation et du poids, et donne des conseils et des rappels.</li>
        </ul>
        <p>
          L’application est distribuée par l’App Store et Google Play dans certains pays. Elle n’est pas offerte en Fédération de Russie.
        </p>
      </>
    ),
  },
  {
    id: "not-medical",
    title: "Ce n’est pas un service médical",
    body: (
      <>
        <p>
          AIFit+ vous aide à suivre votre alimentation, mais ne pose aucun diagnostic et ne traite rien. Ses calculs et ses conseils sont
          fournis à titre d’information seulement et ne remplacent pas l’avis d’un médecin ou d’un diététiste.
        </p>
        <p>
          La reconnaissance par photo donne une <strong>estimation</strong> : le plat, le poids de la portion et les calories peuvent différer
          de la réalité. Vérifiez le résultat et corrigez-le à la main.
        </p>
        <p>
          La reconnaissance des repas, les questions de précision et les conseils sont produits par un système d’intelligence artificielle,
          et non par une personne.
        </p>
        <p>
          <strong>Allergies et intolérances.</strong> L’application ne voit pas tous les ingrédients sur une photo et ne vérifie ni les
          allergènes ni la salubrité des aliments. Si vous avez une allergie, une intolérance ou un régime prescrit, ne vous fiez pas aux
          ingrédients reconnus.
        </p>
        <p>
          Consultez un médecin avant de modifier votre alimentation si vous êtes enceinte ou si vous allaitez, si vous avez le diabète, une
          maladie des reins, du cœur ou du métabolisme, si vous avez ou avez eu un trouble de l’alimentation, ou si vous prenez des
          médicaments dont l’effet dépend de l’alimentation.
        </p>
        <p>
          N’utilisez pas l’application pour atteindre ou maintenir un apport calorique ou un poids dangereusement bas. L’Organisation mondiale
          de la Santé considère qu’un indice de masse corporelle de 18,5 à 25 correspond à un poids santé chez l’adulte.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "Compte",
    body: (
      <ul>
        <li>Vous pouvez utiliser l’application à partir de {LEGAL.minAge} ans.</li>
        <li>Vous vous connectez au moyen d’un code à usage unique envoyé par courriel. Un compte est destiné à une seule personne.</li>
        <li>Donnez des renseignements exacts à votre sujet : vos objectifs sont calculés à partir de ceux-ci.</li>
        <li>Ne communiquez pas vos codes de connexion à d’autres personnes. Les actions faites dans votre compte sont réputées être les vôtres.</li>
        <li>Vous pouvez supprimer votre compte en tout temps dans l’application : touchez votre photo de profil → « Supprimer le compte ».</li>
      </ul>
    ),
  },
  {
    id: "subscription",
    title: "Abonnement et essai gratuit",
    body: (
      <ul>
        <li>Certaines fonctions sont offertes par abonnement payant. Le prix et la durée sont affichés dans l’application avant le paiement.</li>
        <li>Vous vous abonnez et payez par l’App Store ou Google Play, selon les règles de ces boutiques.</li>
        <li>
          Si votre abonnement commence par un essai gratuit, il devient automatiquement payant à la fin de l’essai, sauf si vous l’annulez au
          moins 24 heures avant la fin de l’essai.
        </li>
        <li>L’abonnement se renouvelle automatiquement jusqu’à ce que vous l’annuliez dans les réglages de l’App Store ou de Google Play.</li>
        <li>
          <strong>La suppression de votre compte n’annule pas votre abonnement</strong> — annulez-le séparément dans la boutique.
        </li>
        <li>Les remboursements sont traités par l’App Store et Google Play selon leurs propres règles.</li>
        <li>Un code promotionnel ajoute des jours gratuits. Il ne peut pas être échangé contre de l’argent.</li>
        <li>
          Si nous modifions le prix, le nouveau prix s’applique à compter de la période suivante, et la boutique vous demandera votre accord
          à l’avance.
        </li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "Règles d’utilisation",
    body: (
      <>
        <p>Il est interdit :</p>
        <ul>
          <li>De téléverser du contenu illégal ou des photos d’autres personnes sans leur consentement.</li>
          <li>D’envoyer des requêtes de façon automatisée, en contournant l’application, ou au-delà d’un usage personnel raisonnable.</li>
          <li>De pirater, de décompiler ou de copier l’application, ou de contourner les restrictions de l’abonnement.</li>
          <li>De revendre l’accès au service.</li>
        </ul>
        <p>
          Pour prévenir les abus, le nombre de reconnaissances par jour est limité. Cette limite ne gêne pas un usage normal.
        </p>
      </>
    ),
  },
  {
    id: "content",
    title: "Vos photos et vos données",
    body: (
      <p>
        Vos photos et les entrées de votre journal restent à vous. Vous nous autorisez à les conserver et à les traiter uniquement pour que le
        service fonctionne pour vous : afficher votre journal, reconnaître les repas, synchroniser vos appareils. Nous ne publions pas votre
        contenu. Pour en savoir plus, consultez la <Link href="/fr/privacy">Politique de confidentialité</Link>.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Droits sur l’application",
    body: (
      <p>
        L’application, son design, ses textes, le nom et le logo AIFit+ nous appartiennent. Vous obtenez un droit personnel et incessible
        d’utiliser l’application sur vos appareils tant que ces conditions sont en vigueur.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Disponibilité du service",
    body: (
      <p>
        Nous continuons de développer l’application : des fonctions peuvent changer, être ajoutées ou retirées. Le service peut être
        temporairement indisponible en raison de mises à jour ou de pannes chez nos fournisseurs. Nous vous aviserons à l’avance des
        changements importants touchant les fonctions payantes.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Responsabilité",
    body: (
      <>
        <p>
          Le service est fourni « tel quel ». Dans la mesure permise par la loi, nous ne sommes pas responsables des décisions relatives à
          l’alimentation et à la santé prises sur la base des calculs et des estimations de l’application, ni des pertes indirectes.
        </p>
        <p>
          Cette limitation ne s’applique pas aux atteintes à la vie ou à la santé causées par notre faute, aux préjudices que nous causons
          intentionnellement ou par négligence grave, ni à toute responsabilité que la loi ne permet pas d’exclure.
        </p>
        <p>
          Ces conditions ne limitent pas les droits dont vous disposez à titre de consommateur selon les lois du pays ou de la province où
          vous vivez.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Fin de l’accès",
    body: (
      <p>
        Vous pouvez cesser d’utiliser l’application et supprimer votre compte en tout temps. Nous pouvons bloquer un compte qui enfreint ces
        conditions. Nous vous avertirons d’abord, sauf si l’infraction menace d’autres utilisateurs ou le fonctionnement du service.
      </p>
    ),
  },
  {
    id: "law",
    title: "Droit applicable et différends",
    body: (
      <p>
        Ces conditions sont régies par le droit de <Fill value={LEGAL.governingLaw.fr} label="pays du droit applicable" />. Nous tenterons
        d’abord de régler tout différend par correspondance — écrivez à <ContactEmail label="courriel de contact" /> et nous répondrons dans
        un délai de 10 jours ouvrables.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Modifications de ces conditions",
    body: (
      <p>
        Si nous modifions ces conditions, nous vous en informerons à l’avance dans l’application. En continuant d’utiliser l’application
        après l’entrée en vigueur des modifications, vous les acceptez. La date de la version en vigueur figure en haut de ce document.
      </p>
    ),
  },
  {
    id: "contacts",
    title: "Coordonnées",
    body: (
      <p>
        <Fill value={LEGAL.operatorName.fr} label="nom de l’exploitant" />,{" "}
        <Fill value={LEGAL.operatorAddress.fr} label="adresse postale" />. Courriel : <ContactEmail label="courriel de contact" />.
      </p>
    ),
  },
];

export const termsFr: ILegalDocument = {
  title: "Conditions d’utilisation",
  lead: (
    <p>
      Les règles de fonctionnement d’AIFit+ : ce que l’application vous offre, comment fonctionne l’abonnement, ce qui est interdit et ce
      dont nous sommes responsables.
    </p>
  ),
  sections: SECTIONS,
};
