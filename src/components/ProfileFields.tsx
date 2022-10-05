import { FC } from "react"
import { useSelector } from "react-redux"
import { UserInterface } from "../interfaces/User"
import { RootState } from "../store/store"


export const ProfileFields: FC = () => {
    //Todo:
    // Change {} as UserInterface
    const currentUser: UserInterface = useSelector((state: RootState) => state.auth.user) || {} as UserInterface

    return(
        <form className="form" autoComplete="on">
            <h1>{currentUser.name}</h1>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </form>
    )
}