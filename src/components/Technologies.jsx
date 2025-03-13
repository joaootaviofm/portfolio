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
import { useState } from "react";

const techStack = [
  {
    icon: <IoLogoJavascript className="text-yellow-300" />,
    name: "Javascript",
  },
  {
    icon: <FaHtml5 className="text-orange-600" />,
    name: "HTML",
    analyze: false,
  },
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
  const [text, setText] = useState("Coloque o mouse em cima da linguagem para ver a descricao.");

  function handleText(index) {
    switch (index) {
      case 0:
        setText("Javascript");
        break;
      case 1:
        setText("HTML");
        break;
      case 2:
        setText("CSS");
        break;
      case 3:
        setText("React");
        break;
      case 4:
        setText("NextJS");
        break;
      case 5:
        setText("Tailwind");
        break;
      case 6:
        setText("Kava");
        break;
      case 7:
        setText("Springboot");
        break;
      case 8:
        setText("Github");
        break;
      case 9:
        setText("Git");
        break;
    }
  }

  return (
    <div className="relative text-white font-inter mt-[120px] pb-5">
      <div className="flex flex-col justify-center items-center z-10">
        <h1 className="font-extrabold text-[45px]">TECNOLOGIAS</h1>
        <p>
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            SAIBA MAIS
          </span>
        </p>
        <div className="flex flex-col bg-white/10 p-10 justify-center items-center rounded-lg backdrop-blur-sm border border-white/20 gap-10 mt-[30px]">
          <div className="flex gap-[4px] items-center">
            {techStack.map((tech, index) => (
              <div
                onMouseEnter={() => handleText(index)}
                onMouseLeave={() => setText("Coloque o mouse em cima da linguagem para ver a descricao.")}
                className="hover:scale-110 duration-300 text-7xl flex gap-1 items-center"
                key={index}
              >
                {tech.icon}
              </div>
            ))}
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Technologies;
