import { motion } from 'framer-motion';
import { traits } from '../data/character';
import SectionLabel from './SectionLabel';
import { WordReveal } from './Reveal';

/**
 * CHARACTER TRAITS — personality told as an editorial index rather
 * than a list of adjectives. Hovering a row lights up the trait.
 */
export default function Traits() {
  return (
    <section id="traits" aria-label="Character traits" className="relative bg-coal py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionLabel index="07" label="CHARACTER TRAITS" />

        <h2 className="mt-8 font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
          <WordReveal text="HOW HE" />
          <br />
          <WordReveal text="IS WRITTEN" className="text-stroke" delay={0.15} />
        </h2>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {traits.map((trait, i) => (
            <motion.li
              key={trait.word}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              data-cursor
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2 py-7 transition-colors duration-300 hover:bg-ink/[0.03] sm:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-x-10 sm:py-9"
            >
              <span className="font-mono text-xs text-fog/50 transition-colors group-hover:text-ember">
                0{i + 1}
              </span>
              <h3 className="font-display text-3xl font-bold tracking-tight text-fog/60 transition-all duration-500 group-hover:translate-x-2 group-hover:text-ink sm:text-5xl">
                {trait.word}
              </h3>
              <p className="col-start-2 max-w-md font-body text-sm leading-relaxed text-fog sm:col-start-3 sm:text-base">
                {trait.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
