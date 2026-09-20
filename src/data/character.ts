/* ------------------------------------------------------------------
 * CHARACTER SHEET
 * ------------------------------------------------------------------
 * Every piece of content on the site lives here.
 * Replace the placeholder values with your real details — no
 * component code needs to change.
 * ------------------------------------------------------------------ */

export const character = {
  id: 'CHARACTER 21',
  epithet: 'THE ONE WHO IS STILL BECOMING.',
  name: 'DIVYANSHU SINGH CHAUHAN',
  tagline: 'Computer Science Student · Builder · Learner',
  introLine: 'Every character has a beginning. This is mine.',
  cta: 'ENTER THE STORY',
};

export const profile = {
  name: 'Divyanshu Singh Chauhan',
  klass: 'Computer Science Student',
  level: 21,
  location: 'India', // PLACEHOLDER — your city / region
  currentQuest: 'Becoming an exceptional engineer',
  specialization: 'Computer Science / Design',
  status: 'Still evolving',
  attributes: [
    // values are honest, not heroic — the UI shows growth, not perfection
    { label: 'Problem Solving', value: 68, note: 'Sharpened by DSA practice' },
    { label: 'Programming', value: 72, note: 'Comfortable, still deepening' },
    { label: 'Curiosity', value: 92, note: 'The primary stat' },
    { label: 'Learning', value: 84, note: 'Trains daily' },
    { label: 'Creativity', value: 76, note: 'Expressed through building' },
    { label: 'Consistency', value: 58, note: 'The hardest boss fight' },
  ],
};

export interface Chapter {
  index: string;
  title: string;
  period: string;
  body: string;
  unlocked: boolean; // future chapters are "locked" — part of the fiction
}

export const chapters: Chapter[] = [
  {
    index: '01',
    title: 'THE BEGINNING',
    period: 'THE EARLY YEARS',
    body: 'It started the way most stories do — not with a plan, but with curiosity. A computer at home, too many questions, and the quiet realization that machines could be made to do things. Nobody handed over a script. The interest just kept showing up.',
    unlocked: true,
  },
  {
    index: '02',
    title: 'DISCOVERY',
    period: 'FIRST LINES OF CODE',
    body: 'The first program was small and broke immediately. That was the hook. Discovering that logic could be written, run, debugged, and improved turned the computer from a device into a place — somewhere worth spending years.',
    unlocked: true,
  },
  {
    index: '03',
    title: 'LEARNING',
    period: 'THE FOUNDATIONS',
    body: 'Computer science stopped being a hobby and became a discipline. Data structures, operating systems, networks, databases — the unglamorous fundamentals that everything real is built on. Slow progress. The right kind.',
    unlocked: true,
  },
  {
    index: '04',
    title: 'BUILDING',
    period: 'FROM THEORY TO THINGS',
    body: "Ideas started turning into projects. Small tools, experiments, half-finished prototypes. Some worked. Many didn't. Every broken build taught more than the tutorials ever did — this is where the character actually started forming.",
    unlocked: true,
  },
  {
    index: '05',
    title: 'THE CURRENT QUEST',
    period: 'RIGHT NOW',
    body: 'A computer science student in the middle of the arc — deepening fundamentals, shipping small projects, and trying to become someone whose work speaks before he does. Not the hero yet. The one training to be.',
    unlocked: true,
  },
  {
    index: '06',
    title: 'WHAT COMES NEXT',
    period: 'UNWRITTEN',
    body: "This chapter hasn't been written yet. That's not a gap in the story — it is the story.",
    unlocked: false,
  },
];

export interface SkillNode {
  name: string;
  level: number; // 0–100, intentionally honest
  detail: string;
}

export interface SkillBranch {
  id: string;
  title: string;
  nodes: SkillNode[];
}

export const skillTree: SkillBranch[] = [
  {
    id: 'programming',
    title: 'PROGRAMMING',
    nodes: [
      { name: 'Python', level: 75, detail: 'Primary language. Scripts, problem solving, and small tools.' },
      { name: 'C / C++', level: 65, detail: 'Where the fundamentals live — memory, pointers, discipline.' },
      { name: 'JavaScript', level: 62, detail: 'Building for the browser and learning how the web really works.' },
      { name: 'HTML / CSS', level: 70, detail: 'Structure and styling — the difference between working and crafted.' },
    ],
  },
  {
    id: 'cs',
    title: 'COMPUTER SCIENCE',
    nodes: [
      { name: 'DSA', level: 64, detail: 'A long game. Practiced regularly, mastered gradually.' },
      { name: 'Operating Systems', level: 55, detail: 'Processes, memory, scheduling — learning what runs beneath everything.' },
      { name: 'DBMS', level: 58, detail: 'Data modeled honestly: schemas, queries, normalization.' },
      { name: 'Computer Networks', level: 50, detail: 'How machines talk. Still mapping the territory.' },
      { name: 'Compiler Design', level: 42, detail: 'The most intimidating branch so far. Early stages, genuinely curious.' },
      { name: 'Computer Architecture', level: 48, detail: 'From transistors to instruction cycles — the machine under the machine.' },
    ],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    nodes: [
      { name: 'Git', level: 68, detail: 'Version control as a habit, not an afterthought.' },
      { name: 'GitHub', level: 70, detail: 'Where the work lives in public.' },
      { name: 'VS Code', level: 80, detail: 'Home base. Tuned, themed, and lived in.' },
      { name: 'Figma / Canva', level: 52, detail: 'Enough design sense to know what good looks like.' },
    ],
  },
];

export interface Mission {
  id: string;
  index: string;
  name: string;
  status: 'COMPLETED' | 'IN PROGRESS' | 'PROTOTYPE';
  problem: string;
  built: string;
  tech: string[];
  outcome: string;
  lesson: string;
  link: string;
}

export const missions: Mission[] = [
  {
    id: 'm1',
    index: '01',
    name: 'AI VIDEO COMPOSER',
    status: 'COMPLETED',
    problem: 'Turning a plain text prompt into an actual video — visuals, voiceover, music, motion graphics — normally takes an editor, a timeline, and hours of manual work.',
    built: 'Contributed to an AI-driven cinematic orchestration platform that composes complete videos from simple prompts: an LLM "director" plans scenes, stock media and music are sourced automatically, voiceovers sync to scenes, and everything renders to MP4 in the browser via WebCodecs — in both 16:9 and vertical formats.',
    tech: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'WebCodecs', 'ElevenLabs', 'Edge Functions'],
    outcome: 'A working pipeline from a single prompt to a fully realized video composition. Team build — my fork carries my contributions to the platform.',
    lesson: 'Orchestrating five AI and media services into one coherent pipeline is a systems problem, not a prompt problem.',
    link: 'https://github.com/divyanshu210704/aivideocomposer',
  },
  {
    id: 'm2',
    index: '02',
    name: 'SMART SAMADHAN',
    status: 'COMPLETED',
    problem: 'Civic issues — potholes, broken lights, sanitation — get reported through chaos: phone calls, WhatsApp messages, and complaints that vanish with no status tracking.',
    built: 'A civic issue reporting system: citizens submit reports with photos and location and track their status, while admins get a dashboard with an interactive map, category/priority filters, department routing, citizen notifications, and analytics exports.',
    tech: ['React', 'JavaScript', 'Vite', 'Maps', 'Dashboards'],
    outcome: 'A complete report-to-resolution flow on both sides of the counter — citizen and administrator — built as a team project.',
    lesson: 'Software that serves the public has to be understandable by everyone, not just developers.',
    link: 'https://github.com/divyanshu210704/SmartSamadhan',
  },
  {
    id: 'm3',
    index: '03',
    name: 'CHATGPT CLONE',
    status: 'COMPLETED',
    problem: 'Wanted to understand how a conversational AI product actually works end to end — not just how to call an API, but how the interface, the server, and the model fit together.',
    built: 'A working ChatGPT-style web app: a chat interface in vanilla HTML/CSS/JS talking to an AI model through serverless functions on Netlify, keeping API keys off the client.',
    tech: ['JavaScript', 'HTML/CSS', 'Netlify Functions', 'AI API'],
    outcome: 'A functioning AI chat app, built from scratch and deployed — my first full loop from interface to model to response.',
    lesson: 'The interface is the easy half — secrets, latency, and error handling are the real product.',
    link: 'https://github.com/divyanshu210704/Chatgpt',
  },
];

export interface InventoryItem {
  kind: string; // e.g. [ CODE ]
  name: string;
  note: string;
  rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
}

export const inventory: InventoryItem[] = [
  { kind: '[ CODE ]', name: 'Python', note: 'Primary weapon of choice.', rarity: 'RARE' },
  { kind: '[ CODE ]', name: 'C / C++', note: 'Heavy armor. Slow to equip, hard to break.', rarity: 'RARE' },
  { kind: '[ CODE ]', name: 'Java', note: 'Strict but reliable. Teaches discipline in every line.', rarity: 'RARE' },
  { kind: '[ CODE ]', name: 'JavaScript', note: 'Fast, flexible, occasionally chaotic.', rarity: 'COMMON' },
  { kind: '[ IDE ]', name: 'VS Code', note: 'Where most of the story gets written.', rarity: 'COMMON' },
  { kind: '[ TOOL ]', name: 'Git + GitHub', note: 'Every version of the character, preserved.', rarity: 'RARE' },
  { kind: '[ BOOK ]', name: 'CS Fundamentals', note: 'OS, DBMS, networks, architecture — the slow-burn grimoire.', rarity: 'EPIC' },
  { kind: '[ RESOURCE ]', name: 'Documentation', note: 'The unglamorous habit that separates builders from copy-pasters.', rarity: 'EPIC' },
  { kind: '[ CERT ]', name: 'Certifications', note: 'PLACEHOLDER — add your certificates here.', rarity: 'RARE' },
  { kind: '[ IDEA ]', name: 'The Backlog', note: 'More ideas than time. Exactly how it should be.', rarity: 'LEGENDARY' },
  { kind: '[ TRAIT ]', name: 'Curiosity', note: 'Passive ability. Cannot be unequipped.', rarity: 'LEGENDARY' },
  { kind: '[ STATUS ]', name: 'Student', note: 'Temporary title. Upgrades available.', rarity: 'COMMON' },
];

export const questNow = [
  {
    verb: 'LEARNING',
    body: 'Deepening computer science fundamentals — the kind of knowledge that compounds quietly for years.',
  },
  {
    verb: 'BUILDING',
    body: 'Turning coursework and curiosity into small, finished things. Done beats perfect.',
  },
  {
    verb: 'IMPROVING',
    body: 'Refactoring old code, rereading old notes, noticing what the past version got wrong.',
  },
  {
    verb: 'PREPARING',
    body: 'Practicing problem solving and CS core subjects — laying track for opportunities not yet visible.',
  },
  {
    verb: 'EXPERIMENTING',
    body: 'Following tangents on purpose. Some of the best items in the inventory started as distractions.',
  },
];

export const nextChapter = {
  lead: "I don't know exactly where the story ends.",
  follow: "That's what makes the next chapter interesting.",
  aspirations: [
    {
      title: 'ENGINEERING DEPTH',
      body: 'Becoming the kind of engineer who understands systems end to end — not just the layer he works on.',
    },
    {
      title: 'PRODUCTS THAT MATTER',
      body: 'Building software that real people rely on, and learning what responsibility at scale actually means.',
    },
    {
      title: 'UNEXPLORED MAP',
      body: 'Systems, developer tools, applied AI, interfaces — territories marked on the map, not yet traveled.',
    },
    {
      title: 'A STORY WORTH TELLING',
      body: 'Work good enough that the portfolio eventually writes itself.',
    },
  ],
};

export const traits = [
  { word: 'CURIOUS', body: "Asks the extra question. The one the tutorial didn't cover." },
  { word: 'PERSISTENT', body: 'Treats "it doesn\'t work" as the start of the problem, not the end.' },
  { word: 'EXPERIMENTAL', body: 'Builds to learn. Breaks things on purpose, then reads the wreckage.' },
  { word: 'OBSERVANT', body: 'Notices how good software feels, and asks why.' },
  { word: 'AMBITIOUS', body: 'Quiet about it. Loud ambition is cheap; shipped work is not.' },
  { word: 'STILL LEARNING', body: 'The most honest trait on the list. Permanently.' },
];

export const contact = {
  heading1: 'END OF CHAPTER.',
  heading2: 'NOT THE STORY.',
  message:
    'If you want to build something, solve something, or simply continue the conversation — the next page is blank and the pen is shared.',
  finale: 'TO BE CONTINUED…',
  email: 'divyanshu210704@gmail.com',
  github: 'https://github.com/divyanshu210704',
  linkedin: 'https://www.linkedin.com/in/divyanshu-singh-chauhan-320947335/',
};

export const navItems = [
  { label: 'CHARACTER', target: 'character' },
  { label: 'STORY', target: 'story' },
  { label: 'SKILLS', target: 'skills' },
  { label: 'MISSIONS', target: 'missions' },
  { label: 'QUEST', target: 'quest' },
  { label: 'NEXT CHAPTER', target: 'next' },
];

