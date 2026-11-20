import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ForestPlay from "./components/ForestPlay";
import GameSection from "./components/GameSection";

/*
 * One continuous page — no router:
 *   Home (#home) → About (#about) → Forest Play transition → Game (#game)
 * The Navbar and every Play button are plain same-page anchor links.
 * (Footer.jsx / Footer.css are kept in /components but no longer rendered.)
 */
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ForestPlay />
        {/* GAME SECTION — reserved for Kira and the Game Development Team.
            Intentionally empty: the playable game will be integrated here. 
            <section id="game" className="game-section" aria-label="Game" />*/}
        <GameSection />
      </main>
    </>
  );
}

export default App;
