import React from "react";

export default function Contact() {
  return (
    <main className="contact-page">
      {/* HEADER */}
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me using the information below or by sending
          a message through the form.
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>Shukurahadesope01@yahoo.com</p>
          <p>ReachShuks@gmail.com</p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>204-290-5902</p>
        </div>

        <div className="contact-item">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/shukura-adesope-a77918236/"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn Profile
          </a>
        </div>
      </section>

      {/* CONTACT FORM (UI ONLY) */}
      <section className="contact-form-section">
        <h2>Send a Message</h2>

        <form className="contact-form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Your Message"></textarea>

          <button type="button">Send Message</button>
        </form>
      </section>
    </main>
  );
}
