import React, { useState } from "react";

export default function AddContact() {

  const [message, setMessage] = useState("");

  const addContact = (e) => {

    e.preventDefault();

    const savedContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    const newContact = {
      id: Date.now().toString(),
      message
    };

    const updatedContacts = [
      ...savedContacts,
      newContact
    ];

    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );

    alert("Contact added");

    setMessage("");

  };


  return (

    <main className="page">

      <h2>Add Contact</h2>

      <form onSubmit={addContact}>

        <textarea
          placeholder="Enter contact message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />

        <button type="submit">
          Add Contact
        </button>

      </form>

    </main>

  );

}