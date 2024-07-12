import React, {useContext, useState} from "react";
import { projectContext } from "./Projects";

function createToolButton(tool, index){
    return(
        <button key={index} className='skill'>{tool}</button>
    );
}

function Project(){
    const project = useContext(projectContext);
    const [hovering, updateHovering] = useState(false);
    return(
        <div className="certificate" onMouseEnter={() => updateHovering(true)} onMouseLeave={() => updateHovering(false)}>
            {hovering ? (
                <>
                    <p>{project.description}</p>
                    <a href={project.link}><button className="certificate-button">View GitHub</button></a>
                </>
            ) : (
                <>
                    <h1>{project.name}</h1>
                    {project.completed ? (
                        <p>Completion Date: {project.completionDate.getFullYear()}-{project.completionDate.getMonth()+1}-{project.completionDate.getDate()}</p>
                    ) : (
                        <p>In Progress...</p>
                    )}
                    <p>Tools Used:</p>
                    <div>
                        {project.tools.map(createToolButton)}
                    </div>
                </>  
            )}
        </div>
    )
}
export default Project;