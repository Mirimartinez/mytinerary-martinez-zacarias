import Alert from '../component/Alert/Alert'
import Input from '../component/Input'
import '../styles/Cities.css'
import '../styles/NewCity.css'
import { useState } from 'react'
import { usePostCityMutation } from '../features/citiesApi'



function NewCity() {

    let [createNewCity, {data : response , error }] = usePostCityMutation()
    let msg = ""

    if(response?.success){
        msg = response?.message
    }else{
        msg = error?.data.message
    }





    const [city, setCity] = useState([])

    const newCity ={
        city: city.city,
        country: city.country ,
        population: city.population ,
        photo: city.photo ,
        foundation: city.foundation ,
}

    const captureData = (e) =>{
        const{name, value} = e.target
        setCity({...city, [name]:value})
    }

    const saveData = (e)=>{
        e.preventDefault()
        createNewCity(newCity)
        }
        console.log(newCity);

        const inputs = [
            {key: 'City', for: 'city', type: 'text'},
            {key: 'Country', for: 'country', type: 'text'},
            {key: 'Population', for: 'population', type: 'number'},
            {key: 'Photo', for: 'photo', type: 'text'},
            {key: 'Foundation', for: 'foundation', type: 'date'},
            ]


    return(
        <div className='NewCity'>
                <div>
                    <h1 className='NewCity-title'>New City</h1>
                </div>
            <video id='videoNewCity' autoPlay loop muted>
                <source src="http://localhost:3000/videoHero.mp4" type="video/mp4" />
            </video>
            <form className='FormNewCity' onSubmit={saveData}>
            {inputs.map(dato => <Input key={dato.key} value={dato.key} four={dato.for} type={dato.type} text={dato.key} change={captureData}/>)}
                <Alert label={"Send"} message={msg} />
            </form>
        </div>
    )
    }

export default NewCity 


