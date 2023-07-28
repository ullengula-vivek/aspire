import React,{useState, useEffect} from 'react'
import axios from "axios"
import { Link , useParams } from 'react-router-dom'

const PhotoScreen = () => {

const [image,setImage] = useState({})

const params = useParams()

useEffect(() => {
    const fetchImage = async () => {
      const { data } = await axios.get(`/api/photos/${params.id}`)
      setImage(data)
    }
    fetchImage()
  },[params.id])
  return (
    <div id='photopage'>
    <div id='name'>
    <h1 id='photoname'>{image.name}</h1>
    </div>
    <div id='back'>
   <Link to='/api/photos' ><button type='button'>Go Back</button></Link>  
    </div>   
    <div id='photo'>
    {<img src={image.image} alt='photos'></img> }
    </div>
    <div id='desc'>
       <h1> {image.description}</h1>
    </div>
    </div>
  )
}

export default PhotoScreen