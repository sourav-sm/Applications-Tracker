import React from "react"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



const Home=()=>{
   const[compnayName,setCompanyName]=useState("");
   const [applticationLink,setApplicationLink]=useState("");  

    const submitHandler=(e)=>{
        e.preventDefault();
      // alert("cliked");
      const applicatonData={
        cmpname:compnayName,
        url:applticationLink
      }
      try{
           const res=axios.post("http://localhost:4000/api/applications",
             applicatonData
          );

          if(res.status===201){
            setCompanyName("");
            setApplicationLink("");
            alert("Data Submitted Successfully");
          }else{
            alert("Failed to submit application.");
          }
      }catch(err){
        alert("An error occurred. Please try again.");
        console.log("error while submitting data",err);
      }
    };

    const navigate=useNavigate();
  
    return (
        <div>
          <h2>Applications tracker</h2>
          <button onClick={()=>{
                navigate("/list");
              }} >View List
          </button>

          <div>
            <form onSubmit={submitHandler}>
              <input 
                 placeholder='Enter Company Name'  
                 onChange={(e)=>setCompanyName(e.target.value)}
                 />
              <input 
                 placeholder='Application link'  
                 onChange={(e)=>setApplicationLink(e.target.value)}
                 />
              <button type="submit">Submit</button>
            </form>

          </div>
        </div>
    )
}

export default Home;