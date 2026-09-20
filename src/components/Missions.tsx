import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { missions, type Mission } from '../data/character';
import SectionLabel from './SectionLabel';
import { WordReveal } from './Reveal';
import MissionArt from './MissionArt';

const EASE = [0.22, 1, 0.36, 1] as const;

const statusStyles: Record<Mission['status'], string> = {
  COMPLETED: 'text-ember border-ember/40',
  'IN PROGRESS': 'text-ink border-ink/30',
  PROTOTYPE: 'text-fog border-fog/30',
};

/**
 * MISSIONS — projects as entries in the character's quest log.
 * Clicking one expands a cinematic case-study overlay.
 */
export default function Missions() {
  const [active, setActive] = useState<Mission | null>(null);

  // Escape closes the case study; lock body scroll while it's open.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active]);

  return (
    <section id="missions" aria-label="Missions — projects" className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
      <SectionLabel index="04" label="MISSION LOG" />

      <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
          <WordReveal text="THINGS" />
          <br />
          <WordReveal text="HE HAS BUILT" className="text-stroke" delay={0.15} />
        </h2>
        <p className="max-w-xs font-body text-sm leading-relaxed text-fog">
          Every project is a mission: a problem, an attempt, an outcome, and a
          lesson that stays in the inventory.
        </p>
      </div>

      <ul className="mt-16 divide-y divide-line border-y border-line">
        {missions.map((mission, i) => (
          <motion.li
            key={mission.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
          >
            <button
              type="button"
              onClick={() => setActive(mission)}
              data-cursor
              aria-haspopup="dialog"
              className="group grid w-full grid-cols-[auto_1fr] items-center gap-x-6 gap-y-3 py-8 text-left transition-colors duration-300 hover:bg-ink/[0.03] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ember sm:grid-cols-[5rem_1fr_auto_auto] sm:gap-x-10 sm:py-10"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-fog/60 transition-colors group-hover:text-ember">
                MISSION {mission.index}
              </span>
              <span className="col-start-1 -col-end-1 row-start-2 font-display text-2xl font-semibold tracking-tight text-ink transition-transform duration-500 group-hover:translate-x-2 sm:col-start-2 sm:row-start-auto sm:text-4xl">
                {mission.name}
              </span>
              <span className={`hidden border px-3 py-1 font-mono text-[10px] tracking-[0.25em] sm:inline-block ${statusStyles[mission.status]}`}>
                {mission.status}
              </span>
              <span className="hidden items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-fog transition-colors group-hover:text-ember sm:flex">
                VIEW MISSION
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      <p className="mt-6 font-mono text-[11px] tracking-[0.25em] text-fog/50">
        [ SELECT A MISSION TO OPEN THE FULL DEBRIEF ]
      </p>

      {/* case-study overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-void/90 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`Mission ${active.index}: ${active.name}`}
            onClick={() => setActive(null)}
          >
            <motion.article
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="mx-auto min-h-full max-w-4xl px-6 py-24 sm:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-6">
                <p className="font-mono text-xs tracking-[0.4em] text-ember">MISSION {active.index}</p>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  aria-label="Close mission"
                  className="border border-ink/20 p-2 text-fog transition-colors hover:border-ember hover:text-ember focus-visible:outline-2 focus-visible:outline-ember"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <h3 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-6xl">
                {active.name}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span key={t} className="border border-line px-3 py-1 font-mono text-[11px] tracking-[0.2em] text-fog">
                    {t}
                  </span>
                ))}
                <span className={`border px-3 py-1 font-mono text-[11px] tracking-[0.2em] ${statusStyles[active.status]}`}>
                  {active.status}
                </span>
              </div>

              {/* mission poster frame — swap for a real screenshot anytime */}
              <div className="mt-12">
                <MissionArt id={active.id} />
              </div>

              <div className="mt-12 grid gap-10 sm:grid-cols-2">
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.35em] text-ember">THE PROBLEM</h4>
                  <p className="mt-3 font-body text-base leading-relaxed text-fog">{active.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.35em] text-ember">WHAT WAS BUILT</h4>
                  <p className="mt-3 font-body text-base leading-relaxed text-fog">{active.built}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.35em] text-ember">THE OUTCOME</h4>
                  <p className="mt-3 font-body text-base leading-relaxed text-fog">{active.outcome}</p>
                </div>
                <div className="border-l-2 border-ember pl-5">
                  <h4 className="font-mono text-[11px] tracking-[0.35em] text-ember">LESSON KEPT</h4>
                  <p className="mt-3 font-body text-base italic leading-relaxed text-ink">“{active.lesson}”</p>
                </div>
              </div>

              <a
                href={active.link}
                target="_blank"
                rel="noreferrer"
                data-cursor
                className="group mt-12 inline-flex items-center gap-2.5 border border-ink/20 px-7 py-4 font-mono text-xs tracking-[0.3em] text-ink transition-colors duration-300 hover:border-ember hover:text-ember focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
              >
                VIEW SOURCE ON GITHUB
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}