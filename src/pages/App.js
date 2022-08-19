import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <video id='video' autoPlay loop muted>
      <source
          src="https://player.vimeo.com/external/534082644.hd.mp4?s=28e9778e97e5a36b94e3e40a4733ce337757788e&profile_id=174&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
      <h1 className='App-title'>MyTinerary</h1>
      <p className='App-subtitle'>Find your perfect trip, designed by insiders who know and love their cities!</p>
      <button className='App-button' type="submit">Let's go!</button>
    </div>
  );
}

export default App;
