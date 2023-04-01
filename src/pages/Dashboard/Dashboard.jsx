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

        // useEffect runs everytime userData.isLoggedIn, or navigate change values
        useEffect(() => {
            if (userData.isLoggedIn !== true) {
              navigate('../');
            }
          }, [userData.isLoggedIn, navigate]);


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
            <Footer />
        </>
    )
}

export default Dashboard;