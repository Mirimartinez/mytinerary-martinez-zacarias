import '../styles/SignUp.css'

function SignUpComp(){

    return(
        <div>
            <div>
                <h1 className='SignInTitle'>Sign Up</h1>
            </div>
            <video id='videoSignIn' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
        </video> 
            <form className='SignInForm'>
            <input className='SignInInput' type="text" placeholder='Name'/>
            <input className='SignInInput' type="text" placeholder='Last Name'/>
            <input className='SignInInput' type="text" placeholder='Photo url'/>
            <input className='SignInInput' type="text" placeholder='Country'/>
            <input className='SignInInput' type="text" placeholder='Mail'/>
            <input className='SignInInput' type="text" placeholder='Password'/>
            <button className='ButtonInput'>Submit</button>
            </form>
            <div><p className='SignUptext'>Or</p></div>
        </div>
    )
}

export default SignUpComp