import { Fragment, type ReactNode } from "react";
import { Fill, type ILegalSection } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";
import { ContactEmail } from "./contact-email";
import type { ILegalDocument } from "./types";

// Consumer Health Data Privacy Policy — Washington My Health My Data Act (RCW 19.373) and Nevada SB 370.
// English only. The Washington Attorney General says the policy may not contain anything the Act does not require:
// no app description, promotion or links beyond contacts, recipients and the attorneys general.
// Text — `../aifitplus/docs/privacy/CHD-POLICY_draft_2026-10-26.md`, «Текст политики (EN)».

/** On phones each row becomes a card, with the column name above each cell (`.legal table` in `globals.css`) */
const Table = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <table>
    <thead>
      <tr>
        {head.map((cell) => (
          <th key={cell} scope="col">
            {cell}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => (
        <tr key={index}>
          {row.map((cell, column) => (
            <td key={head[column]} data-label={head[column]}>
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

/** The address as its own text; in a narrow column it wraps only after a slash */
const Url = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {href.split(/(?<=\/)(?!\/)/).map((part, index) => (
      <Fragment key={index}>
        {index > 0 && <wbr />}
        {part}
      </Fragment>
    ))}
  </a>
);

const SECTIONS: ILegalSection[] = [
  {
    id: "collect",
    title: "Consumer health data we collect and how we use it",
    body: (
      <>
        <Table
          head={["Category", "Examples", "How we use it"]}
          rows={[
            [
              "Body and health profile",
              "Sex, age, height, weight and weigh-in history, target weight and pace, activity level, diet type, what you want to improve",
              "To calculate your daily calorie, macronutrient and water targets and show your progress toward your goal",
            ],
            [
              "Plan settings",
              "A calorie target you set yourself, macronutrient split, your own protein and fat targets",
              "To calculate your daily targets the way you chose",
            ],
            [
              "Food diary",
              "Photos of your meals (including an optional side view), meal descriptions you type or dictate (we receive text only, never a voice recording), barcodes you scan, photos of nutrition labels, the dishes and ingredients recognised with their weight, calories, protein, fat, carbohydrates and estimated water content, meal times, meals you save, products read from labels",
              "To keep your food diary, count what you eat and drink, and offer your own saved and frequent meals",
            ],
            [
              "Water",
              "Amounts and times of water you log, your water target, glass size and day hours, whether drinks from your diary count toward water",
              "To track how much you drink against your water target",
            ],
            [
              "Information derived from the above",
              "Daily targets, body mass index, an estimate of your actual energy expenditure, weekly reviews, progress toward your goal",
              "To show them to you in the app",
            ],
            ["Messages to support", "Any health information you choose to include in a message", "To answer you"],
          ]}
        />
        <p>
          We use consumer health data only to provide the features you request in the app. We do not sell it, do not use it for advertising,
          and do not use it to train artificial intelligence models.
        </p>
      </>
    ),
  },
  {
    id: "sources",
    title: "Where we get it",
    body: (
      <ul>
        <li>
          <strong>From you</strong>: the answers, entries, photos and messages you give the app.
        </li>
        <li>
          <strong>Derived by the app and our servers</strong> from what you give us (targets, body mass index, estimates).
        </li>
        <li>
          <strong>From AI recognition</strong>: Google’s Gemini model estimates dishes, portions, nutrients and water content from your photos
          and descriptions on our behalf, only after you allow it in the app.
        </li>
      </ul>
    ),
  },
  {
    id: "sharing",
    title: "Consumer health data we share and with whom",
    body: (
      <>
        <p>
          We do not sell consumer health data and do not share it with third parties for their own purposes. We disclose it only to service
          providers that process it on our behalf under contract and only to run the app, and to public authorities where the law requires it.
          We have no affiliates.
        </p>
        <Table
          head={["Recipient", "What it receives", "Why", "Contact"]}
          rows={[
            [
              "Supabase Pte. Ltd.",
              "All consumer health data listed in section 1 (stored in the European Union, Ireland)",
              "Database, sign-in and file storage",
              <Url key="url" href="https://supabase.com/privacy" />,
            ],
            [
              "Google LLC (Gemini API)",
              "Meal photos, label photos, meal descriptions, your answers to follow-up questions, ingredient edits",
              "AI recognition of food and nutrition labels, only after your permission",
              <Url key="url" href="https://policies.google.com/privacy" />,
            ],
            [
              "Google LLC (speech recognition)",
              "Your voice while you dictate a meal, only on Android phones that cannot recognise speech on the device",
              "Turning speech into text",
              <Url key="url" href="https://policies.google.com/privacy" />,
            ],
            [
              "Resend (Plus Five Five, Inc.)",
              "Messages you send to support",
              "Delivering your message to our mailbox",
              <Url key="url" href="https://resend.com/legal/privacy-policy" />,
            ],
            [
              "Open Food Facts association",
              "The barcode number of a product you scan, sent directly from your phone",
              "Looking up the product",
              <Url key="url" href="https://world.openfoodfacts.org/privacy" />,
            ],
          ]}
        />
      </>
    ),
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>You can:</p>
        <ul>
          <li>
            <strong>Confirm and access</strong> — find out whether we collect, share or sell your consumer health data and get a copy of it,
            together with the list of recipients and their contact information in section 3. In the app: tap your profile photo → “Personal
            details” → “Download a copy of my data”.
          </li>
          <li>
            <strong>Withdraw consent</strong> — to the processing of your health data: “Personal details” → “Withdraw consent”. Without this
            data the app cannot work, so withdrawing consent deletes your account. You can separately withdraw permission for AI recognition:
            “Personal details” → “AI recognition”; your account and diary stay.
          </li>
          <li>
            <strong>Delete</strong> — tap your profile photo → “Delete account”. Your consumer health data is deleted immediately and disappears
            from our hosting provider’s backups within {LEGAL.backupRetentionDays} days. We tell our service providers to delete it as well.
          </li>
        </ul>
        <p>
          You can also send any request to <ContactEmail label="contact email" /> from the email address linked to your account. We may ask
          you to sign in to the app to confirm that the request is yours; we will not ask you to create an account. Requests are free up to
          twice in 12 months. We respond without undue delay and within 45 days; if we need up to 45 more days, we will tell you why within
          the first 45 days. We will not treat you differently for exercising these rights.
        </p>
      </>
    ),
  },
  {
    id: "appeals",
    title: "Appeals",
    body: (
      <>
        <p>
          If we decline your request, you can appeal: reply to our decision or write to <ContactEmail label="contact email" /> with the
          subject “Appeal”. Within 45 days of receiving your appeal, we will tell you in writing what we did or did not do and why. If we deny
          your appeal, you can contact:
        </p>
        <ul>
          <li>
            Washington State Office of the Attorney General — <Url href="https://www.atg.wa.gov/file-complaint" />
          </li>
          <li>
            Nevada Office of the Attorney General — <Url href="https://ag.nv.gov/Complaints/File_Complaint/" />
          </li>
        </ul>
      </>
    ),
  },
];

export const healthDataEn: ILegalDocument = {
  title: "Consumer Health Data Privacy Policy",
  lead: (
    <>
      <p>
        This policy applies to residents of Washington and Nevada and to anyone whose consumer health data is collected in Washington. It
        covers the AIFit+ app for iOS and Android.
      </p>
      <p className="mt-4 [&_a]:text-apricot [&_a]:underline-offset-4 [&_a:hover]:underline">
        AIFit+ is operated by Serhii Durytskyi, individual entrepreneur, <Fill value={LEGAL.operatorAddress.en} label="postal address" />{" "}
        (“we”). Contact: <ContactEmail label="contact email" />.
      </p>
    </>
  ),
  sections: SECTIONS,
};

/** Title and description for search engines and link previews; the page has no other languages, so not in the dictionaries */
export const HEALTH_DATA_META = {
  title: "Consumer Health Data Privacy Policy — AIFit+",
  description:
    "This policy applies to residents of Washington and Nevada and to anyone whose consumer health data is collected in Washington.",
};
