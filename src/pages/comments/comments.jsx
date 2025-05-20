import './comments.css'
import { CommentCard } from './commentCard/commentCard'

export function Comments ({comments}) {
    return (
        <div className='comments'>
            {
                comments.map((com) => {
                    return (
                        < CommentCard 
                        key={com.id}
                        id = {com.id} 
                        name = {com.name} 
                        email = {com.email} 
                        body = {com.body}
                    />
                    )
                })
            }
        </div>
    )
}