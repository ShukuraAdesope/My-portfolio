import React, { useState } from "react";
import API from "./api/api";

export default function AddService() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/services", {

        title,
        description

      });

      alert("Service added successfully!");

      // clear form
      setTitle("");
      setDescription("");

    } catch (error) {

      console.log(error.response?.data);

      alert("Error adding service");

    }

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

        <button>

          Add Service

        </button>

      </form>

    </main>

  );

}