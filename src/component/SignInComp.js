import '../styles/SignUp.css'

function SignInComp(){

    return(
        <div>
            <div>
                <h1 className='SignInTitle'>Sign Up</h1>
            </div>
            <video id='videoSignIn' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
        </video> 
            <form className='SignInForm'>
            <input className='SignInInput' type="text" placeholder='Mail'/>
            <input className='SignInInput' type="text" placeholder='Password'/>
            <button className='ButtonInput'>Submit</button>
            </form>
            <div><p className='SignUptext'>Or</p></div>
        </div>
    )
}

export default SignInComp