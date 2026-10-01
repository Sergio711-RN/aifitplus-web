import { AppMark } from "./app-mark";

export const Footer = () => (
  <footer className="border-t border-line/70 px-5 py-10 md:px-10">
    <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 text-[14px] text-text-3 md:flex-row md:items-center">
      <div className="flex items-center gap-2">
        <AppMark size={24} animated={false} />
        <span className="font-extrabold text-text">
          AIFit<span className="text-apricot">+</span>
        </span>
        <span className="ml-2">© 2026</span>
      </div>
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        <a href="#" className="transition-colors hover:text-text">
          Политика конфиденциальности
        </a>
        <a href="#" className="transition-colors hover:text-text">
          Условия использования
        </a>
        <a href="#" className="transition-colors hover:text-text">
          English
        </a>
      </nav>
    </div>
  </footer>
);
