const mongoose=require("mongoose");

const applicationSchema=new mongoose.Schema(
    {
        cmpname:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,

        },
        date:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports = mongoose.model('application', applicationSchema);