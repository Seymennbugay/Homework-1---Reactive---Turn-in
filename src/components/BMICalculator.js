import React, { useState } from 'react';
import './BMICalculator.css'; // CSS styles import
import bmiIndex from '../images/bmi-index.jpg'; // Import the image file

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState('');
    const [arrowClass, setArrowClass] = useState('');

    const calculateBMI = () => {
        if (height > 0 && weight > 0) {
            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
            let result = `Your BMI is ${bmi}. `;
            let arrowClassName = '';

            if (bmi < 18.5) {
                result += 'You are underweight.';
                arrowClassName = 'arrow-underweight';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                result += 'You have a normal weight.';
                arrowClassName = 'arrow-normal';
            } else if (bmi >= 25 && bmi <= 29.9) {
                result += 'You are overweight.';
                arrowClassName = 'arrow-overweight';
            } else if (bmi >= 30 && bmi <= 34.9) {
                result += 'You are obese.';
                arrowClassName = 'arrow-obese';
            } else {
                result += 'You are severely obese.';
                arrowClassName = 'arrow-severely-obese';
            }

            setBmiResult(result);
            setArrowClass(arrowClassName);
        } else {
            setBmiResult('Please enter valid height and weight.');
            setArrowClass('');
        }
    };

    return (
        <div className="container bmi-calculator-section">
            <div className="row">
                {/* Left Column */}
                <div className="col-md-6 bmi-calculator-left-col">
                    <h1 className="bmi-calculator-title">BMI Calculator</h1>
                    <p className="bmi-calculator-description">
                        A BMI calculator helps determine body mass index by inputting height and weight. It provides a number that categorizes weight status, guiding health and fitness decisions.
                    </p>
                    <div className="container bmi-calculator-inner-container">
                        <div className="row">
                            <div className="col-md-6 bmi-calculator-left-input-col">
                                <input
                                    type="number"
                                    placeholder="Enter height (cm)"
                                    className="bmi-input bmi-height-input"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 bmi-calculator-right-input-col">
                                <input
                                    type="number"
                                    placeholder="Enter weight (kg)"
                                    className="bmi-input bmi-weight-input"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                />
                            </div>
                        </div>
                        <button className="bmi-submit-btn" onClick={calculateBMI}>Calculate</button>
                        <div className="bmi-result">{bmiResult}</div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="col-md-6 bmi-calculator-right-col">
                    <div className="bmi-chart-container">
                        <img src={bmiIndex} alt="BMI Chart" className="bmi-calculator-image" />
                        <div className={`bmi-arrow ${arrowClass}`}>&#8595;</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BMICalculator;

