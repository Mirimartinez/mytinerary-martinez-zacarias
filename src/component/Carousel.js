import '../styles/Carousel.css'

function Carousel(props) {
   
    const range = props.range
    const start = 0
    const end =  start + range
    const items = props.data



    const itemView = (item) => (
        <div className='card item '>
            <img className='ImageCity' src={item.url} />
            <p className='move'>limg elements must have an alt prop, either with meaningful text</p>
            <p className='title'>{item.title}</p>

                
            
        </div>
    )

    return (
    <div>
        <div className='slide CarouselStyle'>
            {items.slice(start, end).map(itemView)}
        </div>
    </div>
    )
}

export default Carousel