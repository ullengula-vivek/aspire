import mongoose from "mongoose";

const userRemarkModel = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    remark:{
        type:String,
    }
})

const Remark = mongoose.model('Remark',userRemarkModel)

export default Remark