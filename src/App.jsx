import './App.css'
import { Header } from './header/header'
import {Routes , Route} from 'react-router-dom'
import { Not } from './not/not'
import { Home } from './home/home'
import { Comments } from './comments/comments'
import { Posts } from './posts/posts'
import { Users } from './users/users'

function App({comments , posts , users}) {

  return (
    <>
    <Header />

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/comments' element = {<Comments comments = {comments}/>}/>
        <Route path='/posts' element = {<Posts posts = {posts}/>}/>
        <Route path='/users' element = {<Users users = {users}/>}/>
        <Route path='*' element = {<Not />}/>
      </Routes>

    </>
  )
}

export default App