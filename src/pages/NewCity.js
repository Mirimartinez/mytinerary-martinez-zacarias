
import '../styles/Cities.css'
import '../styles/NewCity.css'
import React, { useState } from 'react'
import axios  from 'axios'
import apiurl from '../api'

function NewCity() {

    const initialValor ={
        city: '' ,
        country: '' ,
        population: '' ,
        photo: '' ,
        foundation: '' ,
    }
    const [city, setCity] = useState(initialValor)

    const captureData = (e) =>{
        const{name, value} = e.target
        setCity({...city, [name]:value})
    }

    const newCity ={
        city: city.city,
        country: city.country ,
        population: city.population ,
        photo: city.photo ,
        foundation: city.foundation ,
}

    const saveData = async(e)=>{
        e.preventDefault()
    await axios.post( apiurl + '/cities/', newCity)
            setCity({...initialValor})
        }


    return(
        <div className='NewCity'>
                <div>
                    <h1 className='NewCity-title'>New City</h1>
                </div>
            <video id='videoNewCity' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <form className='FormNewCity' onSubmit={saveData}>
                <input
                    type="text" 
                    className="InputNewCity"
                    placeholder='City'
                    required
                    name="city" 
                    value={city.city}
                    onChange={captureData}
                />
                <input
                    type="text" 
                    className="InputNewCity"
                    placeholder='Country'
                    required
                    name="country" 
                    value={city.country}
                    onChange={captureData}
                />
                <input
                    type="number" 
                    className="InputNewCity"
                    placeholder='Population'
                    required
                    name="population" 
                    value={city.population}
                    onChange={captureData}
                />
                <input
                    type="text" 
                    className="InputNewCity"
                    placeholder='Photo URL'
                    required
                    name="photo" 
                    value={city.photo}
                    onChange={captureData}
                />
                <input
                    type="number" 
                    className="InputNewCity"
                    placeholder='Foundation'
                    required
                    name="foundation" 
                    value={city.foundation}
                    onChange={captureData}
                />
                <button className='ButtonInput'>Submit</button>
            </form>
        </div>
    )
    }

export default NewCity 


