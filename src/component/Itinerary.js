
import Comment from './Comment'
import Activities from './Activities'
import '../styles/Itinerary.css'
import {useState, useEffect} from "react"
import axios from 'axios'
import {useParams} from 'react-router-dom'

function Itinerary(){
    const params = useParams()
    const {id} = params
    const [itinerary, setItinerary] = useState([])


    const itineraries = async () => {
        await axios.get(`http://localhost:4000/itineraries/?city=${id}`)
        .then(response => setItinerary(response.data.response))
    }

    useEffect(() => {
        itineraries()
    }, [])
    
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
                    <img src={item.user.photo} alt='img' className='CreatorImg'></img>
                    <p>Name: {item.name}</p>
                    <p>User: {item.user.name} {item.user.lastName}</p>
                </div>
                <div className='Itinerary-itinerary'>
                    <p>Price:{"💵 ".repeat(item.price)}</p>
                    <p>LIkes: ♥{item.likes}</p>
                    <p>Tags: {item.tags.map(tag => "#" + tag + " ")}</p>
                    <p>Duration: {item.duration}</p>
                </div>
            </div>
            <div>
            <div className='Itinerary-activities'>
            <Activities itinerary={item._id}/>
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
        {itinerary.map(itineraryCard)}
        </>
    )
}
export default Itinerary
