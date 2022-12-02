import React from "react";
import Button from "../Button";

export interface ICalendarH2Props {

}

const CalendarH2: React.FC<ICalendarH2Props> = () => {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug", "Sept", "Oct", "Nov", "Dec"]

    const getMonth = new Date();
    let showMonth = month[getMonth.getMonth()-4]

    const getDay = new Date();
    let showDay = getDay.getDay()

    const year = new Date();
    let getYear = year.getFullYear()+1


    return(
       <>
           <div>
               <div className="text-sm text-gray-500 flex items-center justify-between pl-6 pb-2">
                   {showMonth} {showDay}, {getYear}
                   <div className="border border-[#56C795] text-md text-[#56C795] rounded-xl px-4 py-3">
                       Today
                   </div>

               </div>
           </div>
       </>
    )
}

export default CalendarH2
