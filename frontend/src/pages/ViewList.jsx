import { useState,useEffect } from "react";
import axios from "axios";

const ViewList=()=>{
    const [list,setList]=useState([]);

    const fetchDarta=async()=>{
        try{
            const res=await axios.get("http://localhost:4000/api/applications")
        setList(res.data);
        }catch(err){
            console.log("error while fetching data",err);
        }
    }

    useEffect(()=>{
        fetchDarta();
    },[])
    
    const Dateformat=(isodate)=>{
        const date=new Date(isodate);
        return date.toISOString().split("T")[0]
    }

    return(
        <div>
            <div>Application list</div>
            <div>
                {list.map((it,index)=>(
                       <div key={index}>
                             <div>{it.cmpname}</div>
                             <div>{it.url}</div>  
                            <p>{Dateformat(it.date)}</p>   
                       </div>
                ))}         
            </div>
        </div>
    )
}

export default ViewList;