
import '../styles/Cities.css'
import '../styles/NewCity.css'
// import Input from '../component/Input'
import React, { useState } from 'react'
import axios  from 'axios'

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

    //     const datos = [
    //     {key: 'City', for: 'city', type: 'text'},
    //     {key: 'Country', for: 'country', type: 'text'},
    //     {key: 'Population', for: 'population', type: 'number'},
    //     {key: 'Photo', for: 'photo', type: 'text'},
    //     {key: 'Foundation', for: 'foundation', type: 'date'},
    // ]  
    const saveData = async(e)=>{
        e.preventDefault()

    await axios.post('http://localhost:4000/cities/', newCity)
            setCity({...initialValor})
        }


    return(
        <div className='NewCity'>
                <div>
                    <h1 className='NewCity-title'>New City</h1>
                </div>
            <video id='videoNewCity' autoPlay loop muted>
                <source
                src="http://localhost:3000/videoHero.mp4"
                type="video/mp4" />
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
                    placeholder='foundation'
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


