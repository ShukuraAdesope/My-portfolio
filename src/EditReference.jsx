import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditReference() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  useEffect(() => {

    const savedReferences =
      JSON.parse(localStorage.getItem("references")) || [];

    const referenceToEdit =
      savedReferences.find(ref => String(ref.id) === String(id));

    if (referenceToEdit) {

      setTitle(referenceToEdit.title || "");

    }

  }, [id]);


  const updateReference = (e) => {

    e.preventDefault();

    const savedReferences =
      JSON.parse(localStorage.getItem("references")) || [];

    const updatedReferences =
      savedReferences.map(ref => {

        if (String(ref.id) === String(id)) {

          return {
            ...ref,
            title: title
          };

        }

        return ref;

      });

    localStorage.setItem(
      "references",
      JSON.stringify(updatedReferences)
    );

    alert("Reference updated successfully");

    navigate("/references");

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