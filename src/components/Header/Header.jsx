import React, { useContext } from "react"
import "./Header.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserContext } from "../..";


function Header() {

    const navigate = useNavigate();


    const userData = useContext(UserContext);


    function handleCallbackResponse(response) {
        console.log(response);
        console.log("Encoded JWT ID Token: " + response.credential);
        let userObject = jwtDecode(response.credential);
        console.log("userObject: " + JSON.stringify(userObject));
        let email = userObject.email;
        console.log("email: " + email);
        userData.email = email;
        userData.password = "fakepassword"
        console.log("user.email: " + JSON.stringify(userData.email));

        fetch(`https://73.237.65.141:8080/api/UserData/Username?username=${userData.email}`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                } else {
                    userData.isLoggedIn = true
                    navigate("dashboard")
                    return response.json();
                }
            })
            .then(data => {
                console.log(data);
                // Do something with the data
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                // fetch("https://73.237.65.141:8080/api/UserData/UserData", {
                //     method: "POST", 
                //     headers: {
                //         "Content-Type": "application/json"
                //     }, 
                //     body: {
                //         username: userData.email, 
                //         password: userData.password
                //     }
                // })
                //     .then(response => response.json())
                //     .then(alert("account successfully created"))
                //     .catch(error => {
                //         console.error(error)
                //         alert("Failed to create profile")
                //     })
                const url = 'https://73.237.65.141:8080/api/UserData/UserData';
                const data = {
                username: userData.email,
                password: userData.password
                };

                fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    navigate("dashboard")
                })
                .catch(error => console.error(error));;
                })
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
            <div className="navLinks">
                <ul className="navList">
                    <li className="navItem"><Link to='/login'>Login</Link></li>
                    <li className="navItem"><Link to="/register">Register</Link></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;