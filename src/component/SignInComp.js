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

    let id = signInRedux?.response;
    let message = ""
    if(signInRedux?.success){
        localStorage.setItem("token", id.token);
        localStorage.setItem("user", JSON.stringify(id.user));
    }

    function handleSubmit(e) {
        e.preventDefault();

        let dataLog = {
            mail: mailRef.current.value,
            password: passwordRef.current.value,
            from: "form",
        };
        SignInRedux(dataLog);
    }

        if (signInRedux?.success) {
            message = signInRedux.message
        }else {
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
            <SignInGoogle />
            </form>
            <div className="SignUpRouter">
                <p className='SignUpP'>Do you want an account?</p>
                <LinkRouter to="/auth/signup" className='SignUpP'>Sign Up</LinkRouter>
            </div>
        </div>
    )
}

export default SignInComp