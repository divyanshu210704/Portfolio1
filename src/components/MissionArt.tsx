import { motion } from 'framer-motion';

const EMBER = '#e8a33d';
const INK = '#f5f5f0';
const FOG = '#a5a5a0';
const LINE = 'rgba(245,245,240,0.14)';

/**
 * Thematic "poster frames" for each mission — line-art scenes drawn
 * in the site's visual language. To use a real screenshot instead,
 * replace <MissionArt id={...}/> in Missions.tsx with an <img/>.
 */

function VideoComposerArt() {
  return (
    <svg viewBox="0 0 800 450" className="h-full w-full" role="img" aria-label="Abstract video-editing timeline with a prompt being composed into scenes">
      <rect x="1" y="1" width="798" height="448" fill="none" stroke={LINE} />
      {/* prompt bar */}
      <rect x="48" y="44" width="460" height="34" fill="none" stroke={LINE} />
      <text x="64" y="66" fill={FOG} fontSize="14" fontFamily="monospace" opacity="0.8">
        &gt; a city waking up at dawn…
      </text>
      <motion.rect x="320" y="52" width="9" height="18" fill={EMBER}
        animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.1, repeat: Infinity }} />
      {/* main viewport */}
      <rect x="48" y="104" width="460" height="240" fill="none" stroke={LINE} />
      <motion.polygon points="258,204 258,244 296,224" fill={EMBER}
        animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
      <text x="64" y="330" fill={FOG} fontSize="11" fontFamily="monospace" opacity="0.6">SCENE 03 — RENDERING VIA WEBCODECS</text>
      {/* scene list */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="532" y={104 + i * 60} width="220" height="48" fill="none" stroke={i === 2 ? EMBER : LINE} />
          <rect x="544" y={118 + i * 60} width="60" height="6" fill={LINE} />
          <rect x="544" y={130 + i * 60} width="96" height="4" fill={LINE} opacity="0.6" />
          <text x="736" y={136 + i * 60} fill={FOG} fontSize="10" fontFamily="monospace" textAnchor="end" opacity="0.6">0{i + 1}</text>
        </g>
      ))}
      {/* timeline */}
      <line x1="48" y1="372" x2="752" y2="372" stroke={LINE} />
      <motion.rect x="48" y="382" width="300" height="8" fill={EMBER} opacity="0.85"
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} style={{ transformOrigin: 'left' }} />
      <rect x="360" y="382" width="140" height="8" fill={LINE} />
      <rect x="512" y="382" width="90" height="8" fill={LINE} />
      {/* waveform */}
      {Array.from({ length: 34 }).map((_, i) => (
        <rect key={i} x={48 + i * 21} y={412 - (Math.sin(i * 1.7) * 8 + 10)} width="3" height={(Math.sin(i * 1.7) * 8 + 10) * 2} fill={FOG} opacity="0.35" />
      ))}
    </svg>
  );
}

function SamadhanArt() {
  const pins = [
    { x: 150, y: 140, active: true },
    { x: 320, y: 220, active: false },
    { x: 430, y: 110, active: false },
    { x: 230, y: 330, active: false },
  ];
  const stats: [string, number, string][] = [
    ['RESOLVED', 150, EMBER],
    ['IN PROGRESS', 96, INK],
    ['PENDING', 54, FOG],
  ];
  return (
    <svg viewBox="0 0 800 450" className="h-full w-full" role="img" aria-label="Abstract city map with issue pins and a resolution dashboard">
      <rect x="1" y="1" width="798" height="448" fill="none" stroke={LINE} />
      {/* map grid */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`h${i}`} x1="48" y1={70 + i * 80} x2="500" y2={70 + i * 80} stroke={LINE} />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={`v${i}`} x1={48 + i * 90} y1="40" x2={48 + i * 90} y2="410" stroke={LINE} />
      ))}
      <path d="M48 380 C 180 340, 260 380, 340 300 S 460 200, 500 120" fill="none" stroke={INK} strokeOpacity="0.25" strokeWidth="2" />
      {/* issue pins */}
      {pins.map((p, i) => (
        <g key={i}>
          <motion.circle cx={p.x} cy={p.y} r="10" fill="none" stroke={p.active ? EMBER : FOG}
            strokeOpacity={p.active ? 1 : 0.5}
            animate={p.active ? { r: [10, 22, 10], opacity: [1, 0.2, 1] } : undefined}
            transition={p.active ? { duration: 2.2, repeat: Infinity } : undefined} />
          <circle cx={p.x} cy={p.y} r="4" fill={p.active ? EMBER : FOG} opacity={p.active ? 1 : 0.5} />
        </g>
      ))}
      <text x="48" y="436" fill={FOG} fontSize="11" fontFamily="monospace" opacity="0.6">LIVE ISSUE MAP — 4 REPORTS IN VIEW</text>
      {/* dashboard panel */}
      <rect x="540" y="60" width="212" height="330" fill="none" stroke={LINE} />
      <text x="560" y="92" fill={INK} fontSize="12" fontFamily="monospace" letterSpacing="2">STATUS</text>
      {stats.map(([label, w, color], i) => (
        <g key={label}>
          <text x="560" y={140 + i * 56} fill={FOG} fontSize="10" fontFamily="monospace" opacity="0.7">{label}</text>
          <motion.rect x="560" y={150 + i * 56} height="8" fill={color} opacity={i === 0 ? 0.9 : 0.4}
            initial={{ width: 0 }} whileInView={{ width: w }} viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }} />
        </g>
      ))}
      <rect x="560" y="320" width="172" height="50" fill="none" stroke={EMBER} strokeOpacity="0.6" />
      <text x="646" y="342" fill={EMBER} fontSize="10" fontFamily="monospace" textAnchor="middle">ROUTE TO</text>
      <text x="646" y="358" fill={EMBER} fontSize="10" fontFamily="monospace" textAnchor="middle">DEPARTMENT →</text>
    </svg>
  );
}

function ChatArt() {
  return (
    <svg viewBox="0 0 800 450" className="h-full w-full" role="img" aria-label="Abstract chat interface exchanging messages with an AI model">
      <rect x="1" y="1" width="798" height="448" fill="none" stroke={LINE} />
      <line x1="48" y1="72" x2="752" y2="72" stroke={LINE} />
      <circle cx="70" cy="56" r="6" fill="none" stroke={EMBER} />
      <text x="90" y="60" fill={INK} fontSize="12" fontFamily="monospace" letterSpacing="2">AI CHAT — SESSION ACTIVE</text>
      {/* user bubble */}
      <rect x="330" y="100" width="330" height="52" fill="none" stroke={LINE} />
      <text x="348" y="124" fill={INK} fontSize="13" fontFamily="monospace" opacity="0.85">how do pointers work in C?</text>
      <text x="348" y="140" fill={FOG} fontSize="10" fontFamily="monospace" opacity="0.5">YOU — 14:02</text>
      {/* ai bubble */}
      <rect x="140" y="180" width="380" height="88" fill="none" stroke={EMBER} strokeOpacity="0.7" />
      <text x="158" y="206" fill={INK} fontSize="13" fontFamily="monospace" opacity="0.85">A pointer holds the address of</text>
      <text x="158" y="226" fill={INK} fontSize="13" fontFamily="monospace" opacity="0.85">another value in memory…</text>
      {[0, 1, 2].map((i) => (
        <motion.circle key={i} cx={162 + i * 14} cy={248} r="3" fill={EMBER}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }} />
      ))}
      {/* input bar */}
      <rect x="140" y="330" width="520" height="46" fill="none" stroke={LINE} />
      <text x="158" y="358" fill={FOG} fontSize="13" fontFamily="monospace" opacity="0.5">ask anything…</text>
      <rect x="676" y="330" width="76" height="46" fill="none" stroke={EMBER} strokeOpacity="0.8" />
      <text x="714" y="358" fill={EMBER} fontSize="11" fontFamily="monospace" textAnchor="middle">SEND</text>
      <text x="140" y="416" fill={FOG} fontSize="11" fontFamily="monospace" opacity="0.6">API KEY SECURED SERVER-SIDE — NETLIFY FUNCTIONS</text>
    </svg>
  );
}

export default function MissionArt({ id }: { id: string }) {
  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden border border-line bg-coal">
      {id === 'm1' && <VideoComposerArt />}
      {id === 'm2' && <SamadhanArt />}
      {id === 'm3' && <ChatArt />}
      {!['m1', 'm2', 'm3'].includes(id) && (
        <p className="px-6 text-center font-mono text-xs tracking-[0.3em] text-fog/50">
          [ SCREENSHOT PLACEHOLDER ]
        </p>
      )}
      <span className="absolute bottom-3 right-4 font-mono text-[9px] tracking-[0.25em] text-fog/40">
        ILLUSTRATED FRAME — REPLACE WITH A REAL SCREENSHOT ANYTIME
      </span>
    </div>
  );
}

