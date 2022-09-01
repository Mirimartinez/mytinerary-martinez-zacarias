import '../styles/Cities.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import CityCard from '../component/CityCard'

function Cities(){

    const [cities, setCities] = useState([])

    useEffect(() =>{
        
        axios.get('http://localhost:4000/cities/')
        
        .then(res => setCities(res.data.response))
        console.log(cities)
    },[])


    return (

            

        <div className='Cities'>

            {/* <video id='videoCities' autoPlay loop muted>
                <source
                src="http://localhost:3000/videoHero.mp4"
                type="video/mp4" />
            </video> */}
            

            <h1 className='Cities-title'>Cities</h1>
            
            <div className='Cities-container'>
            {cities.cities.map(CityCard)}
            
        </div>
        </div>
    )
}

export default Cities




