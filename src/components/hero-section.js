import React from 'react';
import './hero-section.css';

const HeroSection = () => {
    return (
        <div className="main-container"> 
            <div className="container hero-section">
                <div className="hero-body-div">
                    <div className="hero-main-div">
                        {/* Başlık Divi */}
                        <div className="hero-header-div">
                            <h1 className="hero-header-title">Powerful</h1>
                        </div>
                        {/* H1 ve Paragraf */}
                        <p className="hero-main-title">Group <br /> Practice <br /> With Trainer</p>
                        <p className="hero-main-paragraph">
                            "Success is not final, failure is not fatal: It is the courage to continue that counts. Life is not about waiting for the storm to pass, but about learning how to dance in the rain." - Winston Churchill
                            <br />
                            <br />
                            Türkçesi: "Başarı nihai değildir, başarısızlık ölümcül değildir: Önemli olan devam etme cesaretidir. Hayat, fırtınanın geçmesini beklemekle ilgili değil, yağmurda dans etmeyi öğrenmekle ilgilidir."
                        </p>
                        {/* İç Div Yapısı */}
                        <div className="hero-inner-div">
                            <div className="hero-row">
                                {/* Col Sistemi */}
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button className="hero-signupbutton">Sign Up</button>
                                        </div>
                                        <div className="col-md-6">
                                            <button className="hero-detailsbutton">Details</button>
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

export default HeroSection;

