import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <nav className="container">
            <ul className="nav-wrapper">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Abount</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
 
export default Header;