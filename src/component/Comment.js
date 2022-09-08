
import '../styles/Comment.css'

function Comment(props){

    const comments = [
        {
            name:'Manolo Smith',
            user:'Smith_20',
            comment:'very beautiful city totally recommended, I hope to return again'
            
        },

        {
            name:'Alex Tower',
            user:'TTMaster',
            comment:'a totally recommendable experience, I had a lot of fun'
            
        },
        {
            name:'Sara Arrow',
            user:'Destiny_12',
            comment:'I am very happy to have lived a totally pleasant experience, I leave satisfied'
            
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