import React from 'react';
import ReactDOM from 'react-dom/client';
/* import Footer from './component/Footer.js'; */
import './index.css';
/* import App from './pages/App'; */
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
    <EventsCarousel />
    <Footer /> */}
  </React.StrictMode>
);

reportWebVitals();
