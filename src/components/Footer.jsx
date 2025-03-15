import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div
      id="contact"
      className="font-inter flex flex-col justify-center items-center relative z-10 mt-[150px] mb-[50px]"
    >
      <div className="text-white flex items-center justify-center flex-col">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          viewport={{ once: true }}
          className="text-[35px] md:text-[45px] font-extrabold"
        >
          ENTRE EM CONTATO
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]"
        >
          MEUS CONTATOS
        </motion.span>
        <div className="text-2xl md:text-3xl mt-[30px] flex justify-center items-center gap-5">
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/joaootaviofm10/"
            target="blank"
            className="hover:scale-115 hover:shadow-xl hover:shadow-white/20 duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            href="https://github.com/joaootaviofm/"
            target="blank"
            className="hover:shadow-xl hover:shadow-white/20 hover:scale-115 duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="hover:shadow-xl hover:shadow-white/20 relative pr-9 pl-5 py-2 flex items-center justify-center bg-white rounded-full border hover:scale-110 duration-400 "
          >
            <p className="text-base text-black">joaootaviofm@gmail.com</p>
            <span className="absolute right-1 text-black">
              <MdEmail />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
