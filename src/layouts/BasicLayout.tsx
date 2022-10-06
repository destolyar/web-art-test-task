import { FC, ReactNode } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AdminLinks } from "../components/AdminLinks"
import { clearUser } from "../store/slices/authSlice"
import { RootState } from "../store/store"
import '../styles/layouts/basic-layout.scss'

interface BasicLayoutProps {
    children: ReactNode,
    title: string
}

export const BasicLayout: FC<BasicLayoutProps> = ({ children, title }) => {
    const dispatch = useDispatch()
    const userRole = useSelector((state: RootState) => state.auth.user?.role === 'admin')
    
    const handleSignOut = () => {
        dispatch(clearUser())
    }

    return(
        <>
            <header className="basic-layout__header">
                <h1 className="basic-layout__header__title">{title}</h1>
                <section className="basic-layout__header__actions">
                    {userRole ? <AdminLinks/> : ''}
                    <button className="basic-layout__header__actions__button" onClick={handleSignOut}>Sign Out</button>
                </section>
            </header>
            <main className="basic-layout__container">
                {children}
            </main>
        </>
    )
}