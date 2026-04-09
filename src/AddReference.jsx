import React, { useState } from "react";
import API from "./api/api";

export default function AddReference(){

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // get login token
      const token = localStorage.getItem("token");

      await API.post(

        "/references",

        {
          title,
          description
        },

        {
          headers: {

            Authorization: `Bearer ${token}`

          }
        }

      );

      alert("Reference added successfully!");

      setTitle("");
      setDescription("");

    }
    catch(error){

      console.log(error);

      alert("You must login before adding a reference.");

    }

  };

  return(

    <main className="form-page">

      <h2>Add Reference</h2>

      <form onSubmit={handleSubmit}>

        <input

          placeholder="Reference title"

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

          required

        />

        <textarea

          placeholder="Reference description"

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

          required

        />

        <button type="submit">

          Add Reference

        </button>

      </form>

    </main>

  );

}