import '../styles/CityDetails.css'
import {Link as LinkRouter} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useGetCityQuery} from '../features/citiesApi'
import Map from '../component/Maps'
import newItinerary from '../component/NewItinerary'

function CityDetails(){
    const params = useParams()
    const {id} = params

    let localId = ""

        if(localStorage.getItem("user")) {
            localId = JSON.parse(localStorage.getItem("user"))
    }


    const {
       data: city,
       isSuccess
    } = useGetCityQuery(id)
    


    return(
        <div className='CityDetails-cont'>
            <LinkRouter to='/cities' className='CityBackButton'><img src="/backArrow.svg" alt=""/></LinkRouter>
            <h1 className='CityDetails-h1'>{city?.city}</h1>
            <img className='CityDetails-img' alt={city?.city} src={city?.photo}/>
            <h3 className='CityDetails-h3'>{city?.country}</h3>
        <p className='CityDetails-text'>The current population of {city?.city} in 2022 is {city?.population}.</p>
            <p className='CityDetails-text'>It was founded in {new Date(city?.foundation).getFullYear()}.</p>
            <p className='CityDetails-text'>{city?.description}</p>
            {isSuccess && <Map city={city}/>}
        {(localId !== " ") ? <newItinerary/> : null}
        </div>
        )
    }
export default CityDetails