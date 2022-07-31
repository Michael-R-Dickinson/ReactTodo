import { useState } from 'react';


import type { ProjectType } from './sidebar_types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { ReactComponent as ProjectArrow } from '../icons/arrow.svg'


export default function Projects({ projects, activeCell, setActiveCell }: {
    projects: ProjectType[],
    activeCell: number,
    setActiveCell: (id: number) => void
}) {
    const [showProjects, setShowProjects] = useState(true);

    const projectCells = projects.map(project =>
        <Project
            {...project}
            selected={project.id === activeCell}
            setActiveCell={setActiveCell}
            visible={showProjects}
            key={project.id}
        />
    )

    return (
        <div className='projects'>
            <div className='header' onClick={() => setShowProjects(!showProjects)}>
                <ProjectArrow className={`arrow ${showProjects && 'rotate'}`} />
                <strong>Projects</strong>
            </div>
            {projectCells}
        </div>
    )
}


function Project({ name, priority, count, id, selected, setActiveCell, visible }:
    ProjectType & {
        selected: boolean,
        setActiveCell: (id: number) => void,
        visible: boolean,
        key: number
    }) {

    enum projectPriorityColors {
        '#db503f' = 1,
        '#66b0d3',
        '#cbcecf'
    }

    return (
        <div className={`project ${visible ? (selected && 'selected') : 'hidden'}`} onClick={() => setActiveCell(id)}>
            <div className='title-container'>
                <span className="dot" style={{ backgroundColor: projectPriorityColors[priority] }}></span>
                <p className="aligned-text">{name}</p>
            </div>
            <p>{count}</p>
        </div>
    )
}