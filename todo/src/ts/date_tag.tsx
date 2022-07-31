// import { ReactComponent as CalendarIcon } from '../icons/little_calendar.svg'

function DateTag({ dueDate }: { dueDate: Date }) {
    const today = new Date();
    // classifies whether a date is overdue and marks it as today or overdue
    const timeSignature = dueDate.getDate() < today.getDate() ? 'overdue' : 'today'
    return (
        <div className={`date-tag ${timeSignature}`}>
            <CalendarIcon className={`calendar-icon  ${timeSignature}`} />
            <p className="">
                {dueDate.toLocaleDateString('en-us', { month: 'short', day: 'numeric' })}
            </p>
        </div>
    )
}

export default DateTag

function CalendarIcon({ className }: { className: string }) {
    return (
        <svg className={className} viewBox="0 0 12 12">
            <path d="M9.5 1h-7A1.5 1.5 0 001 2.5v7A1.5 1.5 0 002.5 11h7A1.5 1.5 0 0011 9.5v-7A1.5 1.5 0 009.5 1zM2 2.5a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7zM8.75 8a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 4a.5.5 0 000 1h5a.5.5 0 000-1h-5z"></path>
        </svg>
    )
}

// <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">