import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditReference() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");


  useEffect(() => {

    const savedReferences =
      JSON.parse(localStorage.getItem("references")) || [];


    const reference =
      savedReferences.find(ref => ref.id.toString() === id);


    if (reference) {

      setTitle(reference.title);

      setDescription(reference.description);

    }

  }, [id]);


  const updateReference = (e) => {

    e.preventDefault();


    const savedReferences =
      JSON.parse(localStorage.getItem("references")) || [];


    const updatedReferences =
      savedReferences.map(ref =>

        ref.id.toString() === id

          ? {

              ...ref,

              title,

              description

            }

          : ref

      );


    localStorage.setItem(

      "references",

      JSON.stringify(updatedReferences)

    );


    alert("Reference updated successfully");


    navigate("/references");

  };


  return (

    <main className="form-page">

      <h2>Edit Reference</h2>


      <form onSubmit={updateReference}>


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

          Update Reference

        </button>


      </form>

    </main>

  );

}