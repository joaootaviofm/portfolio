// import passwordGen from "../assets/passwordgenerator.png";
import soon from "../assets/soon.png";

export default function Projects() {
  const projects = [
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
      <h1 className="text-[45px] font-extrabold">PROJETOS</h1>
      <p>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          MEUS PROJETOS
        </span>
      </p>
      <div className="mt-[30px] grid lg:grid-cols-2 grid-cols-1 gap-y-10 gap-x-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:bg-white/20 hover:shadow-xl hover:shadow-white/40 hover:scale-110 rounded-xl transition-all duration-300 p-5 -white flex items-center gap-4"
          >
            <div>
              <img
                className="rounded-md"
                width={150}
                height={150}
                src={project.imgsrc}
                alt=""
              />
            </div>
            <div className="flex-col justify-center">
              <h1 className="cursor-default font-extrabold text-[20px]">
                {project.projectName}
              </h1>
              <p className="cursor-default text-justify max-w-[250px] font-medium text-[12px] text-[#878787]">
                {project.description}
              </p>
              <div className="flex gap-5 mt-[20px]">
                <a
                  className="text-[16px] bg-white text-black hover:bg-black hover:text-white transition-all duration-300 border border-transparent hover:border-white px-2 py-1 rounded-[8px]"
                  href={project.gitLink}
                  target="blank"
                >
                  Ver código
                </a>
                <a
                  className="text-[16px] bg-black text-white border-white/20 hover:bg-white hover:text-black hover:border-black transition-all duration-300 border px-2 py-1 rounded-[8px]"
                  href={project.demolink} target="blank">
                  Ver Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
