import React from 'react'
// import { Dropdown, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import CartWidget from '../cartWidget/CartWidget'
import GetAllCategories from '../getAllCategories/GetAllCategories'
import "./Navbar.css"
import { Navbar,Nav,Container,NavDropdown } from 'react-bootstrap'


const NavBar = () => {

    return (
      <Navbar className='bg-color-navbar' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to={"/"} className="nav-link active" aria-current="page" href="#home">NetShop</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#products">Products</Nav.Link>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <GetAllCategories/>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      // <nav className="navbar navbar-expand-lg fixed-top ">
      //   <div className="container-fluid">
      //     <div className="collapse navbar-collapse justify-content-around">
      //       <ul className="navbar-nav">
      //         <li className="nav-item">
      //           
      //         </li>
      //         <li className="nav-item">
      //           
      //         </li>
      //         <li className="nav-item">
      //           <Dropdown>
      //             <Dropdown.Toggle id="dropdown-basic">
      //               Categorias
      //             </Dropdown.Toggle>

      //             

                  
      //           </Dropdown>
      //         </li>
			// 			</ul>
			// 			<div>
      //         <Link to={"/cart"}><CartWidget/></Link>
			// 			</div>
			// 		</div>
			// 	</div>
			// </nav>
    )
}

export default NavBar