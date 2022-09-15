import '../styles/SignIn.css'

function SignIn(){

    return(
        <div>
            <div>
                <h1 className='SignInTitle'>Sign In</h1>
            </div>
            <video id='videoSignIn' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <form className='SignInForm'>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='Photo url'/>
            <input type="text" placeholder='Country'/>
            <input type="text" placeholder='Mail'/>
            <input type="text" placeholder='Password'/>
            <button className='ButtonInput'>Submit</button>

            </form>
        </div>
    )
}

export default SignIn