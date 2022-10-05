import { FC, ReactNode } from "react"
import '../styles/layouts/basic-layout.scss'

interface BasicLayoutProps {
    children: ReactNode,
    title: string
}

export const BasicLayout: FC<BasicLayoutProps> = ({ children, title }) => {
    return(
        <>
            <header className="basic-layout__header">
                <h1 className="basic-layout__header__title">{title}</h1>
                <section className="basic-layout__header__actions">
                    <button className="basic-layout__header__actions__button">Sign Out</button>
                </section>
            </header>
            <main className="basic-layout__container">
                {children}
            </main>
        </>
    )
}