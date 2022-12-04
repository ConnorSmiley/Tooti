import React from "react";

export interface IScheduleHeaderDatesProps {
    date: number | null
    day: string | null
}

const WeeklyHeaderComponent: React.FC<IScheduleHeaderDatesProps> = (props) => {

    return(
       <>
           <div className="flex flex-col text-gray-500 items-center justify-center w-full mb-20">
               <text className="text-lg ">{props.day}</text>
               <text className="font-thin text-sm bg-[#56C795] rounded-full h-8 w-8 flex items-center justify-center text-white">{props.date}</text>
           </div>
       </>
    )
}

export default WeeklyHeaderComponent
