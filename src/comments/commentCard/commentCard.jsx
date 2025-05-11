import './commentCard.css'

export function CommentCard ({id , name , email , body}) {
    return (
        <div key={id} className='comCard'>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    )
}