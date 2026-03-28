export default function About() {
  return (
    <main className="about-page">

      <h1>About Me</h1>

      <div className="about-content">

        <div className="about-stamp">
          <img
            src={`${import.meta.env.BASE_URL}IMG_4499.jpeg`}
            alt="Shukura Adesope"
          />
        </div>

        <div>
          <h2>Shukura Adesope</h2>
          <p><em>Software Engineering Student</em></p>

          <p>
            I am currently studying Software Engineering at Centennial College.
            I enjoy frontend and web development.
          </p>

          <a
            href={`${import.meta.env.BASE_URL}Resume-Shukura-Adesope.pdf`}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            View Resume (PDF)
          </a>

        </div>

      </div>

    </main>
  );
}
