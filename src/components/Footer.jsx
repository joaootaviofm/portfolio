import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6"; //<FaLinkedin />


export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center relative z-10 mt-[150px] mb-[50px]">
      <div className="text-white text-2xl flex gap-4">
        <a href="/"><FaLinkedin /></a>
        <a href="/"><FaGithub /></a>
      </div>
    </div>
  );
}
