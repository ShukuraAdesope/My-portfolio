import React, { useState } from "react";

export default function AddService() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    // get existing services
    const existingServices =
      JSON.parse(localStorage.getItem("services")) || [];

    // create new service
    const newService = {

      id: Date.now(),

      title,

      description

    };

    // save updated list
    const updatedServices = [

      ...existingServices,

      newService

    ];

    localStorage.setItem(

      "services",

      JSON.stringify(updatedServices)

    );

    alert("Service added successfully!");

    // clear form
    setTitle("");
    setDescription("");

  };


  return (

    <main className="form-page">

      <h2>Add Service</h2>

      <form onSubmit={handleSubmit}>

        <input

          placeholder="Service title (example: UI Design)"

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

          required

        />


        <textarea

          placeholder="Service description"

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

          required

        />


        <button type="submit">

          Add Service

        </button>

      </form>

    </main>

  );

}