import React from "react"
import "./Header.css"

function Header() {

return(
    <header>
        <nav className="nav">
            <div className="navBrandDiv">
                <a className="navBrand" href="./">ILLUMISCORE</a>
            </div>
            <div className="navLinks">
                <ul className="navList">
                    <li className="navItem"><a href="./">Home</a></li>
                    <li className="navItem"><a href="./">About</a></li>
                    <li className="navItem"><a href="./">Services</a></li>
                    <li className="navItem"><a href="./">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;