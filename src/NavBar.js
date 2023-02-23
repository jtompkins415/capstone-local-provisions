import { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import UserContext from './UserContext';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    NavbarToggler,
    Collapse
} from 'reactstrap';
import './NavBar.css';

const NavBar = ({logout}) => {
    const {currentUser} = useContext(UserContext);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const location = useLocation();
    const isHomepage = location.pathname === '/main';

    const toggleNavBar = () => setIsCollapsed(!isCollapsed);

    const loggedInNav = () => {
      return (
              <Nav navbar>
                <NavItem>
                  <NavLink href="/about" className='nav-link'>
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/profile" className='nav-link'>PROFILE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/main" className='nav-link' onClick={logout}>
                    LOG OUT {currentUser.firstName || currentUser.username}
                  </NavLink>
                </NavItem>
              </Nav>
      )
    }
    
    const loggedOutNav = () => {
      return (
              <Nav navbar>
                <NavItem>
                  <NavLink href="/about" className='nav-link'>
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup" className='nav-link'>SIGN UP</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login" className='nav-link'>
                    LOGIN
                  </NavLink>
                </NavItem>
              </Nav>
      )
    }

    return (
      <>
      <Navbar  className='Navbar' light >
           {!isHomepage && ( <NavbarBrand href="/main" className="nav-link">
              LOCAL PROVISIONS
            </NavbarBrand>)}
            <NavbarToggler onClick={toggleNavBar} className="me-2" />
            <Collapse isOpen={!isCollapsed} navbar>
              {currentUser ? loggedInNav(): loggedOutNav()}
            </Collapse>
          </Navbar>

      </>
    )

}
    
export default NavBar;