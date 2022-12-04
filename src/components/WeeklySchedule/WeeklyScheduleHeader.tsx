import React from "react";
import ClassScheduleTable from "../../pages/ClassPage/ClassScheduleTable";
import WeeklyHeaderComponent from "./WeeklyHeaderComponent";
import WeeklyHeaderComponentColoredCircle from "./WeeklyHeaderComponentColoredCircle";

export interface IScheduleComponentProps {

}

const WeeklyScheduleHeader: React.FC<IScheduleComponentProps> = () => {

    return (
        <>
            <div className="pl-80 w-full">
                <div className="grid h-16 ml-8 mr-4">
                    <div className="flex flex-1 justify-evenly ">
                        <div className="w-80 ">
                            <div className="w-28">
                                <WeeklyHeaderComponent day="" date={null} />
                            </div>
                        </div>
                        <WeeklyHeaderComponent day="Sun" date={20} />
                        <WeeklyHeaderComponent day="Mon" date={21} />
                        <WeeklyHeaderComponent day="Tue" date={22} />
                        <WeeklyHeaderComponent day="Wed" date={23} />
                        <WeeklyHeaderComponentColoredCircle day="Thur" date={24} />
                        <WeeklyHeaderComponent day="Fri" date={25} />
                        <WeeklyHeaderComponent day="Sat" date={26} />
                    </div>
                </div>
                <ClassScheduleTable />
            </div>
        </>
    )
}

export default WeeklyScheduleHeader
