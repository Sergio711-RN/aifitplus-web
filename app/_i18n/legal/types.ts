import type { ReactNode } from "react";
import type { ILegalSection } from "../../_components/legal-page";

/** One legal document in one language */
export interface ILegalDocument {
  title: string;
  lead: ReactNode;
  sections: ILegalSection[];
}
