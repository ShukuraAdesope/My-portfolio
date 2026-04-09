import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin(){

 const navigate = useNavigate();

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [message,setMessage] = useState("");

 const handleSubmit = async(e)=>{

  e.preventDefault();

  try{

   const res = await axios.post(
    "https://portfolio-backend-i1c6.onrender.com/api/auth/signin",
    {
     email,
     password
    }
   );

   localStorage.setItem("token", res.data.token);

   setMessage("Login successful ✅");

   setTimeout(()=>{
    navigate("/dashboard");
   },1500);

  }
  catch(error){

   setMessage("Login failed ❌");

  }

 };

 return(

  <main className="page">

   <h2>Login</h2>

   {message && <p>{message}</p>}

   <form onSubmit={handleSubmit}>

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

    <button>Login</button>

   </form>

  </main>

 );

}

export default Signin;