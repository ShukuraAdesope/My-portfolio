import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const [contacts,setContacts]=useState([]);

  useEffect(()=>{

    const savedContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    setContacts(savedContacts);

  },[]);


  const addContact=(e)=>{

    e.preventDefault();

    const newContact = {

      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      message

    };

    const updatedContacts = [

      ...contacts,
      newContact

    ];

    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );

    setContacts(updatedContacts);

    alert("Message sent successfully");

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");

  };


  const deleteContact=(id)=>{

    const updatedContacts =
      contacts.filter(contact=>contact.id!==id);

    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );

    setContacts(updatedContacts);

  };


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

          <p>
            Shukurahadesope01@yahoo.com
          </p>

          <p>
            ReachShuks@gmail.com
          </p>

        </div>


        <div className="contact-item">

          <h3>Phone</h3>

          <p>
            204-290-5902
          </p>

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


      {/* CONTACT FORM */}

      <section className="contact-form-section">

        <h2>Send a Message</h2>


        <form
          className="contact-form"
          onSubmit={addContact}
        >

          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />


          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
          />


          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>


          <button type="submit">
            Send Message
          </button>

        </form>

      </section>



      {/* LIST OF CONTACT MESSAGES */}

      <section className="contact-form-section">

        <h2>Messages</h2>

        {contacts.length===0 && (
          <p>No messages yet</p>
        )}


        {contacts.map(contact=>(

          <div key={contact.id} className="card">

            <p>

              <strong>
                {contact.firstName} {contact.lastName}
              </strong>

            </p>

            <p>
              {contact.email}
            </p>

            <p>
              {contact.message}
            </p>


            <Link to={`/edit-contact/${contact.id}`}>

              <button>
                Edit
              </button>

            </Link>


            <button
              onClick={()=>deleteContact(contact.id)}
              style={{marginLeft:"10px"}}
            >

              Delete

            </button>

          </div>

        ))}

      </section>


    </main>

  );

}