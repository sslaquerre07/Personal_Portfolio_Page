import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function About(){
    return(
        <div className="page">
            <Header />
            <div className="body vertical">
                <b>Learn About Me!</b>
                <div id="radio-buttons">
                    <div id="life">
                        <input type="radio" id="life-story" name="option" value="life-option" checked></input>
                        <label htmlFor="life-story">My Life</label>                        
                    </div>
                    <div id="software">
                        <input type="radio" id="software-story" name="option" value="software-option"></input>
                        <label htmlFor="software-story">How I got into Software Development</label>                        
                    </div>
                    <div id="sports">
                        <input type="radio" id="sports-story" name="option" value="sport-option"></input>
                        <label htmlFor="sports-story">Sport</label>                        
                    </div>
                </div>
                <div id="text-box">

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;