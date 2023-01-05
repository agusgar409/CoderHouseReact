import React from 'react'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-around" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#home">NetShop</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#products">Products</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#categories">Categories</a>
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