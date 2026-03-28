import React, { useState } from "react";
import API from "./api/api";

export default function AddUser(){

  const [name,setName]=useState("");

  const handleSubmit = async (e)=>{

    e.preventDefault();

    try{

      await API.post("/users",{

        data:{
          name:name
        }

      });

      alert("User added successfully");

      setName("");

    }catch(err){

      console.log(err);

      alert("Error adding user");

    }

  };

  return(

    <main className="form-page">

      <h2>Add User</h2>

      <form onSubmit={handleSubmit}>

        <input

          placeholder="Enter user name"

          value={name}

          onChange={(e)=>setName(e.target.value)}

          required

        />

        <button type="submit">

          Add User

        </button>

      </form>

    </main>

  );

}