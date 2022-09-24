import '../styles/Carousel.css'
import '../styles/CityCard.css'
import Arrow from './Carousel/Arrow'
import {useEffect,useState,} from 'react'
import {Link as LinkRouter} from 'react-router-dom'



function Carousel(props) {
    const range = props.range
    const SlidesLimit = (props.slides * range)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const cities = props.data
    const interval = props.interval * 1000

    const itemView = (item) => (
        <LinkRouter to={`/cities/${item._id}`} key={item._id}>
            <div className='CityCard'>
                <img className='CityCard-Image' alt={item.city} src={item.photo} />
                <h3 className='CityCard-title'>{item.city}</h3>
                <h3 className='CityCard-subtitle'>{item.country}</h3>
            </div>
        </LinkRouter>
    )

    useEffect(() =>{
        let id = setInterval(function (){
            next()
        }, interval)
        setIntervalId(id)
        return() => clearInterval(id);
        }, [start])
    
    function previous( ) {
        if(start >= range){
    setStart( start-range)
    setEnd (end-range)
        } else{
            setStart(SlidesLimit-range)
            setEnd(SlidesLimit)
        }
        clearInterval(intervalId)
}



function next (){
    if(start < SlidesLimit-range){
    setStart(start+range)
    setEnd( end+range )
    } else{
        setStart(0)
        setEnd(range)
    }
    clearInterval(intervalId)
}

    return (
    <div className='carouselButoom'>
        <div className='slide CarouselStyle'>
            <Arrow icon={'<'} click={previous} /> 
            {cities?.slice(start, end).map(itemView)}
            <Arrow icon= {'>'} click={next} />
        </div>
    </div>

    )
}

export default Carousel