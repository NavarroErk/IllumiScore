import React from "react";
import { useNavigate } from "react-router-dom";


function SignedOut() {

    const navigate = useNavigate();
  setTimeout(() => {
    navigate("/")
  }, 2000);


    return(
        <main className="loggedOutContainer">
            <h1>You have been signed out</h1>
        </main>
    )
}


export default SignedOut;