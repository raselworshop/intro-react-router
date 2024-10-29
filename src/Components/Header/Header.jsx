import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <h2>Navebar</h2>
                <Link to='/'>Home</Link>
                <NavLink to={'/users'}>Users</NavLink>
                {/* <Link to='/users'>Users</Link> */}
                <NavLink to={'/posts'}>Posts</NavLink>
                {/* <Link to="/posts">Posts</Link> */}
                <NavLink to={'/about'}>About Us</NavLink>
                {/* <Link to='/about'>About Us</Link> */}
                <NavLink to={'/contacts'}></NavLink>
                {/* <Link to="/contacts">Contact Us</Link> */}
            </nav>
        </div>
    );
};

export default Header;