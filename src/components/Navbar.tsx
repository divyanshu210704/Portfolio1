import { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems, character } from '../data/character';

/**
 * Minimal fixed navigation. Ember scroll-progress hairline on top,
 * mono labels on desktop, a full-screen chapter menu on mobile.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const go = (target: string) => {
    setOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* scroll progress */}
        <motion.div
          className="h-[2px] origin-left bg-ember"
          style={{ scaleX: progress }}
          role="progressbar"
          aria-label="Story progress"
        />
        <nav
          aria-label="Story navigation"
          className="flex items-center justify-between border-b border-line bg-void/70 px-6 py-4 backdrop-blur-md sm:px-10"
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            data-cursor
            className="font-mono text-xs tracking-[0.4em] text-ink transition-colors hover:text-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
          >
            {character.id}
          </button>

          {/* desktop */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <li key={item.target}>
                <button
                  type="button"
                  onClick={() => go(item.target)}
                  data-cursor
                  className="group relative font-mono text-[11px] tracking-[0.25em] text-fog transition-colors duration-300 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-px w-0 bg-ember transition-all duration-300 group-hover:w-full"
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="text-ink transition-colors hover:text-ember lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-void/95 px-8 backdrop-blur-lg lg:hidden"
          >
            <p className="mb-10 font-mono text-xs tracking-[0.4em] text-ember">CHAPTERS</p>
            <ul className="space-y-6">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.target}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <button
                    type="button"
                    onClick={() => go(item.target)}
                    className="flex items-baseline gap-4 text-left"
                  >
                    <span className="font-mono text-xs text-fog/60">0{i + 1}</span>
                    <span className="font-display text-3xl font-semibold tracking-tight text-ink">
                      {item.label}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
