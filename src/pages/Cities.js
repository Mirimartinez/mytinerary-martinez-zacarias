import '../styles/Cities.css'
import { useRef,useState } from 'react'
import CityCard from '../component/CityCard'
import InputSearch from '../component/InputSearch'
import {useGetAllCitiesQuery} from'../features/citiesApi'

function Cities(){

    const [searchValue,setSearchValue] = useState()
    const search = useRef('')
        const handleValue = (e) => {
            setSearchValue(e.current.value)
            //console.log(search?.current.value)
            setSearchValue(search.current.value)
        }
        function preventDefault(e){
            e.preventDefault()
            }
    let{
        data : cities,
        error,
        isLoading,
        isSuccess,
        isFailed
    } = useGetAllCitiesQuery( search.current ? search.current.value : '')
    let content 
            if (isLoading){
                cities = []
            // } else if(isSuccess){
            //     cities = cities.response
            // }else if (isFailed){
            //     cities= []
        } 
    // console.log(cities)
    return (
        
        <div className='Cities'>
            <h1 className='Cities-title'>Cities</h1>
            <InputSearch ref={search} onChange={handleValue}/>
            <div className='Cities-container'>
                {cities.map(CityCard)}
            </div>

        </div>
    )
}

export default Cities