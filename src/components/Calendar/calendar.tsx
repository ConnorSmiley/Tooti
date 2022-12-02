import React from "react";
import CalendarGrid from "./CalendarGrid";
import CalendarH1 from "./CalendarH1";
import CalendarH2 from "./CalendarH2";
import CalendarGridv2 from "./CalendarGridv2";

export interface ICalendarProps {

}

const Calendar: React.FC<ICalendarProps> = () => {

    return (
        <>
            <CalendarH1 />
            <CalendarH2 />
            <CalendarGridv2 />
        </>
    )
}

export default Calendar
