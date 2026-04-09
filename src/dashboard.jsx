import { Link } from "react-router-dom";

function Dashboard(){

 const token = localStorage.getItem("token");

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

   <p>You are logged in successfully 🎉</p>

  </main>

 );

}

export default Dashboard;