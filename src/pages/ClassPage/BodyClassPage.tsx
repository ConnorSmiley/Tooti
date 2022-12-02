import React from "react";
import TimeZone from "../../components/TimeZone";
import ScheduleComponent from "../../components/Calendar/ScheduleComponent";

export interface IMainClassPageProps {

}

const BodyClassPage: React.FC<IMainClassPageProps> = () => {

    return (
        <>
            <body className="pr-4 w-full">
                <TimeZone textBold="Time Zone" text="Japan/Korea time" />
                <ScheduleComponent />
            </body>
        </>
    )
}

export default BodyClassPage
