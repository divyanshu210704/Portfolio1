import { motion } from 'framer-motion';

interface SectionLabelProps {
  index: string;
  label: string;
}

/** Small mono chapter marker, e.g. "01 / THE CHARACTER". */
export default function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-4"
    >
      <span className="font-mono text-xs tracking-[0.3em] text-ember">{index}</span>
      <span className="h-px w-10 bg-ember/40" aria-hidden="true" />
      <span className="font-mono text-xs tracking-[0.3em] text-fog">{label}</span>
    </motion.div>
  );
}
