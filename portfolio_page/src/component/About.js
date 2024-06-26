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
        text: [
            "hello",
            ""
        ]
    },
    coding: {
        title: "My journey into Software Engineering",
        images: [Code1, Code2],
        text: [
            "",
            ""
        ]
    },
    golf: {
        title: "Another one of my many passions: Golf!",
        images: [Golf1, Golf2],
        text: [
            "",
            ""
        ]
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
                    <div id="life">
                        <input type="radio" id="life-story" name="option" value="life-option" onClick={() => setButton("life")}></input>
                        <label htmlFor="life-story">My Life</label>                        
                    </div>
                    <div id="software">
                        <input type="radio" id="software-story" name="option" value="software-option" onClick={() => setButton("coding")}></input>
                        <label htmlFor="software-story">How I got into Software Development</label>                        
                    </div>
                    <div id="sports">
                        <input type="radio" id="sports-story" name="option" value="sport-option" onClick={() => setButton("golf")}></input>
                        <label htmlFor="sports-story">Sport</label>                        
                    </div>
                </div>
                <div id="text-box">
                    <table>
                        <tr>
                            <th id="title" colSpan={2}>{pageInfo[button]["title"]}</th>
                        </tr>
                        <tr>
                            <td className="image-container"><img src={pageInfo[button].images[0]} alt="" className="image"/></td>
                            <td className="text"><p>{pageInfo[button].text[0]}</p></td>
                        </tr>
                        <tr>
                            <td className="text"><p>{pageInfo[button].text[1]}</p></td>
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