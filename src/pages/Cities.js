import '../styles/Cities.css'
import CitiesCard from '../component/CitiesCards'

function Cities(){
    return (
        <div className='Cities'>
            <h1 className='Cities-title'>Cities</h1>
            
            <CitiesCard className='Cities-list'/>
        </div>
    )
}

export default Cities