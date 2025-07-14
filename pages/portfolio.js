import Header from '../components/Header';
import CardGrid from '../components/CardGrid';
import Footer from '../components/Footer';
import HorizontalScroller from '../components/HorizontalScroller';  


const projects = [
  { title: 'Arcade Mockup', description: 'UI estilo arcade.', image: '/images/port1.jpg' },
  { title: 'Pixel Game', description: 'Galería con CSS pixelada.', image: '/images/port2.jpg' }
];

export default function Portfolio() {
  return (
    <>
      <HorizontalScroller>
      <main className="pt-20">
        <section className="max-w-4xl mx-auto py-12 px-4">
          <h1 className="font-heading text-3xl text-accent mb-6">Mis Proyectos</h1>
          <CardGrid items={projects} />
        </section>
      </main>
    </HorizontalScroller>
    </>
  );
}
