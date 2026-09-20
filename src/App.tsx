import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CharacterProfile from './components/CharacterProfile';
import OriginStory from './components/OriginStory';
import SkillTree from './components/SkillTree';
import Missions from './components/Missions';
import Inventory from './components/Inventory';
import CurrentQuest from './components/CurrentQuest';
import Traits from './components/Traits';
import NextChapter from './components/NextChapter';
import EndOfChapter from './components/EndOfChapter';
import Marquee from './components/Marquee';

/**
 * The story, in order:
 * opening → meet the character → where he came from → what he's
 * learned → what he's built → what he carries → what he's working
 * toward → how he's written → what happens next → to be continued.
 */
export default function App() {
  return (
    <div className="grain relative">
      <a
        href="#character"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-ember focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-void"
      >
        Skip to the story
      </a>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <CharacterProfile />
        <Marquee />
        <OriginStory />
        <SkillTree />
        <Missions />
        <Inventory />
        <CurrentQuest />
        <Traits />
        <NextChapter />
        <EndOfChapter />
      </main>
    </div>
  );
}
