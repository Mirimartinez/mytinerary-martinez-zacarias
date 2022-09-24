import { useDeleteCommentMutation } from '../features/commentsAPI'
import '../styles/Comment.css'

export default function DeleteComment(props) {
    const [deleteComment] = useDeleteCommentMutation()

    const id = props.data

    const handleDelete = () => {
        deleteComment(id)
    }

    return (
        <div>
            <button className='modifyComment' onClick={handleDelete}>Delete</button>
        </div>
    )

}