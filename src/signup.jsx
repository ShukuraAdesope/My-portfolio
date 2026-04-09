import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){

 const navigate = useNavigate();

 const [firstname,setFirstname] = useState("");
 const [lastname,setLastname] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const [message,setMessage] = useState("");
 const [error,setError] = useState("");

 const handleSubmit = async(e)=>{

  e.preventDefault();

  try{

   await axios.post(
    "https://portfolio-backend-i1c6.onrender.com/api/auth/signup",
    {
     firstname,
     lastname,
     email,
     password
    }
   );

   setError("");
   setMessage("Signup successful! Redirecting to login...");

   setTimeout(()=>{
    navigate("/signin");
   },1500);

  }
  catch(err){

   console.error(err.response?.data || err.message);

   setMessage("");
   setError("Signup failed. Try a different email.");

  }

 };

 return(

  <main className="page">

   <h2>Signup</h2>

   {message && (

    <div style={{
     background:"#d4edda",
     padding:"12px",
     borderRadius:"8px",
     marginBottom:"10px",
     color:"#155724",
     fontWeight:"bold"
    }}>

     {message}

    </div>

   )}

   {error && (

    <div style={{
     background:"#f8d7da",
     padding:"12px",
     borderRadius:"8px",
     marginBottom:"10px",
     color:"#721c24",
     fontWeight:"bold"
    }}>

     {error}

    </div>

   )}

   <form onSubmit={handleSubmit}>

    <input
     placeholder="firstname"
     value={firstname}
     onChange={(e)=>setFirstname(e.target.value)}
     required
    />

    <input
     placeholder="lastname"
     value={lastname}
     onChange={(e)=>setLastname(e.target.value)}
     required
    />

    <input
     placeholder="email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     required
    />

    <input
     type="password"
     placeholder="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     required
    />

    <button type="submit">

     Signup

    </button>

   </form>

  </main>

 );

}

export default Signup;