
import Comment from './Comment'
import Activities from './Activities'
import '../styles/Itinerary.css'
import {useState} from "react"
import {useGetCityItinerariesQuery} from '../features/itinerariesAPI'
import {useParams} from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom'
import LikeDislike from './LikeDislike'

function Itinerary(){
    const params = useParams()
    const {id} = params

    let {data : itinerary} = useGetCityItinerariesQuery(id)
    let allItineraries = itinerary?.response

    
        const [open, setOpen] = useState(false)
    
        const handleOpenMenu = () => {
            if(open === true) {
                setOpen(false)
            } else {
                setOpen(true)
            }
    }

    if(JSON.parse(window.localStorage.getItem('user')) !== ""){
        
    }

    const itineraryCard = (item) =>{
        return(
            <div className='ItineraryCard ItineraryCard-subtitle' key={item.name}>
            <div className='CreatorItinerary'>
                <div className='Itinerary-user'>
                    <img src={item.user.photo} alt='img' className='CreatorImg'></img>
                    <p>Itinerary: {item.name}</p>
                    <p>Created by: {item.user.name} {item.user.lastName}</p>
                </div>
                <div className='Itinerary-itinerary'>
                    <p>Price:{"💵 ".repeat(item.price)}</p>  {/*💰💸💴💶💷🪙*/}
                    <LikeDislike />
                    {/* <p>Likes: {item.likes}♥</p> */}
                    <p>Tags: {item.tags.map(tag => "#" + tag + " ")}</p>
                    <p>Duration: {item.duration}hs</p>
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
        <button className='Itinerary-button' onClick={handleOpenMenu}>Comments</button>
            </div>
        )
    }
    return(
        <>
        {allItineraries?.length? null:<div>
            <LinkRouter to='/cities' className="Details-subtitle"> We don't have any itineraries here right now...</LinkRouter>
        </div>}
        {allItineraries?.map(itineraryCard)}
        </>
    )
}
export default Itinerary
