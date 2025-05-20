import './header.css'
import { NavLink } from 'react-router-dom'

export function Header () {
    return (
        <div className='links'>
            <NavLink to={'/comments'}>Comments</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/users'}>Users</NavLink>
        </div>
    )
}