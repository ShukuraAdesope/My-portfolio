import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin(){

 const navigate = useNavigate();

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [error,setError] = useState("");


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

   // save token
   localStorage.setItem(

    "token",
    res.data.token

   );

   alert("Login successful");

   // redirect to dashboard
   navigate("/dashboard");

  }
  catch(err){

   console.log(err);

   setError("Invalid email or password");

  }

 };


 return(

  <div>

   <h2>Login</h2>

   <form onSubmit={handleSubmit}>

    <input

     placeholder="Email"

     value={email}

     onChange={(e)=>setEmail(e.target.value)}

     required

    />



    <input

     type="password"

     placeholder="Password"

     value={password}

     onChange={(e)=>setPassword(e.target.value)}

     required

    />


    <button type="submit">

     Login

    </button>

   </form>


   {error && (

    <p style={{color:"red"}}>

     {error}

    </p>

   )}

  </div>

 );

}

export default Signin;