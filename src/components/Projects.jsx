import passwordGen from "../assets/passwordgenerator.png";
import soon from "../assets/soon.png";

export default function Projects() {
  const projects = [
    {
      imgsrc: passwordGen,
      projectName: "Password generator",
      description:
        "a simple and efficient application to create secure passwords according to user preferences.",
    },
    {
      imgsrc: soon,
      projectName: "Soon",
      description: "Coming soon",
    },
  ];

  return (
    <div className="relative z-10 mt-[120px]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-white text-[45px]">PROJETOS</h1>
        <p>
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            MEUS PROJETOS
          </span>
        </p>
      </div>
      <div></div>
    </div>
  );
}
