import '../styles/Input.css' 

function Input(props) {
    let type = props.type
    
    return(
        <div className='Input-form'>
                <label className='Input-label' htmlFor={props.name}>{props.name}</label>
                <input className='Input-input' type={type} id={props.name} name={props.name} ref={props.four} placeholder={props.value} />
        </div>
    )
}
export default Input