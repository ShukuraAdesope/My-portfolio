import React, { useState } from "react";
import API from "./api/api";

export default function AddProject() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completion, setCompletion] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      // get token from login
      const token = localStorage.getItem("token");

      await API.post(

        "/projects",

        {
          title,
          description,
          completion
        },

        {
          headers: {

            Authorization: `Bearer ${token}`

          }
        }

      );

      alert("Project successfully added!");

      // clear form
      setTitle("");
      setDescription("");
      setCompletion("");

    }
    catch (error) {

      console.log(error);

      alert("You must login before adding a project.");

    }

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