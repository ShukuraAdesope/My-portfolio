import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditService() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");


  useEffect(() => {

    const savedServices =

      JSON.parse(localStorage.getItem("services")) || [];


    const service =

      savedServices.find(s => s.id.toString() === id);


    if (service) {

      setTitle(service.title);

      setDescription(service.description);

    }

  }, [id]);


  const updateService = (e) => {

    e.preventDefault();


    const savedServices =

      JSON.parse(localStorage.getItem("services")) || [];


    const updatedServices =

      savedServices.map(service =>

        service.id.toString() === id

          ? {

              ...service,

              title,

              description

            }

          : service

      );


    localStorage.setItem(

      "services",

      JSON.stringify(updatedServices)

    );


    alert("Service updated successfully");


    navigate("/services");

  };


  return (

    <main className="page">

      <h2>Edit Service</h2>


      <form onSubmit={updateService}>


        <input

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

          placeholder="Service title"

          required

        />


        <textarea

          value={description}

          onChange={(e)=>setDescription(e.target.value)}

          placeholder="Service description"

          required

        />


        <button type="submit">

          Update

        </button>


      </form>

    </main>

  );

}