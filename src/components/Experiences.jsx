import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const experiencesMeta = [
  {
    id: "0x01",
    company: "Deer Designer",
    companyUrl: "https://www.linkedin.com/company/deerdesigner",
  },
];

export default function Experiences() {
  const { t } = useLanguage();
  const translatedItems = t("experiences.items");

  const experiences = experiencesMeta.map((meta, i) => ({
    ...meta,
    ...translatedItems[i],
  }));

  return (
    <div
      id="experience"
      className="mt-[150px] relative z-10 text-white flex flex-col justify-center items-center px-4"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <span className="font-mono text-[#9C83FF]/45 text-[11px] mb-2 tracking-widest">
          // section_03
        </span>
        <h1 className="text-[42px] font-extrabold tracking-wider">{t("experiences.title")}</h1>
        <span className="tracking-[5px] text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          {t("experiences.subtitle")}
        </span>
      </motion.div>

      {/* Experience cards */}
      <div className="w-full max-w-[1000px]">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="rounded-xl overflow-hidden border border-[#9C83FF]/18 hover:border-[#9C83FF]/40 hover:shadow-[0_0_35px_rgba(156,131,255,0.12)] transition-all duration-350"
          >
            {/* Terminal title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0f0f0f] border-b border-[#9C83FF]/12">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/55" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/55" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/55" />
                <span className="ml-3 font-mono text-[10px] text-[#9C83FF]/38">
                  {exp.id}_{exp.company.toLowerCase().replace(/\s/g, "_")}.sh
                </span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded border text-emerald-400 border-emerald-400/35 bg-emerald-400/5">
                {exp.status}
              </span>
            </div>

            {/* Card content */}
            <div className="bg-[#0a0a0a]/85 p-6">
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                <div>
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-poppins font-extrabold text-[18px] md:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] hover:opacity-80 transition-opacity duration-200"
                  >
                    {exp.company}
                  </a>
                  <p className="font-mono text-[13px] text-white/70 mt-0.5">{exp.role}</p>
                </div>
                <span className="font-mono text-[11px] text-[#9C83FF]/50 shrink-0">{exp.period}</span>
              </div>

              <div className="border-t border-[#9C83FF]/10 mb-5" />

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {exp.highlights.map((block, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + 0.08 * i }}
                    viewport={{ once: true }}
                  >
                    <p className="font-mono text-[10px] text-[#9C83FF] tracking-wider mb-2">
                      &gt;_ {block.category}
                    </p>
                    <ul className="space-y-1.5">
                      {block.points.map((point, j) => (
                        <li
                          key={j}
                          className="font-mono text-[11px] md:text-[12px] text-[#666] leading-relaxed flex gap-2"
                        >
                          <span className="text-[#FF9051]/50 shrink-0">→</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
