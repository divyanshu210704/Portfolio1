import { motion } from 'framer-motion';
import { skillTree } from '../data/character';
import SectionLabel from './SectionLabel';
import Reveal, { WordReveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * SKILL TREE — three branches of a character build.
 * Nodes illuminate on hover/focus and reveal a field note.
 * Levels are deliberately honest: progression, not fake expertise.
 */
export default function SkillTree() {
  return (
    <section id="skills" aria-label="Skill tree" className="relative bg-coal py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionLabel index="03" label="SKILL TREE" />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
            <WordReveal text="WHAT HE" />
            <br />
            <WordReveal text="IS LEARNING" className="text-stroke" delay={0.15} />
          </h2>
          <Reveal delay={0.2}>
            <p className="max-w-xs font-body text-sm leading-relaxed text-fog">
              No fake percentages. These bars measure distance traveled, with
              plenty of road left on purpose.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {skillTree.map((branch, bi) => (
            <div key={branch.id} className="relative">
              {/* branch spine */}
              <span aria-hidden="true" className="absolute bottom-0 left-[5px] top-8 w-px bg-ink/10" />

              <Reveal delay={bi * 0.1}>
                <h3 className="mb-8 flex items-center gap-3 font-mono text-xs tracking-[0.35em] text-ember">
                  <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full border border-ember bg-ember/30" />
                  {branch.title}
                </h3>
              </Reveal>

              <ul className="space-y-5 pl-7">
                {branch.nodes.map((node, ni) => (
                  <motion.li
                    key={node.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: ni * 0.06, ease: EASE }}
                    className="group relative rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember"
                    data-cursor
                    tabIndex={0}
                  >
                    {/* connector */}
                    <span
                      aria-hidden="true"
                      className="absolute -left-7 top-1/2 h-px w-5 bg-ink/15 transition-colors duration-300 group-hover:bg-ember/60 group-focus-visible:bg-ember/60"
                    />
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-body text-sm font-medium text-ink transition-colors duration-300 group-hover:text-ember group-focus-visible:text-ember">
                        {node.name}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest text-fog/60">
                        LVL {node.level}
                      </span>
                    </div>
                    <div className="mt-2 h-[2px] w-full bg-ink/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${node.level}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1, delay: 0.2 + ni * 0.06, ease: EASE }}
                        className="h-full bg-ember/70 transition-all duration-300 group-hover:bg-ember group-hover:shadow-[0_0_12px_rgba(232,163,61,0.6)]"
                      />
                    </div>
                    {/* hover field note — opens left on the last column so it never overflows */}
                    <p
                      className={`pointer-events-none mt-2 max-w-[26ch] font-body text-xs italic leading-relaxed text-fog opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 md:absolute md:top-0 md:z-10 md:mt-0 md:w-56 md:border md:border-line md:bg-void md:p-3 md:shadow-xl ${
                        bi === skillTree.length - 1 ? 'md:right-full md:mr-4' : 'md:left-full md:ml-4'
                      }`}
                    >
                      {node.detail}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
