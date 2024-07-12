import React, {useContext} from "react";
import { projectContext } from "./Projects";

function createToolButton(tool, index){
    return(
        <button key={index} className='skill'>{tool}</button>
    );
}

function Project(){
    const project = useContext(projectContext);
    return(
        <div className="certificate">
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
        </div>
    )
}
export default Project;