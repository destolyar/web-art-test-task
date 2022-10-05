import { UserInterface } from "../interfaces/User"

export const checkUser = (users: UserInterface[], email: string, password: string) => {
    const user = users.find(i => (i.email === email) && (i.password === password))

    if(!user) {
        return null
    }
    
    return user
}