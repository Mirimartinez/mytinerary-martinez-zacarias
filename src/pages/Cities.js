import '../styles/Cities.css'
/* import axios from 'axios' */
/* import { useEffect,useState } from 'react' */
import CityCard from '../component/CityCard'

import {useGetAllCitiesQuery} from'../features/citiesApi'

function Cities(){

    

    const{
        data : cities,
        error,
        isLoading,
        isSuccess,
        isFailed

        
    } = useGetAllCitiesQuery()
    
    console.log(cities)
    return (
        
        <div className='Cities'>
            <h1 className='Cities-title'>Cities</h1>
            <div className='Cities-container'>
            {cities?.response.cities.map(CityCard)}
            </div>
        </div>
    )
}

export default Cities




