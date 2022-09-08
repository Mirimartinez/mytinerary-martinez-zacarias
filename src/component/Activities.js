import '../styles/Activities.css'

function Activity(props){
    const activities = [
        {
            name: 'Outdoor yoga',
            photo: 'https://northernvirginiamag.com/wp-content/uploads/2021/04/outdooryoga.jpg',
        },
        {
            name: 'Guided tour!',
            photo: 'https://i0.wp.com/www.disfrutarosario.com/wp-content/uploads/2019/04/Circuito-del-Puerto-1.jpg?resize=1024%2C682&ssl=1',
        },
        {
            name: 'Visit gourmet restaurants',
            photo: 'https://blog.miranterestaurante.com.br/wp-content/uploads/2018/09/chef-1024x550.jpg',
        }
    ]

    const activityCard = (item) =>{

        return(
        <div className="Activities-card" style={{ backgroundImage: `url(${item.photo})`}}>
            <p className='Activities-text'>{item.name}</p>
            
        </div>)
    }


    return(
        <>
        {activities.map(activityCard)}
        </>
    )
}

export default Activity