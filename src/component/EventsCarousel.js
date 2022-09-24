import Carousel from "../component/Carousel";
// import axios from 'axios'
// import { useEffect,useState } from 'react'
import {useGetAllCitiesQuery} from'../features/citiesApi'

function EventsCarousel(){

    let {
        data : cities,
        error,
        isLoading,
        isSuccess,
        isFailed

        
    } = useGetAllCitiesQuery('')

    if(isLoading){
        cities = []
    } else if(isSuccess){
        cities = cities.response
    } else if(error){
        cities = []
    }
    
    
    return(
        <Carousel data={cities} range={4} slides={3} interval={5}  />
        )
        
    }

export default EventsCarousel