export default function CityCard(props) {
    let city = props.city
    return(
        <div className='CityCard'>
        <img className='CityCard-Image' alt={city.title} src={city.url} />
        <h3 className='CityCard-title'>{city.title}</h3>           
        <h4 className='City-Card-subtitle'></h4>
        
    </div>
    )

}
