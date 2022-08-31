import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Header.css'


const pages = [
    {name: 'Home', to: '/' },
    { name: 'NewCity', to: '/NewCity' },
    { name: 'Cities', to: '/Cities' },

]

const link = (page) => <LinkRouter className='Header-none Header-a' to={page.to}>{page.name}</LinkRouter>
const menu = (page) => <LinkRouter className=' Header-a' to={page.to}>{page.name}</LinkRouter>

function Header() {
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if(open === true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }




    
    return (
        <div className='Header-cont'>
            <div id="Header-logo">
            <img className="Header-logo" src="http://localhost:3000/logo.png" alt="logo"/>
            </div>
            <div id="Header-title" className="Header-color">
            <h1 className="h1">MyTinerary</h1>
            </div>
                <img className='Header-profile' alt='profile' src="https://media0.giphy.com/media/kcZlnhiaB1p76tKS6S/giphy.gif?cid=790b7611658a2c1837a6b243c6e5b7c5f9203dcba641b933&rid=giphy.gif&ct=s" />
            <div> 
                <nav className='Header-nav' > 
                {
                    open
                        ? <ul>
                            {pages.map(menu)}
                        </ul>
                        : null
                }
                </nav>
            {pages.map(link)}
            <button className="Header-nav Header-a" onClick={handleOpenMenu}>Menu</button>
        </div>
        </div>
    )
    }

export default Header