import Logo from '../assets/logo.svg'

function Navbar(){
    return(
        <>
            <nav className="flex justify-between items-center px-20 py-5">
                <div>
                    <img src={Logo} 
                    width={96}
                    height={40}
                    alt="Joao Otávio Logo" />
                </div>
                <div className='text-white flex gap-10'>
                    <button className='px-5 py-2 rounded-[8.8px] text-[#E1E1E1] border-1 border-[#9A9A9A]'>About me</button>
                    <button className='px-5 py-2 rounded-[8.8px] bg-white text-black'>Contact</button>
                </div>
            </nav>
        </>
    )


}

export default Navbar;