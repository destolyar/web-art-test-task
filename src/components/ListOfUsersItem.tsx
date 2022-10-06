import { FC } from "react"
import { UserInterface } from "../interfaces/User"
import '../styles/components/list-of-users-item.scss'

interface ListOfUsersItemProps {
    user: UserInterface
}

export const ListOfUsersItem: FC<ListOfUsersItemProps> = ({ user }) => {
    return(
        <div className="list-of-users-item">
            <p className="list-of-users-item__info">Name: {user.name}</p>
            <p className="list-of-users-item__info">Surname: {user.surname}</p>
            <p className="list-of-users-item__info">Email: {user.email}</p>
            <p className="list-of-users-item__info">Role: {user.role}</p>
            <p className="list-of-users-item__info">Date of birth: {user.dateOfBirth}</p>
            <p className="list-of-users-item__info">Username: {user.username}</p>
            <p className="list-of-users-item__info">Password: {user.password}</p>
        </div>
    )
}