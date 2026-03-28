import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import API from "./api/api";

export default function References(){

  const [refs,setRefs]=useState([]);

  const loadReferences = () => {

    API.get("/references")

      .then(res => {

        setRefs(res.data.data);

      })

      .catch(err => {

        console.log(err);

      });

  };


  useEffect(()=>{

    loadReferences();

  },[]);



  const deleteReference = async (id) => {

    try{

      await API.delete(`/references/${id}`);

      alert("Reference deleted");

      loadReferences();

    }catch(err){

      console.log(err);

    }

  };



  return(

    <main className="page">

      <h1>References</h1>

      {refs.length===0 && (
        <p>No references yet</p>
      )}

      {refs.map(ref=>(

        <div key={ref._id} className="card">

          <h3>{ref.title}</h3>


          <Link to={`/edit-reference/${ref._id}`}>
            <button style={{marginTop:"10px"}}>
              Edit
            </button>
          </Link>


          <button
            onClick={()=>deleteReference(ref._id)}
            style={{marginTop:"10px"}}
          >
            Delete
          </button>

        </div>

      ))}

    </main>

  );

}