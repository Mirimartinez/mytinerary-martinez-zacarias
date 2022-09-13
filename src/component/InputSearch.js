import '../styles/InputSearch.css'

export default function InputSearch() {

    function preventDefault(e){
        e.preventDefault()
        }

        return (
        <form className="InputForm">
            <input className="InputSearch" type="text" name="search" placeholder='Type...'/>
            <button className="InputButton" onClick={preventDefault}>Search</button>
        </form>
    )
}