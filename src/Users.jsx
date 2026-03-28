import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

export default function Users(){

  const [users,setUsers]=useState([]);

  useEffect(()=>{

    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    setUsers(savedUsers);

  },[]);



  const deleteUser=(id)=>{

    const updatedUsers = users.filter(
      user=>user.id !== id
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setUsers(updatedUsers);

  };



  return(

    <main className="page">

      <h1>Users</h1>

      {users.length===0 && (
        <p>No users yet</p>
      )}

      {users.map(user=>(

        <div key={user.id} className="card">

          <h3>{user.name}</h3>


          {/* Edit button added */}
          <Link to={`/edit-user/${user.id}`}>
            <button style={{marginTop:"10px"}}>
              Edit
            </button>
          </Link>


          <button
            onClick={()=>deleteUser(user.id)}
            style={{marginTop:"10px"}}
          >
            Delete
          </button>

        </div>

      ))}

    </main>

  );

}