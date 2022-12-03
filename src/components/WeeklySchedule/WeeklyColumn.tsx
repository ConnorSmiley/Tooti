import React from "react";
import WeeklyColumnBox from "./WeeklyColumnBox";
import WeeklyColumnBoxNoBorder from "./WeeklyColumnBoxNoBorder";

export interface IWeekColumnProps {
}

const WeeklyColumn: React.FC<IWeekColumnProps> = (props)  => {

    return(
       <>
           <div className="w-full">
                   <WeeklyColumnBox />
           </div>
       </>
    )
}

export default WeeklyColumn
