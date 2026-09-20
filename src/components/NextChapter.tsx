import { nextChapter } from '../data/character';
import SectionLabel from './SectionLabel';
import Reveal, { WordReveal } from './Reveal';

/**
 * NEXT CHAPTER — aspirations framed as an unresolved story.
 * Not "goals"; territories the character intends to walk into.
 */
export default function NextChapter() {
  return (
    <section id="next" aria-label="Next chapter" className="relative mx-auto max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
      <SectionLabel index="08" label="NEXT CHAPTER" />

      <div className="mt-12 max-w-4xl">
        <h2 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          <WordReveal text={nextChapter.lead} />
        </h2>
        <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
          <WordReveal text={nextChapter.follow} className="text-ember" delay={0.3} />
        </h2>
      </div>

      <div className="mt-20 grid gap-10 sm:grid-cols-2">
        {nextChapter.aspirations.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <article className="group border-t border-line pt-6" data-cursor>
              <p className="font-mono text-[11px] tracking-[0.35em] text-ember">DESTINATION 0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-ember">
                {item.title}
              </h3>
              <p className="max-w-md font-body text-sm leading-relaxed text-fog sm:text-base">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
