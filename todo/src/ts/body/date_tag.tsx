import { getDateTotal } from "../utils";
import { CalendarIcon } from "./icons";

function DateTag({ dueDate }: { dueDate: Date }) {
    const today = new Date();

    const todayDay = getDateTotal(today)
    const dueDay = getDateTotal(dueDate)

    const timeSignature = dueDay < todayDay ? 'overdue' : dueDay > todayDay ? 'future' : 'today'

    return (
        <div className='date-tag'>
            <CalendarIcon className={`calendar-icon  ${timeSignature}`} />
            <p className={`${timeSignature}`}>
                {dueDate.toLocaleDateString('en-us', { month: 'short', day: 'numeric' })}
            </p>
        </div>
    )
}

export default DateTag


// <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">