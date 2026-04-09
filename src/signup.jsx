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

   setMessage("Signup successful");

   setTimeout(()=>{

    navigate("/signin");

   },1000);

  }
  catch(error){

   console.log(error);

   setMessage("Signup failed");

  }

 };

 return(

  <main className="page">

   <h2>Signup</h2>

   {message && <p>{message}</p>}

   <form onSubmit={handleSubmit}>

    <input
     placeholder="firstname"
     value={firstname}
     onChange={(e)=>setFirstname(e.target.value)}
    />

    <input
     placeholder="lastname"
     value={lastname}
     onChange={(e)=>setLastname(e.target.value)}
    />

    <input
     placeholder="email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
    />

    <input
     type="password"
     placeholder="password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
    />

    <button type="submit">Signup</button>

   </form>

  </main>

 );

}

export default Signup;