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

export { TagIcon, CalendarIcon }

