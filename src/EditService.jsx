import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api/api";

export default function EditService() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {

    const fetchService = async () => {

      try {

        const res = await API.get(`/services/${id}`);

        const service = res.data.data || res.data;

        setTitle(service.title || service.name || "");
        setDescription(service.description || "");

      } catch (err) {

        console.log(err);

      }

    };

    fetchService();

  }, [id]);


  const updateService = async (e) => {

    e.preventDefault();

    try {

      await API.put(`/services/${id}`, {

        title,
        description

      });

      alert("Service updated successfully");

      navigate("/services");

    } catch (err) {

      console.log(err);

    }

  };


  return (

    <main className="page">

      <h2>Edit Service</h2>

      <form onSubmit={updateService}>

        <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button type="submit">
          Update
        </button>

      </form>

    </main>

  );

}