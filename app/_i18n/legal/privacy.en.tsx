import Link from "next/link";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

const SECTIONS: ILegalSection[] = [
  {
    id: "operator",
    title: "Who processes your data",
    body: (
      <>
        <p>
          The data controller is <Fill value={LEGAL.operatorName.en} label="operator name" />, address:{" "}
          <Fill value={LEGAL.operatorAddress.en} label="postal address" />. In this policy, “we” means the controller.
        </p>
        <p>
          This policy covers the AIFit+ mobile app for iOS and Android and the aifitplus.com website. For questions about your data, write to{" "}
          <ContactEmail label="contact email" />.
        </p>
      </>
    ),
  },
  {
    id: "data",
    title: "What data we collect",
    body: (
      <>
        <h3>Account</h3>
        <ul>
          <li>
            Email address — to sign in. You can sign in with a one-time code sent to your email, with your Apple ID (on iPhone) or with your
            Google account.
          </li>
          <li>
            If you sign in with Apple or Google, we receive your email address from them and, if you allow it, your name. Apple lets you hide
            your email — then we receive only a forwarding address. We do not take your profile photo from Google. After you sign in with
            Apple, we keep a token issued by Apple so that we can revoke the app’s access to your Apple ID when you delete your account.
          </li>
          <li>Name, interface language and profile photo — if you provide them.</li>
        </ul>
        <h3>Health and body data</h3>
        <p>
          Your answers at first launch: sex, age, height, weight and weigh-in history, target weight and pace, activity level, diet
          type and what you want to improve. This is a special category of data: it reaches our server only
          after you give separate consent at sign-up. Until then, your answers are stored only on your device.
        </p>
        <h3>Food diary</h3>
        <ul>
          <li>Photos of meals that you take or pick from your gallery, including an optional side view.</li>
          <li>
            Meal descriptions that you type or dictate. Speech is turned into text while you speak; we save only the text, not the recording
            of your voice.
          </li>
          <li>
            Barcodes of products that you scan or type in. If a product is not in the database, you can photograph its nutrition label: the AI
            reads the numbers, and we save the product in your account (name, brand, nutrition per 100 g, package and serving weight) so the
            next scan finds it. The label photo itself is not saved.
          </li>
          <li>Recognition results: dish, ingredients, portion weight, calories, protein, fat, carbs, your edits and answers to follow-up questions.</li>
          <li>Meals you add to “Saved”.</li>
          <li>Time and type of meal.</li>
        </ul>
        <h3>Subscription</h3>
        <p>
          Subscription status, plan, trial and renewal dates. Payments are taken by the App Store and Google Play — we do not receive your card
          number or payment details.
        </p>
        <h3>Messages to support</h3>
        <p>
          If you write to us from the app, we receive the topic, the email address for our reply, the text of your message, the app version,
          your phone’s operating system and the interface language. The message is saved in your account and sent to our mailbox.
        </p>
        <h3>Settings and technical data</h3>
        <ul>
          <li>Reminder settings and units of measurement.</li>
          <li>An internal user ID and an encrypted session key on your device.</li>
          <li>A record of each request to the AI: its type, time, outcome and size. We need it for the daily limit and to know what the service costs.</li>
          <li>The date you allowed AI recognition, or a mark that you have not allowed it.</li>
          <li>Server technical logs: IP address, time and type of request. We need them to run and protect the service.</li>
          <li>
            Crash and error reports: internal user ID, device model, operating system, app version, the screen where the error happened and the
            app’s last technical steps before it. Reports do not include your email, your IP address or screenshots.
          </li>
          <li>
            On your phone, the app keeps a copy of the most recently loaded diary and statistics, so they can be seen offline, and the products
            found by barcode. All of this is erased when you sign out.
          </li>
        </ul>
        <h3>Website</h3>
        <p>
          Like any web server, the website host sees your IP address and browser type in its technical logs. The website remembers the
          language you pick in the NEXT_LOCALE cookie for a year, and your answer about statistics in your browser’s storage. Both are needed
          for the website to work and do not require consent.
        </p>
        <p>
          If you click “Accept” in the cookie banner, the website loads Google Analytics. It sets the _ga and _ga_* cookies with a random
          browser identifier for up to 2 years and collects which pages you open, where you came from, your device and browser type,
          language and approximate location (country, city). Google Analytics does not store IP addresses. Detailed data is kept in Google
          Analytics for 2 months; after that only aggregate statistics remain. We see aggregate reports and do not link them to your app
          account. Google Analytics advertising features are turned off.
        </p>
        <p>Without your consent Google Analytics is not loaded. You can change your mind at any time under “Cookie settings” at the bottom of the page.</p>
      </>
    ),
  },
  {
    id: "purposes",
    title: "Why we process data and on what legal basis",
    body: (
      <ul>
        <li>
          <strong>Running the app</strong>: sign-in, calculating your daily targets, finding products by barcode, the diary, syncing between
          devices, replying to your messages. Legal basis: our contract with you (<Link href="/en/terms">Terms of Use</Link>), Art. 6(1)(b)
          GDPR.
        </li>
        <li>
          <strong>Recognising meals and nutrition labels</strong> with AI: we send a photo, a description or a label photo to Google Gemini
          only after you allow it in the app. Legal basis: your consent, Art. 6(1)(a) GDPR, and, to the extent a request reveals information
          about your health, your explicit consent, Art. 9(2)(a) GDPR. You can withdraw it at any time: tap your profile photo → “Personal
          details” → “AI recognition”. Without it, you can still add products found by barcode and meals from “Saved”, change the weight of
          ingredients and delete entries in your diary.
        </li>
        <li>
          <strong>Health data</strong> is processed only to calculate your plan and keep your diary. Legal basis: your separate explicit
          consent, which you give by ticking a box at sign-up, Art. 9(2)(a) GDPR.
        </li>
        <li>
          <strong>Subscription</strong>: checking access to paid features. Legal basis: contract, Art. 6(1)(b) GDPR.
        </li>
        <li>
          <strong>Security and stability</strong>: protection against hacking and abuse, such as a daily limit on AI requests; error reports to
          find and fix bugs. Legal basis: our legitimate interest in a working service, Art. 6(1)(f) GDPR.
        </li>
        <li>
          <strong>Website statistics</strong>: how many people visit the website and where they come from, so we can improve it. Legal
          basis: your consent in the cookie banner, Art. 6(1)(a) GDPR; you can withdraw it under “Cookie settings” at the bottom of the page.
        </li>
        <li>
          <strong>Reminders</strong> are scheduled on your phone and shown only if you turn them on and allow notifications in your system
          settings. Your reminder settings are saved in your account so that they carry over to another device.
        </li>
      </ul>
    ),
  },
  {
    id: "no-sale",
    title: "What we do not do",
    body: (
      <ul>
        <li>We do not sell or rent out your data.</li>
        <li>We do not show ads or share data with ad networks.</li>
        <li>We do not publish your meal photos or show them to other users.</li>
        <li>We do not make decisions based on your data that have legal effects for you.</li>
      </ul>
    ),
  },
  {
    id: "ai",
    title: "How recognition works",
    body: (
      <>
        <p>
          The photo is compressed on your device and uploaded to private storage that only your account can access. The server sends it to an
          artificial intelligence model, receives the meal breakdown and saves the result to your diary. Meal descriptions that you type or
          dictate and photos of nutrition labels reach the model the same way.
        </p>
        <p>
          The model is Gemini by Google. Google processes the request on our behalf and only to answer it. We use the paid Gemini API: under its
          terms, request content is not used to train Google’s models; Google may keep it for a limited time solely to detect abuse.
        </p>
        <p>
          Before the first request, the app shows what will be sent to Google and asks for your permission. Only the photo, the description
          or the label photo, your answers to follow-up questions, your ingredient edits and the interface language (so that the answer
          comes back in it) are sent; your name, email, weight and other profile data are not. We record the date you gave permission. If
          you withdraw it, nothing more is sent to Gemini, your diary stays, and the app will ask again the next time you want food
          recognised.
        </p>
        <p>
          The original photo and the side view are deleted from storage 30 days after they are taken; the diary keeps a small preview for as long
          as the meal is in it. A meal that could not be analysed is deleted together with its photos within a day.
        </p>
        <p>
          Calorie and nutrient estimates are approximate. Check the result and correct it — your edits are saved in the diary.
        </p>
      </>
    ),
  },
  {
    id: "processors",
    title: "Who we share data with",
    body: (
      <>
        <p>
          Only with providers the service cannot work without and, if you agree, a website statistics service. Each one receives the minimum
          data needed for its task:
        </p>
        <ul>
          <li>
            <strong>Supabase</strong> — database, sign-in and file storage. All account data, the diary, photos, messages to support. Servers in
            Ireland (EU).
          </li>
          <li>
            <strong>Google</strong> — recognition of meals and nutrition labels (Gemini API). Photos of meals and labels, meal descriptions,
            answers to follow-up questions and ingredient edits. Google LLC, USA.
          </li>
          <li>
            <strong>Google</strong> — speech recognition on Android phones that cannot recognise speech on the device. While you dictate,
            the recording of your voice is processed by Google’s speech recognition service: on the phone if the Google language pack is
            downloaded, otherwise on Google’s servers. Google returns the text; the recording is not passed to us. On iPhone and on Android
            phones with on-device recognition, your voice does not leave the phone. Google LLC, USA.
          </li>
          <li>
            <strong>Open Food Facts</strong> — the product database. When you scan a barcode, the app looks the product up in Open Food Facts
            directly from your phone: Open Food Facts receives the barcode number and, like any website, your IP address. We do not send it your
            account data. Open Food Facts processes requests under its own policy. Open Food Facts association, France.
          </li>
          <li>
            <strong>Resend</strong> — sending sign-in code emails and delivering your messages to support to our mailbox. Email address, email
            language, the text of the message. USA.
          </li>
          <li>
            <strong>RevenueCat</strong> — subscription management. Internal user ID and purchase history from the store. USA.
          </li>
          <li>
            <strong>Sentry</strong> — crash and error reports (the data is listed under “Settings and technical data”). Functional Software, Inc.,
            USA; data is stored in the EU (Germany).
          </li>
          <li>
            <strong>Google</strong> — website statistics (Google Analytics), only with your consent. Browser identifier from the cookie, pages
            viewed, device type, approximate location. Google Ireland Limited; data may be processed in the USA.
          </li>
          <li>
            <strong>Apple and Google</strong> — subscription payments and, if you choose it, sign-in with your Apple ID or Google account. They
            process data under their own policies as independent controllers.
          </li>
        </ul>
        <p>
          We also disclose data to public authorities where the law requires it, and only to the extent of the request.
        </p>
      </>
    ),
  },
  {
    id: "transfer",
    title: "Where data is stored",
    body: (
      <>
        <p>
          Our main storage is in the European Union (Ireland), error reports are stored in Germany, and the Open Food Facts product database is in
          France. Recognition of photos, descriptions and labels, speech recognition on some Android phones, emails, subscription management and
          website statistics are handled by providers in the USA, so some data is transferred outside the European Economic Area.
        </p>
        <p>
          These transfers rely on the European Commission’s adequacy decision (EU–US Data Privacy Framework) for providers certified under it,
          or on the European Commission’s standard contractual clauses. Data is transferred only for the purposes set out in this policy.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <ul>
        <li>Account data, the diary, saved meals and products read from labels — for as long as you have an account.</li>
        <li>
          Original meal photos and side views — 30 days; the preview in the diary — until you delete the meal or your account. Label photos are
          not saved.
        </li>
        <li>Messages to support — until you delete your account; the email in our mailbox — for as long as we need it to answer you.</li>
        <li>Error reports — no longer than 90 days.</li>
        <li>
          When you delete your account, your profile, plan, weight history, diary, photos and messages to support are deleted immediately, and so
          is your customer record at RevenueCat; if you signed in with Apple, we revoke the app’s access to your Apple ID. The data disappears
          from the hosting provider’s backups within {LEGAL.backupRetentionDays} days.
        </li>
        <li>Answers entered before sign-up and the copies of data on your phone are erased when you sign out.</li>
        <li>The App Store and Google Play keep purchase records for as long as payment accounting laws require.</li>
      </ul>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <ul>
          <li>
            <strong>Find out</strong> what data we hold and get a copy of it. In the app: tap your profile photo → “Personal details” →
            “Download a copy of my data”.
          </li>
          <li>
            <strong>Take</strong> your data in a machine-readable format to move it to another service.
          </li>
          <li>
            <strong>Correct</strong> your data — most fields can be edited right in the app.
          </li>
          <li>
            <strong>Delete</strong> your account and all your data: in the app, tap your profile photo → “Delete account”. This does not
            cancel your subscription — cancel it in the App Store or Google Play settings.
          </li>
          <li>
            <strong>Withdraw consent</strong> to the processing of your health data. Without this data the app cannot calculate your plan, so
            withdrawing consent means deleting your account: “Personal details” → “Withdraw consent”.
          </li>
          <li>
            <strong>Withdraw permission</strong> for AI recognition: “Personal details” → “AI recognition”. Your account and diary stay.
          </li>
          <li>
            <strong>Object</strong> to processing or restrict it.
          </li>
          <li>
            <strong>Complain</strong> to the data protection authority in the country where you live or work.
          </li>
        </ul>
        <p>
          Send requests to <ContactEmail label="contact email" /> from the email address linked to your account. We will reply within one month,
          usually sooner.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect data",
    body: (
      <ul>
        <li>All connections are encrypted (HTTPS/TLS).</li>
        <li>Database access rules: each account sees only its own records and its own files.</li>
        <li>Photos are kept in private storage, and links to them are not public.</li>
        <li>Secret service keys are stored only on the server, not in the app.</li>
        <li>The session key on your phone is encrypted; the encryption key is kept in the system’s secure storage (Keychain or Keystore).</li>
        <li>Sign-in uses a one-time code, Apple ID or a Google account — there are no passwords to steal.</li>
      </ul>
    ),
  },
  {
    id: "children",
    title: "Age",
    body: (
      <p>
        You can use AIFit+ from the age of {LEGAL.minAge}. The app asks your age during setup; if you are younger, the app closes on that
        device, your answers are erased from the phone, and if you have already signed in, the account is deleted. Answers given before
        sign-up never reach our server, so we do not receive a minor’s health data. We do not knowingly collect children’s data. If you find
        out that a child has created an account, write to us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        If we change what data we collect or who we share it with, we will tell you in the app in advance. The effective date is shown at the
        top of this document.
      </p>
    ),
  },
];

export const privacyEn: ILegalDocument = {
  title: "Privacy Policy",
  lead: (
    <p>
      AIFit+ counts the calories and nutrients in what you eat. To do that, it needs data about your body and your diet. Here is a short, to-the-point
      summary: what we collect, why, where we store it and how to delete it all.
    </p>
  ),
  sections: SECTIONS,
};
