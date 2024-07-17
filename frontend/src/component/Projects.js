import React, {createContext} from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';

const project = [
    {   
        name: "Flight Management Program",
        completed: true,
        completionDate: new Date(2023, 11, 20),
        tools: ["C++"],
        link: "https://github.com/sslaquerre07/ENSF_337_FinalProject",
        description: "A command-line based flight management program with a mulitude of features."
    },
    {
        name: "Falling Object Game",
        completed: true,
        completionDate: new Date(2023, 11, 28),
        tools: ["C++", "SFML"],
        link: "https://github.com/sslaquerre07/Falling_Object_Game",
        description: "A basic C++ game created with the guidance of a YouTube tutorial to learn the SFML game development library"
    },
    {
        name: "Pick Up Swag Balls Game",
        completed: true,
        completionDate: new Date(2023, 11, 29),
        tools: ["C++", "SFML"],
        link: "https://github.com/sslaquerre07/Pick_Up_Swag_Balls_Game",
        description: "A more advanced C++ game created alongside a YouTube tutorial to further master SFML"
    },
    {
        name: "PacMan Replica",
        completed: false,
        tools: ["C++", "SFML"],
        link: "https://github.com/sslaquerre07/Pac_Man",
        description: "A PacMan recreation in the SFML library (still in progress)"
    },
    {
        name: "Disaster Relief Program",
        completed: true,
        completionDate: new Date(2024, 3, 20),
        tools: ["Java", "SQL"],
        link: "https://github.com/sslaquerre07/Disaster_Relief_Program",
        description: "Disaster Relief Program created following Object Oriented Principles to learn and utilize Java"
    },
    {
        name: "Personal Portfolio Website",
        completed: true,
        completionDate: new Date(2024, 6, 16),
        tools: ["JavaScript", "HTML", "CSS", "React"],
        link: "https://github.com/sslaquerre07/Personal_Portfolio_Page",
        description: "This website has been a project in and of itself, implementing Responsive Web Design Principles"
    }    
];

export const projectContext = createContext(null);

function projects(){
    return(
        <div className='page'>
            <Header />
            <div className='body vertical'>
                <h1 className="medium-text underline">Project Wall</h1>
                <p className='small-text' style={{textAlign:'center'}}>Click anywhere on the project plaque to see a full description!</p>
                <div className='wall project-wall'>
                    {project.map((project) => {
                        return(
                            <projectContext.Provider key={project.name} value={project}>
                                <Project />
                            </projectContext.Provider>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default projects;