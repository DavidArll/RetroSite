import Header from '../components/Header';
import Footer from '../components/Footer';
import HorizontalScroller from '../components/HorizontalScroller';

export default function Contact() {
  return (
    <>
      <HorizontalScroller>
      <main className="pt-20 max-w-2xl mx-auto py-12 px-4">
        <h1 className="font-heading text-3xl text-accent mb-6">Contáctame</h1>
        <form action="https://formspree.io/f/tu-form-id" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Tu nombre" required className="p-2 rounded bg-gray-800 text-white" />
          <input type="email" name="email" placeholder="Tu email" required className="p-2 rounded bg-gray-800 text-white" />
          <textarea name="message" placeholder="Mensaje" rows="5" required className="p-2 rounded bg-gray-800 text-white"></textarea>
          <button type="submit" className="bg-accent hover:bg-neon text-gray-900 font-bold py-2 rounded transition">
            Enviar
          </button>
        </form>
      </main>
      </HorizontalScroller>
    </>
  );
}
