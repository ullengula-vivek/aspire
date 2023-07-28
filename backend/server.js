import express from 'express'
import Picture from './models/picturesModel.js'
import Remark from './models/userRemarkModel.js'
import expressAsyncHandler from 'express-async-handler'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()

dotenv.config()

connectDB()

app.get('/',  (req, res) => {
  res.send('Hello')
})

app.get('/api/photos', expressAsyncHandler(async(req, res) => {
    const images = await Picture.find({})

    res.json(images)
}))

app.get('/api/photos/:id', expressAsyncHandler(async(req,res) => {
    const image = await Picture.findById(req.params.id)
    res.json(image)
}))

app.use(express.json())

app.post('/api/contact', expressAsyncHandler(async(req,res) => {
  const{ name , email , remarks } = req.body

  const formData = new Remark({
    name: name,
    email: email,
    remark: remarks,
})

formData.save()

}))

app.listen(5000)