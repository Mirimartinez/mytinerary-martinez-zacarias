import '../styles/Comment.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
//import {useDeleteCommentMutation} from '../features/commentsAPI'

function Comment(props){
    let juli = ""
    let localId = ""
    
    // if(localStorage.getItem("user")) {
    //     juli = JSON.parse(localStorage.getItem("user")).role 
    //     localId = JSON.parse(localStorage.getItem("user")).
    // } 

    const [comment, setComment] = useState([])

    const comments = async () => {
        await axios.get(`http://localhost:4000/comments/?itinerary=${props.itinerary}`)
        .then(response => setComment(response.data.response))
    }
    useEffect(() => {
        comments()
    }, [])
    
    
    const commentsCards = (item) =>{
        console.log(item);
        return(
            <>
            <div className='CommentsCard CommentsCard-subtitle'>
            <div className='CommentPhotoNameUser'>    
                <img src={item.user.photo} alt='img' className='CommentPhoto'></img>
            </div>
            <div className='CommentComment'>
                <p>Name: {item.user.name} {item.user.lastName}</p>
                <p className='Comment'> "{item.comment}"</p>
            </div>
            </div>
            <span>
            {localId === "item.user._id" ? <button className='modifyComment'>Edit</button> : <button className='modifyComment'>NOT WORKINGGGGGGGGG</button>}
            {juli === "admin" ? <button className='modifyComment' >Delete</button> : null}

            </span>
            
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

