import './postsCard.css'

export function PostCard ({id , title , body}) {
    return (
        <div key={id} className='postCard'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}