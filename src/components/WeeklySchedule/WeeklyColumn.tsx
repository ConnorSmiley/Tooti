import React from "react";
import WeeklyColumnBox from "./WeeklyColumnBox";
import WeeklyColumnBoxNoBorder from "./WeeklyColumnBoxNoBorder";
import WeeklyColorGrid from "./WeeklyColor/WeeklyColorGrid";

export interface IWeekColumnProps {
}

const WeeklyColumn: React.FC<IWeekColumnProps> = (props) => {

    return (
        <>
            <div className="w-full grid grid-flow-col">
                <WeeklyColorGrid />
                <WeeklyColumnBox />
            </div>
        </>
    )
}

export default WeeklyColumn
