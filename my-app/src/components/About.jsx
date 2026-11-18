import "./About.css";

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <h2 id="about-title" className="about__title">
          About the Game
        </h2>

        <div className="about__body">
          <p>
            <strong>Farm the Code</strong> is a story-based educational game
            with a farming theme. You guide your character through a pixel-art
            world, exploring the forest and running into the enemies along the
            way, like the slime in the screenshot above. Answering educational
            quiz questions is part of the adventure, so learning happens while
            you play.
          </p>

          <p className="about__facts-label">The planned demo contains</p>
          <dl className="about__facts">
            <div className="about__fact">
              <dt>Level</dt>
              <dd>1</dd>
            </div>
            <div className="about__fact">
              <dt>Regular enemy encounters</dt>
              <dd>3</dd>
            </div>
            <div className="about__fact">
              <dt>Boss fight</dt>
              <dd>1</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
