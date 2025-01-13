const express=require("express");
const DbConnect=require("./config/DbConnect");
const cors=require("cors");
const dotenv=require("dotenv");
const applicationRouts=require("./routes/applicationRouts")

dotenv.config();
DbConnect();

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/",applicationRouts);

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})