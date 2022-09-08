
import '../styles/Comment.css'

function Comment(props){

    const comments = [
        {
            name:'manolo smith',
            user:'Smith_20',
            comment:'very beautiful city, recommended'
            
        }
    ]

    
    const commentsCards = (item) =>{

        return(
            <div className='CommentsCard CommentsCard-subtitle'>
            <div>    
                <p>Name: {item.name}</p>
                <p>User: {item.user}</p>
            </div>
            <div>
                <p>comment: {item.comment}</p>
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