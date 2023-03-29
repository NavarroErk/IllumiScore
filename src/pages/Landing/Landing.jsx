import React, { useState, useEffect} from "react"
import { ReactDOM } from "react";
import "./Landing.css"
import bulbLit from "../../assets/bulblit.svg"

function Landing() {
    

    // const [isVisible, setIsVisible] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsVisible(false);
    //     }, 2000); // Change 3000 to the number of milliseconds you want the component to be visible
    //     return () => clearTimeout(timer); // useEffect returns a function that cleans up the timer and does not allow it to continue
    // }, []); // [] - indicates one time execution

    // const handleAnimationEnd = () => {
    //     if (!isVisible) {
    //         // if component is NOT visible, delete it from the DOM
    //         document.querySelector("#root")
    //     }
    // }

// style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-out', display: isVisible ? 'block' : 'none' }} onTransitionEnd={handleAnimationEnd} 
    return(
        <div className="landingContainer">


            <div className="landingHeadDiv">
                <h1>illumiscore</h1>
            </div>
            <div className="landingBulb">
                <img src={bulbLit} alt="" />
            </div>
            <div className="landingMessageDiv">
                <p className="landingMessage">let's get lit</p>
            </div>
        </div>
    )
}

export default Landing