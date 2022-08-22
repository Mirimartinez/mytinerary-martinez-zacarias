import React from 'react';
import '../styles/Footer.css';


function Footer() {
    return (
            <footer className='Footer-Aspect'>
                <div className='Fotter-LogoyCopy'>
                    <img src="http://localhost:3000/logo.png" alt="logo" className='Fotter-Logo'></img>
                    <p className='Footer-copy'>Copyright ©Mytinerary|2022</p>
                </div>
                <div className='Footer-Parrafo'>
                    <p><strong>Thanks for visiting!</strong></p>
                </div>
                <div className='Footer-Link'>
                    <a className='Footer-Anchor' href="Home">Home</a>
                    <a className='Footer-Anchor' href="Cities">Cities</a>
                    </div>
            </footer>


)
}
export default Footer;