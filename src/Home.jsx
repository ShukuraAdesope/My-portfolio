import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">

      {/* STAMP AT TOP (AS REQUIRED) */}
      <div className="home-stamp">
        <img src="/IMG_4499.jpeg" alt="Shukura Adesope" />
      </div>

      {/* MAIN CONTENT */}
      <h1 className="hero-title">
        Hi, I’m <span className="highlight">Shukura Adesope</span>
      </h1>

      <p className="hero-subtitle">
        Software Engineering student passionate about building clean,
        user-friendly, and functional web applications.
      </p>
      {/* INTRO SECTION */}
      <section className="home-intro">
        <h2>What I Do</h2>
        <p>
          I focus on frontend and web development using modern technologies
          such as HTML, CSS, JavaScript, and React. I enjoy turning ideas
          into visually appealing and responsive applications.
        </p>
      </section>

      {/* SKILLS */}
      <section className="home-skills">
        <h2>Core Skills</h2>

        <div className="skills-grid">
          <div className="skill-card">HTML & CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Web Development</div>
          <div className="skill-card">Database Design</div>
          <div className="skill-card">Unix / Linux</div>
        </div>
      </section>

    </main>
  );
}
