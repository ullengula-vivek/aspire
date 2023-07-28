import dotenv from 'dotenv'
import images from "./data/images.js";
import Picture from "./models/picturesModel.js";
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Picture.deleteMany()
        await Picture.insertMany(images)

        console.log('Data Imported!')
        process.exit()

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Picture.deleteMany()

        console.log('Data Destroyed!')
        process.exit()

    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

if(process.argv[2] == '-d'){
    destroyData()
}else{
    importData()
}