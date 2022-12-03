import React from "react";
import WeekColumnBox from "./WeekColumnBox";

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
