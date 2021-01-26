import { FiInstagram } from "react-icons/fi";

function Aboutartist() {
    return (
      <div className="wrapper"> 
        <h1>About Artist</h1>
        <p>I am Ronja Holopainen, a mostly self-taught artist. Art is my passion. Feel free to follow me on social media.</p>
        
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