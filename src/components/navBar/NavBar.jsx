import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg bg-light">
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
                <ul class="dropdown-menu">
                  <li><Link to={"/category"} class="dropdown-item" href="#action">Action</Link></li>
                  <li><Link to={"/category"} class="dropdown-item" href="#another">Sport</Link></li>
                </ul>
              </li>
						</ul>
						<div>
							<CartWidget/>
						</div>
					</div>
					
				</div>
			</nav>
    )
}

export default NavBar