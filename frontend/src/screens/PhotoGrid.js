import React,{useState, useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from "axios"
import { Link } from 'react-router-dom'

const PhotoGrid = () => {

  const [images,setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await axios.get('/api/photos')
      setImages(data)
    }
    fetchImages()
  },[])

  return (
    <>
    <Header/>
    <div id='photogrid'>
    {images.map((i) => (  
      <Link to={`/api/photos/${i._id}`}>
      <img src={i.image} alt='pictures' key={i.id} />
      </Link>
    ))}
    </div>
    <Footer/>
    </>
  )
}

export default PhotoGrid