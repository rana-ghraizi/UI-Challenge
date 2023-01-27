import React, { useState } from 'react';
import './About.css';

function About(props) { 
  const images = [
    "/image1.jpeg",
    "/image4.jpg"
  ]
  const title = [
    "Our Mission:",
    "Our Vision:"
  ]
  const text = [
    "Our mission is to introduce yerba matè to the world through quality products. We strive to only stock ethically sourced and sustainable products. Buying from All Way Matè should give you the confidence you’re contributing to a better world.",
    "At All Way Matè, we’re about getting people together and to enjoy each other’s company with a drink of yerba matè. We believe that what we do weaves a fabric of positive relationships and experiences that begins with our products and stretches into the world."
]
  const [index, setIndex] = useState(0);
  function loop(count) {
    if (count === images.length) {
      return count = 0;
    }
    if (count < 0) {
      return count=images.length-1;
    }
    return count;
  }
    return (
      <div className='about' id='about-us'>
        <p className='about-title'>Who <span className='weAre'>We Are</span></p>
        <div className='about-content'>
          <div onClick={()=> setIndex(count => loop(count-1))}>
            <button className='arrowBtn'><i class="arrow left"></i></button>
          </div>
          <div className='slider-content'>
            <div className='slider-text'>
              <p>{title[index]}</p>
              <p>{text[index]}</p>
            </div>
            <img src={images[index]} className="slider-image"/>
          </div>
          <div onClick={()=> setIndex(count => loop(count+1))}>
            <button className='arrowBtn'><i class="arrow right"></i></button>
          </div>
        </div>
        
      </div> 
    );
}

export default About;