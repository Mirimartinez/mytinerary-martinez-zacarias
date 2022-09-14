import '../styles/Activities.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Activity(props){
    const [activity, setActivity] = useState([])


    const activities = async () => {
        await axios.get(`http://localhost:4000/activities/?itinerary=${props.itinerary}`)
        .then(response => setActivity(response.data.response))
    }

    useEffect(() => {
        activities()
    }, [])


    return(
        <>
        {activity.map((item) => (            
            <div className="Activities-card" style={{ backgroundImage: `url(${item.photo})`}}>
                <p className='Activities-text'>{item.name}</p>
            </div>
            ))}
        </>
        )
}

export default Activity