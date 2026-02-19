import me from "../assets/me.webp";
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center text-white mt-[130px] px-4"
    >
      {/* Terminal window around profile image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-8"
      >
        <div className="border border-[#9C83FF]/35 rounded-xl p-1 shadow-[0_0_40px_rgba(156,131,255,0.18),inset_0_0_30px_rgba(156,131,255,0.04)]">
          {/* Window title bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#9C83FF]/15 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/65" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/65" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/65" />
            <span className="ml-3 font-mono text-[10px] text-[#9C83FF]/45">profile.exe</span>
          </div>
          {/* Image */}
          <div className="overflow-hidden w-[200px] h-[200px] rounded-lg bg-[#1A1A1A]">
            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              src={me}
              width={200}
              height={200}
              alt="João Otávio"
              className="object-cover w-full h-full object-top"
            />
          </div>
        </div>
        {/* Corner brackets */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#9C83FF]" />
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#9C83FF]" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#FF9051]" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF9051]" />
      </motion.div>

      {/* System status line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="font-mono text-[11px] text-[#9C83FF]/45 mb-5 flex flex-wrap justify-center items-center gap-3"
      >
        <span className="text-emerald-400">[ONLINE]</span>
        <span>USER: joao_otavio</span>
        <span>COMPANY: deer_designer</span>
      </motion.div>

      <div className="z-10 flex flex-col items-center">
        {/* Name with glitch CSS animation */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glitch-text font-bold text-[50px] md:text-[63px] mb-[-8px] tracking-tight"
        >
          João Otávio
        </motion.h1>

        {/* Role with typing cursor */}
        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-mono text-[18px] md:text-[21px] font-medium text-[#9C83FF]/65 mt-4"
        >
          &gt;_ AI &amp; Automation{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] font-bold">
            Specialist
          </span>
          <span className="cursor-blink text-[#FF9051] ml-0.5">|</span>
        </motion.p>

        {/* Bio as code comments */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-7 max-w-[660px] text-center font-mono text-[12px] md:text-[13px] text-[#555] space-y-1"
        >
          <p>
            <span className="text-[#9C83FF]/40">// </span>
            I design and build AI-powered automations that save time,
          </p>
          <p>
            <span className="text-[#9C83FF]/40">// </span>
            boost efficiency, and scale operations.
          </p>
          <p className="mt-2">
            <span className="text-[#9C83FF]/40">// </span>
            From smart workflows to LLM-integrated systems —
          </p>
          <p>
            <span className="text-[#9C83FF]/40">// </span>
            code + creativity = real business impact.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link to="contact" smooth={true} duration={1000}>
            <button className="cursor-pointer font-mono px-8 py-3 rounded text-sm tracking-wider bg-gradient-to-r from-[#9C83FF]/10 to-[#FF9051]/10 border border-[#9C83FF]/45 text-white hover:from-[#9C83FF]/20 hover:to-[#FF9051]/20 hover:border-[#9C83FF] hover:shadow-[0_0_25px_rgba(156,131,255,0.4)] transition-all duration-300">
              ./get_in_touch
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={1000} offset={-200}>
            <button className="cursor-pointer font-mono px-8 py-3 rounded text-sm tracking-wider border border-[#FF9051]/30 text-[#FF9051]/65 hover:border-[#FF9051]/65 hover:text-[#FF9051] hover:bg-[#FF9051]/5 hover:shadow-[0_0_20px_rgba(255,144,81,0.3)] transition-all duration-300">
              view_projects
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
