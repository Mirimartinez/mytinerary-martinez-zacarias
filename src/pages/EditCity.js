import React, { useRef } from 'react'
import Input from '../component/Input'
import '../styles/EditCity.css'
import axios  from 'axios'
import { useEffect ,useState } from 'react'

function EditCity() {
    const [cities, setCities] = useState([])
    const selector = useRef()

    useEffect(() => {
        axios.get(`http://localhost:4000/cities/`)
        .then(response => setCities(response.data))
    }, [])

    const [city, setCity] = useState({})

    const captureData = (e) =>{
        const{name, value} = e.target
        setCity({...city, [name]:value})
    }
    
    const saveData = async(e)=>{
        e.preventDefault()
        await axios.patch(`http://localhost:4000/cities/${selector.current.value}`, city)
    }


    const datos = [
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
                <select ref={selector} className='EditSelect'>
                    {cities.map(city =>
                    <option className='OptionSelect' key={city._id} value={city._id}>{city.city}</option>
                    )}
                </select>
                </div>
                <form onSubmit={saveData}>
                    {datos.map(dato => <Input key={dato.key} four={dato.for} type={dato.type} change={captureData}/>)}
                    <button type='submit' className='ButtonInput' >Submit</button>
                </form>
                <div className='EditCityImgContainer'>
                    <img className='EditCityImg' src="/svg/man-at-work.png" alt="" /> 
                </div>
        </div>
    )
}

export default EditCity
