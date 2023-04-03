import React, { useState, useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Test.css"
import { UserContext } from "../..";

function Test() {



    const user = useContext(UserContext);

    function clickBtn() {
      console.log(user.name);
    }


    const [apiKey, setApiKey] = useState("");
    const [lightBrand, setLightBrand] = useState("");
    const [lightId, setLightId] = useState("");
    const [modelNumber, setModelNumber] = useState("");
    const [teamNames, setTeamNames] = useState("");
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: apiKey,
          lightId: "all",
          teamNames: teamNames,
        }),
      };
      fetch("https://73.237.65.141:8080/api/LightData/LightInformation", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
      
    return(
      <React.Fragment>
        {/* <Header></Header> */}
          <form onSubmit={handleSubmit}>
              <div className="testContainer">
                  <h1>Test Page</h1>
                  <label htmlFor="keyInput">Enter LIFX API Key</label>
                  <input id="keyInput" name="apiKey" type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />

                  {/* <label htmlFor="lightIdInput">Enter Team Name</label>
                  <input id="teamNameInput" name="teamNames" type="text" value={teamNames} onChange={(e) => setTeamNames(e.target.value)}/> */}

                  <label htmlFor="teamNameInput">Enter Team Name</label>
                  <input id="teamNameInput" name="teamNames" type="text" value={teamNames} onChange={(e) => setTeamNames(e.target.value)}/>
                  {/* <button type="submit">SUBMIT</button> */}
                  <button onClick={clickBtn}>console log</button>
              </div>
          </form>
        {/* <Footer></Footer> */}
      </React.Fragment>
    )
}

export default Test;