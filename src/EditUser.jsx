import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api/api";

export default function EditUser() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  // load selected user from backend
  useEffect(() => {

    const fetchUser = async () => {

      try{

        const res = await API.get(`/users/${id}`);

        const user = res.data.data || res.data;

        setName(user.name || "");

      }catch(err){

        console.log(err);

      }

    };

    fetchUser();

  }, [id]);


  const updateUser = async (e) => {

    e.preventDefault();

    try{

      await API.put(`/users/${id}`,{

        name

      });

      alert("User updated successfully");

      navigate("/users");

    }catch(err){

      console.log(err);

    }

  };


  return (

    <main className="page">

      <h2>Edit User</h2>

      <form onSubmit={updateUser}>

        <input
          placeholder="Edit user"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <button type="submit">
          Update
        </button>

      </form>

    </main>

  );

}