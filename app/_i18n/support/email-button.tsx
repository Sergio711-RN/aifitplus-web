import { Fill } from "../../_components/legal-page";
import { LEGAL } from "../../_lib/legal";

/** Support address from `LEGAL` as a button under the page lead, or a highlighted «fill me» mark with `label` */
export const EmailButton = ({ label }: { label: string }) =>
  LEGAL.contactEmail ? (
    <a
      href={`mailto:${LEGAL.contactEmail}`}
      className="mt-6 inline-flex rounded-full bg-apricot px-6 py-3 text-[17px] font-bold text-ink transition-colors hover:bg-apricot-light"
    >
      {LEGAL.contactEmail}
    </a>
  ) : (
    <Fill value={null} label={label} />
  );
