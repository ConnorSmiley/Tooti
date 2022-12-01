import React from "react";
import Calendar from "./Calendar/calendar";
import Availability2 from "./Availability/availability2";
import TestCalendar from "../__test__/TestCalendar";

export interface ISidebarProps {

}

const Sidebar: React.FC<ISidebarProps> = () => {

    return(
       <>
           <div className="w-80 bg-white h-screen overflow-hidden">
               <Calendar />
               <Availability2/>
           </div>
       </>
    )
}

export default Sidebar
