import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api/api";

export default function EditReference() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");



  useEffect(() => {

    const fetchReference = async () => {

      try {

        const res = await API.get(`/references/${id}`);

        const reference = res.data.data || res.data;


        setFirstname(reference.firstname || "");
        setLastname(reference.lastname || "");
        setEmail(reference.email || "");
        setPosition(reference.position || "");
        setCompany(reference.company || "");

      }
      catch (error) {

        console.log(error);

      }

    };


    fetchReference();

  }, [id]);



  const updateReference = async (e) => {

    e.preventDefault();

    try {

      const token = localStorage.getItem("token");


      await API.put(

        `/references/${id}`,

        {
          firstname,
          lastname,
          email,
          position,
          company
        },

        {
          headers: {

            Authorization: `Bearer ${token}`

          }
        }

      );


      alert("Reference updated successfully");


      navigate("/references");

    }
    catch (error) {

      console.log(error);

      alert("You must login before editing a reference.");

    }

  };



  return (

    <main className="page">

      <h2>Edit Reference</h2>


      <form onSubmit={updateReference}>

        <input
          placeholder="First Name"
          value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
          required
        />


        <input
          placeholder="Last Name"
          value={lastname}
          onChange={(e)=>setLastname(e.target.value)}
          required
        />


        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />


        <input
          placeholder="Position"
          value={position}
          onChange={(e)=>setPosition(e.target.value)}
          required
        />


        <input
          placeholder="Company"
          value={company}
          onChange={(e)=>setCompany(e.target.value)}
          required
        />


        <button type="submit">

          Update Reference

        </button>

      </form>

    </main>

  );

}