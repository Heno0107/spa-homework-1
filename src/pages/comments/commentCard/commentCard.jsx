import { NavLink } from 'react-router-dom'
import './commentCard.css'

export function CommentCard ({id , name , email , body}) {
    return (

            <div key={id} className='comCard'>
                <h2>{name}</h2>
                <NavLink to={`/comments/${id}`}><h3>{email}</h3></NavLink>
                <p>{body}</p>
            </div>

    )
}