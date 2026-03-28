import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api/api";

export default function EditReference() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  // load selected reference from backend
  useEffect(() => {

    const fetchReference = async () => {

      try{

        const res = await API.get(`/references/${id}`);

        const reference = res.data.data || res.data;

        setTitle(reference.title || "");

      }catch(err){

        console.log(err);

      }

    };

    fetchReference();

  }, [id]);


  const updateReference = async (e) => {

    e.preventDefault();

    try{

      await API.put(`/references/${id}`,{

        title

      });

      alert("Reference updated successfully");

      navigate("/references");

    }catch(err){

      console.log(err);

    }

  };


  return (

    <main className="page">

      <h2>Edit Reference</h2>

      <form onSubmit={updateReference}>

        <input
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <button type="submit">
          Update
        </button>

      </form>

    </main>

  );

}