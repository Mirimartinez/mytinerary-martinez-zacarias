import '../styles/UnderConstruction.css';

function UnderConstruction() {
  return (
    <div className="UnderConstruction">
      <video id='video' autoPlay loop muted>
      <source
          src="http://localhost:3000/videoHero.mp4"
          type="video/mp4"
        />
      </video>
      <img className='UnderConstruction-Imagen' src='https://365psd.com/images/previews/107/under-construction-vector-illustration-eps-58368.jpg' alt='' ></img>
      <h1 className='UnderConstruction-title'>Page under construction..</h1>
      <p className='UnderConstruction-subtitle'>We will be available shortly.</p>
      
    </div>
  );
}

export default UnderConstruction;
