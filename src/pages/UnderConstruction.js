import '../styles/UnderConstruction.css';

function UnderConstruction() {
  return (
    <div className="UnderConstruction">
      <video id='video' autoPlay loop muted>
      <source
          src="https://player.vimeo.com/external/534082644.hd.mp4?s=28e9778e97e5a36b94e3e40a4733ce337757788e&profile_id=174&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      <img className='UnderConstruction-Imagen' src='https://365psd.com/images/previews/107/under-construction-vector-illustration-eps-58368.jpg' ></img>
      <h1 className='UnderConstruction-title'>Page under construction..</h1>
      <p className='UnderConstruction-subtitle'>We will be available shortly.</p>
      
    </div>
  );
}

export default UnderConstruction;
