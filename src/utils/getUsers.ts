import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { UserInterface } from "../interfaces/User";

export const getUsers = async () => {
    const usersCollection = collection(firestore, 'users')
    const usersSnapshot = getDocs(usersCollection);
    const res: UserInterface[] = [];
    
    (await usersSnapshot).forEach(item => res.push(Object.assign(item.data(), {id: item.id}) as UserInterface))
    return res
}