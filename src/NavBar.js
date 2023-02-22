import { useState } from 'react';
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
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavBar = () => setIsCollapsed(!isCollapsed);

    return (
        
            // <Nav className="Navbar" justified>
            //     <NavbarBrand href='/main' className='nav-brand'>
            //         LOCAL PROVISIONS
            //     </NavbarBrand>
            //     <NavbarToggler onClick={toggleNavBar} className='me-2'/>
            //     <NavItem>
            //         <NavLink className='nav-link' href='/main'> HOME </NavLink>
            //     </NavItem>
            //     <NavItem>
            //         <NavLink className="nav-link" href='/signup'> SIGN UP </NavLink>
            //     </NavItem>
            //     <NavItem>
            //         <NavLink className="nav-link" href='/login'> LOGIN </NavLink>
            //     </NavItem>
            // </Nav>


            <Navbar  className='Navbar' light >
            <NavbarBrand href="/main" className="nav-link">
              LOCAL PROVISIONS
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavBar} className="me-2" />
            <Collapse isOpen={!isCollapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/signup" className='nav-link'>SIGN UP</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login" className='nav-link'>
                    LOGIN
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>

    )
};

export default NavBar;