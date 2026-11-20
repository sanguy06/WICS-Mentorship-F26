import WoodButton from "./WoodButton";
import gameplayScreenshot from "../assets/gameplay-screenshot.png";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      {/* Layer 1 — the SAME screenshot, enlarged + blurred, fills the whole hero. */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${gameplayScreenshot})` }}
        aria-hidden="true"
      />
      {/* Darkens the left side so the title reads clearly. */}
      <div className="hero__shade" aria-hidden="true" />
      {/* Bottom transition: ends on the exact About background colour. */}
      <div className="hero__fade" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">A story-based educational game</p>

          <h1 id="hero-title" className="hero__title">
            <span>Farm the</span> <span className="hero__title-accent">Code</span>
          </h1>

          <p className="hero__intro">
            A farming-themed adventure where learning is part of the journey.
            Explore the forest, face the slimes in your path, and answer quiz
            questions along the way.
          </p>

          <WoodButton href="#game">Play Now</WoodButton>
        </div>

        {/* Layer 2 — the sharp, unblurred screenshot. Kept in its own column so
            the title never covers the HUD, the player, or the slime. */}
        <figure className="hero__shot">
          <img
            src={gameplayScreenshot}
            width="1162"
            height="654"
            alt="Farm the Code gameplay: the player, in a red hooded cloak, faces a green slime in a pixel-art forest. The HUD reads “Seeds: 1” and “Defeat the slimes: 1/3”."
          />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
