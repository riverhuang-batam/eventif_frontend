import React, {useState} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';
import NavLinks from './NavLinks'
import './NavigationBar.css'

const NavigationBar = props => {
    const [collapseNavbar, setCollapsedNavbar] = useState(false)
    const setNavbar = () => setCollapsedNavbar(!collapseNavbar)
    return(
        <Navbar expand="md" className="shadow fixed-top">
        <NavbarBrand className="mr-auto">
            
            <img className="navigation-img" src={require('../../assets/NavigationBarLogo.png')} alt="eventif_logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={setNavbar}>
        <i className="fa fa-bars" aria-hidden="true"></i>
        </NavbarToggler>
        <Collapse isOpen={collapseNavbar} navbar>
          <Nav className="ml-auto" navbar>
            <NavLinks/>
          </Nav>
        </Collapse>
      </Navbar>
    )
}
export default NavigationBar;