export const MobileHeader = ({ setOpenMenuHeader }) => {
    const links = [
        { href: '#inicio', text: 'Início' },
        { href: '#services', text: 'Nossos Serviços' },
        { href: '#about', text: 'Sobre Nós' },
        { href: '#form', text: 'Contato' },
    ];

    return (
        <div className="w-full flex items-start flex-col p-[1rem]  top-[140px] right-0 absolute bg-black">
            <div className="flex flex-col items-start gap-y-[5px]">
                {links.map((e) => {
                    return (
                        <a
                            onClick={() =>
                                setOpenMenuHeader((prevValue) => !prevValue)
                            }
                            className="font-montserrat text-white text-[1.25rem]"
                            href={e.href}
                        >
                            {e.text}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};
