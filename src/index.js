import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './component/Footer.js';
import './index.css';
/* import App from './pages/App.js'; */
import Hero from './component/Hero';
/* import UnderConstruction from './pages/UnderConstruction.js';
import FooterLayout from './layouts/FooterLayout.js'; */
import reportWebVitals from './reportWebVitals';
import EventsCarousel from './component/EventsCarousel.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <UnderConstruction />
    <FooterLayout /> */}
    {/* <App /> */}
    <Hero />
    <EventsCarousel />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
