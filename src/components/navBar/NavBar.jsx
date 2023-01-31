import React from 'react'
// import { Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'
import GetAllCategories from '../getAllCategories/GetAllCategories'
import "./Navbar.css"
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap'


const NavBar = () => {

    return (
      <Navbar className='bg-color-navbar' expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link active" aria-current="page">NetShop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Products</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <GetAllCategories/>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <div>
            <Link to={"/cart"} class="text-decoration-none"><CartWidget/></Link>
 		      </div>
        </Container>
      </Navbar>
    )
}

export default NavBar