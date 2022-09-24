import { useModifyCommentMutation } from '../features/commentsAPI'
import '../styles/Comment.css'

export default function EditComment(props) {
    const [editComment] = useModifyCommentMutation()

    const id = props.id
    const data = props.data

    const handleEdit = () => {
    editComment({id, data})
        console.log(id, data);
    }

    return (
        <div>
            <button className='modifyComment' onClick={handleEdit}>Edit</button>
        </div>
    )

}