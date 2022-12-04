import React from "react";
import Calendar from "./Calendar/calendar";
import AvailabilityComponent from "./Availability/AvailabilityComponent";

export interface ISidebarProps {

}

const Sidebar: React.FC<ISidebarProps> = () => {

    return (
        <>
            <div className="relative">
                <div className="left-0 w-80 h-full absolute">
                    <Calendar />
                    <AvailabilityComponent />
                </div>
            </div>
        </>
    )
}

export default Sidebar
