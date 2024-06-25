import React from "react";

function Footer() {
    return(
        <div id="footer-container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div id="name">
                <b>Sam Laquerre</b>
                <p>Personal Portfolio</p>
            </div>
            <div id="social-section">
                <b>Follow</b>
                <div id="socials">
                    <a href="https://github.com/sslaquerre07" class="fa fa-github" />
                    <a href="https://www.linkedin.com/in/samuel-laquerre-304635202/" class="fa fa-linkedin" />
                </div>
            </div>
            
        </div>
    );
}

export default Footer;