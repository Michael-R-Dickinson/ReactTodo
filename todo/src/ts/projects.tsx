import { ProjectType } from './sidebar_types';

export default function Projects({ }) {
    const projects: ProjectType[] = [
        { name: 'project1', priority: 1, count: 2, id: 1 },
        { name: 'project2', priority: 2, count: 3, id: 2 },
        { name: 'project2', priority: 3, count: 4, id: 3 }
    ]

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