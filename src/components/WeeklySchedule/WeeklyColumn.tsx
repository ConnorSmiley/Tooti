import React from "react";
import WeeklyColumnBox from "./WeeklyColumnBox";
import WeeklyColumnBoxNoBorder from "./WeeklyColumnBoxNoBorder";
import WeeklyColorGrid from "./WeeklyColor/WeeklyColorGrid";
import WeeklyWeekStatic1 from "./WeeklyStaticComponents/WeeklyWeekStatic1";
import WeeklyWeekStatic2 from "./WeeklyStaticComponents/WeeklyWeekStatic2";
import WeeklyWeekStatic3 from "./WeeklyStaticComponents/WeeklyWeekStatic3";
import WeeklyWeekStatic4 from "./WeeklyStaticComponents/WeeklyWeekStatic4";
import WeeklyWeekStatic5 from "./WeeklyStaticComponents/WeeklyWeekStatic5";
import WeeklyWeekStatic6 from "./WeeklyStaticComponents/WeeklyWeekStatic6";
import WeeklyWeekStatic7 from "./WeeklyStaticComponents/WeeklyWeekStatic7";


export interface IWeekColumnProps {
}

const WeeklyColumn: React.FC<IWeekColumnProps> = (props) => {

    return (
        <>
            <div className="w-full flex h-full">
                {/*<WeeklyColorGrid />*/}
                {/*<WeeklyColumnBox />*/}
                <WeeklyWeekStatic1 name="a" />
                <WeeklyWeekStatic2 name="a" />
                <WeeklyWeekStatic3 name="a" />
                <WeeklyWeekStatic4 name="a" />
                <WeeklyWeekStatic5 name="a" />
                <WeeklyWeekStatic6 name="a" />
                <WeeklyWeekStatic7 name="a" />
            </div>
        </>
    )
}

export default WeeklyColumn
