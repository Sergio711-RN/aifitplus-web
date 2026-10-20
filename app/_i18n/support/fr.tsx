import Link from "next/link";
import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "../legal/contact-email";
import type { ILegalDocument } from "../legal/types";
import { EmailButton } from "./email-button";

export const supportFr: ILegalDocument = {
  title: "Assistance",
  lead: (
    <>
      <p>
        Une question sur AIFit+, un problème avec l’application ou votre abonnement, ou une idée? Écrivez-nous — nous répondons par courriel
        sous quelques jours ouvrables.
      </p>
      <EmailButton label="courriel de contact" />
    </>
  ),
  sections: [
    {
      id: "contact",
      title: "Nous joindre",
      body: (
        <ul>
          <li>
            <strong>Par courriel :</strong> <ContactEmail label="courriel de contact" />. Si votre question porte sur votre compte, écrivez-nous
            à partir de l’adresse qui y est liée — nous le retrouverons plus vite.
          </li>
          <li>
            <strong>Dans l’application :</strong> touchez votre photo de profil → « Nous contacter ». L’application joint à votre message sa
            version, le système d’exploitation de votre téléphone et la langue de l’interface — cela nous aide à régler le problème plus vite.
          </li>
          <li>
            <strong>Si vous n’arrivez pas à vous connecter :</strong> touchez « Impossible de vous connecter ? » sur l’écran de connexion, ou
            écrivez-nous simplement par courriel.
          </li>
        </ul>
      ),
    },
    {
      id: "sign-in",
      title: "Connexion",
      body: (
        <ul>
          <li>
            Nous envoyons un code à 6 chiffres à votre adresse courriel. Il peut prendre jusqu’à une minute — vérifiez aussi vos courriels
            indésirables. Si le code a expiré, demandez-en un nouveau.
          </li>
          <li>
            Sur un nouveau téléphone, connectez-vous de la même façon que la première fois : avec la même adresse courriel, le même identifiant
            Apple ou le même compte Google. Votre plan et votre journal se chargent automatiquement.
          </li>
          <li>
            Si vous vous êtes connecté avec Apple en masquant votre adresse, nous n’avons que l’adresse de relais d’Apple — reconnectez-vous
            donc avec Apple.
          </li>
        </ul>
      ),
    },
    {
      id: "subscription",
      title: "Abonnement et paiement",
      body: (
        <ul>
          <li>L’abonnement se souscrit et se paie dans l’App Store ou Google Play. Nous ne voyons pas les données de votre carte.</li>
          <li>
            Pour annuler l’abonnement, passez par les réglages de la boutique : voir les instructions d’
            <a href="https://support.apple.com/118428">Apple</a> et de{" "}
            <a href="https://support.google.com/googleplay/answer/7018481?hl=fr-CA">Google</a>. Annulez au moins 24 heures avant la fin de la
            période.
          </li>
          <li>
            <strong>Supprimer votre compte n’annule pas votre abonnement</strong> — annulez-le séparément dans la boutique.
          </li>
          <li>
            Nouveau téléphone ou application réinstallée? Connectez-vous au même compte. Si l’abonnement n’apparaît pas, touchez « Restaurer les
            achats » sur l’écran d’abonnement — avec le même identifiant Apple ou compte Google que celui utilisé pour payer.
          </li>
          <li>Si l’application indique que le paiement a été refusé, mettez à jour votre moyen de paiement dans l’App Store ou Google Play.</li>
          <li>
            Les remboursements sont traités par les boutiques selon leurs propres règles : <a href="https://support.apple.com/118223">Apple</a>,{" "}
            <a href="https://support.google.com/googleplay/answer/2479637?hl=fr-CA">Google Play</a>.
          </li>
        </ul>
      ),
    },
    {
      id: "data",
      title: "Vos données et votre compte",
      body: (
        <>
          <ul>
            <li>
              <strong>Obtenir une copie de vos données :</strong> touchez votre photo de profil → « Informations personnelles » → « Télécharger
              une copie de mes données ».
            </li>
            <li>
              <strong>Supprimer votre compte :</strong> touchez votre photo de profil → « Supprimer le compte ». Votre profil, votre plan, votre
              journal et vos photos sont supprimés définitivement. Cela n’annule pas votre abonnement.
            </li>
            <li>
              <strong>Retirer votre consentement</strong> au traitement de vos données sur la santé : « Informations personnelles » → « Retirer
              mon consentement ». Sans ces données, l’application ne peut pas calculer votre plan; votre compte est donc supprimé aussi.
            </li>
            <li>
              Si vous ne pouvez pas accéder à l’application, écrivez à <ContactEmail label="courriel de contact" /> à partir de l’adresse liée à
              votre compte, et nous vous aiderons.
            </li>
          </ul>
          <p>
            Ce que nous recueillons et combien de temps nous le conservons est expliqué dans la{" "}
            <Link href="/fr/privacy">Politique de confidentialité</Link>.
          </p>
        </>
      ),
    },
    {
      id: "accuracy",
      title: "Précision de la reconnaissance",
      body: (
        <ul>
          <li>
            L’IA donne une <strong>estimation</strong> : le plat, le poids de la portion et les calories peuvent différer de la réalité.
            Vérifiez le résultat et corrigez-le à la main au besoin.
          </li>
          <li>
            Pour un meilleur résultat, prenez la photo sous un bon éclairage, avec tout le repas dans le cadre. Pour un produit emballé,
            scannez le code-barres ou photographiez le tableau de la valeur nutritive.
          </li>
          <li>
            AIFit+ n’est pas un service médical et ne vérifie pas les allergènes — voir les <Link href="/fr/terms">Conditions d’utilisation</Link>.
          </li>
          <li>
            Si l’application se trompe souvent sur un plat, dites-le-nous via « Nous contacter » — cela nous aide à améliorer la reconnaissance.
          </li>
        </ul>
      ),
    },
    {
      id: "about",
      title: "Qui exploite AIFit+",
      body: (
        <p>
          <Fill value={LEGAL.operatorName.fr} label="nom de l’exploitant" />,{" "}
          <Fill value={LEGAL.operatorAddress.fr} label="adresse postale" />. Courriel : <ContactEmail label="courriel de contact" />.
        </p>
      ),
    },
  ],
};
