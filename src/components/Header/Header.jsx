import React, { useContext } from "react"
import "./Header.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { UserContext } from "../..";
import Cookies from "js-cookie";


function Header() {
    const userData = useContext(UserContext);
    const navigate = useNavigate();
    const illumiScoreJWToken = Cookies.get("illumiScoreJWToken");

    useEffect(() => {
        if (document.querySelector("#googleSignInBtn")) {
            document.querySelector("#signOutBtn").hidden = true;
        } else {
            document.querySelector("#signOutBtn").hidden = false;
        }

        if (illumiScoreJWToken) {
            document.querySelector("#googleSignInBtn").hidden = true;
            if (!document.querySelector("#googleSignInBtn")) {
                document.querySelector("#signOutBtn").hidden = false;
            } else {
                document.querySelector("#signOutBtn").hidden = false;
            }
        }
    }, [])
    

    function handleCallbackResponse(response) {
        console.log(response);
        console.log("Encoded JWT ID Token: " + response.credential);
        let userObject = jwtDecode(response.credential);
        console.log("userObject: " + JSON.stringify(userObject));
        let email = userObject.email;
        // let password = userObject.picture;
        let password = userObject.password;
        console.log("email: " + email);
        console.log("password: " + password);
        userData.email = email;
        userData.password = password;
        console.log("userData.email: " + JSON.stringify(userData.email));
        console.log("userData.password: " + JSON.stringify(userData.password));
        // userData.illumiScoreJWToken = {
        //     email: userData.email,
        //     password: userData.password
        // };
        // const illumiScoreJWToken = userData.email;
        userData.illumiScoreJWToken = userData.email

        fetch(`https://73.237.65.141:8080/api/UserData/Username?username=${userData.email}`)
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                } else {
                    console.log("THIS IS THE ELSE STATEMENT" + userData.isLoggedIn);
                    userData.isLoggedIn = true;
                    console.log("THIS IS THE ELSE STATEMENT AFTER isLoggedIn = true: " + userData.isLoggedIn);
                    Cookies.set('illumiScoreJWToken', userData.illumiScoreJWToken, { expires: 1/24 });
                    // console.log(userData.illumiScoreJWToken);
                    navigate("dashboard");
                    return response.json();
                }
            })
            .then(data => {
                alert(JSON.stringify(data.username))
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
                console.log("THIS IS DATA IN HEADER: " + data);

                fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(() => {
                    userData.isLoggedIn = true;
                    Cookies.set('illumiScoreJWToken', userData.illumiScoreJWToken, { expires: 1/24 });
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
            document.querySelector("#googleSignInBtn"), 
            // theme and size of button
            {theme: "outline", size: "medium"}
        )
    }, [])

    function signOutClicked() {
        Cookies.remove("illumiScoreJWToken")
        userData.isLoggedIn = false;
        navigate("../signedout")
    }

    // let signInDiv = document.querySelector(".signInDiv");
    // useEffect(() => {
    //     if (userData.isLoggedIn === true) {
    //       signInDiv.classList.add("displayNone")
    //     }
    //   }, [userData.isLoggedIn, navigate]);


return(

    <header>
        <nav className="nav">
            <div className="navBrandDiv">
                {/* <Link className="navBrand" to='/'>ILLUMISCORE</Link> */}
                <p className="navBrand">ILLUMISCORE</p>
            </div>
            <div className="signInDiv"></div>
            <div className="navLinks">
                <ul className="navList">
                    {/* <li className="navItem"><Link to='/login'>Login</Link></li> */}
                    {/* <li className="navItem"><Link to="/register">Register</Link></li> */}
                    <div className="navItem" id="googleSignInBtn"></div>
                    <button onClick={signOutClicked} className="navItem" id="signOutBtn">Sign Out</button>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;