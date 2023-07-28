import React from 'react'
import {Link} from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div id='welcome'>
       <p>
        <span id='w'>W</span>elcome to my portfolio! As a web developer, I merge the
        realms of technology and design to craft visually captivating
        and functionally seamless online experiences. With a keen
        eye for aesthetics and a passion for photography, I bring a
        unique perspective to my work, capturing the essence of
        moments through captivating visuals while ensuring a smooth
        and engaging user journey. Explore my portfolio and witness
        the harmony of web development and photography come
        alive in this project.
        <br/>
        <span id='click' >Click below for the photos</span>
        </p>
    </div>
    <div id="arrow">
      <Link to='/api/photos'><img src='/pictures/arrow.png' alt='arrow_down'/></Link> 
    </div>
    </>
  )
}

export default Welcome