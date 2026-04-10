import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditProject() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [completion, setCompletion] = useState("");


  useEffect(() => {

    const savedProjects =

      JSON.parse(localStorage.getItem("projects")) || [];


    const project =

      savedProjects.find(p => p.id.toString() === id);


    if (project) {

      setTitle(project.title);

      setDescription(project.description);

      setCompletion(project.completion);

    }

  }, [id]);


  const handleUpdate = (e) => {

    e.preventDefault();


    const savedProjects =

      JSON.parse(localStorage.getItem("projects")) || [];


    const updatedProjects =

      savedProjects.map(project =>

        project.id.toString() === id

          ? {

              ...project,

              title,

              description,

              completion

            }

          : project

      );


    localStorage.setItem(

      "projects",

      JSON.stringify(updatedProjects)

    );


    alert("Project updated successfully");


    navigate("/projects");

  };


  return (

    <main className="page">

      <h2>Edit Project</h2>


      <form onSubmit={handleUpdate}>


        <input

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

          placeholder="Project title"

          required

        />


        <textarea

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

          placeholder="Project description"

          required

        />


        <input

          type="date"

          value={completion}

          onChange={(e)=>setCompletion(e.target.value)}

          required

        />


        <button type="submit">

          Update

        </button>


      </form>

    </main>

  );

}