import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const projectsMeta = [
  { id: "0x01", status: "IN_DEV" },
  { id: "0x02", status: "ACTIVE" },
  { id: "0x03", status: "ACTIVE" },
  { id: "0x04", status: "ACTIVE" },
  { id: "0x05", status: "ACTIVE" },
];

export default function Projects() {
  const { t } = useLanguage();
  const translatedItems = t("projects.items");

  const projects = projectsMeta.map((meta, i) => ({
    ...meta,
    ...translatedItems[i],
  }));

  const statusStyle = (status) =>
    status === "IN_DEV"
      ? "text-yellow-400 border-yellow-400/35 bg-yellow-400/5"
      : "text-emerald-400 border-emerald-400/35 bg-emerald-400/5";

  return (
    <div
      id="projects"
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
          // section_05
        </span>
        <h1 className="text-[42px] font-extrabold tracking-wider">{t("projects.title")}</h1>
        <span className="tracking-[5px] text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          {t("projects.subtitle")}
        </span>
      </motion.div>

      {/* Project grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full max-w-[1000px]">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className={`flex flex-col rounded-xl overflow-hidden border border-[#9C83FF]/18 hover:border-[#9C83FF]/40 hover:shadow-[0_0_35px_rgba(156,131,255,0.12)] transition-all duration-350 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            {/* Terminal title bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0f0f0f] border-b border-[#9C83FF]/12">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500/55" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/55" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/55" />
                <span className="ml-3 font-mono text-[10px] text-[#9C83FF]/38">
                  {project.id}_
                  {project.projectName
                    .toLowerCase()
                    .replace(/\s/g, "_")
                    .replace(/[^a-z_]/g, "")
                    .slice(0, 22)}
                  .sh
                </span>
              </div>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 rounded border ${statusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>

            {/* Card content */}
            <div className="flex-1 bg-[#0a0a0a]/85 p-6">
              <h3 className="font-poppins font-extrabold text-[16px] md:text-[18px] mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/65">
                {project.projectName}
              </h3>
              <p className="font-mono text-[11px] md:text-[12px] text-[#666] whitespace-pre-line leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
