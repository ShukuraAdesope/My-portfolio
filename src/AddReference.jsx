import React,{useState} from "react";
import API from "./api/api";

export default function AddReference(){

  const [title,setTitle]=useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    try{

      await API.post("/references",{

        data:{
          title:title
        }

      });

      alert("Reference added successfully");

      setTitle("");

    }catch(err){

      console.log(err);

      alert("Error adding reference");

    }

  };

  return(

    <main className="form-page">

      <h2>Add Reference</h2>

      <form onSubmit={handleSubmit}>

        <input

          placeholder="Enter reference"

          value={title}

          onChange={(e)=>setTitle(e.target.value)}

          required

        />

        <button type="submit">

          Add Reference

        </button>

      </form>

    </main>

  );

}