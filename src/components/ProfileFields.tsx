import { FC, useEffect, useState } from "react"
import firestore from '../firestore'
import { collection, getDocs } from "firebase/firestore"

interface ProfileFields {
    name: string,
    surname: string,
    dateOfBirth: string,
    username: string,
    email: string,
    password: string
}

export const ProfileFields: FC = () => {
    const [users, setUsers] = useState<any>()

    useEffect(() => {
        const getUsers = async () => {
            const usersSnapshot = await getDocs(collection(firestore, 'users'))
            let users: Array<any> = []
            usersSnapshot.forEach((doc) => users.push(doc.data()));
            setUsers(users)
        }

        getUsers()
    }, [])

    useEffect(() => {
        console.log(users)
    }, [users])

    return(
        <form className="form" autoComplete="on">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </form>
    )
}