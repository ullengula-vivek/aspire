import React, {useState} from 'react'
import axios from 'axios'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactScreen = () => {

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[remarks,setRemarks] = useState("")

    const submitHanlder = (e) =>{
        e.preventDefault()
      axios.post('/api/contact',{
        name: name,
        email:email,
        remarks: remarks,
      })
      
    }
  return (
    <>
    <Header/>
    <img id='profile' src='/pictures/UV.jpg' alt='profile'/>
     <div id='formContainer'>
        <form onSubmit={submitHanlder}>
        <label for='fullname'>Full Name: </label>
        <input type='text' id='fullname' name='fullname'
        onChange={(e) => {setName(e.target.value)}}
        /><br></br>
        <label for='email'>Email: </label>
        <input type='mail' id='email' name='email' required placeholder='qwerty@example.com'
        onChange={(e) => {setEmail(e.target.value)}}
        /><br></br>
        <label for='email'>Remarks: </label>
        <textarea id='remarks' name='remarks'
        onChange={(e) => {setRemarks(e.target.value)}}
        />
        <button type='submit' id='submit'>Submit you details!</button>
        </form>
     </div><div id='exit'>
      <p><strong>Thank you!</strong> for visiting my portfolio! 
        I'm delighted to showcase my work as a MERN Stack developer. 
        The journey of crafting this website has been filled with learning and passion for web development.
         As I continue to grow and evolve, I hope you find inspiration in my projects. 
         If you have any questions or opportunities to collaborate, feel free to reach out. 
         Wishing you a great day ahead! 🚀👋</p>
     </div>
     <Footer/>
    </>
  )
}

export default ContactScreen