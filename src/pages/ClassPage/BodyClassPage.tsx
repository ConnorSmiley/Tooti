import React from "react";
import TimeZone from "../../components/TimeZone";
import ScheduleComponent from "../../components/Schedule/ScheduleComponent";

export interface IMainClassPageProps {

}

const BodyClassPage: React.FC<IMainClassPageProps> = () => {

    return (
        <>
            <div className="pr-8 w-full bg-white">
                <TimeZone textBold="Time Zone" text="Japan/Korea time" />
                <ScheduleComponent />
            </div>
        </>
    )
}

export default BodyClassPage
