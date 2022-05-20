import profilePhoto from "../assets/img/profile_img.jpeg"
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function Info(){
 return (
    <div className="info">
      <img src={profilePhoto} alt="Profile"/>
      <h1>Brian Sammit Cruz Rodriguez</h1>
      <h3>Front end developer</h3>
      <p>briansammit.cruz@gmail.com</p>
      <div>
        <button> <FaEnvelope /> Email</button>
        <button> <FaLinkedin /> Linkedin</button>
      </div>
    </div> 
 ) 
}
