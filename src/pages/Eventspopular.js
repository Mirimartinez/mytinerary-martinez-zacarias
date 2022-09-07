import EventsCarousel from '../component/EventsCarousel'
/* import Hero from '../component/Hero' */
import "../styles/Carousel.css"

function Eventspopulars() {
    return (
        <>
        <div className='Popular-container'>
            <h2 className='titleeh2'>Popular Cities</h2>
            <div className='Popular-CarouContainer'>
            <EventsCarousel />
            </div>
        </div>
        </>
    )
}

export default Eventspopulars