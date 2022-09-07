import '../styles/Input.css' 

function Input(props) {
    let inputFor = props.for
    let type = props.type
    let label = props.label



    return(
        <div className='Input-form'>
                <label className='Input-label' for={inputFor}>{label}</label>
                <input className='Input-input' type={type} id={inputFor} name={inputFor}></input>
        </div>
    )
        
}
export default Input