import React, { useRef } from "react";
import "./Landing.css"

function Landing() {

    const videoRef = useRef()

    function playVideo() {
        videoRef.current.play()
    }

    return(

    <React.Fragment>
    {/* <div className="text-center">
        <h1 className="display-4">Welcome</h1>

        <a href="./FlashLights">
            Flash!!!
        </a>
    </div> */}
    <main>
        <div className="landingContainer">
            <iframe className="landingItem landingItem1" width="51.5%" height="500px" src="https://www.youtube.com/embed/8WaTd3z8sHE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        
            <section className="landingItem landingItem2">
                <h1>Revolutionize Your Game-Day Experience With Our Dynamic Smart Lighting Solution</h1>
                <p>Our cutting-edge technology reacts to your favorite team's scores, creating an immersive and unparalleled viewing experience.</p>
                <a href="./" className="">Get started</a>
            </section>
            <section className="features item item3">
                <h2>Features</h2>
                <ul>
                    <li>Straightforward setup process for hassle-free installation</li>
                    <li>Intuitive controls for easy adjustment of settings</li>
                    <li>Customizable options for a personalized and unique experience</li>
                </ul>
            </section>
            
            <section className="pricing landingItem landingItem3">
                <h2>Pricing</h2>
                <ul>
                    <li>Possible Pricing Option 1</li>
                    <li>Possible Pricing Option 2</li>
                    <li>Possible Pricing Option 3</li>
                </ul>
            </section>
            <section className="support landingItem landingItem4">
                <h2>Support</h2>
                <ul>
                    <li><a href="./">Contact Us</a></li>
                    <li><a href="./">FAQs</a></li>
                </ul>
            </section>
        </div>
    </main>
</React.Fragment>
    )
}

export default Landing;