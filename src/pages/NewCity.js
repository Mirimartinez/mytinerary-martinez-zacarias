import '../styles/Cities.css'
import Input from '../component/Input'

function NewCity(){
    return(
        <div className='Cities'>
            <video id='videoCities' autoPlay loop muted>
                <source
                src="http://localhost:3000/video.mp4"
                type="video/mp4" />
            </video>
            <h1 className='Cities-title'>New City</h1>
            <form>
                <label>
                <ul>
                    <li><Input type='text' for='NewCity' labelText='Add New City: ' /></li>
                    <li><Input type='text' for='NewCityCoutry' labelText='Add New Coutry: ' /></li>
                    <li><Input type='text' for='NewCityImg' labelText='Add City Image URL: ' /></li>
                    <li><Input type='number' for='NewCityPopulation' min="1000" max="100000000" labelText='Add Population: ' /></li>
                    <li><Input type='date' for='NewCityFundation'  max="9999" labelText='Add Fundation: ' /></li>
                </ul>
                </label>
            </form>


        </div>
    )
}

export default NewCity