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
            <Input for='NewCity' labelText='Add New City'/>
            <Input for='NewCityImg' labelText='Add City Image URL'/>

        </div>
    )
}

export default NewCity