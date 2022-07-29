import { ProjectType } from './sidebar_types';

export default function Projects({ projects }: { projects: ProjectType[] }) {
    const projectCells = projects.map(project =>
        <Project {...project} />
    )

    return (
        <div className='projects'>
            {projectCells}
        </div>
    )
}


function Project({ name, priority, count, id }: { name: string, count: number, priority: number, id: number }) {
    enum projectPriorityColors {
        '#db503f' = 1,
        '#66b0d3',
        '#cbcecf'
    }

    return (
        <div className='project'>
            <div className='title-container'>
                <span className="dot" style={{ backgroundColor: projectPriorityColors[priority] }}></span>
                <p>{name}</p>
            </div>
            <p>{count}</p>
        </div>
    )
}