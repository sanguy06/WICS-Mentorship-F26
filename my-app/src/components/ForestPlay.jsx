import WoodButton from "./WoodButton";
import forestBackground from "../assets/forest-play-background.png";
import "./ForestPlay.css";

/* Visual bridge between About and the Game: one forest image, one Play button. */
function ForestPlay() {
  return (
    <section
      className="forest"
      aria-label="Start playing"
      style={{ "--forest-image": `url(${forestBackground})` }}
    >
      {/* Positioned over the brightest part of the clearing. */}
      <div className="forest__spot">
        <WoodButton href="#game" size="lg">
          Play Game
        </WoodButton>
      </div>
    </section>
  );
}

export default ForestPlay;
