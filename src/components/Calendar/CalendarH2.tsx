import React from "react";

export interface ICalendarH2Props {

}

const CalendarH2: React.FC<ICalendarH2Props> = () => {
    const month:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July","Aug", "Sept", "Oct", "Nov", "Dec"]

    const getMonth = new Date();
    let showMonth = month[getMonth.getMonth()-4]

    const getDay = new Date();
    let showDay = getDay.getDay()+23

    const year = new Date();
    let getYear = year.getFullYear()+1

    return(
       <>
           <div>
               <div className="font-thin text-md text-gray-500 flex items-center justify-between pl-8 pb-2">
                   {showMonth} {showDay}, {getYear}
                   <div className="font-thin border border-[#56C795] text-lg text-[#56C795] rounded-xl px-6 py-2">
                       Today
                   </div>

               </div>
           </div>
       </>
    )
}

export default CalendarH2
