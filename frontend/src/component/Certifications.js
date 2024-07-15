import React, {createContext} from 'react';
import Header from './Header';
import Footer from './Footer';
import Certificate from './Certificate';

const certificates = [
    {
        title: "Responsive Web Design",
        image: "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/responsive-web-desgin.jpg",
        source: "freeCodeCamp.org",
        link: "https://www.freecodecamp.org/certification/sslaquerre07/responsive-web-design"
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        image: "C:/GitHub/Personal_Portfolio_Page/portfolio_page/src/images/js.png",
        source: "freeCodeCamp.org",
        link: "https://www.freecodecamp.org/certification/sslaquerre07/javascript-algorithms-and-data-structures-v8"
    },
    {
        title: "More In Progress!",
        image: "",
        source: "",
        link: ""
    }
]

const skills = [
    "Python",
    "HTML",
    "CSS",
    "Java",
    "JavaScript",
    "React",
    "C/C++",
    "SQL",
    "RISC-V Assembly"
]

export const CertificateContext = createContext(null);


function certifications() {
    return(
        <div className='page'>
            <Header />
            <div className="body vertical">
                <h1 className="medium-text underline">Certification Wall</h1>
                <div className='wall'>
                    {certificates.map((certificate) => {
                        return(
                            <CertificateContext.Provider key={certificate.title} value={certificate}>
                                <Certificate />
                            </CertificateContext.Provider>
                        )
                    })}
                </div>
                <div id='skill-list'>
                    <h1 className="medium-text underline">Skills</h1>
                    <div id='skill-container'>
                        {skills.map((skill) => {
                            return(<button className='skill'>{skill}</button>);
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default certifications;