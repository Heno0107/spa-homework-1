import './App.css'
import { Header } from './components/header/header'
import {Routes , Route} from 'react-router-dom'
import { Not } from './pages/not/not'
import { Home } from './pages/home/home'
import { Comments } from './comments/comments'
import { Posts } from './posts/posts'
import { Users } from './users/users'
import { Comment } from './pages/comment/comment'
import { Post } from './pages/post/post'
import { User } from './pages/user/user'

function App({comments , posts , users}) {

  return (
    <>
    <Header />

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/comments' element = {<Comments comments = {comments}/>}/>
        <Route path='/comments/:id' element = {<Comment />} />
        <Route path='/posts' element = {<Posts posts = {posts}/>}/>
        <Route path='/posts/:id' element = {<Post />}/>
        <Route path='/users' element = {<Users users = {users}/>}/>
        <Route path='users/:id' element = {<User />}/>
        <Route path='*' element = {<Not />}/>
      </Routes>

    </>
  )
}

export default App