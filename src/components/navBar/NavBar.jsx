import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'
import GetAllCategories from '../getAllCategories/GetAllCategories'
import "./Navbar.css"


const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg fixed-top bg-color-navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page" href="#home">NetShop</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href='#category' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <GetAllCategories/>
                </ul>
              </li>
						</ul>
						<div>
              <Link to={"/cart"}><CartWidget/></Link>
						</div>
					</div>
				</div>
			</nav>
    )
}

export default NavBar