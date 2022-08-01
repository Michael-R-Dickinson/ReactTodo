import { ProjectType } from "../sidebar/sidebar_types";
import { ProjectIcon } from "./icons";

function ProjectDisplay({ project }: { project: ProjectType | null }) {
    return (
        <div className="inbox-display">
            <p>{(project != null) ? project.name : "Inbox"}</p>
            <ProjectIcon project={project} />
        </div>
    )
}

function ProjectDisplayButton({ project }: { project: ProjectType | null }) {
    return (
        <div className="project-display-button">
            <ProjectIcon project={project} />
            <p className='title'>Hello</p>
        </div>
    )
}

export default ProjectDisplay
export { ProjectDisplayButton }