import React from 'react'
import Input from '../component/Input'
import '../styles/EditCity.css'
import axios  from 'axios'
import { useEffect ,useState } from 'react'
import Option from '../component/OptionSelect'

function EditCity() {
    const [cities, setCities] = useState({})
    useEffect(() => {
        axios.get("http://localhost:4000/cities/?city:id")
        .then(response => setCities(response.data))
    }, [])
        console.log(cities);
        const datos = [
        {key: 'City', for: 'city', type: 'text'},
        {key: 'Country', for: 'country', type: 'text'},
        {key: 'Population', for: 'population', type: 'number'},
        {key: 'Photo', for: 'photo', type: 'text'},
        {key: 'Foundation', for: 'foundation', type: 'date'},
    ]

    // const saveData = async(e)=>{
    //     e.preventDefault()
    //         await axios.put('http://localhost:4000/cities/', editCity)
    //         setCities({...initialValor})
    //     }

    return (
        <div className='InputSelectImgContainer'>
                <h1 className='EditCityH1'>Edit City</h1>
            <video id='videoNewCity' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <div className='InputSelectContainer'>
                <select className='EditSelect'>
                    {cities.response?.map(city =>
                <Option cities = {city} />
                    )}
                </select>
                </div>
                <form >
                    {datos.map(dato => <Input label={dato.key} for={dato.for} type={dato.type}/>)}
                    <button type='submit' className='ButtonInput'>Submit</button>
                </form>
                <div className='EditCityImgContainer'>
                    <img className='EditCityImg' src="/svg/man-at-work.png" alt="" /> 
                </div>
        </div>
    )
}

export default EditCity
