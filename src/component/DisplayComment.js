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
            <div>
            <div className='CommentsCard CommentsCard-subtitle'>
            <div className='CommentComment'>
                <p>Name: {item.user.name} {item.user.lastName}</p>
                 <textarea className='Comment' defaultValue={item.comment} onChange={handleEditComment} ></textarea>
            </div>
            </div>
            
            {(localId.id === `${item.user._id}` )? <EditComment id={item._id} data={editedComment}/> : null}
            {role === "admin" ? <DeleteComment data={item._id}/> : null}            
            </div>
        )
    }
    return(
        <>
        {comment?.map(commentsCards)}
        
        </>
    )
}
export default Comment

