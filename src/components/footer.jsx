import Logo from '../assets/ultraconstrutora-logo.png';

export const Footer = () => {
    return (
        <footer className="w-full  flex flex-col border-t-[2px]  items-center justify-center mb-[25px]">
            <img
                className="text-white w-[125px] h-[125px] sm:w-[200px] sm:h-[200px]  font-bold "
                src={Logo}
                alt="Logo Here"
            />

            <p className="font-poppins text-[14px] sm:text-[1rem] text-black font-bold">
                Ultra Construtora - Todos os Direitos Reservados® 2025
            </p>
        </footer>
    );
};
