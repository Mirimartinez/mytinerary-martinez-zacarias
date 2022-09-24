import '../styles/Header.css'
import { useState, useEffect } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import ProfileHeader from './Profile'


    function Header(props) {
        // const pages = props.data
        // console.log(pages)
        const [open, setOpen] = useState(false)

        const pages = [
            { name: 'Home', to: '/' },
            { name: 'Cities', to: '/Cities' },
            { name: 'New City', to: '/NewCity' },
            { name: 'Edit City', to: '/EditCity' },
        ]

    const link = (page) => <LinkRouter className='Header-none Header-a' key={page.name} to={page.to}>{page.name}</LinkRouter>
    const menu = (page) => <LinkRouter className=' Header-a' key={page.name} to={page.to}>{page.name}</LinkRouter>


    const handleOpenMenu = () => {
        if(open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    
    return (
        <div className='Header-cont'>
            <div className='PagesLinks'>
                {pages?.map(link)}
            </div>
            <div  className='Header-nav' >
                    <button className="Header-a" onClick={handleOpenMenu}>Menu</button>
                    <nav>
                    {open ?
                        <ul>
                            {pages?.map(menu)}
                        </ul>
                        : null
                    }
                    </nav>
            </div>
            <div id="Header-logo">
                <img className="Header-logo" src="http://localhost:3000/logo.png" alt="logo"/>
                <h1 className="Header-title">MyTinerary</h1>
            </div>
            <div className='Header-profile' >
                <div className="Header-btn dropdown" onClick={handleOpenMenu}>
                        <img className='ImgProfile'  alt='profile' src={"https://media0.giphy.com/media/kcZlnhiaB1p76tKS6S/giphy.gif?cid=790b7611658a2c1837a6b243c6e5b7c5f9203dcba641b933&rid=giphy.gif&ct=s"}/>
                    <div className="dropdown-content">
                        <ProfileHeader user={props.user}/>
                        <LinkRouter className='Header-none Header-A' to={'/auth/signin'}>Sign In</LinkRouter>
                        <LinkRouter className='Header-none Header-A' to={'/auth/signup'}>Sign Up</LinkRouter>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Header