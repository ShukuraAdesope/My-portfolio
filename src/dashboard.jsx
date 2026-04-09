import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Dashboard(){

 const [token,setToken] = useState(null);

 useEffect(()=>{

  const savedToken = localStorage.getItem("token");

  setToken(savedToken);

 },[]);


 if(!token){

  return(

   <main className="page">

    <h2>Login Required</h2>

    <p>Please login to access dashboard.</p>

    <Link to="/signin">

     <button>Go to Login</button>

    </Link>

   </main>

  );

 }


 return(

  <main className="page">

   <h2>Dashboard</h2>

   <p>Login successful</p>

  </main>

 );

}

export default Dashboard;