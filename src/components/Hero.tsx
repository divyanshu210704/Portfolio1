import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { character } from '../data/character';
import Magnetic from './Magnetic';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The movie opening. A dark screen, a mono file label, an epithet,
 * then the name revealed like a title card. Parallaxes away as the
 * visitor scrolls into the story.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const giantY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const enterStory = () => {
    document.getElementById('character')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="opening"
      aria-label="Opening title sequence"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden"
    >
      {/* backdrop: giant outlined "01" + scanline */}
      <motion.span
        aria-hidden="true"
        style={{ y: giantY }}
        className="text-stroke pointer-events-none absolute select-none font-display text-[38vw] font-bold leading-none"
      >
        01
      </motion.span>
      <div className="scanline" aria-hidden="true" />

      {/* top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute left-6 right-6 top-20 flex items-center justify-between font-mono text-[10px] tracking-[0.35em] text-fog/70 sm:left-10 sm:right-10 sm:text-xs"
      >
        <span>A PORTFOLIO IN ONE CHARACTER</span>
        <span className="hidden sm:inline">FILE — {character.id}</span>
      </motion.div>

      <motion.div style={{ opacity: fade }} className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* glitchy file label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-cursor
          className="glitch group relative mb-6 font-mono text-xs tracking-[0.5em] text-ember sm:text-sm"
          data-text={character.id}
        >
          {character.id}
          <span className="absolute -bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-ember transition-all duration-500 group-hover:w-full" />
        </motion.p>

        {/* epithet */}
        <div className="mb-8 overflow-hidden">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="font-mono text-xs tracking-[0.3em] text-fog sm:text-sm"
          >
            {character.epithet}
          </motion.p>
        </div>

        {/* the name, letter by letter */}
        <motion.h1
          style={{ y: nameY }}
          className="font-display text-[16vw] font-bold leading-[0.9] tracking-tight text-ink sm:text-[12vw] lg:text-[9.5rem]"
          aria-label={character.name}
        >
          {character.name.split('').map((letter, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              className="inline-block will-change-transform"
              initial={{ y: '115%', rotate: 4 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.9, delay: 1.6 + i * 0.05, ease: EASE }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: EASE }}
          className="mt-6 font-mono text-xs tracking-[0.25em] text-fog sm:text-sm"
        >
          {character.tagline}
        </motion.p>

        {/* intro line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-10 max-w-md font-body text-base italic text-ink/80 sm:text-lg"
        >
          “{character.introLine}”
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.5, ease: EASE }}
          className="mt-14"
        >
          <Magnetic strength={0.35}>
            <button
              type="button"
              onClick={enterStory}
              data-cursor
              className="group relative flex items-center gap-3 border border-ink/20 px-8 py-4 font-mono text-xs tracking-[0.35em] text-ink transition-colors duration-500 hover:border-ember hover:text-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
            >
              {character.cta}
              <ArrowDown className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-1" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ember/10 transition-transform duration-500 group-hover:scale-y-100"
              />
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* bottom hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4.2 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-fog/50"
      >
        <span>SCROLL</span>
        <motion.span
          aria-hidden="true"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-ember/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}