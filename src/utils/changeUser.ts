import { collection, doc, setDoc } from "firebase/firestore"
import { firestore } from "../firebase"
import { UserInterface } from "../interfaces/User"


export const changeUser = (newValues: UserInterface, userId: string = "") => {
    delete newValues["id"]
    const docRef = doc(firestore, "users", userId)
    setDoc(docRef, newValues)
}