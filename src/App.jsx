import { Carousel } from './components/carousel/carousel';
import { Services } from './components/services';
import { About } from './components/about';
import { Form } from './components/form';
import { Footer } from './components/footer';
import { Header } from './components/header';

import './App.css';

function App() {
    return (
        <main id="inicio" className="w-full  flex flex-col  items-center ">
            <Header />
            <Carousel />
            <Services />
            <About />
            <Form />
            <Footer />
        </main>
    );
}

export default App;
