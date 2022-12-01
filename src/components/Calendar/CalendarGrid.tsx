import React from "react";
import CalenderBox from "./CalenderBox";

export interface ICalendarGridProps {

}

const CalendarGrid: React.FC<ICalendarGridProps> = () => {

    return (
        <>
            <body className="h-auto pt-4 text-sm text-gray-500">

            <div className="grid w-auto h-auto ">
                <div className="h-10 ">
                    <div className="grid grid-cols-7">
                        <CalenderBox value="s"/>
                        <CalenderBox value="m"/>
                        <CalenderBox value="t"/>
                        <CalenderBox value="w"/>
                        <CalenderBox value="t"/>
                        <CalenderBox value="f"/>
                        <CalenderBox value="s"/>
                    </div>
                </div>
                <div className="h-10 ">
                    <div className="grid grid-cols-7 flex-row justify-between">
                        <CalenderBox value=""/>
                        <CalenderBox value=""/>
                        <CalenderBox value="1"/>
                        <CalenderBox value="2"/>
                        <CalenderBox value="3"/>
                        <CalenderBox value="4"/>
                        <CalenderBox value="5"/>
                    </div>
                </div>
                <div className="h-10 ">
                    <div className="grid grid-cols-7 flex-row justify-between">
                        <CalenderBox value="6"/>
                        <CalenderBox value="7"/>
                        <CalenderBox value="8"/>
                        <CalenderBox value="9"/>
                        <CalenderBox value="10"/>
                        <CalenderBox value="11"/>
                        <CalenderBox value="12"/>
                    </div>
                </div>
                <div className="h-10 ">
                    <div className="grid grid-cols-7 flex-row justify-between">
                        <CalenderBox value="13"/>
                        <CalenderBox value="14"/>
                        <CalenderBox value="15"/>
                        <CalenderBox value="16"/>
                        <CalenderBox value="17"/>
                        <CalenderBox value="18"/>
                        <CalenderBox value="19"/>
                    </div>
                </div>
                <div className="h-10 ">
                    <div className="grid grid-cols-7 flex-row justify-between">
                        <CalenderBox value="20"/>
                        <CalenderBox value="21"/>
                        <CalenderBox value="22"/>
                        <CalenderBox value="23"/>
                        <CalenderBox value="24"/>
                        <CalenderBox value="25"/>
                        <CalenderBox value="26"/>
                    </div>
                </div>
                <div className="h-10 ">
                    <div className="grid grid-cols-7 flex-row justify-between">
                        <CalenderBox value="27"/>
                        <CalenderBox value="28"/>
                        <CalenderBox value="29"/>
                        <CalenderBox value="30"/>
                        <CalenderBox value="31"/>
                        <CalenderBox value=""/>
                        <CalenderBox value=""/>
                    </div>
                </div>


            </div>
            </body>
        </>
    )
}

export default CalendarGrid
