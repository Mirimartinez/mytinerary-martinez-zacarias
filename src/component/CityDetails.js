import '../styles/CityDetails.css'

function CityDetails(props){
    let city = props.city
    let country = props.country
    let photo = props.photo
    let population = props.population
    let fundation = props.fundation

    return(
        <>
            <h1 className='CityDetails-h1'>{city}</h1>
            <img className='CityDetails-img' alt={city} src={photo} />
            <h3 className='CityDetails-h3'>{country}</h3>           
            <p className='CityDetails-text'>The current population of {city} in 2022 is{population}.</p>    
            <p className='CityDetails-text'>It was founded in {fundation}</p>
        </>
    )
}
export default CityDetails