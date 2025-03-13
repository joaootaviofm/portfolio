import Logo from "../assets/logo.svg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Navbar() {
  const navList = ["Sobre", "Home", "Projetos"];

  return (
    <nav className="relative w-screen flex justify-between items-center px-20 py-7">
      <div className="z-10 hover:scale-110 duration-500 cursor-default">
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true}}
          src={Logo}
          width={96}
          height={40}
          alt="Joao Otávio Logo"
        />
      </div>
      <ul className="z-10 hidden md:flex text-white gap-10 font-semibold">
        {navList.map((item, index) => (
          <li>
            <motion.button
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 * index }}
              viewport={{ once: true}}
              key={index}
              className="hover:text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051] cursor-pointer border-b-[1px] border-transparent hover:border-white duration-500"
            >
              {item}
            </motion.button>
          </li>
        ))}
      </ul>
      <div className="flex gap-10">
        <motion.button
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5}}
          viewport={{ once: true}}
          className="hover:bg-white hover:text-black duration-500 cursor-pointer px-5 py-2 rounded-[8.8px] text-[#E1E1E1] border border-[#9A9A9A]"
        >
          Contato
        </motion.button>
      </div>
    </nav>
  );
}
export default Navbar;
