// const mongoose=require("mongoose");

// const DbConnect=async ()=>{
//     try {
//         const connect=await mongoose.connect(process.env.DB_URL)
//         console.log(`connection name:${connect.Connection.name}, host:${connect.connection.host}`)
//     } catch (error) {
//         console.log("DB is not connected",error);
//         process.exit(1);
//     }
// }

// export default DbConnect;


const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect=await mongoose.connect(process.env.DB_URL)
    console.log(`connection name:${connect.Connection.name}, host:${connect.connection.host}`)
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;
