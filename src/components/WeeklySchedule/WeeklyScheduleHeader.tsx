import React from "react";
import TimeTable from "../../pages/ClassPage/TimeTable";
import WeeklyHeaderComponent from "./WeeklyHeaderComponent";

export interface IScheduleComponentProps {

}

const WeeklyScheduleHeader: React.FC<IScheduleComponentProps> = () => {

    return (
        <>
            <div className="pl-80 w-full pt-4">
                <div className="grid h-16 ml-8 mr-4">
                    <div className="flex flex-1 justify-evenly ">
                        <div className="w-80">
                            <div className="w-28">
                                <WeeklyHeaderComponent day="" date={null} />
                            </div>
                        </div>
                        <WeeklyHeaderComponent day="Sun" date={20} />
                        <WeeklyHeaderComponent day="Mon" date={21} />
                        <WeeklyHeaderComponent day="Tue" date={22} />
                        <WeeklyHeaderComponent day="Wed" date={23} />
                        <WeeklyHeaderComponent day="Thu" date={24} />
                        <WeeklyHeaderComponent day="Fri" date={25} />
                        <WeeklyHeaderComponent day="Sat" date={26} />
                    </div>
                </div>
                <TimeTable />
            </div>
        </>
    )
}

export default WeeklyScheduleHeader