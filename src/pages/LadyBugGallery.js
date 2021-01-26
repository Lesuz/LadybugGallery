import ladybug1 from '../img/ladybug1.jpg';
import ladybug2 from '../img/ladybug2.jpg';
import ladybug3 from '../img/ladybug3.jpg';
import ladybug4 from '../img/ladybug4.jpg';
import ladybug5 from '../img/ladybug5.jpg';
import ladybug6 from '../img/ladybug6.jpg';

import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: ladybug1,
    thumbnail: ladybug1
  },
  {
    original: ladybug2,
    thumbnail: ladybug2
  },
  {
    original: ladybug3,
    thumbnail: ladybug3
  },
  {
    original: ladybug4,
    thumbnail: ladybug4
  },
  {
    original: ladybug5,
    thumbnail: ladybug5
  },
  {
    original: ladybug6,
    thumbnail: ladybug6
  }
]

function LadyBugGallery() {
    return (
      <div className="gallery">
        <ImageGallery items={images}/>
      </div>
    );
  }
  
  export default LadyBugGallery;