import mongoose from "mongoose";

const picturesSchema = mongoose.Schema({
    name:{
        type: String
    },
    image:{
        type: String
    },
    description:{
        type: String
    }
})

const Picture = mongoose.model('Picture',picturesSchema)

export default Picture