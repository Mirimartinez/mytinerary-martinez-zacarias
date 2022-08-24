import React from 'react';
import '../styles/Footer.css';


function Footer() {

    const scrollUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    

    return (
            <footer className='Footer-Aspect'>
                <div className="Footer-nav">
        <nav>
        <a className='Footer-a' id="contact" href="top">Back To TOP</a>
        <a className='Footer-a' id="home" href="cities">Cities</a>
        <a className='Footer-a' id="about" href="newcity">New City</a>
        </nav>
                <div className='Footer-Parrafo'>
                    <p><strong>Thanks for visiting!</strong></p>
                    <p className='Footer-copy'>Copyright ©MyTinerary|2022</p>
                </div>
                <button className='Footer-scroolUp' onClick={scrollUp}>TOP</button>
                <div className='Fotter-LogoyCopy'>
                    <img src="http://localhost:3000/logo1.png" alt="logo" className='Fotter-Logo'></img>
                </div>
        </div>
            </footer>
        

)
}
export default Footer;