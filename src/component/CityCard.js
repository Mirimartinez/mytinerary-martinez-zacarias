export default function CityCard(props) {
    let city = props.city
    return(
        <div className='CityCard'>
        <img className='CityCard-Image' alt={city.title} src={city.url} />
        <h3 className='CityCard-title'>{city.title}</h3>           
        <h3 className='CityCard-subtitle'>{city.subtitle}</h3>           
        </div>
    )

}

