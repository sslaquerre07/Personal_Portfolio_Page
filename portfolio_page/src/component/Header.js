import React, {useState} from "react";
import Avatar from 'C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/avataaars.png'

function Header() {
    const [open, setOpen] = useState(false);

    return(
        <div className="header-footer">
            <img src={Avatar} alt='avatar icon' className="fit-y"/>
            <div className="horizontal">
                <p className="medium-text" id="name">Sam Laquerre</p>
            </div>
            <div className="dropdown">
                <button className="link" onClick={() => setOpen(!open)}>Menu</button>
                <div className={`dropdown-menu ${open ? 'visible' : 'hidden'}`}>
                    <p><a href="/" className="link small-text">Home</a></p>
                    <p><a href="/about" className="link small-text">About</a></p>
                    <p><a href="/projects" className="link small-text">Projects</a></p>
                    <p><a href="/certifications" className="link small-text">Certifications & Skills</a></p>
                    <p><a href="/contact" className="link small-text">Contact</a></p>
                </div>
            </div>
        </div>
    );
}
export default Header;