import { FiInstagram } from "react-icons/fi";
import profilepic from "../img/profilepic.jpg";

function Aboutartist() {
    return (
      <div className="wrapper"> 
        <h1>About Artist</h1>
        <div className="aboutartist">
          <p>
            I’m Ronja Holopainen, a Finnish art hobbyist with a passion for digital drawing. I’ve been into 
            creating art ever since I knew how to dip my fingers into paint, and have studied it in small 
            after-school classes for the better half of my childhood. Still, I mostly consider myself a 
            self-taught artist; I enjoyed drawing way more at home than in class, and my love for digital 
            creating blossomed (and evolved) all on its own.
          </p>
          <p>
            I learn every day and art isn’t an exception. My comfort zones lay in characters and fantasy 
            elements, experimenting with colors and visual effects - but I’m always willing to try new things 
            and better my craft both within and outside of what I’m used to. But more importantly, I 
            try to have fun with what I do. Even if learning includes struggle, it’s nothing compared to 
            the amazing feeling of creating and looking onto your own finished work.
          </p>
          <img src={profilepic}></img>
          </div>
        <div className="socialmedia">
          <a href="https://www.instagram.com/riimedoesart/" rel="noreferrer" target="_blank" >
            <FiInstagram />
            <p><em>&#64; riimedoesart</em></p>
          </a>
        </div>
      </div>
      
    );
  }
  
  export default Aboutartist;