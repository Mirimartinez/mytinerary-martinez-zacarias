import '../styles/Cities.css'
import Input from '../component/Input'

function NewCity() {

    const datos = [
        {key: 'City', for: 'city', type: 'text'},
        {key: 'Country', for: 'country', type: 'text'},
        {key: 'Population', for: 'population', type: 'number'},
        {key: 'Photo', for: 'photo', type: 'text'},
        {key: 'Fundation', for: 'fundation', type: 'date'},
    ]    

    return(
        <div className='Cities'>
            <video id='videoCities' autoPlay loop muted>
                <source
                src="http://localhost:3000/video.mp4"
                type="video/mp4" />
            </video>
            <h1 className='Cities-title'>New City</h1>
            <div className='NewCity-form'>
                {datos.map(dato => <Input label={dato.key} for={dato.for} type={dato.type}/>)}
                <label for="text">Text</label>
                <textarea></textarea>
            </div>
        </div>
    )
    }

export default NewCity