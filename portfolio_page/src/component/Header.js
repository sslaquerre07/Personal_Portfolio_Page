import React from "react";

function Header() {
    return(
        <div id="header-container">
            <div id="name">
                <p>Sam Laquerre</p>
            </div>
            <div id="nav-bar">
                <p><a href="/">Home</a></p>
                <p><a href="/about">About</a></p>
                <p><a href="/projects">Projects</a></p>
                <p><a href="/certifications">Certifications & Skills</a></p>
                <p><a href="/contact">Contact</a></p>
                
            </div>
        </div>
    );
}

export default Header;