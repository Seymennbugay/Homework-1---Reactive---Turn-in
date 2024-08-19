import React from 'react';
import './Footer.css';
import logo from '../images/logo.png'; // logo.png dosyasını doğru bir şekilde import ettik

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="footer-logo text-left">
              {/* src propunda logo değişkenini kullanıyoruz */}
              <img src={logo} alt="Logo" className="img-fluid mb-2" />
              <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, ligula at posuere aliquam, lorem arcu dictum erat, vitae vestibulum quam sapien sed est. Sed quis orci nec libero blandit cursus.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Classes</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Helpful Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Services</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

