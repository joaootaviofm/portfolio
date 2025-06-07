import me from "../assets/me.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center text-white mt-[150px]"
    >
      <div className="overflow-hidden relative border border-white/20 bg-[#1A1A1A] w-[231px] h-[231px] rounded-full mb-[15px]">
        <motion.img
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={me}
          width={231}
          height={231}
          alt="me with a macbook"
          className="hover:scale-110 duration-300 absolute top-5"
        />
      </div>
      <div className="z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="font-bold text-[53px] md:text-[63px] mb-[-15px]"
        >
          João Otávio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-[26px] font-semibold text-[#C9C9C9]"
        >
          AI & Automation{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            Specialist
          </span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center max-w-[1000px] mt-[20px] text-[#E1E1E1] font-medium"
        >
          I design and build AI-powered automations that save time, boost efficiency, and scale operations.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center max-w-[1000px] mt-[10px] text-[#E1E1E1] font-medium"
        >
          From smart workflows to LLM-integrated systems, I combine code and creativity to deliver real impact and value to your business.
        </motion.p>
        <div className="mt-10">
          <motion.button
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="hover:bg-white hover:text-black duration-700 ease-in-out cursor-pointer bg-black px-10 py-4 rounded-full border border-[#585858] font-medium text-white "
          >
            <Link to="contact" smooth={true} duration={1000}>
              Get in touch
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
