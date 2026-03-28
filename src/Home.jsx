export default function Home() {
  return (
    <main className="home">

      <div className="home-stamp">
        <img
          src={`${import.meta.env.BASE_URL}IMG_4499.jpeg`}
          alt="Shukura Adesope"
        />
      </div>

      <h1>
        Hi, I’m <span className="highlight">Shukura Adesope</span>
      </h1>

      <p className="hero-subtitle">
        Software Engineering student passionate about building clean,
        user-friendly web applications.
      </p>

      <section>
        <h2>What I Do</h2>
        <p>
          I focus on frontend and web development using HTML, CSS,
          JavaScript, and React.
        </p>
      </section>

    </main>
  );
}
