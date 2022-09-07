import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'

function CityCard(props) {
    let city = props.city
    let country= props.country
    const photo = props.photo
    return(
        <LinkRouter to='/CityDetails'>
        <div className='CityCard'>

        <img className='CityCard-Image' alt={city} src={photo} />
        <h3 className='CityCard-title'>{city}</h3>           
        <h3 className='CityCard-subtitle'>{country}</h3> 
        </div>
        </LinkRouter>

    )
}


export default CityCard

