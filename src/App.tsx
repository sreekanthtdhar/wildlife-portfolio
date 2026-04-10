import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero';
import {Gallery} from './components/Gallery/Gallery';
import {About} from './components/About';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import './styles/global.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
