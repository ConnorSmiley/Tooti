import React from "react";
import Calendar from "../components/Calendar/calendar";
import Availability from "../components/Availability/availability";
import Availability2 from "../components/Availability/availability2";
import Navbar from "../components/navbar";


export interface ICalenderProps {
}

const Class: React.FC<ICalenderProps> = () => {

    return (
        <>
            <Navbar />


            <aside className="absolute left-0">
                <div>
                   <Calendar />
                   <Availability2/>
                </div>

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
