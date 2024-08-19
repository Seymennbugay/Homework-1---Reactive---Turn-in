import React from 'react';
import './ReviewClientSection.css';
import client1 from '../images/client1.jpg'; // Resim dosyalarının doğru yolu
import client2 from '../images/client2.jpg';

const ReviewClientSection = () => {
  return (
    <div className="container-fluid">
      <div className="rewiew-client-section-body-div">
        <div className="rewiew-client-section-main-div">
          {/* Başlık Divi */}
          <div className="rewiew-client-section-header-div">
            <h1 className="rewiew-client-section-header-title">REVIEW CLIENT</h1>
          </div>
          {/* H1 ve Paragraf */}
          <hr className="rewiew-client-section-main-hr" />
          <p className="rewiew-client-section-main-paragraph">
            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisiLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisiipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed do eiusmod tempor incididunt ut labore et dolore.
          </p>

          {/* İç Div Yapısı */}
          <div className="container">
            <div className="rewiew-client-section-row">
              <div className="row">
                <div className="col-md-6">
                  <img className="rewiew-client-section-img" src={client1} alt="Diet Expert" />
                  <p className="rewiew-client-section-p1">Diet Expert <br /> CFO</p>
                  <div className="rewiew-client-section-div">
                    Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisiLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisiipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan, tortor eget auctor sollicitudin, nunc odio elementum libero, nec ultricies justo nisl vel orci.
                  </div>
                </div>
                <div className="col-md-6">
                  <img className="rewiew-client-section-img" src={client2} alt="Cardio Trainer" />
                  <p className="rewiew-client-section-p1">Cardio Trainer <br /> CEO</p>
                  <div className="rewiew-client-section-div" id="contact-us">
                    Lorem ipsum dolor sLorem Lorem ipsum dolor sit amet, consectetur adipiscing elititLorem Lorem ipsum dolor sit amet, consectetur adipiscing elit amet, consectetur adipiscing elit. Curabitur accumsan, tortor eget auctor sollicitudin, nunc odio elementum libero, nec ultricies justo nisl vel orci.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewClientSection;
