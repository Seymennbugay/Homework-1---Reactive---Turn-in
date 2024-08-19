import React from 'react';
import './ContactUsSection.css';

const ContactUsSection = () => {
  return (
    <div className="container-fluid">
      <div className="contact-us-section-div">
        <div className="rewiew-client-section-main-div">
          {/* Başlık Divi */}
          <div className="contact-us-section-div">
            <h1 className="contact-us-section-header-title">Contact Us</h1>
          </div>
          {/* H1 ve Paragraf */}
          <hr className="contact-us-section-main-hr" />
          <p className="contact-us-section-main-paragraph">
            Lorem ipsum dolor sit amet, consectetu.
          </p>

          {/* İç Div Yapısı */}
          <div className="container">
            <div className="contact-us-section-row">
              {/* Col Sistemi */}
              <div className="row">
                <div className="col-md-6">
                  <h1 className="contact-us-section-h1a">Mobile Number</h1>
                  <p className="contact-us-section-pa">+90 555 555 98 54</p>
                  <h1 className="contact-us-section-h1b">Email Address</h1>
                  <p className="contact-us-section-pb">seymenbugay869@gmail.com</p>
                  <h1 className="contact-us-section-h1c">Make An Appointment</h1>
                  <input className="contact-us-section-nameinput" type="text" placeholder="Name" />
                  <input className="contact-us-section-mailinput" type="text" placeholder="Email" />
                  <input className="contact-us-section-messageinput" type="text" placeholder="Your Message" />
                </div>
                <div className="col-md-6">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        width="508"
                        height="340"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=adana%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title="Google Map"
                      ></iframe>
                      <style>
                        {`
                          .mapouter {position:relative;text-align:right;height:340px;width:508px;}
                          .gmap_canvas {overflow:hidden;background:none!important;height:340px;width:508px;}
                        `}
                      </style>
                    </div>
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

export default ContactUsSection;
