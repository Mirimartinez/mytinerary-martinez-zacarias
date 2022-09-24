import React, { useRef } from 'react'
import '../styles/EditCity.css'
import Alert from '../component/Alert/Alert'
import Input from '../component/Input'
import {useState} from 'react'
import {useEditCityMutation, useGetAllCitiesQuery} from '../features/citiesApi'



function EditCity() {
    const [id, setID] = useState([])
    const selector = useRef()

    const {data : cities} = useGetAllCitiesQuery()
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


    const captureData = (e) =>{
        const{name, value} = e.target
        setCity({...city, [name]:value})
    }
    
    const saveData = async(e)=>{
        e.preventDefault()
        EditCityRedux({city, id})
    }

        const inputs = [
            {key: 'City', for: 'city', type: 'text'},
            {key: 'Country', for: 'country', type: 'text'},
            {key: 'Population', for: 'population', type: 'number'},
            {key: 'Photo', for: 'photo', type: 'text'},
            {key: 'Foundation', for: 'foundation', type: 'date'},
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
                {inputs.map(dato => <Input key={dato.key} value={dato.key} four={dato.for} type={dato.type} text={dato.key} change={captureData}/>)}
                <Alert label={"Send"} message={message} />
            </form>
        </div>
    )
}
export default EditCity