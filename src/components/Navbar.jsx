import Logo from "../assets/logo.svg";

function Navbar() {
  const navList = ["Sobre", "Home", "Projetos"];

  return (
      <nav className="z-[1] w-screen flex justify-between items-center px-20 py-7">
        <div className="hover:scale-110 duration-500 cursor-default">
          <img src={Logo} width={96} height={40} alt="Joao Otávio Logo" />
        </div>
        <ul className="hidden md:flex text-white gap-10 font-semibold">
          {navList.map((item, index) => (
            <li key={index}>
              <button className="cursor-pointer border-b-[1px] border-transparent hover:border-white duration-500">
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-10">
          <button className="hover:bg-white hover:text-black duration-500 cursor-pointer px-5 py-2 rounded-[8.8px] text-[#E1E1E1] border border-[#9A9A9A]">
            Contato
          </button>
        </div>
      </nav>
  );
}
export default Navbar;
