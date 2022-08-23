/* import { clear } from 'console'
import { func } from 'prop-types' */
/* import { clearInterval } from 'timers' */
import '../styles/Carousel.css'
import Arrow from './Carousel/Arrow'
import {useState} from 'react'

function Carousel(props) {
    const range = props.range
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(start + range)
   /*  const [intervalId, setIntervalId] = useState() */
    const items = props.data
   /*  const interval = props.interval * 1000 */

    console.log(start)


    const itemView = (item) => (
        <div className='card item ' key={item.name}>
            <img className='ImageCity' alt='/* event.name */' src={item.url} />
            <p className='move'></p>
            <p className='title'>{item.title}</p>           
            
        </div>
    )


/*     useEffect(() =>{
        let id = setInterval(function (){
            next()
        }, interval)


        setIntervalId(id)

        return() => clearInterval(intervalId);

        }, [start])
     */

    function previous( ) {
        if(start >= range){
    setStart( start-range)
    setEnd (end-range)
        }
}

function next (){
    if(end < items.length){
    setStart(start+range)
    setEnd( end+range )
    }
}



console.log("start: " + start)
console.log("end: " + end)





    return (
    <div className='carouselButoom'>
        
        <div className='slide CarouselStyle'>
            <Arrow icon={'<'} click={previous} /> 
            {items.slice(start, end).map(itemView)}
            <Arrow icon= {'>'} click={next} />
        </div>
        
    </div>
    )
}

export default Carousel