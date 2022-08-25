import React from 'react';
import '../styles/Footer.css';
import {Link as LinkRouter} from 'react-router-dom'


function Footer() {
    
    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }
    
    return (
            <footer className='Footer-Aspect'>
                <div className="Footer-nav">
        <nav>
        <button className='Footer-a' onClick={scrollUp} > Top</button>
        {/* <a className='Footer-a' id="home" href="cities">Cities</a>
        <a className='Footer-a' id="about" href="newcity">New City</a> */}
        
        <LinkRouter to="/Cities" className="Footer-a">Cities</LinkRouter>
        <LinkRouter to="/NewCity" className="Footer-a">New City</LinkRouter>
        </nav>
                <div className='Footer-Parrafo'>
                    <p><strong>Thanks for visiting!</strong></p>
                    <p className='Footer-copy'>Copyright ©MyTinerary|2022</p>
                </div>
                
                <div className='Fotter-LogoyCopy'>
                    <img src="http://localhost:3000/logo1.png" alt="logo" className='Fotter-Logo'></img>
                </div>
        </div>
            </footer>
        

)
}
export default Footer;