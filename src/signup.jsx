import {useState} from "react";
import axios from "axios";

function Signup(){

 const [username,setUsername] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const handleSubmit = async(e)=>{

  e.preventDefault();

  await axios.post(

   "https://portfolio-backend-i1c6.onrender.com/api/auth/signup",

   {
    username,
    email,
    password
   }

  );

  alert("signup success");

 };

 return(

  <form onSubmit={handleSubmit}>

   <input
    placeholder="username"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
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