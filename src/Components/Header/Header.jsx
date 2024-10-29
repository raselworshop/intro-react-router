import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h2>Navebar</h2>
                <Link to='/'>Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/about'>About Us</Link>
                <Link to="/contacts">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;