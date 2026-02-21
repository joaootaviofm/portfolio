import { useLanguage } from "../i18n/LanguageContext";

function USFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 336" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="336" fill="#B22234" />
      <g fill="#FFF">
        <rect y="25.85" width="512" height="25.85" />
        <rect y="77.54" width="512" height="25.85" />
        <rect y="129.23" width="512" height="25.85" />
        <rect y="180.92" width="512" height="25.85" />
        <rect y="232.62" width="512" height="25.85" />
        <rect y="284.31" width="512" height="25.85" />
      </g>
      <rect width="204.8" height="180.92" fill="#3C3B6E" />
    </svg>
  );
}

function BRFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 512 336" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="336" fill="#009739" />
      <polygon points="256,24 488,168 256,312 24,168" fill="#FEDD00" />
      <circle cx="256" cy="168" r="80" fill="#012169" />
      <path d="M176,168 Q256,128 336,168 Q256,148 176,168Z" fill="#FFF" />
    </svg>
  );
}

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[#9C83FF]/25 hover:border-[#9C83FF]/50 hover:bg-[#9C83FF]/5 transition-all duration-300 font-mono text-xs"
      aria-label="Toggle language"
    >
      <USFlag className={`w-5 h-3.5 rounded-[1px] transition-opacity duration-200 ${language === "en" ? "opacity-100" : "opacity-40"}`} />
      <span className="text-[#9C83FF]/30">/</span>
      <BRFlag className={`w-5 h-3.5 rounded-[1px] transition-opacity duration-200 ${language === "pt-br" ? "opacity-100" : "opacity-40"}`} />
    </button>
  );
}
