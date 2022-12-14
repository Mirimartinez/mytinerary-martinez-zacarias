import '../styles/CityCard.css'
import {Link as LinkRouter} from 'react-router-dom'

function CityCard(props) {
    let {city, country, photo} = props.data
    let id = props.data._id

    return(
            <LinkRouter to={`/city/${id}`}>
                <div className='CityCard'>
                    <img className='CityCard-Image' alt="" src={photo} />
                    <h3 className='CityCard-title'>{city}</h3>           
                    <h3 className='CityCard-subtitle'>{country}</h3> 
                </div>
            </LinkRouter>
        )
}


export default CityCard