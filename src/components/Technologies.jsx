import { IoLogoJavascript } from "react-icons/io5"; // <IoLogoJavascript />
import { FaHtml5 } from "react-icons/fa"; // <FaHtml5 />
import { FaCss3Alt } from "react-icons/fa"; // <FaCss3Alt />
import { FaReact } from "react-icons/fa"; // <FaReact />
import { RiNextjsFill } from "react-icons/ri"; // <RiNextjsFill />
import { RiTailwindCssLine } from "react-icons/ri"; // <RiTailwindCssLine />
import { FaJava } from "react-icons/fa"; // <FaJava />
import { SiSpringboot } from "react-icons/si"; // <SiSpringboot />
import { FaGithub } from "react-icons/fa"; // <FaGithub />
import { FaGitAlt } from "react-icons/fa"; // <FaGitAlt />

const techStack = [
  {
    icon: <IoLogoJavascript className="text-yellow-300" />,
    name: "Javascript",
  },
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-400" />, name: "CSS" },
  { icon: <FaReact className="text-blue-500" />, name: "React" },
  { icon: <RiNextjsFill />, name: "NextJS" },
  { icon: <RiTailwindCssLine className="text-blue-500" />, name: "Tailwind" },
  { icon: <FaJava className="text-orange-400" />, name: "Java" },
  { icon: <SiSpringboot className="text-green-500" />, name: "Spring" },
  { icon: <FaGithub />, name: "Github" },
  { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
];

function Technologies() {
  return (
    <div className="relative text-white font-inter mt-[120px] pb-5">
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="font-extrabold text-[45px]">TECNOLOGIAS</h1>
        <p>
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            SAIBA MAIS
          </span>
        </p>
        <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center gap-10 mt-[30px]">
          {techStack.map((tech, index) => (
            <div className="hover:scale-110 duration-300 text-7xl flex flex-col gap-1 items-center" key={index}>
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Technologies;
