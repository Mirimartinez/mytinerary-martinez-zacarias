import '../styles/Carousel.css'

function Carousel(props) {
   
    const range = props.range
    const start = 0
    const end =  start + range
    const items = props.data



    const itemView = (item) => (
        <div className='card item '>
            <img className='ImageCity' alt='' src={item.url} />
            <p className='move'></p>
            <p className='title'>{item.title}</p>

                
            
        </div>
    )

    return (
    <div className='carouselButoom'>
        <button className='buttom' type="" placeholder='<' ></button>
        <div className='slide CarouselStyle'>
            
            {items.slice(start, end).map(itemView)}
        </div>
        <button className='buttom' type=""></button>
    </div>
    )
}

export default Carousel