import React from "react";


export interface ICalendarH1Props {

}

const CalendarH1: React.FC<ICalendarH1Props> = () => {

    const month = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"]

    const getMonth = new Date();
    let showMonth = month[getMonth.getMonth()-4]

    const year = new Date();
    let getYear = year.getFullYear()+1

    return(
       <>
           <div className="h-16 flex items-center justify-center text-lg text-gray-500">
               <div className=" ">
                   {showMonth} {getYear}
               </div>
           </div>
       </>
    )
}

export default CalendarH1
