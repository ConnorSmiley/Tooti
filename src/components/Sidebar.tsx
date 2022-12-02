import React from "react";
import Calendar from "./Calendar/calendar";
import AvailabilityComponent from "./Availability/AvailabilityComponent";
import TestCalendar from "../__test__/TestCalendar";

export interface ISidebarProps {

}

const Sidebar: React.FC<ISidebarProps> = () => {

    return(
       <>
           <div className="left-0 w-80 bg-white h-full absolute">
               <Calendar />
               <AvailabilityComponent/>
           </div>
       </>
    )
}

export default Sidebar
