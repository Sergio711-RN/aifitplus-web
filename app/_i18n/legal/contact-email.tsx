import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";

/** Contact address from `LEGAL`, or a highlighted «fill me» mark with `label` in the document's language */
export const ContactEmail = ({ label }: { label: string }) =>
  LEGAL.contactEmail ? <a href={`mailto:${LEGAL.contactEmail}`}>{LEGAL.contactEmail}</a> : <Fill value={null} label={label} />;
