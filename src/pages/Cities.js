import '../styles/Cities.css'
import { useRef,useState } from 'react'
import CityCard from '../component/CityCard'
import InputSearch from '../component/InputSearch'
import {useGetAllCitiesQuery} from'../features/citiesApi'

function Cities(){

    const [searchValue,setSearchValue] = useState()

    const search = useRef(null)

        const handleValue = (e) => {
            e.preventDefault()
            setSearchValue(search.current.value)
        }

    let{ data : cities } = useGetAllCitiesQuery( searchValue ? searchValue : '')
    return (
        <div className='Cities'>
            <h1 className='Cities-title'>Cities</h1>
            <InputSearch searchEl={search} action={handleValue}/>
            <div className='Cities-container'>
                {cities?.response.map((item) => {
                    return (<CityCard key={item._id} data={item}/>)
                })}
            </div>
        </div>
    )
}

export default Cities