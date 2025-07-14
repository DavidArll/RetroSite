import styles from '../styles/CardGrid.module.scss';

export default function CardGrid({ items }) {
  return (
    <section className="max-w-4xl mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.title} className={styles.card}>
          <img src={item.image} alt={item.title} className="w-full rounded-md mb-4" />
          <h3 className="font-heading text-accent text-xl mb-2">{item.title}</h3>
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}
    </section>
  );
}
