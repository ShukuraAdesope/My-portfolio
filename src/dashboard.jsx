import { Link } from "react-router-dom";

function Dashboard(){

 const token = localStorage.getItem("token");

 if(!token){

  return(

   <main className="page">

    <h2>Login Required</h2>

    <Link to="/signin">

     <button>Go to Login</button>

    </Link>

   </main>

  );

 }

 return(

  <main className="page">

   <h2>Dashboard</h2>

   <p>You are logged in</p>

  </main>

 );

}

export default Dashboard;