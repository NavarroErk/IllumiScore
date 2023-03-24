import React from "react"

function Header() {

return(
    <header>
        <nav className="">
            <div className="">
                <a className="navbar-brand" href="/Index">SportsLightController</a>
                <div>
                    <ul className="">
                        <li className="nav-item">
                            <a className="nav-link" href="/Index">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Privacy">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header;