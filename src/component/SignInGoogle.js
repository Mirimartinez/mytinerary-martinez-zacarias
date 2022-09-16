import { useEffect, useRef, useState } from 'react'
import * as jose from 'jose'
import { useSignInUserMutation } from '../features/UserAPI';

function SignInGoogle(){
    const buttonDiv = useRef();
    const [signInUser] = useSignInUserMutation();

    async function handleCredentialResponse(response){
        let userObject = jose.decodeJwt(response.credential)

        let loginUserFromGoogle = {
            mail: userObject.email,
            password: userObject.sub,
            from: "google"
        }
    }

    useEffect(() => {
        /* global google */
    google.accounts.id.initialize({
        client_id: "677950223743-o7166ge3rsbkg77labp7efqkbdbjdgcm.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        context: 'signin'
        });
        google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "outline", size: "medium", text: 'signin_with'}  // customization attributes
        );
        // google.accounts.id.prompt(); // also display the One Tap dialog
    }, [])

    return(
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )

}

export default SignInGoogle