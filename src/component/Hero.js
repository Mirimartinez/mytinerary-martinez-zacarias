import '../styles/Hero.css';
import CallToAction from '../component/CallToAction'

function Hero() {
  return (
    <div className="Hero">
      <video id='video' autoPlay loop muted>
      <source
          src="http://localhost:3000/videoHero.mp4"
          type="video/mp4"
        />
      </video>
      {/* <h1 className='Hero-title'>MyTinerary</h1> */}
      <p className='Hero-subtitle'>Find your perfect trip, designed by insiders who know and love their cities!</p>
      <CallToAction  linkTo='Cities' buttonText='Ready to see what we got for you?' />
      {/* <button className='Hero-button' type="submit">Ready to see what we got for you?</button> */}
    </div>
  );
}

export default Hero;
