import React, { useRef } from 'react'
import '../styles/EditCity.css'
import Alert from '../component/Alert/Alert'
import Input from '../component/Input'
import {useState} from 'react'
import {useEditCityMutation, useGetAllCitiesQuery} from '../features/citiesApi'



function EditCity() {
    const [id, setID] = useState([])
    const selector = useRef()
    const cityEl = useRef()
    const countryEl = useRef()
    const populationEl = useRef()
    const photoEl = useRef()
    const foundationEl = useRef()

    const {data : cities} = useGetAllCitiesQuery('')
    let [EditCityRedux, { data: response, error  }] = useEditCityMutation()
    let message = ""
    
    if(response?.success){
        message = response?.message
    } else{
        message = "Could't edit city"
    }
    
    const [city, setCity] = useState({})

    function getID(e){
        setID(e.target.value)
    }
    
    const saveData = async(e)=>{
        e.preventDefault()
        const editCity = {
            city: cityEl.current.value,
            country: countryEl.current.value ,
            population: populationEl.current.value ,
            photo: photoEl.current.value ,
            foundation: foundationEl.current.value
        }
        EditCityRedux({editCity, id})
    }

        const inputs = [
            {name: 'city', fer: cityEl, type: 'text'},
            {name: 'country', fer: countryEl, type: 'text'},
            {name: 'population', fer: populationEl, type: 'number'},
            {name: 'photo', fer: photoEl, type: 'text'},
            {name: 'foundation', fer: foundationEl, type: 'date'},
            ]

    return (
        <div className='InputSelectImgContainer'>
            <h1 className='EditCityH1'>Edit City</h1>
            <video id='videoNewCity' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <div className='InputSelectContainer'>
                <select ref={selector} className='EditSelect' onChange={getID}>
                    <option hidden >Select City</option>
                    {cities?.map(city =>
                    <option className='OptionSelect' key={city._id} value={city._id}>{city.city}</option>
                    )}
                </select>
                </div>
            <form className='FormNewCity' onSubmit={saveData}>
                {inputs.map(dato => <Input key={dato.name} value={dato.name} four={dato.fer} type={dato.type}/>)}
                <Alert label={"Send"} message={message} />
            </form>
        </div>
    )
}
export default EditCity