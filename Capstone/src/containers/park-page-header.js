import React from "react";


const ParkHeader = () => {

        return(
            <div>
                <div className="home-header">
                    <h2>Park Planner</h2>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link" to="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Calendar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/discover">Live Feeds</a>
                        </li>
                    </ul>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Acadia National Park</h1>
                    <p className="lead">Acadia National Park Description</p>
                    <p className="lead">Find information about activities, campsites, and more below.</p>
                </div>
                
            </div>
        )
        
    }

export default ParkHeader;