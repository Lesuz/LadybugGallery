import { FiInstagram } from "react-icons/fi";
import profilepic from "../img/profilepic.jpg";

function Aboutartist() {
    return (
      <div className="wrapper"> 
        <h1>About Artist</h1>
        <div className="aboutartist">
          <p>I am Ronja Holopainen, a mostly self-taught artist. Art is my passion. Feel free to follow me on 
            social media.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium, arcu eget scelerisque 
            fringilla, ligula felis dapibus nibh, nec gravida tortor ipsum vitae nisi. Morbi tristique interdum 
            eleifend. Vestibulum ipsum turpis, viverra quis metus ornare, mattis eleifend tellus. Sed ut ligula 
            dui. Aenean ut massa pulvinar, mattis purus id, hendrerit risus. Nullam commodo enim sit amet 
            aliquam suscipit. In hac habitasse platea dictumst. Fusce in lorem ut velit vehicula venenatis 
            quis sit amet leo. Aliquam sit amet neque mi. Morbi et convallis lacus. Donec leo massa, eleifend 
            vitae risus in, ultricies bibendum magna. Quisque molestie est quis turpis maximus, in volutpat 
            tortor rhoncus. Mauris pulvinar viverra mauris non lobortis. Phasellus mauris dolor, tempus nec 
            lorem et, dapibus sodales nisl. Suspendisse bibendum, diam quis venenatis maximus, enim libero
            congue ex, quis mattis nisl arcu in metus. Sed convallis viverra tellus, vitae posuere purus 
            facilisis sit amet.
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