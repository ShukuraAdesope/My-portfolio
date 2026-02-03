import React from "react";

export default function About() {
  return (
    <main className="about-page">
      <section className="about-header">
        <h1>About Me</h1>
        <p>
          Get to know more about who I am, my background, and my interests in
          software development.
        </p>
      </section>

      <section className="about-content">
        <div className="about-image">
          <img src="/IMG_4499.jpeg" alt="Shukura Adesope" />
        </div>

        <div className="about-text">
          <h2>Shukura Adesope</h2>
          <p className="title">Software Engineering Student</p>

          <p>
            I am currently studying Software Engineering at Centennial College.
            I have a strong interest in frontend and web development, and I enjoy
            creating clean, user-friendly, and visually appealing web
            applications.
          </p>

          <p>
            My skills include HTML, CSS, JavaScript, React, database design, and
            an understanding of Unix/Linux fundamentals. I am always eager to
            learn new technologies and improve my problem-solving skills.
          </p>

          <a
            href="/Resume-Shukura-Adesope.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            View Resume (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
