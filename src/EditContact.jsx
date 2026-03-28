import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditContact(){

  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");


  useEffect(()=>{

    const saved =
      JSON.parse(localStorage.getItem("contacts")) || [];

    const contactToEdit =
      saved.find(contact => String(contact.id) === String(id));

    if(contactToEdit){

      setFirstName(contactToEdit.firstName || "");
      setLastName(contactToEdit.lastName || "");
      setEmail(contactToEdit.email || "");
      setMessage(contactToEdit.message || "");

    }

  },[id]);


  const updateContact=(e)=>{

    e.preventDefault();

    const saved =
      JSON.parse(localStorage.getItem("contacts")) || [];

    const updatedContacts =
      saved.map(contact=>{

        if(String(contact.id) === String(id)){

          return{

            ...contact,
            firstName,
            lastName,
            email,
            message

          };

        }

        return contact;

      });

    localStorage.setItem(
      "contacts",
      JSON.stringify(updatedContacts)
    );

    alert("Contact updated");

    navigate("/contact");

  };


  return(

    <main className="page">

      <h2>Edit Contact</h2>

      <form onSubmit={updateContact}>

        <input
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
          placeholder="First Name"
        />

        <input
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
          placeholder="Last Name"
        />

        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Email"
        />

        <textarea
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Message"
        />

        <button type="submit">
          Update
        </button>

      </form>

    </main>

  );

}