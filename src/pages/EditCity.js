import '../styles/Cities.css'
import '../styles/EditCity.css'
import Input from '../component/Input'

function EditCity() {

    const datos = [
        {key: 'City', for: 'city', type: 'text'},
        {key: 'Country', for: 'country', type: 'text'},
        {key: 'Population', for: 'population', type: 'number'},
        {key: 'Photo', for: 'photo', type: 'text'},
        {key: 'Foundation', for: 'foundation', type: 'date'},
    ]    
    // let city = datos[0]
    const selectCity = (dato) => (
        <option className="EditCity-Select">{dato.city}</option>
      )
    return(
        <div className='EditCity'>
        <video id='videoEditCity' autoPlay loop muted>
            <source
            src="http://localhost:3000/videoHero.mp4"
            type="video/mp4" />
            </video>
            <h1 className='EditCity-title'>Edit City</h1>
            <select className="EditSelect">{datos?.map(selectCity)}</select>
            <div className='EditCity-form'>
                {datos.map(dato => <Input label={dato.key} for={dato.for} type={dato.type}/>)}
            </div>
            <div className='EditCity-textarea'>
                <label className='EditCity-label' for="textarea">Description</label>
                <textarea className='EditCity-input' name='textarea' id='textarea'></textarea>
            </div>
        </div>
    )
}

export default EditCity 