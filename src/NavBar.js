import {
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './NavBar.css';

const NavBar = ({logout}) => {
    return (
        
            <Nav className="Navbar" justified>
                <NavItem>
                    <NavLink className='nav-link' href='/main'> HOME </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href='/signup'> SIGN UP </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href='/login'> LOGIN </NavLink>
                </NavItem>
            </Nav>
    )
};

export default NavBar;