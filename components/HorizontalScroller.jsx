import { useEffect, useRef } from 'react';

export default function HorizontalScroller({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    console.log('🔍 horizontal-scroll-wrapper:', {
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      scrollLeft: el.scrollLeft,
    });

    const onWheel = e => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
      console.log('wheel deltaY:', e.deltaY, '→ scrollLeft:', el.scrollLeft);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <div
      ref={ref}
      className="horizontal-scroll-wrapper"
    >
      {children}
    </div>
  );
}
