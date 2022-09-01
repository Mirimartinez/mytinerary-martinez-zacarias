
import '../styles/CityCard.css'

function CityCard(props) {
    let city = props.city
    const country= props.country
    const photo =   props.photo
    const population = props.population
    const fundation = props.fundation


    return(
        <div className='CityCard'>
            <h1 className=''>{city}</h1>
            <img className='CityCard-Image' alt={city} src={photo} />
            <h3 className=''>{country}</h3>
            <p className=''>The current population of {city} in 2022 is{population}.</p>
            <p>It was founded in {fundation}</p>    
        </div>
    )
}

export default CityCard