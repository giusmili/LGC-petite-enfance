import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Values } from './components/Values';
import { Activities } from './components/Activities';
import { Testimonials } from './components/Testimonials';
import { Infos } from './components/Infos';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Values />
      <Activities />
      <Infos />
      <Testimonials />
      <Footer />
    </div>
  );
}
