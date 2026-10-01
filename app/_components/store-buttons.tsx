import type { ReactNode } from "react";
import { STORE_LINKS } from "../_lib/content";
import { Magnetic } from "./magnetic";

const AppleLogo = () => (
  <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
    <path
      fill="currentColor"
      d="M16.37 12.7c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.27-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.77-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.65zM14.1 5.94c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.67 1.37-.58.67-1.09 1.75-.96 2.79 1.02.08 2.06-.52 2.69-1.27z"
    />
  </svg>
);

const PlayLogo = () => (
  <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
    <path fill="var(--color-mint)" d="M4.2 2.6 13.6 12l-9.4 9.4c-.4-.2-.7-.7-.7-1.2V3.8c0-.5.3-1 .7-1.2z" />
    <path fill="var(--color-apricot)" d="m16.8 8.8-3.2 3.2 3.2 3.2 3.6-2c.9-.5.9-1.8 0-2.3z" />
    <path fill="var(--color-lilac)" d="M4.2 2.6c.4-.2.9-.2 1.3.1l11.3 6.1-3.2 3.2z" />
    <path fill="var(--color-rose)" d="m13.6 12 3.2 3.2-11.3 6.1c-.4.3-.9.3-1.3.1z" />
  </svg>
);

const StoreButton = ({ href, top, bottom, icon }: { href: string; top: string; bottom: string; icon: ReactNode }) => (
  <Magnetic>
    <a
      href={href}
      className="group flex h-14 items-center gap-3 rounded-2xl border border-line bg-surface-raised/80 px-5 backdrop-blur transition-colors hover:border-apricot/60 hover:bg-surface-muted"
    >
      {icon}
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] text-text-3">{top}</span>
        <span className="text-[17px] font-semibold">{bottom}</span>
      </span>
    </a>
  </Magnetic>
);

export const StoreButtons = ({ className }: { className?: string }) => (
  <div className={`flex flex-wrap gap-3 ${className ?? ""}`}>
    <StoreButton href={STORE_LINKS.appStore} top="Загрузите в" bottom="App Store" icon={<AppleLogo />} />
    <StoreButton href={STORE_LINKS.googlePlay} top="Доступно в" bottom="Google Play" icon={<PlayLogo />} />
  </div>
);
