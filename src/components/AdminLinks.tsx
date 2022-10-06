import { Link } from "react-router-dom"
import '../styles/components/admin-links.scss'

export const AdminLinks = () => {
    return(
        <nav className='admin-links-container'>
            <Link className="admin-links-container__link" to='/profile'>Profile</Link>
            <Link className="admin-links-container__link" to='/admin'>Admin panel</Link>
        </nav>
    )
}