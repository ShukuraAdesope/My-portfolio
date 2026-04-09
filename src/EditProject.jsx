import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api/api";

export default function EditProject() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completion, setCompletion] = useState("");

  useEffect(() => {

    const fetchProject = async () => {

      try {

        const res = await API.get(`/projects/${id}`);

        const project = res.data.data || res.data;

        setTitle(project.title || "");
        setDescription(project.description || "");

        // format date for input field
        if (project.completion) {

          setCompletion(
            project.completion.substring(0,10)
          );

        }

      }
      catch (err) {

        console.log(err);

      }

    };

    fetchProject();

  }, [id]);


  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      // get token from login
      const token = localStorage.getItem("token");

      await API.put(

        `/projects/${id}`,

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

      alert("Project updated successfully");

      navigate("/projects");

    }
    catch (err) {

      console.log(err);

      alert("You must login before editing a project.");

    }

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