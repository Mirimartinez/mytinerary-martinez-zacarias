import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Header.css'


const pages = [
    { name: 'Home', to: '/' },
    { name: 'Cities', to: '/Cities' },
 
]

const link = (page) => <LinkRouter className='Header-link' to={page.to}>{page.name}</LinkRouter>

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
        <div>
            <div> 
                {
                    open
                        ? <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                        : null
                }
            </div>
            {pages.map(link)}
            <button onClick={handleOpenMenu}>Menu</button>
        </div>
    )
}

export default Header