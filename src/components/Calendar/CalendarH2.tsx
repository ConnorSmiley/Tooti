import React from "react";
import Button from "../Button";

export interface ICalendarH2Props {

}

const CalendarH2: React.FC<ICalendarH2Props> = () => {

    return(
       <>
           <div>
               <div className="text-sm text-gray-500 flex items-center justify-between pl-6 pb-2">
                    Aug 24, 2023
                   {/*<Button text="Today" />*/}
                   <div className="border border-[#56C795] text-md text-[#56C795] rounded-xl px-4 py-3">
                       Today
                   </div>

               </div>
           </div>
       </>
    )
}

export default CalendarH2
