import React from "react";
import TimeTable from "../../pages/ClassPage/TimeTable";
import ScheduleHeaderDates from "./ScheduleHeaderDates";

export interface IScheduleComponentProps {

}

const ScheduleComponent: React.FC<IScheduleComponentProps> = () => {

    return (
        <>
            <div className="pl-80 w-full pt-4">
                <div className="grid h-16 ml-16 mr-4">
                    <div className="flex flex-1 justify-evenly">
                        <ScheduleHeaderDates day="" date={null} />
                        <ScheduleHeaderDates day="Sun" date={20} />
                        <ScheduleHeaderDates day="Mon" date={21} />
                        <ScheduleHeaderDates day="Tue" date={22} />
                        <ScheduleHeaderDates day="Wed" date={23} />
                        <ScheduleHeaderDates day="Thu" date={24} />
                        <ScheduleHeaderDates day="Fri" date={25} />
                        <ScheduleHeaderDates day="Sat" date={26} />
                    </div>
                </div>
                <div className="pl-16">
                    <TimeTable />
                </div>
            </div>
        </>
    )
}

export default ScheduleComponent
