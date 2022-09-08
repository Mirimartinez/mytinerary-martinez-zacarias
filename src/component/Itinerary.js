
import Comment from './Comment'
import Activities from './Activities'
import '../styles/Itinerary.css'
import {useState} from "react"

function Itinerary(props){

    const itineraries = [
        {
            name:'Robert Spencer',
            user:'robert_11',
            price:'1.000 usd',
            likes:'18',
            tags:'#',
            duration:'2 weeks',
            photo: 'https://images.pexels.com/photos/11013903/pexels-photo-11013903.jpeg'
        }
    ]

    
        const [open, setOpen] = useState(false)
    
        const handleOpenMenu = () => {
            if(open === true) {
                setOpen(false)
            } else {
                setOpen(true)
            }
        
    }

    
    const itineraryCard = (item) =>{

        return(
            <div className='ItineraryCard ItineraryCard-subtitle' /* style={{ backgroundImage: `url(${item.photo})`}} */>
            <div className='Itinerary-user'>    
                <p>Name: {item.name}</p>
                <p>User: {item.user}</p>
            </div>

            <div className='Itinerary-itinerary'>
                <p>Price: {item.price}</p>
                <p>LIkes: ♥{item.likes}</p>
                <p>Tags: {item.tags}</p>
                <p>Duration: {item.duration}</p>
            </div>
            <div>
            <div className='Itinerary-activities'>
            <Activities/>
            </div>
            {
            open
                ?
                <div className='Itinerary-comment'>
            <Comment/>
            </div>
            :null
        }
        </div>
        <button className='Itinerary-button' onClick={handleOpenMenu}>comments</button>
            </div>
        )
    }

    

    return(
        <>
        {itineraries.map(itineraryCard)}
        </>
    )
    }





export default Itinerary