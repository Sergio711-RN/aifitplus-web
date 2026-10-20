import Link from "next/link";
import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "../legal/contact-email";
import type { ILegalDocument } from "../legal/types";
import { EmailButton } from "./email-button";

export const supportEn: ILegalDocument = {
  title: "Support",
  lead: (
    <>
      <p>
        A question about AIFit+, a problem with the app or your subscription, or an idea? Write to us — we reply by email within a couple of
        working days.
      </p>
      <EmailButton label="contact email" />
    </>
  ),
  sections: [
    {
      id: "contact",
      title: "How to reach us",
      body: (
        <ul>
          <li>
            <strong>By email:</strong> <ContactEmail label="contact email" />. If your question is about your account, write from the email
            address linked to it — that way we find it faster.
          </li>
          <li>
            <strong>In the app:</strong> tap your profile photo → “Contact us”. The app adds its version, your phone’s operating system and the
            interface language to the message — it helps us sort things out faster.
          </li>
          <li>
            <strong>If you can’t sign in:</strong> tap “Can’t sign in?” on the sign-in screen, or simply write to us by email.
          </li>
        </ul>
      ),
    },
    {
      id: "sign-in",
      title: "Signing in",
      body: (
        <ul>
          <li>
            We send a 6-digit code to your email. It may take up to a minute — check your spam folder too. If the code has expired, request a
            new one.
          </li>
          <li>
            On a new phone, sign in the same way as the first time: with the same email, Apple ID or Google account. Your plan and diary load
            automatically.
          </li>
          <li>
            If you signed in with Apple and chose to hide your email, we only have Apple’s forwarding address — so sign in with Apple again.
          </li>
        </ul>
      ),
    },
    {
      id: "subscription",
      title: "Subscription and payment",
      body: (
        <ul>
          <li>You subscribe and pay through the App Store or Google Play. We do not see your card details.</li>
          <li>
            To cancel the subscription, use the store’s settings: see the instructions from{" "}
            <a href="https://support.apple.com/118428">Apple</a> and{" "}
            <a href="https://support.google.com/googleplay/answer/7018481?hl=en">Google</a>. Cancel at least 24 hours before the period ends.
          </li>
          <li>
            <strong>Deleting your account does not cancel your subscription</strong> — cancel it in the store separately.
          </li>
          <li>
            New phone or reinstalled the app? Sign in to the same account. If the subscription is not shown, tap “Restore purchases” on the
            subscription screen — with the same Apple ID or Google account you paid with.
          </li>
          <li>If the app says the payment failed, update your payment method in the App Store or Google Play.</li>
          <li>
            Refunds are handled by the stores under their own rules: <a href="https://support.apple.com/118223">Apple</a>,{" "}
            <a href="https://support.google.com/googleplay/answer/2479637?hl=en">Google Play</a>.
          </li>
        </ul>
      ),
    },
    {
      id: "data",
      title: "Your data and account",
      body: (
        <>
          <ul>
            <li>
              <strong>Get a copy of your data:</strong> tap your profile photo → “Personal details” → “Download a copy of my data”.
            </li>
            <li>
              <strong>Delete your account:</strong> tap your profile photo → “Delete account”. Your profile, plan, diary and photos are deleted
              for good. This does not cancel your subscription.
            </li>
            <li>
              <strong>Withdraw consent</strong> to the processing of your health data: “Personal details” → “Withdraw consent”. Without this
              data the app cannot calculate your plan, so your account is deleted too.
            </li>
            <li>
              If you can’t get into the app, write to <ContactEmail label="contact email" /> from the email address linked to your account, and
              we will help.
            </li>
          </ul>
          <p>
            What we collect and how long we keep it is explained in the <Link href="/en/privacy">Privacy Policy</Link>.
          </p>
        </>
      ),
    },
    {
      id: "accuracy",
      title: "Recognition accuracy",
      body: (
        <ul>
          <li>
            AI gives an <strong>estimate</strong>: the dish, portion weight and calories may differ from the real ones. Check the result and
            correct it by hand if needed.
          </li>
          <li>
            For a better result, take the photo in good light with the whole meal in the frame. For packaged food, scan the barcode or
            photograph the nutrition label.
          </li>
          <li>
            AIFit+ is not a medical service and does not check food for allergens — see the <Link href="/en/terms">Terms of Use</Link>.
          </li>
          <li>If the app keeps getting a dish wrong, tell us via “Contact us” — it helps us improve recognition.</li>
        </ul>
      ),
    },
    {
      id: "about",
      title: "Who runs AIFit+",
      body: (
        <p>
          <Fill value={LEGAL.operatorName.en} label="operator name" />, <Fill value={LEGAL.operatorAddress.en} label="postal address" />.
          Email: <ContactEmail label="contact email" />.
        </p>
      ),
    },
  ],
};
