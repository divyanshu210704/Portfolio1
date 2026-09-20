import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onDone: () => void;
}

/**
 * Netflix-style entry: black screen, the character's "21" mark
 * scales in with an ember glow, a light streak sweeps through,
 * then the overlay curtain-wipes upward to reveal the story.
 * Replays on every refresh; skipped for reduced-motion users.
 */
export default function Preloader({ onDone }: PreloaderProps) {
  const [phase, setPhase] = useState<'mark' | 'exit'>('mark');

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase('exit'), 2100);
    const doneTimer = setTimeout(onDone, 2900);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-void"
      initial={{ y: 0 }}
      animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.83, 0, 0.17, 1] }}
      aria-hidden="true"
    >
      {/* the mark */}
      <div className="relative flex flex-col items-center">
        <motion.span
          initial={{ scale: 2.6, opacity: 0, filter: 'blur(24px)' }}
          animate={
            phase === 'mark'
              ? { scale: 1, opacity: 1, filter: 'blur(0px)' }
              : { scale: 0.94, opacity: 0.9, filter: 'blur(0px)' }
          }
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[34vw] font-bold leading-none text-ember sm:text-[18rem]"
          style={{ textShadow: '0 0 120px rgba(232,163,61,0.45)' }}
        >
          21
        </motion.span>

        {/* light streak sweep */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, delay: 0.9, ease: 'easeInOut' }}
          className="absolute top-1/2 h-px w-[70vw] origin-center bg-gradient-to-r from-transparent via-ember to-transparent"
        />

        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.6em' }}
          transition={{ duration: 1.2, delay: 1.1, ease: 'easeOut' }}
          className="mt-6 font-mono text-xs text-fog sm:text-sm"
        >
          CHARACTER
        </motion.span>
      </div>

      {/* bottom hairline loading bar */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-ember"
      />
    </motion.div>
  );
}
