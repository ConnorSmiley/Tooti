import React from "react";
import ChrevonLeft from "../../icons/ChevronLeft";
import ChrevonRight from "../../icons/ChevronRight";

export interface ICalendarH1Props {

}

const CalendarH1: React.FC<ICalendarH1Props> = () => {

    const month:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    const getMonth = new Date();
    let showMonth = month[getMonth.getMonth() - 4]

    const year = new Date();
    let getYear = year.getFullYear() + 1

    return (
        <>
            <div className="h-16 w-full flex flex-row items-center justify-center text-lg text-gray-500 ">
                <div className="flex w-60 flex-row items-center justify-between">
                    <div className=" pt-1 flex">
                        <ChrevonLeft />
                    </div>
                    <div className="flex pb-1 ">
                        {showMonth} {getYear}
                    </div>
                    <div className="flex pb-3">
                        <ChrevonRight />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CalendarH1


