import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../store/store"

export const PrivateRoutes = () => {
    const userLogIn = useSelector((state: RootState) => !!state.auth.user)
    return userLogIn ? <Outlet/> : <Navigate to='/login'/>
}