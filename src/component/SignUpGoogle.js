import React, { useEffect, useRef, useState } from 'react'
import * as jose from 'jose'
import { useSignUpUserMutation  } from '../features/UserAPI'
import '../styles/SignUp.css'

export default function SignUpGoogle() {
    
    const buttonDiv = useRef();
    let [newUser, {data: resSignUp, error}] = useSignUpUserMutation()

    async function handleCredentialResponse(response){

        let userObject = jose.decodeJwt(response.credential)
        let data = {
            name: userObject.name,
            lastName: userObject.lastName,
            photo: userObject.photo,
            country: userObject.country,
            mail: userObject.mail,
            password: userObject.password,
            role: 'user',
            from: 'google'
        }
        newUser(data)
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
        <div className='googleSu'>
            <div ref={buttonDiv}></div>
        </div>
    )
}