import React from "react";
import WeeklyColumnBox from "./WeeklyColumnBox";
import WeeklyColumnBoxNoBorder from "./WeeklyColumnBoxNoBorder";
import WeeklyColorGrid from "./WeeklyColor/WeeklyColorGrid";
import WeeklyWeekStatic1 from "./WeeklyStaticComponents/WeeklyWeekStatic1";
import WeeklyWeekStatic2 from "./WeeklyStaticComponents/WeeklyWeekStatic2";

export interface IWeekColumnProps {
}

const WeeklyColumn: React.FC<IWeekColumnProps> = (props) => {

    return (
        <>
            <div className="w-full flex h-full">
                {/*<WeeklyColorGrid />*/}
                {/*<WeeklyColumnBox />*/}
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic1 name="a" />
            </div>
        </>
    )
}

export default WeeklyColumn
