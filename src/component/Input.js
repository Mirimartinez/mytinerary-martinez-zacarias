function Input(props) {
    let name = props.name
    let user_name = props.user_name
    let labelText = props.labelText
    return(
        <div className=''>
                <label for={name}>{labelText}</label>
                <input type="text" id={name} name={user_name}></input>

    </div>
    )

}
export default Input