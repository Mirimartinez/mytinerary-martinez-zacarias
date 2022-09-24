import { useEffect, useState } from "react";
import {Link as LinkRouter} from 'react-router-dom'
import {useSignOutUserMutation} from '../features/UserAPI'
import Alert from './Alert/Alert'

function ProfileHeader(props){
    const [open, setOpen] = useState(false)
    let [userSignOut, {data: resSignOut, error}] = useSignOutUserMutation()
    const [alert, setAlert] = useState(false)
    // const [showAlert,setShowAlert] = useState(false)
    let user = props?.user
    let logged;
    const loggout = () => {
        logged = JSON.parse(localStorage.getItem('user'))
        userSignOut(logged)
        setAlert(true)
        localStorage.removeItem('user')
    }

    const  initialProfile = [
        {linkTo:"/signin",name:"Sign In"},
        {linkTo:"/signup",name:"Sign Up"}, 
    ]

    const loggedProfile = [
        {linkTo: "/", name:"Sign Out", action: loggout},
        {linkTo: "/mytineraries", name: "MyTineraries"}
    ]

    const [profile, setProfile] = useState(initialProfile)

    useEffect( () => {
        if(user){
            setProfile(loggedProfile)
            if (user.role === "admin") {
                setProfile(loggedProfile.concat([{
                    linkTo: "/new-admin",
                    name: "New Admin"
                }]))
            }
        } else {
            setProfile(initialProfile)
        }
    },[open])

    const viewProfiel = (item) => {
        return (
            <li key={item.name} onClick={item.action}>
                <LinkRouter to={item.linkTo}>{item.name}</LinkRouter>
            </li>
        )
    }

    function handleList(){
        open? setOpen(false) : setOpen(true)
    }

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false)
            }, 3000)
        }
    }, [resSignOut, error])

    return (
        <div onClick={handleList}>
            { open ?
                <ul>
                    {profile.map(viewProfiel)}
                </ul> : null
            }
            { alert ?
                <Alert res={userSignOut}/>
                : null
            }
        </div>
    )
}

export default ProfileHeader