import { NavLink } from 'react-router-dom'
import './usersCard.css'

export function UserCard ({id , name , username , email , address , phone , company}) {
    return (
        <div className='userCard' key={id}>
            <h2 className='name'>{name}</h2>
            <NavLink to={`/users/${id}`}><span className='username'>@{username}</span></NavLink>
            <span className='email'>email : {email}</span>
            <p className='address'>Lives in {address.city}, St. {address.street}</p>
            <span className='phone'>Phone Number : {phone}</span>
            <p className='company'>Works in {company.name} company as a {company.catchPhrase}</p>
        </div>
    )
}