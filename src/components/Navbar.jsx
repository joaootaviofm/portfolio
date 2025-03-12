import Logo from '../assets/logo.svg'

function Navbar(){
    return(
        <>
            <nav className="">
                <div className="flex justify-between px-20 py-5">
                    <img src={Logo} 
                    width={96}
                    height={40}
                    alt="Joao Otávio Logo" />
                </div>
            </nav>
        </>
    )


}

export default Navbar;