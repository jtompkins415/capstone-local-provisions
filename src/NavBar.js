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

      console.log(currentUser);

    const location = useLocation();
    const isHomepage = location.pathname === '/main' || location.pathname === '/';

    console.log(isHomepage)
  
    const toggleNavBar = () => setIsCollapsed(!isCollapsed);

  //What to render when the user is logged in 

    const loggedInNav = () => {
      return (
              <Nav navbar>
                <NavItem>
                  <NavLink href="/about" className='nav-link'>
                    ABOUT
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/details/:username" className='nav-link'>PROFILE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/main" className='nav-link' onClick={logout}>
                    LOG OUT 
                  </NavLink>
                </NavItem>
              </Nav>
      )
    }
  
  //What to render when there is no user

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

    //Main render
    
    return (
      <>
      <Navbar  className='Navbar' light >
           {!isHomepage ? ( <NavbarBrand href="/main" className="nav-link">
              LOCAL PROVISION
            </NavbarBrand>) : null}
            <NavbarToggler onClick={toggleNavBar} className="me-2" />
            <Collapse isOpen={!isCollapsed} navbar>
              {currentUser ? loggedInNav(): loggedOutNav()}
            </Collapse>
          </Navbar>

      </>
    )

}
    
export default NavBar;