import profilePhoto from "../assets/img/profile_img.jpeg"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import './info.css'

export default function Info(){
 return (
    <div className="info">
      <img src={profilePhoto} alt="Profile"/>
      <h1>Brian Sammit Cruz Rodriguez</h1>
      <h3>Front end developer</h3>
      <p>briansammit.cruz@gmail.com</p>
      <div className="info--buttons">
        <button className="info--button_email"> <FaEnvelope /> Email</button>
        <button className="info--button_linkedin"> <FaLinkedin /> Linkedin</button>
      </div>
    </div> 
 ) 
}
