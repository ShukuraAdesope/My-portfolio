import React, { useState } from "react";
import API from "./api/api";

export default function AddUser(){

  const [text,setText]=useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    try{

      await API.post("/users",{

        name: text

      });

      alert("Successfully added!");

      setText("");

    }catch(err){

      console.log(err);

      alert("Error adding user");

    }

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