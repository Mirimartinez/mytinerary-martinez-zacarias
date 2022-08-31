import '../styles/Cities.css'
import '../styles/NewCity.css'
import Input from '../component/Input'

function NewCity() {

    const datos = [
        {key: 'City', for: 'city', type: 'text'},
        {key: 'Country', for: 'country', type: 'text'},
        {key: 'Population', for: 'population', type: 'number'},
        {key: 'Photo', for: 'photo', type: 'text'},
        {key: 'Foundation', for: 'foundation', type: 'date'},
    ]    
    return(
        <div className='NewCity'>
        <video id='videoNewCity' autoPlay loop muted>
            <source
            src="http://localhost:3000/videoHero.mp4"
            type="video/mp4" />
            </video>
            <h1 className='NewCity-title'>New City</h1>
            <div className='NewCity-form'>
                {datos.map(dato => <Input label={dato.key} for={dato.for} type={dato.type}/>)}
            </div>
            <div className='NewCity-textarea'>
                <label className='NewCity-label' for="textarea">Description</label>
                <textarea className='NewCity-input' name='textarea' id='textarea'></textarea>
            </div>
        </div>
    )
}

export default NewCity 