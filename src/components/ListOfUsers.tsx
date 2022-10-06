import { useEffect, useState } from "react"
import { UserInterface } from "../interfaces/User"
import { getUsers } from "../utils/getUsers"
import { ListOfUsersItem } from "./ListOfUsersItem"
import '../styles/components/list-of-users.scss'

export const ListOfUsers = () => {
    const [users, setUsers] = useState<UserInterface[]>([])
    
    useEffect(() => {
        getUsers().then(res => setUsers(res))
    }, [])

    return(
        <section className="list-of-users">
            {users.map((user, index) => <ListOfUsersItem user={user} key={index}/>)}
        </section>
    )
}