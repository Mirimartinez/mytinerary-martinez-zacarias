import '../styles/Comment.css'

export default function NewComment(){
    return(
        <div>
        <h4 className='newComment'>Add a comment!</h4>
        <textarea className='Comment-textarea' name='newComment' rows="10" cols="50"></textarea>
        <div>        
            <button type='submit'>Submit</button>        
        </div>
        </div>
    )
}