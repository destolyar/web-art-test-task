import { FC } from "react"
import { UserInterface } from "../interfaces/User"
interface ListOfUsersItemProps {
    user: UserInterface
}

export const ListOfUsersItem: FC<ListOfUsersItemProps> = ({ user }) => {
    return(
        <div>
            <h1>{user.name}</h1>
            <h2>{user.surname}</h2>
            <h2>{user.email}</h2>
            <h2>{user.role}</h2>
            <h2>{user.dateOfBirth}</h2>
            <h2>{user.username}</h2>
            <h2>{user.password}</h2>
        </div>
    )
}