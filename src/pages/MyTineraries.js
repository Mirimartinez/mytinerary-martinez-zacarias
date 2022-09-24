import '../styles/MyTineraries.css'
import Itinerary from '../component/Itinerary copy'
import {Link as LinkRouter} from 'react-router-dom'


export default function MyTineraries(){
    return(
        <div className='MyTineraries-cont'>
            <h2 className='MyTineraries-title'>MyTineraries</h2>
            <div className='MyTineraries-cont2'>
                <img className='MyTineraries-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmje64_1sPUuJv4F4uYWKM8ZjQFP7aTIe2GA&usqp=CAU' alt='profile-pic'></img>
                <h3 className='MyTineraries-text'>Robert Spencer</h3>
            </div>
            <div className='MyTineraries-cont3'>
                <Itinerary/>
                <LinkRouter to='/cities' className='CityBackButton'><img src="/backArrow.svg" alt=""/></LinkRouter>
            </div>
        </div>
    )
}