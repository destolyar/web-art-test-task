import { useEffect, useState } from "react"
import { UserInterface } from "../interfaces/User"
import { getUsers } from "../utils/getUsers"
import { ListOfUsersItem } from "./ListOfUsersItem"

export const ListOfUsers = () => {
    const [users, setUsers] = useState<UserInterface[]>([])
    
    useEffect(() => {
        getUsers().then(res => setUsers(res))
    }, [])

    return(
        <section>
            {users.map((user, index) => <ListOfUsersItem user={user} key={index}/>)}
        </section>
    )
}