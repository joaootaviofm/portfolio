import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div
      id="contact"
      className="font-inter flex flex-col justify-center items-center relative z-10 mt-[150px] mb-[50px]"
    >
      <div className="text-white flex items-center  justify-center flex-col">
        <h1 className="text-[45px] font-extrabold">ENTRE EM CONTATO</h1>
        <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
          MEUS CONTATOS
        </span>
        <div className="text-3xl mt-[30px] flex justify-center items-center gap-5">
          <a
            href="https://www.linkedin.com/in/joaootaviofm10/"
            target="blank"
            className="hover:scale-115 duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/joaootaviofm/"
            target="blank"
            className="hover:scale-115 duration-300"
          >
            <FaGithub />
          </a>
          <div className="relative pr-9 pl-5 py-2 flex items-center justify-center bg-white rounded-full border hover:scale-110 duration-400 ">
            <p className="text-base text-black">joaootaviofm@gmail.com</p>
            <span className="absolute right-1 text-black">
              <MdEmail />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
