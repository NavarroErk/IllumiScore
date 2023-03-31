import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useContext } from "react";
import './Login.css'
import Footer from "../../components/Footer/Footer";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";





function Login() {
    const { setAuth } = useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState("");
    
    useEffect(() => {
    //   userRef.current.focus();
    }, [])
    
    useEffect(() => {
        setErrMsg("");
      }, [user, pwd])

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user, pwd);
        try {
            const response = await fetch()



            setUser("");
            setPwd("");
            setSuccess(true);
        } catch {

        }
        
    }






      
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // console.log(user, pwd);
    //     setUser("");
    //     setPwd("");
    //     setSuccess(true);
    // }


    // try {
    //     const response = await axios.post(LOGIN_URL, 
    //         JSON.stringify({user, pwd}), 
    //         {
    //             headers: { "Content-Type": "application/json"}, 
    //             withCredentials: true
    //         }
    //     );
    //     const accessToken = response?.data?.accessToken;
    //     const roles = response?.data?.roles;
    //     setAuth({ user, pwd, roles, accessToken })
    //     setUser("");
    //     setPwd("");
    //     setSuccess(true);
    // } catch (err) {
    //     if (!err?.response) {
    //         setErrMsg("No Server Response")
    //     } else if (err.response?.status === 400) {
    //         setErrMsg("Missing Username or Password")
    //     } else if (err.response?.status === 401) {
    //         setErrMsg("Unauthorized")
    //     } else {
    //         setErrMsg("Login Failed")
    //     }
    //     // focus for screen readers
    //     errRef.current.focus();
    // }



    

    return(
        <>
            {success ? (
                    <div>
                        <h1>You are logged in!</h1>
                        <br />
                        <p><Link to="/">View Your Dashboard</Link></p>
                    </div>
            

        ) : (
            <div className="loginContainer">
                <form className="loginForm" onSubmit={handleSubmit}>
                <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="loginHeaderDiv">
                        <h1>Login</h1>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="loginEmail">Email Address</label>
                        <input 
                        type="text" 
                        id="loginEmail" 
                        name="loginEmail" 
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="loginPassword">Password</label>
                        <input 
                        type="password" 
                        id="loginPassword" 
                        name="loginPassword" 
                        onChange={(e) => setPwd(e.target.value)}
                        required />
                    </div>
                    <div className="rememberMeDiv">
                        <label htmlFor="loginRememberMe">Remember Me</label>
                        <input type="checkbox" name="loginRememberMe" id="loginRememberMe" />
                    </div>
                    <button>Submit</button>
                    <p>Need an account? <Link to="/register">Register</Link></p>
                    
                </form>
            </div>
            // <Footer/>
        )}
       </>
    )
}

export default Login;