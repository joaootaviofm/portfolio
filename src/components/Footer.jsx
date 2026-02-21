import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center relative z-10 mt-[150px] mb-[60px] px-4"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-10"
      >
        <span className="font-mono text-[#9C83FF]/45 text-[11px] mb-2 tracking-widest">
          // section_06
        </span>
        <h1 className="text-[35px] md:text-[42px] font-extrabold text-white tracking-wider">
          {t("footer.title")}
        </h1>
        <span className="tracking-[5px] text-[11px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          {t("footer.subtitle")}
        </span>
      </motion.div>

      {/* Terminal contact panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-[480px] rounded-xl overflow-hidden border border-[#9C83FF]/20 shadow-[0_0_50px_rgba(156,131,255,0.08)]"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f0f0f] border-b border-[#9C83FF]/12">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
          <span className="ml-4 font-mono text-[11px] text-[#9C83FF]/40">contact.sh — bash</span>
        </div>

        {/* Terminal body */}
        <div className="bg-[#0a0a0a]/85 p-6 space-y-4 font-mono text-sm">
          <p className="text-[#9C83FF]/35 text-[11px]">$ ./contact.sh --list-channels</p>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/joaootaviofm10/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-[#9C83FF]/35">&gt;</span>
            <FaLinkedin className="text-xl text-[#0A66C2]/70 group-hover:text-[#0A66C2] group-hover:drop-shadow-[0_0_8px_rgba(10,102,194,0.8)] transition-all duration-300" />
            <span className="text-[#E1E1E1]/60 group-hover:text-white transition-colors duration-300 text-[13px]">
              linkedin.com/in/joaootaviofm10
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            href="https://github.com/joaootaviofm/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-[#9C83FF]/35">&gt;</span>
            <FaGithub className="text-xl text-white/55 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300" />
            <span className="text-[#E1E1E1]/60 group-hover:text-white transition-colors duration-300 text-[13px]">
              github.com/joaootaviofm
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
            href="mailto:joaootaviofm@gmail.com"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="text-[#9C83FF]/35">&gt;</span>
            <MdEmail className="text-xl text-[#FF9051]/60 group-hover:text-[#FF9051] group-hover:drop-shadow-[0_0_8px_rgba(255,144,81,0.8)] transition-all duration-300" />
            <span className="text-[#E1E1E1]/60 group-hover:text-[#FF9051] transition-colors duration-300 text-[13px]">
              joaootaviofm@gmail.com
            </span>
          </motion.a>

          <div className="pt-2 border-t border-[#9C83FF]/10">
            <p className="text-[#9C83FF]/28 text-[11px]">
              &gt;_ <span className="cursor-blink text-[#9C83FF]/50">█</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
        className="font-mono text-[11px] text-[#9C83FF]/18 mt-8"
      >
        {t("footer.copyright")}
      </motion.p>
    </div>
  );
}
