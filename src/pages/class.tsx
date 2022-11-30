import React from "react";
import Calendar from "../components/calendar";
import Calendar2 from "../components/calendar2";
import Calendar3 from "../components/calendar3";
import Availability from "../components/availability";


export interface ICalenderProps {

}

const Class: React.FC<ICalenderProps> = () => {

    return (
        <>
            <header className="bg-gray-200 h-16 flex items-center">
                <div className="flex pl-4 w-[310px] justify-between">
                    <button className="bg-[#56C795] rounded-lg px-4 py-2 font-normal hover:bg-gray-500 hover:cursor-pointer">
                        Create Availability
                    </button>
                    <button className="text-[#56C795] bg-gray-100 rounded-lg px-4 py-2 hover:bg-white hover:cursor-pointer">
                        Create Event
                    </button>
                </div>
            </header>

            <aside className="absolute left-0">
                <div>
                   <Calendar />
                </div>
                <Availability />
            </aside>

            <body>
            <header>
            </header>
            <div>
            </div>
            </body>

        </>
    )
}

export default Class
