import React from "react";
import WeekColumnBox from "./WeekColumnBox";
import WeekColumnBoxNoBorder from "./WeekColumnBoxNoBorder";

export interface IWeekColumnProps {
}

const WeekColumn: React.FC<IWeekColumnProps> = (props)  => {

    return(
       <>
           <div className="w-full">
                   <WeekColumnBox />
           </div>
       </>
    )
}

export default WeekColumn
