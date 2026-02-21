import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#9C83FF]/25 hover:border-[#9C83FF]/50 hover:bg-[#9C83FF]/5 transition-all duration-300 font-mono text-xs"
      aria-label="Toggle language"
    >
      <span className={`transition-opacity duration-200 ${language === "en" ? "opacity-100" : "opacity-40"}`}>
        🇺🇸
      </span>
      <span className="text-[#9C83FF]/30">/</span>
      <span className={`transition-opacity duration-200 ${language === "pt-br" ? "opacity-100" : "opacity-40"}`}>
        🇧🇷
      </span>
    </button>
  );
}
