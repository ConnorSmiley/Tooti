import React from "react";
import TimeZone from "../../components/TimeZone";
import WeeklyScheduleHeader from "../../components/WeeklySchedule/WeeklyScheduleHeader";

export interface IMainClassPageProps {

}

const ClassPageBody: React.FC<IMainClassPageProps> = () => {

    return (
        <>
            <div className="pr-8 w-full bg-white">
                <TimeZone textBold="Time Zone" text="Japan/Korea time" />
                <WeeklyScheduleHeader />
            </div>
        </>
    )
}

export default ClassPageBody
