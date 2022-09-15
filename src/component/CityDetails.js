import '../styles/CityDetails.css'
import {Link as LinkRouter} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState} from 'react'
import axios from 'axios'

function CityDetails(){
    const [city, setCity] = useState({})
    const params = useParams()
    const {id} = params
    let newDate = new Date(city.foundation)
    let year = newDate.getFullYear()
    // const navigate = useNavigate()

    const getCity = async () =>{
        try{
            const response = await axios.get(`http://localhost:4000/cities/${id}`)
            if(response.data.response){
                return setCity(response.data.response)
            }
        } catch(error){
            //console.log(error.message);
            throw new Error ("Ups! An error ocurred")
        }
    }

    useEffect(() =>{
        getCity()
    }, [])

    return(
        <div className='CityDetails-cont'>
            <LinkRouter to='/cities' className='CityBackButton'><img src="/backArrow.svg" alt=""/></LinkRouter>
            <h1 className='CityDetails-h1'>{city.city}</h1>
            <img className='CityDetails-img' alt={city.city} src={city.photo}/>
            <h3 className='CityDetails-h3'>{city.country}</h3>
        <p className='CityDetails-text'>The current population of {city.city} in 2022 is {city.population}.</p>
            <p className='CityDetails-text'>It was founded in {year}.</p>
            <p className='CityDetails-text'>{city.description}</p>
        </div>
        )
    }
export default CityDetails