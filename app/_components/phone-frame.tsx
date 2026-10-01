import type { ReactNode } from "react";

/** iPhone-like shell; the screen is the app's background colour */
export const PhoneFrame = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div
    className={`relative aspect-[9/19.2] w-[290px] rounded-[48px] border border-line bg-ink-deep p-2.5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7),inset_0_0_0_1.5px_rgba(238,240,255,0.06)] ${className ?? ""}`}
  >
    <div className="relative h-full overflow-hidden rounded-[39px] bg-ink">
      <div className="absolute top-2.5 left-1/2 z-30 h-[26px] w-[92px] -translate-x-1/2 rounded-full bg-black" />
      <div className="absolute inset-x-0 top-0 z-20 flex h-11 items-center justify-between px-7 text-[12px] font-semibold">
        <span>9:41</span>
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-4 rounded-[3px] border border-text/70 p-px">
            <span className="block h-full w-3/4 rounded-[1px] bg-text" />
          </span>
        </span>
      </div>
      {children}
    </div>
  </div>
);
