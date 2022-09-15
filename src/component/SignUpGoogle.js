import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import { useSignUpUserMutation  } from '../features/UserAPI'
import '../styles/SignIn.css'

export default function SignUpGoogle() {
    
    const buttonDiv = useRef();
    const [addNewUser] = useSignUpUserMutation;

    async function handleCredentialResponse(response){

        let userObject = jose.decodeJwt(response.credential)

        let newUser = {
            name: userObject.name,
            lastName: userObject.lastName,
            country: userObject.country,
            photo: userObject.photo,
            password: userObject.password,
            role: "admin",
            mial: userObject.mial,
            from: "google"
        }
    }

    useEffect(() => {
        /* global google */
    google.accounts.id.initialize({
        client_id: "677950223743-o7166ge3rsbkg77labp7efqkbdbjdgcm.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        context: 'signup'
        });
        google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "outline", size: "medium", text: 'signup_with'}  // customization attributes
        );
        // google.accounts.id.prompt(); // also display the One Tap dialog
    }, [])

    return (
        <div>
            <video id='videoSignIn' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video> 
            <div>
                <h1 className='SignInTitle'>Sign Up</h1>
            </div>
            <form className='SignInForm'>
                <input className='SignInInput' type="text" placeholder='Name'/>
                <input className='SignInInput' type="text" placeholder='Last Name'/>
                <input className='SignInInput' type="text" placeholder='Photo url'/>
                <input className='SignInInput' type="text" placeholder='Country'/>
                <input className='SignInInput' type="text" placeholder='Mail'/>
                <input className='SignInInput' type="text" placeholder='Password'/>
            <button className='ButtonInput'>Submit</button>
            <div ref={buttonDiv}></div>
            </form>
        </div>
    )
}
