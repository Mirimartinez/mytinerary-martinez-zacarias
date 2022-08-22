import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './component/Carousel.js';
import Footer from './component/Footer.js';
import './index.css';
import Hero from './component/Hero';
import reportWebVitals from './reportWebVitals';
/* import EventsCarousel from './component/EventsCarousel.js'; */
import UnderConstruction from './pages/UnderConstruction.js';
import FooterLayout from './layouts/FooterLayout.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UnderConstruction />
    <FooterLayout />
    {/* <App />
    <Hero />
    <EventsCarousel />
    <Footer /> */}
  </React.StrictMode>
);

reportWebVitals();
