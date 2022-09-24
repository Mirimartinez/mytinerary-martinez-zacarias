
import '../styles/Comment.css'

function Comment(props){

    const comments = [
        {
            name:'Manolo Smith',
            user:'Smith_20',
            comment:'very beautiful city totally recommended, I hope to return again',
            photo: 'https://media.istockphoto.com/photos/living-that-urban-life-picture-id1165314750?b=1&k=20&m=1165314750&s=170667a&w=0&h=mS8qGVV2GWQ9S_9kNsBTg3ZTN5nCOfByLQkzqxOqPuQ='
        },

        {
            name:'Alex Tower',
            user:'TTMaster',
            comment:'a totally recommendable experience, I had a lot of fun',
            photo: 'https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg'
        },
        {
            name:'Sara Arrow',
            user:'Destiny_12',
            comment:'I am very happy to have lived a totally pleasant experience, I leave satisfied',
            photo: 'https://media.istockphoto.com/photos/young-woman-laughing-while-relaxing-at-home-picture-id1326417862?b=1&k=20&m=1326417862&s=170667a&w=0&h=CFCBJScwuPZesB9vBkVwglEEkmiIW8cZ32x2l3UcTIY='
        }
    ]

    
    const commentsCards = (item) =>{
        return(
            <div className='CommentsCard CommentsCard-subtitle'>
            <div className='CommentPhotoNameUser'>    
                <img src={item.photo} alt='img' className='CommentPhoto'></img>
                <p className='CommentText'>Name: {item.name}</p>
                <p className='CommentText'>User: {item.user}</p>
            </div>
            <div className='CommentComment'>
                <p> "{item.comment}"</p>
            </div>
            </div>
        )
    }

    return(
        <>
        {comments.map(commentsCards)}
        </>
    )


}


export default Comment