const Hero = () => {
  return (
    <section className="hero">

      {/* Left side content */}
      <div className="hero-content">

        <p className="hero-tag">
          Hello, I'm Sadaf! 👋
        </p>

        <h1>
          Welcome to my little project
        </h1>

        <p className="hero-description">
          A cozy digital corner where I share the projects
          I've been building along my frontend journey.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="explore-btn">
            Explore Projects <span>→</span>
          </a>

          <a href="#about" className="about-btn">
            About Sadaf
          </a>

        </div>
      </div>


      {/* Right side design */}
      <div className="hero-visual">

        <div className="glow glow-one"></div>

        <div className="glow glow-two"></div>

        <div className="code-card">

          <div className="code-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="code-lines">
            <p>&lt;Sadaf /&gt;</p>
            <p className="line-two">Frontend Developer</p>
            <p className="line-three">Building with love ✨</p>
          </div>

        </div>

        <div className="floating-star star-one">✦</div>

        <div className="floating-star star-two">✦</div>

        <div className="floating-heart">♡</div>

      </div>

    </section>
  );
};

export default Hero;