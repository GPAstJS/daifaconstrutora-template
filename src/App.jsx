import './App.css';
import { Card } from './components/card';
import { Nav } from './components/nav';

import SeuConteudo from './assets/seuconteudo2.png';
import { HeroSection } from './components/section';
import { Form } from './components/form';
import { Carousel } from './components/carousel/carousel';

function App() {
    return (
        <main id='inicio' className=" w-fullflex flex-col items-start justify-center">
            <header className="w-full h-[140px] fixed bg-black z-[99]">
                <Nav />
            </header>

            <Carousel />

            <p id='services' className="font-montserrat my-[100px] flex flex-row gap-x-[15px] text-left font-bold text-[40px] px-[10px]">
                Nossos <p className='px-[5px] text-white bg-yellow-500 rounded-[3px]'>Serviços</p>
            </p>
            <div className="w-full flex p-[10px] flex-col md:flex-row">
                <div className="w-full flex flex-col md:flex-row gap-x-[15px] gap-y-[15px]">
                    {[...Array(4)].map((_, index) => (
                        <Card
                            key={index}
                            image={'#'}
                            title={'Hello World'}
                            text={
                                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus iste fuga repudiandae sit cum, saepe corporis quisquam iure molestias vitae at provident similique ipsa repellat velit reiciendis laborum voluptatem?'
                            }
                        />
                    ))}
                </div>
            </div>

            <div id='about' className="w-full flex items-center justify-center flex-col md:flex-row container mx-auto gap-x-[35px]">
                <div className=" flex flex-col items-start md:items-center  max-w-[550px] p-[10px] gap-y-[10px]">
                    <img src={SeuConteudo} alt="Imagem aqui" />

                    <p className="font-bold font-poppins text-center md:text-left text-[30px]">
                        Entregamos sonhos e estilo de vida.
                    </p>

                    <p className="font-montserrat text-[18px] text-center md:text-left">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Facilis repellat distinctio voluptatum numquam, natus dicta,
                        fuga laboriosam inventore soluta, qui consequatur fugiat sit
                        quae? Error, laudantium. Temporibus totam quisquam enim.
                    </p>
                </div>

                <div className="flex w-fit flex-col  items-center md:items-start justify-center py-[50px] gap-y-[50px]">
                    <HeroSection />
                    <HeroSection />
                    <HeroSection />
                </div>
            </div>

            <Form />

            <footer className="w-full bg-black flex flex-col border-red-500 border-t-[2px] py-[25px] items-center justify-center gap-y-[25px]">
                <img className="text-white font-bold" src="#" alt="Logo Here" />

                <p className="font-poppins text-[16px] text-white">
                    &lt;Sua Marca&gt; - Todos os Direitos Reservados.
                </p>
            </footer>
        </main>
    );
}

export default App;
