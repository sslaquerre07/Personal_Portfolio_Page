import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Life1 from "./images/life_1.jpeg";
import Life2 from "./images/life_2.jpeg";
import Code1 from "./images/coding_1.jpg";
import Code2 from "./images/coding_2.jpg";
import Golf1 from "./images/golf_1.jpeg";
import Golf2 from "./images/golf_2.jpeg"

const pageInfo = {
    life: {
        title: "My Life",
        images: [Life1, Life2],
        text: 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae. Enim praesent elementum facilisis 
        leo vel. Dictumst quisque sagittis purus sit. At tellus at urna condimentum. Adipiscing commodo elit 
        at imperdiet. Posuere morbi leo urna molestie at. Laoreet sit amet cursus sit amet. Accumsan sit amet 
        nulla facilisi morbi tempus iaculis urna. Amet nulla facilisi morbi tempus iaculis urna id volutpat. 
        <br /><br />Blandit turpis cursus in hac habitasse. Interdum varius sit amet mattis vulputate enim nulla. Sed 
        ullamcorper morbi tincidunt ornare massa eget egestas purus. Sagittis purus sit amet volutpat consequat 
        mauris. Volutpat lacus laoreet non curabitur gravida. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.</p>
    },
    coding: {
        title: "My journey into Software Engineering",
        images: [Code1, Code2],
        text: 
            <p>Believe it or not, I had no prior coding experience coming into university. My first exposure 
            came in our introductory programming class in my first semester. Immediately, I fell in love with the
            world of software development. What fascinated me the most was the endless world of
            constantly changing information to learn. One of the main things I was looking for in a career was the
            potential for continuous learning. In that regard, software engineering is one of the best careers out there.
            <br /><br />Following the discovery of my passion, there was no doubt what my major
            declaration would be at the end of the year. I have been thrilled with my decision, and look forward
            to a career in one of the most innovative industries in the world.</p>
        
    },
    golf: {
        title: "Another one of my many passions: Golf!",
        images: [Golf1, Golf2],
        text: 
            <p>I have always been a person involved in as many sports as possible throughout 
                my life. However, something about the game of golf captivated me, making it one of my greatest passions. 
                The ability to escape from all problems in your personal life and spend four hours in nature 
                is unlike any other sport. <br /><br />It is also a game of lifelong improvement, there will never be 
                a time in which you are completely content with your skills. Similarly to being 
                a software engineer, there will always be something to learn.</p>
    }
}

function About(){
    const [button, setButton] = useState("life");

    return(
        <div className="page">
            <Header />
            <div className="body vertical center-axis">
                <h1 className="medium-text">Learn About Me!</h1>
                <div id="buttons">
                    <div id="life" className="about-section">
                        <button id="life-story" onClick={() => setButton("life")}><h1 className="small-text">My Life</h1></button>                      
                    </div>
                    <div id="software" className="about-section">
                        <button id="software-story" onClick={() => setButton("coding")}><h1 className="small-text">Software Development</h1></button>                       
                    </div>
                    <div id="golf" className="about-section">
                        <button id="golf-story" onClick={() => setButton("golf")}><h1 className="small-text">Golf</h1></button>                   
                    </div>
                </div>
                <div id="text-box">
                    <div className="about-box fit-y">
                        <div className="image-container">
                            <img src={pageInfo[button].images[0]} className="image"/>
                            <img src={pageInfo[button].images[1]} className="image"/>
                        </div>
                        <div className="text">{pageInfo[button].text}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;