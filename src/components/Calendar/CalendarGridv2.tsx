import React from "react";

// const createDates:any = () => {
//     let dates: object[] = []
//     for (let i = 1; i < 31; i++) {
//         let date = {day : i}
//         dates.push(date)
//     }
//
//     return dates
// }





export interface ICalendarGridv2Props {

}

const CalendarGridv2: React.FC<ICalendarGridv2Props> = () => {
    function createDates() {
        let dates = []
        for (let i = 1; i < 31; i++){
            let date = {day : i}
            dates.push(date)
        }
        return dates
    }

    return (
        <>
        </>
    )
}

export default CalendarGridv2
