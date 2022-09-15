import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import '../styles/SignUp.css'

export default function SignUpGoogle() {
    
    const buttonDiv = useRef()
    console.log(buttonDiv.current)

    async function handleCredentialResponse(response){

        let userObject = jose.decodeJwt(response.credential)
        console.log(userObject)
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
        { theme: "outline", size: "medium", text: 'signup_with', shape: 'circle', }  // customization attributes
        );
        // google.accounts.id.prompt(); // also display the One Tap dialog
    }, [])

    return (
        <div className='googleSu'>
            <div ref={buttonDiv}></div>
        </div>
    )
}
