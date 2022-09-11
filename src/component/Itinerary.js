
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
            photo: 'https://media.istockphoto.com/photos/mature-ethnic-man-wearing-eyeglasses-at-home-picture-id1319763230?b=1&k=20&m=1319763230&s=170667a&w=0&h=vqnbgy5ln6NvFK6OqRxl1jtIXstEN3xkWjVHMAbTKH8='
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
            <div className='ItineraryCard ItineraryCard-subtitle'>
            <div className='CreatorItinerary'>
                <div className='Itinerary-user'>
                    <img src={item.photo} alt='img' className='CreatorImg'></img>
                    <p>Name: {item.name}</p>
                    <p>User: {item.user}</p>
                </div>
                <div className='Itinerary-itinerary'>
                    <p>Price: {item.price}</p>
                    <p>LIkes: ♥{item.likes}</p>
                    <p>Tags: {item.tags}</p>
                    <p>Duration: {item.duration}</p>
                </div>
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