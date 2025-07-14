import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalScroller from '../components/HorizontalScroller';
import Hero from '../components/Hero';
import CardGrid from '../components/CardGrid';

const items = [
  { title: 'Proyecto Alpha', description: 'Demo retro 8‑bit.', image: '/images/proy1.jpg' },
  { title: 'Proyecto Beta', description: 'Interactividad genial.', image: '/images/proy2.jpg' },
  { title: 'Proyecto Gamma', description: 'UI estilo arcade.', image: '/images/proy3.jpg' }
];

export default function Home() {
  return (
    <>
      <Header />
      <HorizontalScroller>
        <section className="flex items-center justify-center bg-black">
          <Hero />
        </section>
        <section className="flex items-center justify-center bg-gray-900">
          <CardGrid items={items} />
        </section>
        <section className="flex items-center justify-center bg-gray-800 text-white">
          <h2 className="text-3xl">¡Explora más secciones!</h2>
        </section>

      </HorizontalScroller>
      <Footer />
    </>
  );
}
