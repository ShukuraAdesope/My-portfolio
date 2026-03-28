import React,{useState} from "react";

export default function AddReference(){

  const [text,setText]=useState("");

  const handleSubmit=(e)=>{

    e.preventDefault();

    const existing =

      JSON.parse(localStorage.getItem("references")) || [];

    const newRef={

      id:Date.now(),

      title:text

    };

    localStorage.setItem(

      "references",

      JSON.stringify([...existing,newRef])

    );

    alert("Successfully added!");

    setText("");

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