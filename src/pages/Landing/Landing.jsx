import React from "react";

function Landing() {
    return(
    <React.Fragment>
    <div class="text-center">
        <h1 class="display-4">Welcome</h1>

        <a href="./FlashLights">
            Flash!!!
        </a>
    </div>
    <main>
        <section class="">
            <h1>Smart lighting for the big game</h1>
            <p>Change the way you experience the big game with (our product)</p>
            <a href="./" class="">Get started</a>
        </section>
        <section class="features">
            <h2>Features</h2>
            <ul>
                <li>Straightforward setup</li>
                <li>Easy controls</li>
                <li>Customizable</li>
            </ul>
        </section>
        
        <section class="pricing">
            <h2>Pricing</h2>
            <ul>
                <li>Possible Pricing Option 1</li>
                <li>Possible Pricing Option 2</li>
                <li>Possible Pricing Option 3</li>
            </ul>
        </section>
        <section class="support">
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

export default Landing;