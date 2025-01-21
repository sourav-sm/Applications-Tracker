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
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
            <div className="text-3xl font-extrabold text-gray-800 mb-6">Application List</div>
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg space-y-6">
              {list.map((it, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div className="text-xl font-bold text-gray-800 mb-2">{it.cmpname}</div>
                  <div
                    className="text-blue-600 hover:underline cursor-pointer mb-2 break-words"
                    onClick={() => {
                      window.open(it.url, "_blank");
                    }}
                  >
                    {it.url}
                  </div>
                  <p className="text-gray-600">{Dateformat(it.date)}</p>
                </div>
              ))}
            </div>
        </div>
    )
}

export default ViewList;