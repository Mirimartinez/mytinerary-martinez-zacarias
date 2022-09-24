import '../styles/InputSearch.css'

export default function InputSearch(props) {

        return (
        <form className="InputForm" onSubmit={props.action}>
            <input className="InputSearch" type="text" name="search" ref={props.searchEl} placeholder='Type...'/>
            <button className="InputButton" type='submit'>Search</button>
        </form>
    )
}