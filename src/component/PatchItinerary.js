import React, {useState } from 'react'
import Alert from './Alert/Alert'
import Input from './Input'
import {useEditUserItineraryMutation} from '../features/itinerariesAPI'
import { useParams } from 'react-router-dom'

export default function PatchItinerary() {
    const params = useParams()
    let {id} = params
    let [EditItineraryRedux, {data: response, error}] = useEditUserItineraryMutation()
    let message = ""

    if(response?.success){
        message = response?.message
    } else{
        message = "Could't edit itinerary"
    }

    const [itinerary, setItinerary] = useState({})

    const captureData = (e) =>{
        const {name, value} = e.target
        setItinerary({...itinerary, [name]: value})
    }

    const saveData = async(e) =>{
        e.preventDefault()
        EditItineraryRedux({itinerary, id})
    }

    const inputs = [
        {key: 'Name', for: 'name', type: 'text'},
        {key: 'Price', for: 'price', type: 'number'},
        {key: 'Duration', for: 'duration', type: 'number'},
        {key: 'Tags', for: 'tags', type: 'String'},
    ]

    return (
        <div>
            <h1>Edit Itinerary</h1>
            <video id='videoNewCity' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <div>
                <form onSubmit={saveData}>
                    {inputs.map(dato => <Input key={dato.key} value={dato.key} four={dato.for} type={dato.type} text={dato.key} change={captureData}/>)}
                    <Alert label={"Send"} message={message}/>
                </form>
            </div>
        </div>
    )
}
