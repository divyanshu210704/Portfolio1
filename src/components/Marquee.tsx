import { character } from '../data/character';

const PHRASES = [
  character.epithet,
  'EVERY CHARACTER HAS A BEGINNING',
  'BUILT, BROKEN, REBUILT',
  'THE STORY ISN\'T FINISHED',
];

/** A slow editorial marquee used as a divider between chapters. */
export default function Marquee() {
  const row = [...PHRASES, ...PHRASES];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line py-5">
      <div className="marquee-track">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((phrase, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-mono text-xs tracking-[0.4em] text-fog/50">
                  {phrase}
                </span>
                <span className="h-1 w-1 rounded-full bg-ember/60" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
