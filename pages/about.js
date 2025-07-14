import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalScroller from '../components/HorizontalScroller';

export default function About() {
  return (
    <>
      <HorizontalScroller>
        {/* Sección principal */}
        <section className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center px-8">
          <div className="max-w-4xl text-center">
            <h1 className="font-heading text-3xl text-accent mb-6">Sobre mí</h1>
            <p className="text-gray-300">
              Soy un entusiasta del estilo retro y desarrollador web.
            </p>
          </div>
        </section>

        {/* Sección secundaria (puedes repetirla para más contenido) */}
        <section className="snap-center flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gray-800">
          <div className="max-w-4xl text-center">
            <h2 className="font-heading text-2xl text-accent mb-4">Historia</h2>
            <p className="text-gray-300">Acá puedes contar más sobre ti.</p>
          </div>
        </section>
      </HorizontalScroller>
    </>
  );
}
