import React from 'react'
import CartWidget from '../cartWidget/CartWidget'

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-space-around" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#home">NetMovie</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#features">Productos</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#pricing">Precios</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link" href="#genres" role="button" data-bs-toggle="dropdown" aria-expanded="true">
									Generos
								</a>
								{/* <ul class="dropdown-menu">
										<li><a className="dropdown-item" href="#action">Accion</a></li>
										<li><a className="dropdown-item" href="#terror">Terror</a></li>
										<li><a className="dropdown-item" href="#comedy">Comedia</a></li>
								</ul> */}
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