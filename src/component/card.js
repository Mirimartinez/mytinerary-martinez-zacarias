export default function Card(props) {
    let city = props.city
    return(
        <div className='card'>
        <img className='ImageCity' alt={city.title} src={city.url} />
        <p className='move'></p>
        <p className='title'>{city.title}</p>           
        
    </div>
    )

}
