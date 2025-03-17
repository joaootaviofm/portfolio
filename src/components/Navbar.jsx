import Logo from "../assets/logo.svg";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const navList = ["Home", "Sobre", "Tecnologias", "Projetos"];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-black/30 backdrop-blur-md border-b border-gray-700/20 z-50 w-full top-0 flex justify-between items-center px-20 py-7">
      <div className="hover:scale-110 duration-500 cursor-default">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          src={Logo}
          width={96}
          height={40}
          alt="Joao Otávio Logo"
        />
      </div>
      <ul className="hidden md:flex text-white gap-10 font-semibold">
        {navList.map((item, index) => (
          <li key={index}>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 * index }}
              viewport={{ once: true }}
              className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] cursor-pointer border-b-[1px] border-transparent hover:border-white duration-500"
            >
              <Link
                to={
                  item == "Sobre"
                    ? "about"
                    : item == "Home"
                    ? "hero"
                    : item == "Projetos"
                    ? "projects"
                    : item == "Tecnologias"
                    ? "technologies"
                    : ""
                }
                smooth={true}
                duration={700}
                offset={
                  item == "Sobre"
                    ? -300
                    : item == "Home"
                    ? -300
                    : item == "Tecnologias"
                    ? -500
                    : item == "Projetos"
                    ? -200
                    : null
                }
              >
                {item}
              </Link>
            </motion.button>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-10">
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="hover:bg-white hover:text-black duration-500 cursor-pointer px-5 py-2 rounded-[8.8px] text-[#E1E1E1] border border-[#9A9A9A]"
        >
          <Link to="contact" smooth={true} duration={700}>
            Contato
          </Link>
        </motion.button>
      </div>
      <div className="md:hidden text-2xl text-white">
        <GiHamburgerMenu onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <motion.ul
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ y: -100, opacity: 0 }}
            className="bg-white/90 border-4 border-white text-black rounded-2xl absolute w-96 top-[230px] left-1/2 -translate-1/2"
          >
            {navList.map((item, index) => (
              <Link
                onClick={() => setIsOpen(!isOpen)}
                to={
                  item == "Home"
                    ? "hero"
                    : item == "Sobre"
                    ? "about"
                    : item == "Tecnologias"
                    ? "technologies"
                    : item == "Contato"
                    ? "contact"
                    : item == "Projetos"
                    ? "projects"
                    : null
                }
                smooth={true}
                duration={700}
                offset={
                  item == "Home"
                    ? -300
                    : item == "Sobre"
                    ? -250
                    : item == "Tecnologias"
                    ? -300
                    : item == "Projetos"
                    ? -120
                    : null
                }
              >
                <li
                  className="p-4 text-center active:bg-white/40 rounded-2xl"
                  key={index}
                >
                  <span className="font-semibold">{item}</span>
                </li>
              </Link>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
