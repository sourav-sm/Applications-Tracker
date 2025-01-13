const express=require("express");
const Application=require("../model/applicationModel");

const router=express.Router();

router.post("/applications",async (req,res)=>{
    try{
        const {cmpname,url}=req.body;
        const newApplication=new Application({cmpname,url});
        await newApplication.save();
        res.status(201).json(newApplication);
    }catch(err){
        res.status(400).json({error:err.message});
    }
})


router.post("/applications",async (req,res)=>{
    try{
        const application=await Application.find();
        res.status(200).json(application);
    }catch(err){
        res.status(500).json({error:err.message});
    }
})

module.exports=router;