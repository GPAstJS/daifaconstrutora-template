import { useState, useEffect } from 'react';
import Logo from '../assets/ultraconstrutora-logo.png';
import { MdMenu } from 'react-icons/md';
import { MobileHeader } from './mobileHeader';

export const Nav = () => {
    const [openMenuHeader, setOpenMenuHeader] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="relative flex h-[140px] flex-row justify-around items-center">
            <img
                className="text-white font-bold h-[100px]  sm:h-[150px]"
                src={Logo}
                alt="Logo Here"
            />

            {width >= 640 ? (
                <div className="flex flex-row font-poppins text-black font-bold">
                    <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                        <a href="#inicio" className="px-[10px]">
                            Início
                        </a>
                    </div>

                    <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                        <a href="#services" className="px-[10px]">
                            Nossos Serviços
                        </a>
                    </div>
                    <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                        <a href="#about" className="px-[10px]">
                            Sobre Nós
                        </a>
                    </div>
                    <div className="px-[5px] border-b-[3px] border-transparent hover:border-blue-500">
                        <a href="#form" className="px-[10px]">
                            Contato
                        </a>
                    </div>
                </div>
            ) : (
                <MdMenu
                    onClick={() => setOpenMenuHeader((prevValue) => !prevValue)}
                    className="w-[50px] h-[50px]"
                />
            )}

            {openMenuHeader && width <= 639 && (
                <MobileHeader setOpenMenuHeader={setOpenMenuHeader} />
            )}
        </nav>
    );
};
