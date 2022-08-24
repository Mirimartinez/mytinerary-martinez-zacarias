import '../styles/Header.css'

function Header(){
    return(
        <div className='Header-cont'>
        <div id="Header-logo">
        <img className="Header-logo" src="http://localhost:3000/logo.png" alt="logo"/>
        </div>
        <div id="Header-title" class="Header-color">
        <h1 className="h1">MyTinerary</h1>
        </div>
        <div className="Header-nav">
        <nav>
        <a className='Header-a' id="info" href="home">Home</a>
        <a className='Header-a' id="home" href="cities">Cities</a>
        <a className='Header-a' id="about" href="newcity">New City</a>
        </nav>
        </div>
        </div>
    )
}

export default Header