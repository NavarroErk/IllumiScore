import React from "react";
import { useRef, useState, useEffect } from "react";
import "./Register.css"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "../../api/axios";


//// must start with upper or lowercase letter, must be followed by 3-23 characters that can be lower or uppercase letters, digits, hyphen, or underscore.
// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; 

const USER_REGEX = /^\S+@\S+$/; 
// requires at least 1 lowercase, 1 uppercase, 1 digit, and 1 special character (  *!@#$%  ), 8-24 characters
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*]).{8,24}$/;
// const REGISTER_URL = "https://73.237.65.141:8080/api/UserData/UserData"



function Register(){
    // allow us to set focus to user input when the component loads
    const userRef = useRef();
    // if we get an error, put focus on that for accessibility
    const errRef = useRef();

    // tied to email input field
    const [user, setUser] = useState('');
    // tied to whether the name validates or not
    const [validName, setValidName] = useState(false);
    // whether we have focus on input field or not
    const [userFocus, setUserFocus] = useState(false);

    // same as above but for password field
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    // same as above but for confirm password field
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    // possible error message
    const [errMsg, setErrMsg] = useState('');
    // successfully submit registration form
    const [success, setSuccess] = useState('');

    // set focus when component loads
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        // test against the user regex
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
        // anytime "user" changes, it will check the validation of that field
    }, [user])

    useEffect(() => {
        // test against the password regex
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        // comparing pwd to matchPwd - returns a boolean
        const match = pwd === matchPwd;
        // true or false based on if passwords match
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
        // anytime the user changes one of these 3 states, clear error message
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // run a 2nd series of checks for secure validation incase btn gets enabled manually by user
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry");
            console.log("did not work lolz");
            return;
        } else if (!validMatch) {
            setErrMsg("Passwords do not match")
            console.log("did not work also lolz");
            return;
        } else {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: user,
                    password: pwd,
                }),
        
        };
            fetch("https://73.237.65.141:8080/api/UserData/UserData", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(`data: ${JSON.stringify(data)}`);
                setSuccess(true);
            })
            .catch((err) => {

                    // if (err.response.status === 500) {
                    //   console.log("Email Already In Use");
                    //   setErrMsg("Email Already In Use");
                    // } else {
                    //   console.log("Registration Failed");
                    //   setErrMsg("Registration Failed");
                    // }
                    console.log(err);
                    setErrMsg("Registration Failed");
                  
                //   errRef.current.focus();
            });
        }
    }


return(
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <Link to="/login">Login</Link>
                </p>
            </section>
        ) : (
            <section className="registerContainer">
                <form className="registerForm" onSubmit={handleSubmit} >
                    <div className="registerErrorDiv">
                        {/* if errMsg exists, use ternary statement to apply "errmsg" className, otherwise apply className "offScreen" */}
                        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive" ref={errRef}>{errMsg}</p>
                    </div>
                    <div className="registerHeaderDiv">
                        <h1>Register</h1>
                    </div>

                    <div className="formGroup">
                        {/* htmlFor attribute must match id of the targeted input */}
                        <label htmlFor="registerEmail">Email Address</label>
                        <input 
                        type="text" 
                        id="registerEmail" 
                        name="registerEmail" 
                        ref={userRef} autoComplete="off" 
                        // onChange ties this input to "user" state
                        onChange={(e) => setUser(e.target.value)} 
                        required 
                        // if valid username, value set to false
                        aria-invalid={validName ? "false" : "true"} 
                        aria-describedby="uidnote" 
                        // if user input field has focus, value is true
                        onFocus={() => setUserFocus(true)} 
                        // if user leaves input field, set focus to false
                        onBlur={() => setUserFocus(false)} />
                    </div>
                    {/* <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                        4 to 24 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p> */}
                    <div className="formGroup">
                        <p>Required: <br />
                        8 to 24 characters. <br /> 
                        1 Uppercase letter <br />
                        1 Lowercase letter <br />
                        1 Digit <br />
                        1 Special character !@#$%*</p>
                        
                        
                        <label htmlFor="registerPassword">Password</label>
                        <input 
                        type="password" 
                        id="registerPassword" 
                        name="registerPassword" 
                        required
                        onChange={(e) => setPwd(e.target.value)}
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="registerConfirmPassword">Confirm Password</label>
                        <input 
                        type="password" 
                        id="registerConfirmPassword" 
                        name="registerConfirmPassword" 
                        required
                        onChange={(e) => setMatchPwd(e.target.value)}
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)} />
                    </div>
                    <button>Submit</button>
                    <div className="registerLoginLink">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </section>
        )}
    </>
            
)
}

export default Register;