import React, {createContext} from 'react';
import Header from './Header';
import Footer from './Footer';
import Certificate from './Certificate';

const certificates = [
    {
        title: "Supervised Machine Learning: Regression",
        source: "IBM",
        link: "https://www.coursera.org/account/accomplishments/verify/DBNPWAZ62LZN"
    },
    {
        title: "Supervised Machine Learning: Classification",
        source: "IBM",
        link: "https://www.coursera.org/account/accomplishments/verify/D2KBK6SC1EM9"
    },
    {
        title: "Unsupervised Machine Learning",
        source: "IBM",
        link: "https://www.coursera.org/account/accomplishments/verify/WQYNG82A0FMP"
    },
    {
        title: "Responsive Web Design",
        source: "freeCodeCamp.org",
        link: "https://www.freecodecamp.org/certification/sslaquerre07/responsive-web-design"
    },
    {
        title: "JavaScript Algorithms and Data Structures",
        source: "freeCodeCamp.org",
        link: "https://www.freecodecamp.org/certification/sslaquerre07/javascript-algorithms-and-data-structures-v8"
    },
    {
        title: "Exploratory Data Analysis",
        source: "IBM",
        link: "https://www.coursera.org/account/accomplishments/verify/DAMW48CPBQTF"
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