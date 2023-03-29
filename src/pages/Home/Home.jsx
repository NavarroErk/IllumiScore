import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {

    const handleClick = () => {
        fetch('http://73.237.65.141:5001/api/LightData')
          .then(response => response.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.error(error);
          });
      };

    return(

    <React.Fragment>


    <main className="homeContainer">
            <iframe className="homeItem homeItem1" width="51.5%" height="500px" src="https://www.youtube.com/embed/8WaTd3z8sHE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        
            <section className="homeItem homeItem2">
                <h1>Revolutionize Your Game-Day Experience With Our Dynamic Smart Lighting Solution</h1>
                <p>Our cutting-edge technology reacts to your favorite team's scores, creating an immersive and unparalleled viewing experience.</p>
                <Link to="/test" className="">Get started</Link>
                <button onClick={handleClick} >Fetch Data</button>
            </section>
            <section className="features homeItem homeItem3">
                <h2>Features</h2>
                <ul>
                    <li>Straightforward setup process for hassle-free installation</li>
                    <li>Intuitive controls for easy adjustment of settings</li>
                    <li>Customizable options for a personalized and unique experience</li>
                </ul>
            </section>
            
            <section className="pricing homeItem homeItem4">
                <h2>Pricing</h2>
                <div className="pricingDiv">
                    <div className="homeCard">
                        <a href="./" className="homeCardLink">
                            <div className="homeCardBg"></div>

                            <div className="homeCardTitle">
                                Basic
                            </div>

                            <div className="homeCardContent">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, quisquam.
                            </div>
                        </a>
                    </div>

                    <div className="homeCard">
                        <a href="./" className="homeCardLink">
                            <div className="homeCardBg"></div>

                            <div className="homeCardTitle">
                            Premium
                            </div>

                            <div className="homeCardContent">
                           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, eius.
                            </div>
                        </a>
                    </div>
                </div>
                    
                {/* <ul>
                    <li>Possible Pricing Option 1</li>
                    <li>Possible Pricing Option 2</li>
                    <li>Possible Pricing Option 3</li>
                </ul> */}
            </section>
            <section className="support homeItem homeItem5">
                <h2>Support</h2>
                <ul>
                    <li><a href="./">Contact Us</a></li>
                    <li><a href="./">FAQs</a></li>
                </ul>
            </section>
    </main>
</React.Fragment>
    )
}

export default Home;