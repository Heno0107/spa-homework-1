import './posts.css'
import { PostCard } from './postsCard/postsCard'

export function Posts ({posts}) {
    return (
        <div className='posts'>
            {
                posts.map((post) => {
                    return (
                        < PostCard 
                        key = {post.id}
                        id = {post.id} 
                        title = {post.title} 
                        body = {post.body}
                    />
                    )
                })
            }
        </div>
    )
}