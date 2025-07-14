import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem('theme');
    if (local === 'dark' || (!local && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  };

  return (
    <button onClick={toggle} className="focus:outline-none">
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
