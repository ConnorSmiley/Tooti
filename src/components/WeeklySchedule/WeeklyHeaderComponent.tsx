import React from "react";

export interface IScheduleHeaderDatesProps {
    date: number | null
    day: string | null
}

const WeeklyHeaderComponent: React.FC<IScheduleHeaderDatesProps> = (props) => {

    return(
       <>
           <div className="flex flex-col items-center justify-center w-full mb-4">
               <text className="text-xl pb-2">{props.day}</text>
               <text className="font-thin text-md ">{props.date}</text>
           </div>
       </>
    )
}

export default WeeklyHeaderComponent
