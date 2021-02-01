import ladybug1 from '../img/ladybug1.jpg';
import ladybug2 from '../img/ladybug2.jpg';
import ladybug3 from '../img/ladybug3.jpg';
import ladybug4 from '../img/ladybug4.jpg';
import ladybug5 from '../img/ladybug5.jpg';
import ladybug6 from '../img/ladybug6.jpg';
import thumbnail1 from '../img/ladybug1-thumbnail.jpg';
import thumbnail2 from '../img/ladybug2-thumbnail.jpg';
import thumbnail3 from '../img/ladybug3-thumbnail.jpg';
import thumbnail4 from '../img/ladybug4-thumbnail.jpg';
import thumbnail5 from '../img/ladybug5-thumbnail.jpg';
import thumbnail6 from '../img/ladybug6-thumbnail.jpg';

import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: ladybug1,
    thumbnail: thumbnail1
  },
  {
    original: ladybug2,
    thumbnail: thumbnail2
  },
  {
    original: ladybug3,
    thumbnail: thumbnail3
  },
  {
    original: ladybug4,
    thumbnail: thumbnail4
  },
  {
    original: ladybug5,
    thumbnail: thumbnail5
  },
  {
    original: ladybug6,
    thumbnail: thumbnail6
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