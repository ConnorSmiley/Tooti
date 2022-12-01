import React from "react";

export interface ICalendarH1Props {

}

const CalendarH1: React.FC<ICalendarH1Props> = () => {

    return(
       <>
           <div className="h-16 flex items-center justify-center text-lg text-gray-500">
               <div className=" ">
                 August 2023
               </div>
           </div>
       </>
    )
}

export default CalendarH1
