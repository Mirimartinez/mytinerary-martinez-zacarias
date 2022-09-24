import Alert from '../component/Alert/Alert'
import Input from '../component/Input'
import '../styles/Cities.css'
import '../styles/NewCity.css'
import { useState, useRef } from 'react'
import { usePostCityMutation } from '../features/citiesApi'



function NewCity() {
    const cityEl = useRef()
    const countryEl = useRef()
    const populationEl = useRef()
    const photoEl = useRef()
    const foundationEl = useRef()

    let [createNewCity, {data : response , error }] = usePostCityMutation()
    let msg = ""

    if(response?.success){
        msg = response?.message
    }else{
        msg = error?.data.message
    }

    const saveData = (e)=>{
        e.preventDefault()
        const newCity = {
            city: cityEl.current.value,
            country: countryEl.current.value ,
            population: populationEl.current.value ,
            photo: photoEl.current.value ,
            foundation: foundationEl.current.value
        }
        createNewCity(newCity)
        }

        const inputs = [
            {name: 'city', fer: cityEl, type: 'text'},
            {name: 'country', fer: countryEl, type: 'text'},
            {name: 'population', fer: populationEl, type: 'number'},
            {name: 'photo', fer: photoEl, type: 'text'},
            {name: 'foundation', fer: foundationEl, type: 'date'},
            ]

    return(
        <div className='NewCity'>
                <div>
                    <h1 className='NewCity-title'>New City</h1>
                </div>
            <video id='videoNewCity' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <form className='FormNewCity' onSubmit={saveData}>
            {inputs.map(dato => <Input key={dato.name} value={dato.name} four={dato.fer} type={dato.type}/>)}
                <Alert label={"Send"} message={msg} />
            </form>
        </div>
    )
    }

export default NewCity 


