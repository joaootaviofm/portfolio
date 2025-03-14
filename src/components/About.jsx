// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function About() {
  return (
    <div className="font-inter mt-[150px] z-10 relative pb-7">
      <div id='about' className="z-20 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-extrabold text-white text-[45px]"
        >
          SOBRE MIM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            SAIBA MAIS
          </span>
        </motion.p>
        <div className="mt-5 flex flex-col gap-5 text-center justify-center items-center text-white text-[17px] font-medium">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-[700px]"
          >
            Meu nome é João Otávio, tenho 20 anos e sou desenvolvedor com
            habilidades em Javascript, HTML, CSS, React, NextJS, Tailwind, Java
            e versionamento com Git e Github
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            viewport={{ once: true }}
            className="max-w-[700px]"
          >
            Tenho como objetivo entregar resultados, resolver problemas e ajudar
            no dia-a-dia com qualquer coisa que for necessária. Entretanto,
            também procuro aprender e evoluir dia após dia, em busca de me
            tornar um desenvolvedor fora da curva.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default About;
