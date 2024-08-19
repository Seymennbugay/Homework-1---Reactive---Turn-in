import React from 'react';
import './PurchaseFromUs.css';
import purchase1 from '../images/purchase1.jpg'; // Resim dosyalarının doğru yolu
import purchase2 from '../images/purchase2.jpg';
import purchase3 from '../images/purchase3.jpg';
import purchase4 from '../images/purchase4.jpg';

const PurchaseFromUs = () => {
  return (
    <div className="container-fluid purchase-from-us-container">
      <h1 className="purchase-from-us-title">Purchase From Us</h1>
      <hr className="purchase-from-us-divider" />
      <p className="purchase-from-us-description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
      </p>
      <div className="container purchase-from-us-inner-container">
        <div className="row purchase-from-us-row">
          <div className="col-md-3 purchase-from-us-col">
            <div className="card purchase-from-us-card">
              <img src={purchase1} alt="Product 1" className="purchase-from-us-card-img" />
              <h3 className="purchase-from-us-card-title">Kettlebell/5kg</h3>
              <p className="purchase-from-us-card-description">
                <span className="old-price">89.99</span> / 59.99
              </p>
              <div className="purchase-from-us-card-footer">
                <span className="purchase-from-us-card-icon">
                  <i className="fas fa-shopping-cart purchase-from-us-card-icon"></i>
                </span>
                <p className="purchase-from-us-card-info">Add To Cart</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 purchase-from-us-col">
            <div className="card purchase-from-us-card">
              <img src={purchase2} alt="Product 2" className="purchase-from-us-card-img" />
              <h3 className="purchase-from-us-card-title">Treadmill</h3>
              <p className="purchase-from-us-card-description">
                <span className="old-price">89.99</span> / 59.99
              </p>
              <div className="purchase-from-us-card-footer">
                <span className="purchase-from-us-card-icon">
                  <i className="fas fa-shopping-cart purchase-from-us-card-icon"></i>
                </span>
                <p className="purchase-from-us-card-info">Add To Cart</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 purchase-from-us-col">
            <div className="card purchase-from-us-card">
              <img src={purchase3} alt="Product 3" className="purchase-from-us-card-img" />
              <h3 className="purchase-from-us-card-title">Adjustable Dumbbell</h3>
              <p className="purchase-from-us-card-description">
                <span className="old-price">89.99</span> / 59.99
              </p>
              <div className="purchase-from-us-card-footer">
                <span className="purchase-from-us-card-icon">
                  <i className="fas fa-shopping-cart purchase-from-us-card-icon"></i>
                </span>
                <p className="purchase-from-us-card-info">Add To Cart</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 purchase-from-us-col">
            <div className="card purchase-from-us-card">
              <img src={purchase4} alt="Product 4" className="purchase-from-us-card-img" />
              <h3 className="purchase-from-us-card-title">Kettlebell/3kg</h3>
              <p className="purchase-from-us-card-description">
                <span className="old-price">89.99</span> / 59.99
              </p>
              <div className="purchase-from-us-card-footer">
                <span className="purchase-from-us-card-icon">
                  <i className="fas fa-shopping-cart purchase-from-us-card-icon"></i>
                </span>
                <p className="purchase-from-us-card-info">Add To Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseFromUs;
