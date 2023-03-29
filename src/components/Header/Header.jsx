import React from "react"
import "./Header.css"
import { Link } from "react-router-dom";

function Header() {

return(
    <header>
        <nav className="nav">
            <div className="navBrandDiv">
                <Link className="navBrand" to='/'>ILLUMISCORE</Link>
            </div>
            <div className="navLinks">
                <ul className="navList">
                    <li className="navItem"><Link to='/login'>Login</Link></li>
                    <li className="navItem"><a href="./">Register</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;