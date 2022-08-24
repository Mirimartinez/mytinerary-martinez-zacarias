import '../styles/Cities.css'
import CitiesCard from '../component/CitiesCards'

function Cities(){
    return (
        <div className='Cities'>
            <video id='videoCities' autoPlay loop muted>
                <source
                src="http://localhost:3000/video.mp4"
                type="video/mp4" />
            </video>
            <h1 className='Cities-title'>Cities</h1>
            
            <CitiesCard className='Cities-list'/>
        </div>
    )
}

export default Cities