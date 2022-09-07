import '../styles/Activities.css'

function Activity(props){
    const activities = [
        {
            name: 'Best activity EVER!',
            photo: '',
        }
    ]

    const activityCard = (item) =>{

        return(
        <div className="Activities-card">
            <p className='Activities-text'>{item.name}</p>
            <p>{item.photo}</p>
        </div>)
    }


    return(
        <>
        {activities.map(activityCard)}
        </>
    )
}

export default Activity