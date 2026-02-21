import { motion } from "motion/react";
import { useLanguage } from "../i18n/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <div className="mt-[150px] z-10 relative pb-7 px-4">
      <div id="about" className="flex flex-col items-center justify-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-10"
        >
          <span className="font-mono text-[#9C83FF]/45 text-[11px] mb-2 tracking-widest">
            // section_02
          </span>
          <h1 className="font-extrabold text-white text-[42px] tracking-wider">{t("about.title")}</h1>
          <span className="tracking-[5px] text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            {t("about.subtitle")}
          </span>
        </motion.div>

        {/* Terminal panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[760px] rounded-xl overflow-hidden border border-[#9C83FF]/20 shadow-[0_0_50px_rgba(156,131,255,0.07)]"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-[#9C83FF]/12">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
            <span className="ml-4 font-mono text-[11px] text-[#9C83FF]/40">about_me.md — bash</span>
          </div>

          {/* Code-style content */}
          <div className="bg-[#0a0a0a]/85 p-6 md:p-8 font-mono text-[13px] space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="text-[#9C83FF]/25 select-none w-4 text-right shrink-0">1</span>
              <p className="text-[#E1E1E1]">
                <span className="text-[#FF9051]">const</span>{" "}
                <span className="text-[#9C83FF]">name</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-emerald-400">"João Otávio"</span>
                <span className="text-white">,</span>{" "}
                <span className="text-[#9C83FF]">age</span>{" "}
                <span className="text-white">=</span>{" "}
                <span className="text-orange-400">20</span>
                <span className="text-white">;</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="text-[#9C83FF]/25 select-none w-4 text-right shrink-0">2</span>
              <p className="text-[#9C83FF]/45">
                {t("about.comment")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="text-[#9C83FF]/25 select-none w-4 text-right shrink-0">3</span>
              <p className="text-[#E1E1E1]/75 font-inter text-[14px] max-w-[620px]">
                {t("about.line3")}{" "}
                <span className="text-[#FF9051] font-mono">n8n</span>,{" "}
                <span className="text-[#FF9051] font-mono">OpenAI</span>,{" "}
                <span className="text-[#FF9051] font-mono">LangChain</span>, and custom APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.75 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="text-[#9C83FF]/25 select-none w-4 text-right shrink-0">4</span>
              <p className="text-[#E1E1E1]/75 font-inter text-[14px] max-w-[620px]">
                {t("about.line4")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <span className="text-[#9C83FF]/25 select-none w-4 text-right shrink-0">5</span>
              <p>
                <span className="text-[#FF9051]">return</span>{" "}
                <span className="text-emerald-400">
                  "{t("about.returnValue")}"
                </span>
                <span className="text-white">;</span>
              </p>
            </motion.div>

            <div className="flex gap-4 pt-1">
              <span className="text-[#9C83FF]/25 select-none w-4 text-right shrink-0"> </span>
              <p className="text-[#9C83FF]/35">
                &gt;_ <span className="cursor-blink text-[#9C83FF]/60">█</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
