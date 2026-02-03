import React from "react";

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-header">
        <h1>My Projects</h1>
        <p>
          Below are some of the projects I have worked on during my studies.
          These projects demonstrate my skills in frontend development,
          JavaScript, and web design.
        </p>
      </section>

      <section className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3>Web Interface Term Project</h3>
          <p>
            A complete web interface project focusing on layout design,
            responsiveness, and usability.
          </p>
          <a
            href="https://shukuraadesope.github.io/web-interface-term-project/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Live Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>JavaScript Assignment 2</h3>
          <p>
            A JavaScript-based project demonstrating DOM manipulation and
            interactive features.
          </p>
          <a
            href="https://shukuraadesope.github.io/javascript-assignment-2/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Live Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>JavaScript Assignment 6</h3>
          <p>
            An advanced JavaScript assignment showcasing logic handling and
            structured code.
          </p>
          <a
            href="https://shukuraadesope.github.io/javascript-assignment-6/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Live Project
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h3>JavaScript Test 1</h3>
          <p>
            A practical JavaScript test focused on problem-solving and core
            programming concepts.
          </p>
          <a
            href="https://shukuraadesope.github.io/javascript-test-1/"
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            View Live Project
          </a>
        </div>
      </section>
    </main>
  );
}
