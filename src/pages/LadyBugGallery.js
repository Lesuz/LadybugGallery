import ladybug1 from '../img/ladybug1.jpg';
import ladybug2 from '../img/ladybug2.jpg';
import ladybug3 from '../img/ladybug3.jpg';
import ladybug4 from '../img/ladybug4.jpg';
import ladybug5 from '../img/ladybug5.jpg';
import ladybug6 from '../img/ladybug6.jpg';


function LadyBugGallery() {
    return (
      <div>
        <div className="gallery">
          <img src={ladybug1}></img>
          <img src={ladybug2}></img>
          <img src={ladybug3}></img>
          <img src={ladybug4}></img>
          <img src={ladybug5}></img>
          <img src={ladybug6}></img>
        </div>
      </div>
    );
  }
  
  export default LadyBugGallery;