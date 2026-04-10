import React, { useState } from "react";

export default function AddProject() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completion, setCompletion] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    // get existing projects from localStorage
    const existingProjects =
      JSON.parse(localStorage.getItem("projects")) || [];

    // create new project object
    const newProject = {

      id: Date.now(),

      title,

      description,

      completion

    };

    // add new project
    const updatedProjects = [

      ...existingProjects,

      newProject

    ];

    // save back to localStorage
    localStorage.setItem(

      "projects",

      JSON.stringify(updatedProjects)

    );

    alert("Project successfully added!");

    // clear form
    setTitle("");
    setDescription("");
    setCompletion("");

  };


  return (

    <main className="form-page">

      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />


        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />


        <input
          type="date"
          value={completion}
          onChange={(e) => setCompletion(e.target.value)}
          required
        />


        <button type="submit">

          Add Project

        </button>

      </form>

    </main>

  );

}