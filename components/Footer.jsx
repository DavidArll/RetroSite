import { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.scss';

export default function Footer() {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handler = () => {
      const bottom = document.documentElement.scrollHeight;
      setShrunk(window.scrollY + window.innerHeight < bottom - 100);
    };
    window.addEventListener('scroll', handler);
    handler(); // inicializar estado
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <footer className={`${styles.footer} ${shrunk ? styles.shrunk : styles.full}`}>
      {shrunk ? (
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="/" className="text-gray-300 hover:text-accent">Inicio</a>
          <a href="/about" className="text-gray-300 hover:text-accent">Sobre mí</a>
          <a href="/portfolio" className="text-gray-300 hover:text-accent">Proyectos</a>
          <a href="/contact" className="text-gray-300 hover:text-accent">Contacto</a>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 py-8 px-6 text-gray-300">
          <div>
            <h4 className="font-heading text-accent mb-2">Enlaces</h4>
            <a href="/" className="block hover:text-neon">Inicio</a>
            <a href="/about" className="block hover:text-neon">Sobre mí</a>
            <a href="/portfolio" className="block hover:text-neon">Proyectos</a>
            <a href="/contact" className="block hover:text-neon">Contacto</a>
          </div>
          <div>
            <h4 className="font-heading text-accent mb-2">Sígueme</h4>
            <a href="#" className="block hover:text-neon">Twitter</a>
            <a href="#" className="block hover:text-neon">Instagram</a>
            <a href="#" className="block hover:text-neon">GitHub</a>
          </div>
          <div>
            <h4 className="font-heading text-accent mb-2">Contacto</h4>
            <p>email@ejemplo.com</p>
            <p>+52 55 1234 5678</p>
          </div>
        </div>
      )}
    </footer>
  );
}
