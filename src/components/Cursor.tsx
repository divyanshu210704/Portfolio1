import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Subtle two-part cursor: a small ember dot that tracks instantly,
 * and a trailing ring that springs behind it. Expands over any
 * element marked with [data-cursor]. Only rendered on devices with
 * a fine pointer; honors prefers-reduced-motion.
 */
const isFinePointer =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!isFinePointer) return;

    const place = (el: HTMLElement | null, px: number, py: number) => {
      if (el) el.style.transform = `translate(${px}px, ${py}px) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      place(dotRef.current, e.clientX, e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = target?.closest('[data-cursor], a, button');
      ringRef.current?.classList.toggle('is-active', Boolean(interactive));
    };

    const unsubX = ringX.on('change', (v) => place(ringRef.current, v, ringY.get()));
    const unsubY = ringY.on('change', (v) => place(ringRef.current, ringX.get(), v));

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      unsubX();
      unsubY();
    };
  }, [x, y, ringX, ringY]);

  if (!isFinePointer) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}

