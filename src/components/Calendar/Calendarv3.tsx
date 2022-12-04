import React from "react";

export interface ICalendarv3Props {
}

export interface Date {
    day: number
}

export interface Weekday {
    letter: string
}

const Calendarv3: React.FC<ICalendarv3Props> = () => {
    const weekdays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

    const generateDates = (date: number) => {
        for (let x = 0; x < 7; x++) {
            return <button value={date}>{date}</button>
        }
    }

    function generateDays(): Date[] {
        let dates: Date[] = []
        for (let i = 1; i < 30; i++) {
            let date: Date = {day: i}
            dates.push(date)
        }
        return dates
    }

    const genMonths:any = generateDays()

    const generateWeeks = (dates: Array<number>) => {
        let daysInWeek = 7
        let tempArray = []

        for (let i = 0; i < dates.length; i += daysInWeek) {
            tempArray.push(dates.slice(i, i + daysInWeek))
        }
        return tempArray
    }

    return (
        <>
            <div className="grid grid-cols-7">
                <div>
                    {weekdays.map((days) => (
                        <div className="flex">{days}</div>
                    ))}
                </div>
                <div>
                    {generateWeeks(genMonths).map(week => (
                        <div>
                            {week.map((day) => (generateDates(day)))}

                        </div>


                    ))}


                </div>
            </div>
        </>
    )
}

export default Calendarv3
