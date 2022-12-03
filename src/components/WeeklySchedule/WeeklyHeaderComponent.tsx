import React from "react";

export interface IScheduleHeaderDatesProps {
    date: number | null
    day: string | null
}

const WeeklyHeaderComponent: React.FC<IScheduleHeaderDatesProps> = (props) => {

    return(
       <>
           <div className="flex flex-col items-center justify-center w-full mb-4">
               <text className="text-xl pb-1">{props.day}</text>
               <text className="text-md ">{props.date}</text>
           </div>
       </>
    )
}

export default WeeklyHeaderComponent
