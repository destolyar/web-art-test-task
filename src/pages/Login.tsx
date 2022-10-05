import { FC } from "react"
import { LoginForm } from "../components/LoginForm"
import { AuthLayout } from "../layouts/AuthLayout"

export const Login: FC = () => {
    return(
        <AuthLayout title="Login">
            <LoginForm/>
        </AuthLayout>
    )
}