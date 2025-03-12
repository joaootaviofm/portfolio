import me from "../assets/me.webp";

function Hero() {
  return (
    <div className="z-[2] flex flex-col items-center justify-center text-white mt-[120px]">
      <div className="relative bg-[#1A1A1A] w-[231px] h-[231px] rounded-full overflow-hidden mb-[15px]">
        <img
          src={me}
          width={231}
          height={231}
          alt="me with a macbook"
          className="absolute"
        />
      </div>
      <div className="z-[1] flex flex-col items-center">
        <h1 className="font-bold text-[63px] mb-[-15px]">João Otávio</h1>
        <p className="text-[26px] font-semibold text-[#C9C9C9]">
          Desenvolvedor{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            Fullstack
          </span>
        </p>
        <p className="text-[16px] text-center max-w-[1000px] mt-[20px] text-[#E1E1E1] font-medium">
          Desenvolvedor com habilidades em JavaScript, HTML, CSS, React,
          Next.js, Tailwind, Java e Git/GitHub. Focado em resultados, resolução
          de problemas e evolução constante.
        </p>
        <div className="mt-10">
          <button className="hover:bg-white hover:text-black hover:border-black duration-500 ease-in-out cursor-pointer bg-black px-10 py-4 rounded-full border border-[#585858] font-medium text-white ">
            Entre em contato
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
