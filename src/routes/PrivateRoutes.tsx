import { useSelector } from "react-redux"
import { Navigate, Outlet, Route } from "react-router-dom"
import { RootState } from "../store/store"

export const PrivateRoutes = () => {
    // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
    return (
        // isAuthenticated ? 
        <Outlet/> 
        // : <Navigate to="login"/>
    )
}