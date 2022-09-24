import { useSignUpUserMutation  } from '../features/UserAPI'
import '../styles/SignIn.css'
import React, { useEffect, useRef, useState } from 'react'
import SignUpGoogle from './SignUpGoogle'
import { Link as LinkRouter } from 'react-router-dom'
import Input from './Input'
import Alert from './Alert/Alert'

export default function SignUp() {
    const [showAlert,setShowAlert] = useState(false)
    let [SignUpRedux, {data : userRedux , error}] = useSignUpUserMutation()
    let message = ""

    if(userRedux?.success){
        message = userRedux?.message
    }else{
        message = error?.data.message
    }

    const nameRef = useRef();
    const lastNameRef = useRef();
    const mailRef = useRef();
    const countryRef = useRef();
    const passwordRef = useRef();
    const photoRef = useRef();

    const form = [
        {
            label:"Name",
            name: "name",
            type: "text",
            ref: nameRef
            },
            {
            label:"Lastname",
            name: "lastName",
            type: "text",
            ref: lastNameRef
            },
            {
            label:"Email",
            name: "email",
            type: "email",
            ref: mailRef
            },
            {
            label:"Password",
            name: "password",
            type: "password",
            ref: passwordRef
            },
            {
            label:"Country",
            name: "country",
            type: "text",
            ref: countryRef
            },
            {
            label:"Photo",
            name: "photo",
            type: "url",
            ref: photoRef
            }
        ]
        function newUser (e){
            e.preventDefault();
            
            let dataCity = {
                name : nameRef.current.value,
                lastName : lastNameRef.current.value,
                mail : mailRef.current.value,
                country : countryRef.current.value,
                password : passwordRef.current.value,
                photo : photoRef.current.value,    
                role : "user",
                from : "form"
                }
                SignUpRedux(dataCity)
            }

            useEffect(() => {
                if (showAlert) {
                    setTimeout(() => {
                        setShowAlert(false)
                    },5000)
                }
            },[SignUpRedux, error])

    return (
        <div>
            <video id='videoSignIn' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video> 
            <div>
                <h1 className='SignInTitle'>Sign Up</h1>
            </div>
            <form className='SignInForm' onSubmit={newUser}>
                {form?.map((input) => (
                    <Input name={input.name} type={input.type} key={input.name} reference={input.ref} text={input.label}/>
                ))}
                <Alert label={"Sign Up"} message={message} />
                <p className='SignUpP'>By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
            <SignUpGoogle />
            </form>
            <div className="SignUpRouter">
                <p>Do you have an account?</p>
                <LinkRouter to="/auth/signin" className='SignUpP'>Log In</LinkRouter>
            </div>
            { showAlert ?
                <Alert res={SignUpRedux} err={error}/>
                : null
            }
        </div>
    )
}
