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

 const handleSubmit = async (e) => {

  e.preventDefault();

  // clear old messages before new request
  setMessage("");
  setError("");

  try {

   const response = await axios.post(
    "https://portfolio-backend-i1c6.onrender.com/api/auth/signup",
    {
     firstname: firstname,
     lastname: lastname,
     email: email,
     password: password
    }
   );

   console.log(response.data);

   // show success message
   setMessage("Signup successful!");

   // redirect to signin page
   setTimeout(() => {

    navigate("/signin");

   }, 800);

  }
  catch (err) {

   console.error(err.response?.data || err.message);

   setError("Signup failed. Try a different email.");

  }

 };

 return(

  <main className="page">

   <h2>Signup</h2>

   {/* SUCCESS MESSAGE */}
   {message && (

    <div style={{
     background:"#d4edda",
     color:"#155724",
     padding:"12px",
     borderRadius:"6px",
     marginBottom:"12px",
     fontWeight:"bold",
     border:"1px solid #c3e6cb"
    }}>

     {message}

    </div>

   )}

   {/* ERROR MESSAGE */}
   {error && (

    <div style={{
     background:"#f8d7da",
     color:"#721c24",
     padding:"12px",
     borderRadius:"6px",
     marginBottom:"12px",
     fontWeight:"bold",
     border:"1px solid #f5c6cb"
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
     type="email"
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