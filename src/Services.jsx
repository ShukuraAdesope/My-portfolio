import React from "react";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-header">
        <h1>Services</h1>
        <p>
          These are the core services and skills I offer as a Software
          Engineering student and aspiring frontend developer.
        </p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            Building responsive and user-friendly websites using modern web
            technologies and best practices.
          </p>
        </div>

        <div className="service-card">
          <h3>Frontend Development</h3>
          <p>
            Creating visually appealing interfaces using HTML, CSS, JavaScript,
            and React.
          </p>
        </div>

        <div className="service-card">
          <h3>HTML & CSS</h3>
          <p>
            Writing clean, structured markup and styling layouts with attention
            to design and usability.
          </p>
        </div>

        <div className="service-card">
          <h3>JavaScript Programming</h3>
          <p>
            Implementing interactive features and handling logic using
            JavaScript.
          </p>
        </div>

        <div className="service-card">
          <h3>Database Design</h3>
          <p>
            Designing and understanding relational databases and basic data
            modeling concepts.
          </p>
        </div>

        <div className="service-card">
          <h3>Unix / Linux Fundamentals</h3>
          <p>
            Understanding basic command-line operations and system concepts in
            Unix/Linux environments.
          </p>
        </div>
      </section>
    </main>
  );
}
