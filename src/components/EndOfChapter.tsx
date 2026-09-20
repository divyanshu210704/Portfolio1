import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react';
import { contact } from '../data/character';
import Magnetic from './Magnetic';
import { WordReveal } from './Reveal';

/** Simple inline brand marks (lucide-react v1 dropped brand icons). */
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const links = [
  { label: "LET'S TALK", href: `mailto:${contact.email}`, icon: MessageSquare, primary: true },
  { label: 'GITHUB', href: contact.github, icon: GithubIcon, primary: false },
  { label: 'LINKEDIN', href: contact.linkedin, icon: LinkedinIcon, primary: false },
  { label: 'EMAIL', href: `mailto:${contact.email}`, icon: Mail, primary: false },
];

/**
 * END OF CHAPTER — the closing screen. Massive type, four doors
 * out, and one final line before the credits.
 */
export default function EndOfChapter() {
  return (
    <footer id="end" aria-label="End of chapter — contact" className="relative overflow-hidden border-t border-line bg-coal">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-32 sm:px-10 sm:pt-44">
        <p className="text-center font-mono text-xs tracking-[0.4em] text-ember">THE END — FOR NOW</p>

        <h2 className="mt-8 text-center font-display text-[13vw] font-bold leading-[0.95] tracking-tight text-ink sm:text-8xl lg:text-9xl">
          <WordReveal text={contact.heading1} />
        </h2>
        <h2 className="text-center font-display text-[13vw] font-bold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl">
          <WordReveal text={contact.heading2} className="text-stroke" delay={0.25} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-12 max-w-xl text-center font-body text-base leading-relaxed text-fog sm:text-lg"
        >
          {contact.message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          {links.map((link) => (
            <Magnetic key={link.label} strength={0.25}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                data-cursor
                className={`group flex items-center gap-2.5 px-7 py-4 font-mono text-xs tracking-[0.3em] transition-colors duration-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember ${
                  link.primary
                    ? 'bg-ember text-void hover:bg-ink'
                    : 'border border-ink/20 text-ink hover:border-ember hover:text-ember'
                }`}
              >
                <link.icon className="h-4 w-4" aria-hidden="true" />
                {link.label}
                {!link.primary && (
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                )}
              </a>
            </Magnetic>
          ))}
        </motion.div>

        {/* final line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.6, delay: 0.2 }}
          className="mt-28 text-center font-mono text-sm tracking-[0.6em] text-ember sm:text-base"
        >
          {contact.finale}
        </motion.p>

        {/* credits line */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 font-mono text-[10px] tracking-[0.3em] text-fog/50 sm:flex-row">
          <span>CHARACTER 21 — STILL BECOMING</span>
          <span>WRITTEN IN REACT · DIRECTED BY CURIOSITY</span>
        </div>
      </div>
    </footer>
  );
}
