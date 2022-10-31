import React from "react";

function Navigation(props){
    function handleClick(event) {
       event.preventDefault()
        props.currentpage(event.target.id)
    }

    
    return(
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand text-white" id="logo" href="src/components/Navigation#">
                    <i className="fa-solid fa-screwdriver-wrench me-2 text-white"></i>
                     ToolHunt
                </a>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto q">
                        <li className="nav-item">
                            <a id="landing" className="nav-link primary text-white" href="#" onClick={handleClick} >Tasks</a>
                        </li>
                        <li className="nav-item">
                            <a id="dashBoard" className="nav-link primary text-white" href="#" onClick={handleClick}>Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a id="leaderBoard" className="nav-link text-white" href="#" onClick={handleClick}>Leaderboard</a>
                        </li>
                        {/*<li className="nav-item">*/}
                        {/*    <a id="about" className="nav-link text-white" href="#" onClick={handleClick}>About</a>*/}
                        {/*</li>*/}
                        <li className="nav-item ms-2">
                            <input className="form-control me-2" type="search" placeholder="search tools"/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navigation