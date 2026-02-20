import Logo from "../assets/logo.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const navList = ["Home", "About", "Experience", "Technologies", "Projects"];
  const [isOpen, setIsOpen] = useState(false);

  const scrollTarget = (item) => {
    const map = {
      Home: "hero",
      About: "about",
      Experience: "experience",
      Technologies: "technologies",
      Projects: "projects",
    };
    return map[item] || "";
  };

  const scrollOffset = (item) => {
    const map = {
      Home: -300,
      About: -300,
      Experience: -300,
      Technologies: -500,
      Projects: -200,
    };
    return map[item] ?? null;
  };

  return (
    <nav className="fixed z-50 w-full top-0 flex justify-between items-center px-6 md:px-20 py-4 bg-black/85 backdrop-blur-xl border-b border-[#9C83FF]/20 shadow-[0_0_30px_rgba(156,131,255,0.06)]">
      {/* Logo + online indicator */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 hover:scale-105 duration-300 cursor-default"
      >
        <span className="text-[#9C83FF] font-mono text-xs opacity-50">&gt;_</span>
        <img src={Logo} width={80} height={34} alt="Joao Otávio Logo" />
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] cursor-blink" />
      </motion.div>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-1 font-mono text-sm">
        {navList.map((item, index) => (
          <li key={index}>
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.08 * index }}
            >
              <Link
                to={scrollTarget(item)}
                smooth={true}
                duration={700}
                offset={scrollOffset(item)}
                className="group relative px-4 py-2 cursor-pointer text-[#9C83FF]/55 hover:text-white transition-all duration-300 block"
              >
                <span className="opacity-0 group-hover:opacity-100 text-[#FF9051] transition-opacity duration-200 absolute left-1 top-1/2 -translate-y-1/2 text-xs leading-none">
                  [
                </span>
                {item}
                <span className="opacity-0 group-hover:opacity-100 text-[#FF9051] transition-opacity duration-200 absolute right-1 top-1/2 -translate-y-1/2 text-xs leading-none">
                  ]
                </span>
                <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#9C83FF] to-[#FF9051] transition-all duration-300" />
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>

      {/* Contact button */}
      <div className="hidden md:flex">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="cursor-pointer px-5 py-2 rounded font-mono text-sm border border-[#9C83FF]/35 text-[#9C83FF] hover:bg-[#9C83FF]/10 hover:border-[#9C83FF]/70 hover:shadow-[0_0_18px_rgba(156,131,255,0.3)] transition-all duration-300 block"
          >
            ./contact
          </Link>
        </motion.div>
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden text-xl text-[#9C83FF]">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 w-full bg-[#0a0a0a]/96 backdrop-blur-xl border-b border-[#9C83FF]/20 py-3 font-mono"
            >
              {navList.map((item, index) => (
                <li key={index}>
                  <Link
                    onClick={() => setIsOpen(false)}
                    to={scrollTarget(item)}
                    smooth={true}
                    duration={700}
                    offset={scrollOffset(item)}
                    className="flex items-center gap-3 px-8 py-3 text-[#9C83FF]/65 hover:text-white hover:bg-[#9C83FF]/8 transition-all duration-200 cursor-pointer text-sm"
                  >
                    <span className="text-[#FF9051] text-xs">&gt;</span>
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  onClick={() => setIsOpen(false)}
                  to="contact"
                  smooth={true}
                  duration={700}
                  className="flex items-center gap-3 px-8 py-3 text-[#9C83FF]/65 hover:text-white hover:bg-[#9C83FF]/8 transition-all duration-200 cursor-pointer text-sm"
                >
                  <span className="text-[#FF9051] text-xs">&gt;</span>
                  Contact
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
