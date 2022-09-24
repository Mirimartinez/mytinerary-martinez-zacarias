import '../styles/Comment.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import EditComment from './EditComment'
import DeleteComment from './DelComment'

function Comment(props){
    let role = ""
    let localId = ""
    
    if(localStorage.getItem("user")) {
        role = JSON.parse(localStorage.getItem("user")).role 
        localId = JSON.parse(localStorage.getItem("user"))
    }

    const [comment, setComment] = useState([])
    const [editedComment, setEditedComment] = useState([])

    const comments = async () => {
        await axios.get(`http://localhost:4000/comments/?itinerary=${props.itinerary}`)
        .then(response => setComment(response.data.response))
    }

    useEffect(() => {
        comments()
    }, [])
    
    
    function handleEditComment(event){
        setEditedComment(event.target.value)
    }
    
    const commentsCards = (item) =>{
        return(
            <>
            <div className='CommentsCard CommentsCard-subtitle'>
            <div className='CommentPhotoNameUser'>    
                <img src={item.user.photo} alt='img' className='CommentPhoto'></img>
            </div>
            <div className='CommentComment'>
                <p>Name: {item.user.name} {item.user.lastName}</p>
                {/* <p>Name: {item.user._id} {localId.id}</p> */}
                <textarea className='Comment' defaultValue={item.comment} onChange={handleEditComment} ></textarea>
            </div>

            </div><EditComment id={item._id} data={editedComment}/>
            {/* {(localId.id === `${item.user._id}` )?  : null} */}
            {role === "admin" ? <DeleteComment data={item._id}/> : null}            
            </>
        )
    }
    return(
        <>
        {comment?.map(commentsCards)}
        
        </>
    )


}


export default Comment

