import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../store/store"

export const AdminRoutes = () => {
    const isAdmin = useSelector((state: RootState) => state.auth.user?.role === 'admin')
    return isAdmin ? <Outlet/> : <Navigate to='/profile'/>
}