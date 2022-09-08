import '../styles/Input.css' 

function Input(props) {
    let inputFor = props.four
    let type = props.type
    let label = props.label
    
    return(
        <div className='Input-form'>
                <label className='Input-label' htmlFor={inputFor}>{label}</label>
                <input className='Input-input' onChange={props.change} type={type} id={inputFor} name={inputFor} placeholder={props.value}></input>
        </div>
    )
}
export default Input