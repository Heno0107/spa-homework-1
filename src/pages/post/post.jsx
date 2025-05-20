import './post.css'

export function Post ({id , title , body}) {

    return (
    <div key={id} className='postCard'>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
    )
}