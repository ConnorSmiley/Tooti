import React from "react";
import CalendarH1 from "./CalendarH1";
import CalendarH2 from "./CalendarH2";
import CalendarGridv2 from "./CalendarGridv2";
import CalendarGrid from "./CalendarGrid";

export interface ICalendarProps {

}

const Calendar: React.FC<ICalendarProps> = () => {

    return (
        <>
            <CalendarH1 />
            <CalendarH2 />
            {/*First version, only static mockup. Uncomment below*/}
            {/*<CalendarGrid />*/}
            <CalendarGridv2 />

        </>
    )
}

export default Calendar
