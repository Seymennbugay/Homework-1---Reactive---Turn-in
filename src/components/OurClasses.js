import React, { useState } from 'react';
import './OurClasses.css'; // Importing CSS styles
import yoga from '../images/yoga.jpg';
import group from '../images/group.webp';
import solo from '../images/solo.jpg';
import stret from '../images/stret.webp';

const OurClasses = () => {
  const [imageSrc, setImageSrc] = useState(yoga); // Setting initial state with the imported yoga image

  const handleBoxClick = (newSrc) => {
    setImageSrc(newSrc); // Updating the state with the new image source
  };

  return (
    <div className="our-classes-container">
      {/* Our Classes Top Part Section */}
      <div className="container our-classes top-part">
        <h1 className="classes-header">Our Classes</h1>
        <hr className="classes-divider" />
        <p className="classes-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          Vivamus lacinia odio vitae.
        </p>
      </div>

      {/* Our Classes Section Yoga Types Section */}
      <div className="container yoga-types-section">
        <div className="row">
          <div className="col-md-3">
            <div
              className="yoga-type-box"
              id="yoga-box"
              onClick={() => handleBoxClick(yoga)} // Using imported yoga image
            >
              <p className="yoga-type-text">Yoga</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="yoga-type-box"
              id="group-box"
              onClick={() => handleBoxClick(group)} // Using imported group image
            >
              <p className="yoga-type-text">Group</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="yoga-type-box"
              id="solo-box"
              onClick={() => handleBoxClick(solo)} // Using imported solo image
            >
              <p className="yoga-type-text">Solo</p>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="yoga-type-box"
              id="stretching-box"
              onClick={() => handleBoxClick(stret)} // Using imported stretching image
            >
              <p className="yoga-type-text">Stretching</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Classes Yoga Picture Part */}
      <div className="container yoga-picture-part">
        <div className="row">
          <div className="col-md-6">
            <h1 className="picture-part-header1">Why Are Your Yoga?</h1>
            <p className="picture-part-paragraph1">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis, elit nec pretium dictum, odio lorem ultrices metus, at
              pharetra libero felis eu nisi. Vestibulum gravida suscipit
              ligula.".
            </p>
            <h1 className="picture-part-header2">When Comes Your Yoga Time</h1>
            <p className="picture-part-paragraph2">
              8.30 9.30 every Sunday to Friday
              <br />
              8.30 9.30 every Sunday to Friday
              <br />
              8.30 9.30 every Sunday to Friday
              <br />
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={imageSrc} // Setting the image source from the state
              alt="Yoga"
              className="yoga-image"
              id="yoga-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClasses;


