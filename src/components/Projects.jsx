// import passwordGen from "../assets/passwordgenerator.png";
import soon from "../assets/soon.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      imgsrc: soon,
      projectName: "Taskly",
      description:
        "(Em desenvolvimento) Taskly é um tracker de dailytasks que irá te ajudar em produtividade e usar IA para isso.",
      gitLink: "https://github.com/joaootaviofm/dailytasks",
      demolink: "https://dailytasks-teal.vercel.app",
    },
    {
      imgsrc: soon,
      projectName: "Soon",
      description:
        "Descricoes dos projetos serão colocadas aqui contendo todas as informacoes necessárias",
      gitLink: "https://github.com/joaootaviofm/",
      demolink: "https://vercel.com/",
    },
    {
      imgsrc: soon,
      projectName: "Soon",
      description:
        "Descricoes dos projetos serão colocadas aqui contendo todas as informacoes necessárias",
      gitLink: "https://github.com/joaootaviofm/",
      demolink: "https://vercel.com/",
    },
    {
      imgsrc: soon,
      projectName: "Soon",
      description:
        "Descricoes dos projetos serão colocadas aqui contendo todas as informacoes necessárias",
      gitLink: "https://github.com/joaootaviofm/",
      demolink: "https://vercel.com/",
    },
  ];

  return (
    <div
      id="projects"
      className="mt-[150px] font-inter relative z-10 text-white flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[45px] font-extrabold"
      >
        PROJETOS
      </motion.h1>
      <motion.p
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          MEUS PROJETOS
        </span>
      </motion.p>
      <div className="mt-[30px] grid lg:grid-cols-2 grid-cols-1 gap-y-10 gap-x-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:bg-white/20 hover:shadow-xl hover:shadow-white/40 hover:scale-110 rounded-xl transition-all duration-300 p-2 md:p-5 -white flex items-center justify-center gap-4"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              viewport={{ once: true }}
            >
              <img
                className="rounded-md max-w-[100px] md:max-w-[150px]"

                src={project.imgsrc}
                alt=""
              />
            </motion.div>
            <div className="flex-col justify-center">
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 * index }}
                viewport={{ once: true }}
                className="cursor-default font-extrabold text-[14px] md:text-[20px]"
              >
                {project.projectName}
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 * index }}
                viewport={{ once: true }}
                className="cursor-default text-justify max-w-[200px] font-medium text-[11px] md:text-[12px] text-[#878787]"
              >
                {project.description}
              </motion.p>
              <div className="flex items-center gap-5 mt-[5px] md:mt-[20px]">
                <motion.a
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 * index }}
                  viewport={{ once: true }}
                  className="text-[12px] md:text-[16px] bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-white px-2 py-1 rounded-[8px]"
                  href={project.gitLink}
                  target="blank"
                >
                  Ver código
                </motion.a>
                <motion.a
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 * index }}
                  viewport={{ once: true }}
                  className="text-[12px] md:text-[16px] bg-black text-white border-white/20 hover:bg-white hover:text-black hover:border-black transition-all duration-300 border px-2 py-1 rounded-[8px]"
                  href={project.demolink}
                  target="blank"
                >
                  Ver Demo
                </motion.a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
