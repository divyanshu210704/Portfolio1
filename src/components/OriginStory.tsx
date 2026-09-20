import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Lock } from 'lucide-react';
import { chapters } from '../data/character';
import SectionLabel from './SectionLabel';
import { WordReveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * ORIGIN STORY — the journey told as six chapters along a vertical
 * story-line. An ember thread fills downward with scroll; each chapter
 * activates as the line reaches it. The final chapter is locked.
 */
export default function OriginStory() {
  const lineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 0.75', 'end 0.6'],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="story" aria-label="Origin story" className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
      <SectionLabel index="02" label="ORIGIN STORY" />

      <h2 className="mt-8 max-w-3xl font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
        <WordReveal text="WHERE THE" />
        <br />
        <WordReveal text="STORY STARTED" className="text-stroke" delay={0.15} />
      </h2>

      <div ref={lineRef} className="relative mt-20 pl-10 sm:pl-16">
        {/* the story line */}
        <div aria-hidden="true" className="absolute bottom-4 left-[7px] top-2 w-px bg-ink/10 sm:left-[15px]">
          <motion.div
            className="h-full w-full origin-top bg-ember"
            style={{ scaleY: lineScale }}
          />
        </div>

        <ol className="space-y-20 sm:space-y-28">
          {chapters.map((chapter, i) => (
            <li key={chapter.index} className="relative">
              {/* node on the line */}
              <motion.span
                aria-hidden="true"
                initial={{ scale: 0, backgroundColor: '#262622' }}
                whileInView={{ scale: 1, backgroundColor: chapter.unlocked ? '#e8a33d' : '#262622' }}
                viewport={{ once: true, margin: '-25%' }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute -left-10 top-2 block h-[15px] w-[15px] rounded-full border-2 border-void ring-1 ring-ink/20 sm:-left-14"
              />

              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20%' }}
                transition={{ duration: 0.8, ease: EASE }}
                className={chapter.unlocked ? '' : 'opacity-70'}
              >
                <p className="font-mono text-[11px] tracking-[0.35em] text-ember">
                  CHAPTER {chapter.index}
                  <span className="ml-4 text-fog/60">{chapter.period}</span>
                </p>

                <h3 className="mt-3 flex items-center gap-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                  {chapter.title}
                  {!chapter.unlocked && (
                    <Lock className="h-5 w-5 text-fog/50" aria-label="Chapter locked — not yet written" />
                  )}
                </h3>

                <p className="mt-5 max-w-2xl font-body text-base leading-relaxed text-fog sm:text-lg">
                  {chapter.body}
                </p>

                {!chapter.unlocked && (
                  <p className="mt-4 font-mono text-[11px] tracking-[0.3em] text-fog/50">
                    [ LOCKED — CONTINUE THE STORY TO UNLOCK ]
                  </p>
                )}

                {i < chapters.length - 1 && (
                  <span aria-hidden="true" className="mt-10 block h-px w-16 bg-line" />
                )}
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
