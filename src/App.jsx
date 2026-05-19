import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Particles from './components/Particles';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Commands from './components/Commands';
import Install from './components/Install';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Décor global */}
      <div className="atmosphere" />
      <div className="grain" />
      <Particles count={30} />

      {/* UI flottante */}
      <Cursor />
      <ScrollProgress />

      {/* Contenu */}
      <Nav />
      <Hero />
      <Features />
      <Showcase />
      <Commands />
      <Install />
      <FinalCTA />
      <Footer />
    </>
  );
}
