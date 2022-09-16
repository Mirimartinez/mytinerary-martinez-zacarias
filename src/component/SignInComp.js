import React, { useEffect, useState, useRef } from "react";
import '../styles/SignIn.css'
import SignInGoogle from './SignInGoogle'
import { Link as LinkRouter } from "react-router-dom";
import { useSignInUserMutation } from "../features/UserAPI";
import Alert from './Alert/Alert'

function SignInComp(){
    const mailRef = useRef();
    const passwordRef = useRef();

    const [SignInRedux, { data: signInRedux, error }] = useSignInUserMutation();
    const [user, setUser] = useState();
    let id = signInRedux?.response.user;
    let message = ""
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(id));
    }, user);

    localStorage.getItem("user");

    function handleSubmit(e) {
        e.preventDefault();

        let dataLog = {
            mail: mailRef.current.value,
            password: passwordRef.current.value,
            from: "form",
        };
        SignInRedux(dataLog);
        setUser(signInRedux);
    }

        if (signInRedux?.success) {
            message = signInRedux.message
        }else {
            console.log(error)
            message = error?.data.message
        }

    return(
        <div>
            <video id='videoSignIn' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video> 
            <div>
                <h1 className='SignInTitle'>Sign In</h1>
            </div>
            <form className='SignInForm' onSubmit={handleSubmit}>
                <input className='SignInInput' type="text" ref={mailRef} placeholder='Mail'/>
                <input className='SignInInput' type="password" ref={passwordRef} placeholder='Password'/>
                <Alert label={"Login"} message={message} />
                <p className='SignUpP'>By signing up, you agree to our Terms , Privacy Policy and Cookies
                    Policy.</p>
            <SignInGoogle />
            </form>
            <div className="SignUpRouter">
                <p className='SignUpP'>Do you want an account?</p>
                <LinkRouter to="/auth/signuppage" className='SignUpP'>Sign Up</LinkRouter>
            </div>
        </div>
    )
}

export default SignInComp