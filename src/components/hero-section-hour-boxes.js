import React from 'react';
import './hero-section-hour-boxes.css'; // CSS dosyasını içe aktarın

const HeroSectionHourBoxes = () => {
  return (
    <div className="container hero-section-hour-boxes">
      <div className="row">
        <div className="col-md-3">
          <div className="hour-box">
            <h1 className="hour-number">325</h1>
            <p className="hour-text">Course</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="hour-box">
            <h1 className="hour-number">405</h1>
            <p className="hour-text">Workout</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="hour-box">
            <h1 className="hour-number">305</h1>
            <p className="hour-text">Working Hour</p>
          </div>
        </div>
        <div className="col-md-3">
          <div id="our-classes" className="hour-box">
            <h1 className="hour-number">705</h1>
            <p className="hour-text">Happy Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHourBoxes;
