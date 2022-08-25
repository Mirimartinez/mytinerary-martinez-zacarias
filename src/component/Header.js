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
        if(open == true) {
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
        <img className='Header-profile' src="https://cdn-icons-png.flaticon.com/512/5645/5645106.png" />
        </div>
    )
    }

export default Header