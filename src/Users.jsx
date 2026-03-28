import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import API from "./api/api";

export default function Users(){

  const [users,setUsers]=useState([]);

  const loadUsers = () => {

    API.get("/users")

      .then(res => {

        setUsers(res.data.data);

      })

      .catch(err => {

        console.log(err);

      });

  };


  useEffect(()=>{

    loadUsers();

  },[]);



  const deleteUser = async (id) => {

    try{

      await API.delete(`/users/${id}`);

      alert("User deleted");

      loadUsers();

    }catch(err){

      console.log(err);

    }

  };



  return(

    <main className="page">

      <h1>Users</h1>

      {users.length===0 && (
        <p>No users yet</p>
      )}

      {users.map(user=>(

        <div key={user._id} className="card">

          <h3>{user.name}</h3>


          <Link to={`/edit-user/${user._id}`}>
            <button style={{marginTop:"10px"}}>
              Edit
            </button>
          </Link>


          <button
            onClick={()=>deleteUser(user._id)}
            style={{marginTop:"10px"}}
          >
            Delete
          </button>

        </div>

      ))}

    </main>

  );

}