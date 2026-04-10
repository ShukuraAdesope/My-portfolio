import React, { useState } from "react";

export default function AddReference(){

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    // get existing references
    const existingReferences =
      JSON.parse(localStorage.getItem("references")) || [];

    // create new reference object
    const newReference = {

      id: Date.now(),

      title,

      description

    };

    // update list
    const updatedReferences = [

      ...existingReferences,

      newReference

    ];

    // save to localStorage
    localStorage.setItem(

      "references",

      JSON.stringify(updatedReferences)

    );

    alert("Reference added successfully!");

    setTitle("");
    setDescription("");

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