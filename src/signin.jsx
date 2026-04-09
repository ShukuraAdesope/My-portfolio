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

   const response = await axios.post(
    "https://portfolio-backend-i1c6.onrender.com/api/auth/signin",
    {
     email: email,
     password: password
    }
   );

   // save token
   localStorage.setItem("token", response.data.token);

   // show success message
   setMessage("Login successful");

   // redirect immediately (no delay needed)
   navigate("/dashboard");

  }
  catch(error){

   console.error(error.response?.data || error.message);

   setMessage("Invalid email or password");

  }

 };

 return(

  <main className="page">

   <h2>Login</h2>

   {message && (

    <p style={{color:"green"}}>

     {message}

    </p>

   )}

   <form onSubmit={handleSubmit}>

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

     Login

    </button>

   </form>

  </main>

 );

}

export default Signin;