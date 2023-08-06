import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <nav>
            <ul className="container nav-wrapper">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Abount</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
}
 
export default Header;