function About() {
  return (
    <div className="font-inter mt-[120px] z-10 relative pb-7">
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="font-extrabold text-white text-[45px]">SOBRE MIM</h1>
        <p>
          <span className="tracking-[5px] text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] to-[#FF9051]">
            SAIBA MAIS
          </span>
        </p>
        <div className="mt-5 flex flex-col gap-5 text-center justify-center items-center text-white text-[17px] font-medium">
            <p className="max-w-[700px]">Meu nome é João Otávio, tenho 20 anos e sou desenvolvedor com habilidades em <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83FF] to-[#FF9051] ">Javascript, HTML, CSS, React, NextJS, Tailwind, Java</span> e versionamento com <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9C83FF] to-[#FF9051] ">Git e Github</span></p>
            <p className="max-w-[700px]">Tenho como objetivo entregar resultados, resolver problemas e ajudar no dia-a-dia com qualquer coisa que for necessária. Entretanto, também procuro aprender e evoluir dia após dia, em busca de me tornar um desenvolvedor fora da curva.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
