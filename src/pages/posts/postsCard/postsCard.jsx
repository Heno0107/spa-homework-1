import { NavLink } from 'react-router-dom'
import './postsCard.css'

export function PostCard ({id , title , body}) {
    return (

        <div key={id} className='postCard'>
            <NavLink to={`/posts/${id}`}><h2>{title}</h2></NavLink>
            <p>{body}</p>
        </div>

    )
}