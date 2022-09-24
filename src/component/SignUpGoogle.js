import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import { useSignUpUserMutation  } from '../features/UserAPI'
import '../styles/SignUp.css'

export default function SignUpGoogle() {
    
    const buttonDiv = useRef();

    async function handleCredentialResponse(response){

        let userObject = jose.decodeJwt(response.credential)

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