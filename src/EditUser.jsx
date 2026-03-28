import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditUser() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  // load selected user
  useEffect(() => {

    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userToEdit =
      savedUsers.find(user => String(user.id) === String(id));

    if (userToEdit) {

      setName(userToEdit.name || "");

    }

  }, [id]);


  const updateUser = (e) => {

    e.preventDefault();

    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers =
      savedUsers.map(user => {

        if (String(user.id) === String(id)) {

          return {
            ...user,
            name: name
          };

        }

        return user;

      });

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("User updated successfully");

    navigate("/users");

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