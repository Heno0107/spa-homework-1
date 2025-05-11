import './users.css'
import { UserCard } from './usersCard/usersCard'

export function Users ({users}) {
    return (
        <div className='users'>
            {
                users.map((user) => {
                    return <UserCard 
                        key = {user.id}
                        name = {user.name}
                        username = {user.username}
                        email = {user.email}
                        address = {user.address}
                        phone = {user.phone}
                        company = {user.company}
                    />
                })
            }
        </div>
    )
}