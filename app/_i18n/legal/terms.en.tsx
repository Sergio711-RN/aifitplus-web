import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

const SECTIONS: ILegalSection[] = [
  {
    id: "general",
    title: "General",
    body: (
      <>
        <p>
          These terms are an agreement between you and <Fill value={LEGAL.operatorName} label="company name" /> (“we”) on the use of
          the AIFit+ app and the aifitplus.com website.
        </p>
        <p>
          By tapping “Continue” at sign-up, you accept these terms and the{" "}
          <Link href="/en/privacy">Privacy Policy</Link>. If you do not agree, do not use the app.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "What AIFit+ does",
    body: (
      <>
        <ul>
          <li>Calculates your daily calorie, protein, fat and carb targets from your answers.</li>
          <li>Recognises meals in photos using artificial intelligence and estimates portion weight, calories and nutrients.</li>
          <li>Keeps a food and weight diary, and gives tips and reminders.</li>
        </ul>
        <p>The app is distributed through the App Store and Google Play in selected countries. It is not available in the Russian Federation.</p>
      </>
    ),
  },
  {
    id: "not-medical",
    title: "This is not a medical service",
    body: (
      <>
        <p>
          AIFit+ helps you track your diet, but it does not diagnose or treat anything. Its calculations and tips are for information only and
          do not replace advice from a doctor or dietitian.
        </p>
        <p>
          Photo recognition gives an <strong>estimate</strong>: the dish, portion weight and calories may differ from the real ones. Check the
          result and correct it by hand.
        </p>
        <p>
          Talk to a doctor before changing your diet if you are pregnant or breastfeeding, have diabetes, kidney, heart or metabolic disease,
          have or have had an eating disorder, or take medicines that depend on your diet.
        </p>
      </>
    ),
  },
  {
    id: "account",
    title: "Account",
    body: (
      <ul>
        <li>You can use the app from the age of {LEGAL.minAge}.</li>
        <li>You sign in with a one-time code sent to your email. One account is for one person.</li>
        <li>Give accurate information about yourself: your targets are calculated from it.</li>
        <li>Do not share sign-in codes with other people. Actions in your account are treated as yours.</li>
        <li>You can delete your account at any time in the app: tap your profile photo → “Delete account”.</li>
      </ul>
    ),
  },
  {
    id: "subscription",
    title: "Subscription and free trial",
    body: (
      <ul>
        <li>Some features are available with a paid subscription. The price and term are shown in the app before you pay.</li>
        <li>You subscribe and pay through the App Store or Google Play, under the rules of those stores.</li>
        <li>
          If your subscription starts with a free trial, it automatically becomes paid when the trial ends, unless you cancel at least 24 hours
          before the trial ends.
        </li>
        <li>The subscription renews automatically until you cancel it in the App Store or Google Play settings.</li>
        <li>
          <strong>Deleting your account does not cancel your subscription</strong> — cancel it in the store separately.
        </li>
        <li>Refunds are handled by the App Store and Google Play under their own rules.</li>
        <li>A promo code adds free days. It cannot be exchanged for money.</li>
        <li>If we change the price, the new price applies from the next period, and the store will ask for your consent in advance.</li>
      </ul>
    ),
  },
  {
    id: "use",
    title: "Rules of use",
    body: (
      <>
        <p>You must not:</p>
        <ul>
          <li>Upload illegal material, or photos of other people without their consent.</li>
          <li>Send requests automatically, bypassing the app, or beyond reasonable personal use.</li>
          <li>Hack, decompile or copy the app, or get around subscription restrictions.</li>
          <li>Resell access to the service.</li>
        </ul>
        <p>To prevent abuse, the number of recognitions per day is limited. The limit does not get in the way of normal use.</p>
      </>
    ),
  },
  {
    id: "content",
    title: "Your photos and data",
    body: (
      <p>
        Your photos and diary entries remain yours. You allow us to store and process them only to make the service work for you: showing your
        diary, recognising meals, syncing your devices. We do not publish your content. For details, see the{" "}
        <Link href="/en/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "ip",
    title: "Rights to the app",
    body: (
      <p>
        The app, its design, texts, the AIFit+ name and logo belong to us. You get a personal, non-transferable right to use the app on your
        devices for as long as these terms are in force.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Service availability",
    body: (
      <p>
        We keep developing the app: features may change, be added or be removed. The service may be temporarily unavailable because of updates
        or outages at our providers. We will give you advance notice of major changes to paid features.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    body: (
      <>
        <p>
          The service is provided “as is”. To the extent permitted by law, we are not liable for decisions about diet and health made on the
          basis of the app’s calculations and estimates, or for indirect losses.
        </p>
        <p>
          These terms do not limit the rights you have as a consumer under the laws of the country where you live.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "Ending access",
    body: (
      <p>
        You can stop using the app and delete your account at any time. We may block an account that breaches these terms. We will warn you
        first, unless the breach threatens other users or the operation of the service.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the law of <Fill value={LEGAL.governingLaw.en} label="country of company registration" />. We will first try
        to resolve any dispute by correspondence — write to <ContactEmail label="contact email" /> and we will reply within 10 working days.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        If we change these terms, we will tell you in the app in advance. By continuing to use the app after the changes take effect, you
        accept them. The date of the current version is shown at the top of this document.
      </p>
    ),
  },
  {
    id: "contacts",
    title: "Contacts",
    body: (
      <p>
        <Fill value={LEGAL.operatorName} label="company name" />,{" "}
        <Fill value={LEGAL.operatorIds} label="company registration number" />,{" "}
        <Fill value={LEGAL.operatorAddress} label="postal address" />. Email: <ContactEmail label="contact email" />.
      </p>
    ),
  },
];

export const termsEn: ILegalDocument = {
  title: "Terms of Use",
  lead: (
    <p>
      The rules AIFit+ works by: what the app gives you, how the subscription works, what you must not do and what we are responsible for.
    </p>
  ),
  sections: SECTIONS,
};
