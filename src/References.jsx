import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

export default function References(){

  const [refs,setRefs]=useState([]);

  useEffect(()=>{

    const saved =
      JSON.parse(localStorage.getItem("references")) || [];

    setRefs(saved);

  },[]);


  const deleteReference=(id)=>{

    const updatedRefs = refs.filter(
      ref => ref.id !== id
    );

    localStorage.setItem(
      "references",
      JSON.stringify(updatedRefs)
    );

    setRefs(updatedRefs);

  };


  return(

    <main className="page">

      <h1>References</h1>

      {refs.length===0 && (
        <p>No references yet</p>
      )}

      {refs.map(ref=>(

        <div key={ref.id} className="card">

          <h3>{ref.title}</h3>

          <Link to={`/edit-reference/${ref.id}`}>
            <button style={{marginTop:"10px"}}>
              Edit
            </button>
          </Link>

          <button
            onClick={()=>deleteReference(ref.id)}
            style={{marginTop:"10px"}}
          >
            Delete
          </button>

        </div>

      ))}

    </main>

  );

}