import './comment.css'

export function Comment ({id , name , email , body}) {

    return (
    <div key={id} className='comCard'>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <p>{body}</p>
    </div>
    )
}