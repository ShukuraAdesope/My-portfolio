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

      } catch (err) {

        console.log(err);

      }

    };

    fetchProject();

  }, [id]);


  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/projects/${id}`, {

        title,
        description,
        completion

      });

      alert("Project updated successfully");

      navigate("/projects");

    } catch (err) {

      console.log(err);

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
        />

        <textarea
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          placeholder="Project description"
        />

        <input
          type="date"
          value={completion}
          onChange={(e)=>setCompletion(e.target.value)}
        />

        <button type="submit">
          Update
        </button>

      </form>

    </main>

  );

}