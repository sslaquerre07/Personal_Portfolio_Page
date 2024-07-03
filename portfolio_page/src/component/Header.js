import React from "react";
import Avatar from 'C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/avataaars.png'

function Header() {
    return(
        <div className="header-footer">
            <img src={Avatar} alt='avatar icon' className="fit-y"/>
            <div className="horizontal">
                <p className="medium-text" id="name">Sam Laquerre</p>
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