import React from "react"
import { useNavigate } from "react-router-dom";


const Home=()=>{
    const submitHandler=(e)=>{
        e.preventDefault();
      alert("cliked");
    };

    const navigate=useNavigate();
  
    return (
        <div>
          <h2>Applications tracker</h2>
          <button onClick={()=>{
                navigate("/list");
          }} >View List</button>
          <div>
            <form onSubmit={submitHandler}>
              <input placeholder='enter company name'  />
              <input placeholder='apply link'  />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    )
}

export default Home;