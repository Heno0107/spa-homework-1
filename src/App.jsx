import './App.css'
import { Header } from './header/header'
import {Routes , Route} from 'react-router-dom'
import { Not } from './not/not'
import { Home } from './home/home'
import { Comments } from './comments/comments'
import { Posts } from './posts/posts'
import { Users } from './users/users'

function App() {

  return (
    <>
    <Header />

      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/comments' element = {<Comments />}/>
        <Route path='/posts' element = {<Posts />}/>
        <Route path='/users' element = {<Users />}/>
        <Route path='*' element = {<Not />}/>
      </Routes>

    </>
  )
}

export default App