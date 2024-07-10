import React, {useContext} from "react";
import { projectContext } from "./Projects";

function Project(){
    const project = useContext(projectContext);
    return(
        <div className="certificate">
            <h1>{project.name}</h1>
            {project.completed ? (
                <p>Completion Date: {project.completionDate.toString()}</p>
            ) : (
                <p>In Progress...</p>
            )}
        </div>
    )
}
export default Project;