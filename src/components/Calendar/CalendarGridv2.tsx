import React from "react";

export interface ICalendarGridv2Props {

}

const CalendarGridv2: React.FC<ICalendarGridv2Props> = () => {
    const dates = []
    for (let i = 1; i < 31; i++) {
        let date = i
        dates.push(date)
    }
    console.log(dates)

    return(
       <>
       </>
    )
}

export default CalendarGridv2
