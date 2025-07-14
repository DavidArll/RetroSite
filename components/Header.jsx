import { useEffect, useState } from 'react';
import styles from '../styles/Header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${styles.header} fixed top-0 left-0 w-full z-20 transition-all ${scrolled ? styles.scrolled : ''}`}>
      <nav className="max-w-4xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-heading text-accent text-lg">MiRetroSite</div>
        <div className="space-x-6 text-gray-200">
          <a href="/">Inicio</a>
          <a href="/about">Sobre mí</a>
          <a href="/portfolio">Proyectos</a>
          <a href="/contact">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
