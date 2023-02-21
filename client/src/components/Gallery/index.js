import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "../../assets/logo.jpg";
import image2 from "../../assets/sec_logo.jpg";
import image3 from "../../assets/mug.png";
import image4 from "../../assets/tshirt.png";

// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4 ];

const zoomOutProperties = {
  duration: 3000,
  transitionDuration: 3000,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,

};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} alt="" src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function Gallery() {
  return (
    <div className="Gallery">
      <Slideshow />
    </div>
  );
}

export default Gallery;