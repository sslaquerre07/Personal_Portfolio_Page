import React, {useState} from "react";
import { Link } from "react-router-dom";
import Avatar from './images/avataaars.png'

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
                    <p><Link to="/" className="link small-text">Home</Link></p>
                    <p><Link to="/about" className="link small-text">About</Link></p>
                    <p><Link to="/projects" className="link small-text">Projects</Link></p>
                    <p><Link to="/certifications" className="link small-text">Certifications & Skills</Link></p>
                    <p><Link to="/contact" className="link small-text">Contact</Link></p>
                </div>
            </div>
        </div>
    );
}
export default Header;