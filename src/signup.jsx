import { useState } from "react";
import axios from "axios";

function Signup(){

 const [firstname,setFirstname] = useState("");
 const [lastname,setLastname] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

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

   alert("Signup successful");

  }
  catch(error){

   console.log(error.response?.data);

   alert("Signup failed");

  }

 };

 return(

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

   <button>Signup</button>

  </form>

 );

}

export default Signup;