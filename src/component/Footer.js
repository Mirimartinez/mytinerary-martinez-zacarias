import React from 'react';
import '../styles/Footer.css';
import {Link as LinkRouter} from 'react-router-dom'


function Footer() {

    let today = new Date();
    let year = today.getFullYear();

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        });
    }


    return (
            <footer className='Footer-Aspect'>
                <div className="Footer-nav">
        <nav className='Footer-nav1'>
        <button className='Footer-a Footer-top' onClick={scrollUp} > Top</button>
        
        
        <LinkRouter to="/Cities" className="Footer-a">Cities</LinkRouter>
        <LinkRouter to="/NewCity" className="Footer-a">New City</LinkRouter>
        </nav>
                <div className='Footer-Parrafo'>
                    <p className='Footer-Thanks'><strong>Thanks for visiting!</strong></p>
                    <p className='Footer-copy'>Copyright ©MyTinerary|<strong>{year}</strong></p>
                </div>
                {/* <button className='Footer-scroolUp' onClick={scrollUp}>TOP</button> */}
                <div className='Fotter-LogoyCopy'>
                    
                    <img src="http://localhost:3000/logo1.png" alt="logo" className='Fotter-Logo'></img>
                </div>
        </div>
            </footer>
        

)
}
export default Footer;