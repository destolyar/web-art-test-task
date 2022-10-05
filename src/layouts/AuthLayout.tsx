import { FC, ReactNode } from "react"
import '../styles/layouts/auth-layout.scss'

interface AuthLayoutProps {
    children: ReactNode,
    title: string
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children, title }) => {
    return(
        <main className="auth-layout">
            <section className="auth-layout__form-container">
                <h1 className="auth-layout__form-container__title">{title}</h1>
                {children}
            </section>
        </main>
    )
}