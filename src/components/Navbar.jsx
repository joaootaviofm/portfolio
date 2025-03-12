import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center px-20 py-5">
            <div className="hover:scale-110 duration-400 cursor-default">
                <img src={Logo} width={96} height={40} alt="Joao Otávio Logo" />
            </div>
            <div className="text-white flex gap-10 font-semibold">
                <button className="cursor-pointer border-b-3 border-transparent hover:border-white duration-400">
                    Sobre
                </button>
                <button className="cursor-pointer border-b-3 border-transparent hover:border-white duration-400">
                    Home
                </button>
                <button className="cursor-pointer border-b-3 border-transparent hover:border-white duration-400">
                    Projetos
                </button>
            </div>
            <div className="flex gap-10">
                <button className="hover:bg-white hover:text-black duration-400 cursor-pointer px-5 py-2 rounded-[8.8px] text-[#E1E1E1] border-1 border-[#9A9A9A]">
                    Contato
                </button>
            </div>
      </nav>
    </>
  );
}

export default Navbar;
