import React from 'react';
import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center section__padding">
        <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
          <div className="app__aboutus-content_about">
              <h1 className="headtext__carmorant">About Us</h1>
              <img src={images.spoon} alt="about_spoon" />
              <p className="p__opensens">Just write something. Anything at all. Just put words to paper. Place fingers on keys and start</p>
              <button type="button" className="custom__button">Know More</button>
          </div>
          <div className="app__aboutus-content_knife flex-center">
            <img src={images.knife} alt="about_knife" />
          </div>

          <div className="app__aboutus-content_history">
              <h1 className="headtext__carmorant">Our history</h1>
              <img src={images.spoon} alt="about_spoon" />
              <p className="p__opensens">Just write something. Anything at all. Just put words to paper. Place fingers on keys and start</p>
              <button type="button" className="custom__button">Know More</button>
          </div>

    </div>
  </div>
);

export default AboutUs;
