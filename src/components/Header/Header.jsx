import React from "react"
import "./Header.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

function Header() {

    const [user, setUser] = useState({});


    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID Token: " + response.credential);
        let userObject = jwtDecode(response.credential);
        console.log(userObject);
    }

    // first param is a function
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "790870897502-fqdi3s4r49a8741sbeqt19st74k6ddkc.apps.googleusercontent.com",
            // if someone logs in, what function to call?
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.querySelector(".signInDiv"), 
            // theme and size of button
            {theme: "outline", size: "medium"}
        )
    }, [])



return(
    <header>
        <nav className="nav">
            <div className="navBrandDiv">
                <Link className="navBrand" to='/'>ILLUMISCORE</Link>
            </div>
            <div className="signInDiv"></div>
            {/* <div className="navLinks">
                <ul className="navList">
                    <li className="navItem"><Link to='/login'>Login</Link></li>
                    <li className="navItem"><Link to="/register">Register</Link></li>
                </ul>
            </div> */}
        </nav>
    </header>
  )
}

export default Header;