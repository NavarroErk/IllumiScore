import "./Landing.css"
import bulbLit from "../../assets/bulblit.svg"

function Landing() { 


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