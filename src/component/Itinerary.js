import Comment from './DisplayComment'
import Activities from './Activities'
import '../styles/Itinerary.css'
import {useState} from "react"
import {useGetCityItinerariesQuery} from '../features/itinerariesAPI'
import {useParams} from 'react-router-dom'
import { Link as LinkRouter } from 'react-router-dom'
import NewComment from './NewComment'

function Itinerary(props){
    let role = ""
    
    if(localStorage.getItem("user")) {
        role = JSON.parse(localStorage.getItem("user")).role 
    } 

    const id = props.cityId

    let {data : itinerary} = useGetCityItinerariesQuery(id)
    let allItineraries = itinerary
    console.log(id);

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
                    <p>Itinerary: {item.name}</p>
                    <p>Created by: {item.user.name} {item.user.lastName}</p>
                </div>
                <div className='Itinerary-itinerary' >
                    <p>Price:{"π΅".repeat(item.price)}</p>  {/*π°πΈπ΄πΆπ·πͺ*/}
                    <p className='Likes'>{item.likes}β€οΈ</p>  {/*ππΌ*/}
                    <p>Tags: {item.tags.map(tag => "#" + tag + " ")}</p>
                    <p>Duration: {item.duration}hs</p>
                </div>
            </div>
            <div>
            <div className='Itinerary-activities'>
            <Activities itinerary={item._id}/>
            </div>
            {open?
                <div className='Itinerary-comment'>
                <Comment itinerary={item._id}/>
                    
                {role !== "" ? <NewComment/> : null}
                </div>
            :null}
        </div>
        

    
        <button className='Itinerary-button' onClick={handleOpenMenu}>Comments</button>
            </div>
            
        )
    }

    return(
        <>
        {allItineraries?.length? null:<div>
            <LinkRouter to='/cities' className="Details-subtitle"> We'll have some itineraries soon!!</LinkRouter>
        </div>}
        {allItineraries?.map(itineraryCard)}
        </>
    )
}
export default Itinerary
