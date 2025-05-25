import Logo from "../assets/ultraconstrutora-logo.png"

export const Nav = () => {
    return (
        <nav className="flex h-[140px] flex-row justify-around items-center">
            <img className="text-white font-bold h-[100px]  sm:h-[150px]" src={Logo} alt="Logo Here" />

            <div className="flex flex-row font-poppins text-black font-bold">
                <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                    <a href="#inicio" className="px-[10px]">Início</a>
                </div>

                <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                    <a href="#services" className="px-[10px]">Nossos Serviços</a>
                </div>
                <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                    <a href="#about" className="px-[10px]">Sobre Nós</a>
                </div>
                <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                    <a href="#form" className="px-[10px]">Contato</a>
                </div>
            </div>
        </nav>
    );
};
