import { motion } from 'framer-motion';
import { profile } from '../data/character';
import SectionLabel from './SectionLabel';
import Reveal, { WordReveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const fields: { label: string; value: string | number }[] = [
  { label: 'NAME', value: profile.name },
  { label: 'CLASS', value: profile.klass },
  { label: 'LEVEL', value: profile.level },
  { label: 'LOCATION', value: profile.location },
  { label: 'CURRENT QUEST', value: profile.currentQuest },
  { label: 'SPECIALIZATION', value: profile.specialization },
  { label: 'STATUS', value: profile.status },
];

/**
 * THE CHARACTER — a premium game-style profile screen.
 * Data sheet on the left, honest attribute bars on the right.
 */
export default function CharacterProfile() {
  return (
    <section id="character" aria-label="The character" className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
      <SectionLabel index="01" label="THE CHARACTER" />

      <h2 className="mt-8 font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
        <WordReveal text="MEET THE" />
        <br />
        <WordReveal text="CHARACTER" className="text-stroke" delay={0.15} />
      </h2>

      <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        {/* data sheet */}
        <Reveal>
          <dl className="divide-y divide-line border-y border-line">
            {fields.map((field, i) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                className="group flex items-baseline justify-between gap-6 py-4"
              >
                <dt className="shrink-0 font-mono text-[11px] tracking-[0.3em] text-fog/70 transition-colors group-hover:text-ember">
                  {field.label}
                </dt>
                <dd className="text-right font-body text-sm text-ink sm:text-base">{field.value}</dd>
              </motion.div>
            ))}
          </dl>

          <p className="mt-8 max-w-md font-body text-sm leading-relaxed text-fog">
            Not a finished product. Not a prodigy. A student in the middle of
            becoming — and comfortable saying so, because the becoming is the
            interesting part.
          </p>
        </Reveal>

        {/* attributes */}
        <div>
          <p className="mb-6 flex items-center justify-between font-mono text-[11px] tracking-[0.3em] text-fog/70">
            <span>ATTRIBUTES</span>
            <span className="text-ember/80">HONEST VALUES — GROWTH, NOT PERFECTION</span>
          </p>
          <ul className="space-y-6">
            {profile.attributes.map((attr, i) => (
              <li key={attr.label} className="group" data-cursor>
                <div className="mb-2 flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-ink transition-colors group-hover:text-ember">
                    {attr.label.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-fog">
                    {attr.value}
                    <span className="text-fog/40">/100</span>
                  </span>
                </div>
                <div
                  className="h-[3px] w-full bg-ink/10"
                  role="meter"
                  aria-valuenow={attr.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${attr.label}: ${attr.value} out of 100 — ${attr.note}`}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${attr.value}%` }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 1.2, delay: 0.15 + i * 0.08, ease: EASE }}
                    className="h-full bg-gradient-to-r from-ember/50 to-ember"
                  />
                </div>
                <p className="mt-1.5 font-body text-xs italic text-fog/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {attr.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
