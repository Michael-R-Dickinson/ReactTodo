import { ProjectType } from "../sidebar/sidebar_types"
import { projectPriorityColors } from "../staticData"

function TagIcon({ className, color }: { className: string, color: string }) {
    return (
        <svg className={className} viewBox="0 0 11.7 11.7" fill={color}>
            <path d="M9.357 1C10.264 1 11 1.736 11 2.643V6.07c0 .436-.173.854-.481 1.162L7.232 10.52a1.643 1.643 0 01-2.323 0L1.48 7.09c-.64-.64-.64-1.68.001-2.322L4.768 1.48C5.076 1.173 5.494 1 5.93 1h3.427zm-.07.91H5.93a.805.805 0 00-.569.235L2.145 5.362a.805.805 0 000 1.138L5.5 9.855a.805.805 0 001.138 0l3.217-3.217a.805.805 0 00.236-.569V2.713a.804.804 0 00-.804-.804zM7.364 3.726a.91.91 0 110 1.818.91.91 0 010-1.818z"></path>
        </svg>
    )
}


function CalendarIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 12 12">
            <path d="M9.5 1h-7A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5v-7A1.5 1.5 0 009.5 1zM2 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zM8.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z"></path>
        </svg>
    )
}

function ProjectIcon({ project }: { project: ProjectType | null }) {
    const projectIcon = (project == null) ?
        <svg className="project-inbox-icon" viewBox="0 0 14 14">
            <path d="M13.5 9.5V12a1.5 1.5 0 01-1.5 1.5H4A1.5 1.5 0 012.5 12V9.5h3.75a1.75 1.75 0 003.5 0h3.75z" opacity="0.1" fill="#246FE0"></path><path d="M10.491 2a2 2 0 011.923 1.45l1.509 5.28a2 2 0 01.077.55V12a2 2 0 01-2 2H4a2 2 0 01-2-2V9.28a2 2 0 01.077-.55l1.509-5.28A2 2 0 015.509 2h4.982zm0 1H5.51a1 1 0 00-.962.725l-1.509 5.28A1 1 0 003 9.28V12a1 1 0 001 1h8a1 1 0 001-1V9.28a1 1 0 00-.038-.275l-1.51-5.28a1 1 0 00-.96-.725zM6.25 9a.5.5 0 01.5.5 1.25 1.25 0 002.5 0 .5.5 0 01.5-.5h1.75a.5.5 0 110 1h-1.306a2.25 2.25 0 01-4.388 0H4.5a.5.5 0 010-1z"></path>
        </svg> :

        <div className={`project-dot`} style={{ backgroundColor: projectPriorityColors[project.priority] }}></div>
    // priority-${project.priority}
    return (
        <div className="project-icon">
            {projectIcon}
        </div>
    )

}

function PriorityIcon({ className, onClick }: { className: string, onClick: () => void }) {
    return (
        <>
            <div className={`checkmark-container`} onClick={onClick}>
                {/* Wrap checkmark in an absolute positioned div with set height and width */}
                <svg className={`${className}`} viewBox="2.5 1 18 18">
                    <path d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"></path>
                </svg>
            </div>

            <svg className={`priority-icon ${className}`} viewBox="3 1 18 18">
                <path d="M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
            </svg>

        </>



    )
}

function PlusIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="-2 0 18 16">
            <path fill='#DD4B39' stroke='#DD4B39' d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path>
        </svg>
    )
}

export { TagIcon, CalendarIcon, ProjectIcon, PriorityIcon, PlusIcon }

