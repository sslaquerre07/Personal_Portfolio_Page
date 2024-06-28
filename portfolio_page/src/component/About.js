import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Life1 from "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/life_1.jpeg";
import Life2 from "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/life_2.jpeg";
import Code1 from "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/coding_1.jpg";
import Code2 from "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/coding_2.jpg";
import Golf1 from "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/golf_1.jpeg";
import Golf2 from "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/golf_2.jpeg"

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Bibendum arcu vitae elementum curabitur vitae. Enim praesent elementum facilisis 
                leo vel. Dictumst quisque sagittis purus sit. At tellus at urna condimentum. Adipiscing commodo elit 
                at imperdiet. Posuere morbi leo urna molestie at. Laoreet sit amet cursus sit amet. Accumsan sit amet 
                nulla facilisi morbi tempus iaculis urna. Amet nulla facilisi morbi tempus iaculis urna id volutpat. 
                <br /><br />Blandit turpis cursus in hac habitasse. Interdum varius sit amet mattis vulputate enim nulla. Sed 
                ullamcorper morbi tincidunt ornare massa eget egestas purus. Sagittis purus sit amet volutpat consequat 
                mauris. Volutpat lacus laoreet non curabitur gravida. Mi ipsum faucibus vitae aliquet nec ullamcorper sit.</p>
    }
}

function About(){
    const [button, setButton] = useState("life");

    return(
        <div className="page">
            <Header />
            <div className="body vertical">
                <b>Learn About Me!</b>
                <div id="radio-buttons">
                    <div id="life" className="about-section">
                        <button id="life-story" onClick={() => setButton("life")}>My Life</button>                      
                    </div>
                    <div id="software" className="about-section">
                        <button id="software-story" onClick={() => setButton("coding")}>How I got into Software Development</button>                       
                    </div>
                    <div id="golf" className="about-section">
                        <button id="golf-story" onClick={() => setButton("golf")}>Golf</button>                   
                    </div>
                </div>
                <div id="text-box">
                    <table>
                        <tr>
                            <th id="title" colSpan={3}>{pageInfo[button]["title"]}</th>
                        </tr>
                        <tr>
                            <td className="image-container"><img src={pageInfo[button].images[0]} alt="" className="image"/></td>
                            <td className="text" colSpan={2} rowSpan={2}>{pageInfo[button].text}</td>
                        </tr>
                        <tr>
                            <td className="image-container"><img src={pageInfo[button].images[1]} alt="" className="image"/></td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;