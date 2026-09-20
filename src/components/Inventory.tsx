import { motion } from 'framer-motion';
import { inventory, type InventoryItem } from '../data/character';
import SectionLabel from './SectionLabel';
import { WordReveal } from './Reveal';

const EASE = [0.22, 1, 0.36, 1] as const;

const rarityStyles: Record<InventoryItem['rarity'], string> = {
  COMMON: 'text-fog/70 border-line',
  RARE: 'text-ink border-ink/25',
  EPIC: 'text-ember border-ember/40',
  LEGENDARY: 'text-ember border-ember bg-ember/10',
};

/**
 * INVENTORY — the character's belongings as collectible items.
 * Hover lifts the card and reveals its flavor text.
 */
export default function Inventory() {
  return (
    <section id="inventory" aria-label="Inventory" className="relative bg-coal py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <SectionLabel index="05" label="INVENTORY" />

        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-5xl font-bold tracking-tight text-ink sm:text-7xl">
            <WordReveal text="WHAT HE" />
            <br />
            <WordReveal text="CARRIES" className="text-stroke" delay={0.15} />
          </h2>
          <p className="max-w-xs font-body text-sm leading-relaxed text-fog">
            Technologies, tools, habits, and half-formed ideas — everything the
            character keeps in his pockets.
          </p>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {inventory.map((item, i) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: EASE }}
              data-cursor
              className="group relative border border-line bg-void p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-ember/40 hover:shadow-[0_20px_40px_-20px_rgba(232,163,61,0.15)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.25em] text-ember">{item.kind}</span>
                <span className={`border px-2 py-0.5 font-mono text-[9px] tracking-[0.25em] ${rarityStyles[item.rarity]}`}>
                  {item.rarity}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-ember">
                {item.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-fog opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                {item.note}
              </p>
              {/* corner tick */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 h-3 w-3 border-l border-t border-transparent transition-colors duration-300 group-hover:border-ember/60"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
