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
        // <div>
        //   <h2>Applications tracker</h2>
        //   <button onClick={()=>{
        //         navigate("/list");
        //       }} >View List
        //   </button>

        //   <div>
        //     <form onSubmit={submitHandler}>
        //       <input 
        //          placeholder='Enter Company Name'  
        //          onChange={(e)=>setCompanyName(e.target.value)}
        //          />
        //       <input 
        //          placeholder='Application link'  
        //          onChange={(e)=>setApplicationLink(e.target.value)}
        //          />
        //       <button type="submit">Submit</button>
        //     </form>

        //   </div>
        // </div>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
  <h2 className="text-3xl font-bold text-gray-800 mb-6">Applications Tracker</h2>
  <button
    onClick={() => {
      navigate("/list");
    }}
    className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
  >
    View List
  </button>

  <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
    <form onSubmit={submitHandler} className="space-y-4">
      <input
        type="text"
        placeholder="Enter Company Name"
        onChange={(e) => setCompanyName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Application Link"
        onChange={(e) => setApplicationLink(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  </div>
</div>

    )
}

export default Home;