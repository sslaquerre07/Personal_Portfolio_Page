import React, {useState} from "react";
import Avatar from 'C:/GitHub/Personal_Portfolio_Page/src/images/avataaars.png'

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <div className="header-footer">
            <div className="horizontal fit-y center-non-axis">
                <img src={Avatar} alt='avatar icon' className="fit-y"/>
                <p className="medium-text" id="name">Sam Laquerre</p>
            </div>
            <div className="dropdown">
                <button className="link" onClick={() => setOpen(!open)}>Menu</button>
                <div className={`dropdown-menu ${open ? 'visible' : 'hidden'}`}>
                    <p><a href="/Personal_Portfolio_Page" className="link small-text">Home</a></p>
                    <p><a href="/Personal_Portfolio_Page/about" className="link small-text">About</a></p>
                    <p><a href="/Personal_Portfolio_Page/projects" className="link small-text">Projects</a></p>
                    <p><a href="/Personal_Portfolio_Page/certifications" className="link small-text">Certifications & Skills</a></p>
                    <p><a href="/Personal_Portfolio_Page/contact" className="link small-text">Contact</a></p>
                </div>
            </div>
        </div>
    );
}
export default Header;