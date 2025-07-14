import styles from '../styles/Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero + ' relative flex items-center justify-center text-center h-screen'}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative">
        <h1 className="font-heading text-4xl text-accent mb-4">Bienvenido a RetroSite</h1>
        <p className="text-gray-300">Un homenaje moderno al estilo 8‑bit.</p>
      </div>
    </section>
  );
}
