import { useNavigate } from "react-router-dom";

function Dashboard(){

 const navigate = useNavigate();

 const token = localStorage.getItem("token");


 // if user not logged in
 if(!token){

  return(

   <div>

    <h2>Login Required</h2>

    <p>Please login to access dashboard.</p>

    <button
     onClick={() => navigate("/signin")}
    >

     Go to Login

    </button>

   </div>

  );

 }


 // if logged in
 return(

  <div>

   <h2>Dashboard</h2>

   <p>You are logged in.</p>

   <p>You can now manage:</p>

   <ul>

    <li>Projects</li>

    <li>Services</li>

    <li>References</li>

   </ul>


   <button
    onClick={() => {

     localStorage.removeItem("token");

     navigate("/signin");

    }}
   >

    Logout

   </button>


  </div>

 );

}

export default Dashboard;