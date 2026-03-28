import React, { useState } from "react";

export default function AddUser(){

  const [text,setText]=useState("");

  const handleSubmit=(e)=>{

    e.preventDefault();

    const existing =
      JSON.parse(localStorage.getItem("users")) || [];

    const newUser={

      id:Date.now(),

      name:text

    };

    localStorage.setItem(

      "users",

      JSON.stringify([...existing,newUser])

    );

    alert("Successfully added!");

    setText("");

  };

  return(

    <main className="form-page">

      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>

        <input

          placeholder="Type anything"

          value={text}

          onChange={(e)=>setText(e.target.value)}

          required

        />

        <button type="submit">

          Add User

        </button>

      </form>

    </main>

  );

}