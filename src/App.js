import React from 'react';
import Navbar from './components/Navbar'; 
import HeroSection from './components/hero-section'; // HeroSection bileşenini import ediyoruz
import HeroSectionHourBoxes from './components/hero-section-hour-boxes'; // HeroSectionHourBoxes bileşenini import ediyoruz
import OurClasses from './components/OurClasses'; 
import BMICalculator from './components/BMICalculator'; 
import OurBestTrainers from './components/OurBestTrainers';
import PurchaseFromUs from './components/PurchaseFromUs';
import ReviewClientSection from './components/ReviewClientSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';


function App() {
    return (
        <div className="App">
            <Navbar /> {/* Navbar bileşenini render ediyoruz */}
            <HeroSection /> {/* HeroSection bileşenini render ediyoruz */}
            <HeroSectionHourBoxes /> {/* HeroSectionHourBoxes bileşenini render ediyoruz */}
            {/* Diğer bileşenler veya içerikler buraya eklenebilir */}
            < OurClasses /> {/* HeroSectionHourBoxes bileşenini render ediyoruz */}
            {/* Diğer bileşenler veya içerikler buraya eklenebilir */}
            < BMICalculator /> {/* HeroSectionHourBoxes bileşenini render ediyoruz */}
            {/* Diğer bileşenler veya içerikler buraya eklenebilir */}
            <OurBestTrainers />
            <PurchaseFromUs />
            <ReviewClientSection />
            <ContactUsSection />
            <Footer />
        </div>
    );
}

export default App;
