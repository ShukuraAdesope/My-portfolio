import React,{useState} from "react";
import API from "./api/api";

export default function AddReference(){

  const [text,setText]=useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    try{

      await API.post("/references",{

        title: text

      });

      alert("Successfully added!");

      setText("");

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

          placeholder="Type anything"

          value={text}

          onChange={(e)=>setText(e.target.value)}

          required

        />

        <button type="submit">

          Add Reference

        </button>

      </form>

    </main>

  );

}