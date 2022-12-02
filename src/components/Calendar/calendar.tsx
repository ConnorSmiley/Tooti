import React from "react";
import CalendarGrid from "./CalendarGrid";
import CalendarH1 from "./CalendarH1";
import CalendarH2 from "./CalendarH2";

export interface ICalendarProps {

}

const Calendar: React.FC<ICalendarProps> = () => {

    return (
        <>
            <CalendarH1 />
            <CalendarH2 />
        </>
    )
}

export default Calendar
