import { useEffect, useRef, useState } from "react";
import gameplayScreenshot from "../assets/gameplay-screenshot.png";
import "./GameSection.css";

/* Godot web export lives in /public/game*/
const GAME_URL = "/game/test.html";

/*
 * Game section: shows a centered snapshot of the game. Clicking it loads the
 * game and puts it in fullscreen. After the player presses Esc, the game keeps running 
 * inline and a small button lets them go fullscreen again.
 */
function GameSection() {
  const stageRef = useRef(null);
  const iframeRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onChange = () =>
      setIsFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Must run directly inside the click handler: browsers only allow
  // fullscreen in response to a user gesture.
  function enterFullscreen() {
    const stage = stageRef.current;
    const request =
      stage.requestFullscreen?.bind(stage) ??
      stage.webkitRequestFullscreen?.bind(stage);
    request?.()?.catch?.(() => {});
    iframeRef.current?.focus();
  }

  function start() {
    enterFullscreen();
    setStarted(true);
  }

  return (
    <section id="game" className="game-section" aria-label="Game">
      <div ref={stageRef} className="game-stage">
        {started ? (
          <>
            <iframe
              ref={iframeRef}
              className="game-stage__frame"
              src={GAME_URL}
              title="Farm the Code game"
              allow="fullscreen; autoplay; gamepad"
              onLoad={() => iframeRef.current?.focus()}
            />
            {!isFullscreen && (
              <button
                type="button"
                className="game-stage__fs-btn"
                onClick={enterFullscreen}
                aria-label="Play fullscreen"
              >
                ⛶ Fullscreen
              </button>
            )}
          </>
        ) : (
          <button
            type="button"
            className="game-stage__poster"
            onClick={start}
            aria-label="Play Farm the Code (opens fullscreen)"
          >
            <img src={gameplayScreenshot} alt="" className="game-stage__img" />
            <span className="game-stage__overlay">
              <span className="wood-btn wood-btn--lg">▶ Play</span>
              <span className="game-stage__hint">
                Click to play fullscreen · Esc to exit
              </span>
            </span>
          </button>
        )}
      </div>
    </section>
  );
}

export default GameSection;