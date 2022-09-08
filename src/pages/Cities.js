import '../styles/Cities.css'
/* import axios from 'axios' */
/* import { useEffect,useState } from 'react' */
import CityCard from '../component/CityCard'
import InputSearch from '../component/InputSearch'

import {useGetAllCitiesQuery} from'../features/citiesApi'

function Cities(){

    let{
        data : cities,
        error,
        isLoading,
        isSuccess,
        isFailed
    } = useGetAllCitiesQuery()
    let content 
    if(isLoading){
        cities = []
    }
    console.log(cities)
    return (
        
        <div className='Cities'>
            <h1 className='Cities-title'>Cities</h1>
            <InputSearch />
            <div className='Cities-container'>
            {cities?.map(CityCard)}
            </div>

        </div>
    )
}

export default Cities