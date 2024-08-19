import React from 'react';
import './OurBestTrainers.css';
import trainer1 from '../images/trainer1.jpg'; // Resimlerin doğru yolu için dosya isimlerini kontrol edin
import trainer2 from '../images/trainer2.jpg';
import trainer3 from '../images/trainer3.jpg';

const OurBestTrainers = () => {
  return (
    <div className="container-fluid our-best-trainers-section">
      <h1 className="our-best-trainers-title">Our Best Trainers</h1>
      <hr className="our-best-trainers-divider" />
      <p className="our-best-trainers-description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
      </p>
      <div className="container our-best-trainers-inner-container">
        <div className="row our-best-trainers-row">
          <div className="col-md-4 our-best-trainers-col">
            <img src={trainer1} alt="Trainer 1" className="our-best-trainers-img" />
          </div>
          <div className="col-md-4 our-best-trainers-col">
            <img src={trainer2} alt="Trainer 2" className="our-best-trainers-img" />
          </div>
          <div className="col-md-4 our-best-trainers-col">
            <img src={trainer3} alt="Trainer 3" className="our-best-trainers-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurBestTrainers;
