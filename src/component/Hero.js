import '../styles/Hero.css';

function Hero() {
  return (
    <div className="Hero">
      <video id='video' autoPlay loop muted>
      <source
          src="http://localhost:3000/videoHero.mp4"
          type="video/mp4"
        />
      </video>
      <h1 className='Hero-title'>MyTinerary</h1>
      <p className='Hero-subtitle'>Find your perfect trip, designed by insiders who know and love their cities!</p>
      <button className='Hero-button' type="submit">Ready to see what we got for you?</button>
    </div>
  );
}

export default Hero;
