import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../..";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"
import { Link } from "react-router-dom";
import { Calendar } from "react-big-calendar";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment"
import Cookies from "js-cookie";
import Test from "../Test/Test";


function Dashboard() {
    const userData = useContext(UserContext);
    console.log("userData.isLoggedIn: " + userData.isLoggedIn);
    const navigate = useNavigate();

    const localizer = momentLocalizer(moment);
    const events = [
        {
            start: new Date(), 
            end: new Date(), 
            title: "My event"
        }
    ]   




    const illumiScoreJWToken = Cookies.get("illumiScoreJWToken");
        // useEffect runs everytime userData.isLoggedIn, navigate, or userData.email change values
        useEffect(() => {
            if (!illumiScoreJWToken) {
                userData.isLoggedIn = false;
                if (userData.isLoggedIn !== true) {
              navigate('../');
            }
            }
            
            // } else {
            //     fetch(`https://73.237.65.141:8080/api/UserData/Username?username=${userData.email}`)
            //     .then(response => response.json())
            //     .then((data) => {
            //         let userVerification = data.username;
            //         if (userVerification !== illumiScoreJWToken) {
            //             // navigate("../")
            //             console.log("USERVER IS NOT EQUAL TO JWTOKEN");
            //             console.log("userVerification: " + userVerification);
            //             console.log("TOKEN: " + illumiScoreJWToken);
            //         }
            //     })
            //     .catch(error => console.error(error));
            
          }, [userData.isLoggedIn, navigate, userData.email, illumiScoreJWToken, userData]);

          

          

          


    return(
        <>
            <Header />
            <main className="dashboardContainer">
                <div className="dashboardCalendarDiv">
                    <Calendar className="dashboardCalendar" localizer={localizer} events={events} />
                </div>
                <div className="dashboardIconDivs">
                    <div className="dashboardTeamDiv">
                        <div className="dashboardTeamIcon"><Link to="#">Team Icon</Link></div>
                        <div className="dashboardTeamIcon"><Link to="#">Team Icon</Link></div>
                        <div className="dashboardTeamIcon"><Link to="#">Team Icon</Link></div>
                        <div className="dashboardTeamIcon"><Link to="#">Team Icon</Link></div>
                        {/* <div className="dashboardTeamIcon">TeamIcon</div>
                        <div className="dashboardTeamIcon">TeamIcon</div>
                        <div className="dashboardTeamIcon">TeamIcon</div>
                        <div className="dashboardTeamIcon">TeamIcon</div> */}
                        {/* <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link>
                        <Link to="#"><img src="" alt="TeamIcon" className="dashboardTeamIcon" /></Link> */}
                    </div>
                    <div className="dashboardLightDiv">
                        {/* <Link to="#"><img src="" alt="LightIcon" className="dashboardLightIcon"/></Link>
                        <Link to="#"><img src="" alt="LightIcon" className="dashboardLightIcon"/></Link> */}
                        <div id="dashboardLightIcon1" className="dashboardLightIcon"><Link to="#">Light Icon</Link></div>
                        <div id="dashboardLightIcon2" className="dashboardLightIcon"><Link to="#">Light Icon</Link></div>
                    </div>
                </div>
            </main>
            <Test />
            <Footer />
        </>
    )
}

export default Dashboard;