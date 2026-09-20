import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { questNow } from '../data/character';
import SectionLabel from './SectionLabel';
import { WordReveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * CURRENT QUEST — the emotional center of the site.
 * A giant statement with parallax, followed by the five verbs
 * the character is currently living by.
 */
export default function CurrentQuest() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section ref={ref} id="quest" aria-label="Current quest" className="relative overflow-hidden py-32 sm:py-44">
      {/* parallax backdrop word */}
      <motion.span
        aria-hidden="true"
        style={{ y: bgY }}
        className="text-stroke pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none"
      >
        QUEST
      </motion.span>

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <SectionLabel index="06" label="CURRENT QUEST" />

        <h2 className="mt-10 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
          <WordReveal text="The story" />
          <br />
          <WordReveal text="isn't" delay={0.2} />{' '}
          <WordReveal text="finished." className="text-ember" delay={0.3} />
        </h2>

        <div className="mt-20 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {questNow.map((item, i) => (
            <motion.div
              key={item.verb}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.09, ease: EASE }}
              data-cursor
              className="group bg-void p-6 transition-colors duration-500 hover:bg-coal sm:p-8"
            >
              <span className="font-mono text-[10px] tracking-[0.35em] text-fog/50">0{i + 1}</span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-ember">
                {item.verb}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-fog">{item.body}</p>
              <span
                aria-hidden="true"
                className="mt-6 block h-px w-0 bg-ember transition-all duration-700 group-hover:w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
