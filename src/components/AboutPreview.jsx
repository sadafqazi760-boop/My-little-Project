

const AboutPreview = () => {
  return (
    <section className="about-preview" id="about">

      {/* Left Side */}
      <div className="about-text">

        <p className="section-tag">
          ✦ A LITTLE ABOUT ME
        </p>

        <h2>
          Behind the <span>screen</span> 👩🏻‍💻
        </h2>

        <p className="about-description">
          Hi! I'm Sadaf, a frontend learner who loves turning ideas
          into beautiful and interactive websites. I'm always learning,
          experimenting and creating something new.
        </p>

        <a href="#projects" className="small-project-btn">
          See what I've built →
        </a>

      </div>


      {/* Right Side - Favorite Stack */}
      <div className="stack-card">

        <p className="stack-title">
          My Favorite Stack ♡
        </p>

        <div className="stack-items">

          <div className="stack-item">
            <span>⚛</span>
            <p>React</p>
          </div>

          <div className="stack-item">
            <span>⚡</span>
            <p>JavaScript</p>
          </div>

          <div className="stack-item">
            <span>🎨</span>
            <p>Tailwind CSS</p>
          </div>

          <div className="stack-item">
            <span>🌐</span>
            <p>HTML / CSS</p>
          </div>

        </div>

        <div className="react-lover">
          ⚛ React Lover
        </div>

      </div>

    </section>
  );
};

export default AboutPreview;