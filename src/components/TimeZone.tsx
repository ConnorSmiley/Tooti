import React from "react";
import ChevronDown from "../icons/ChevronD";

export interface ITimeZoneProps {
    textBold: string
    text: string
}

const TimeZone: React.FC<ITimeZoneProps> = (props) => {

    return (
        <>
            <div className="h-14 flex items-center justify-end pb-4 mb-4">
                <div className="flex items-center justify-end">
                    <div className="text-gray-500 font-semibold pr-4">
                        {props.textBold + ":"}
                    </div>
                    <div className="font-thin text-gray-500 pr-6">
                        {props.text}
                    </div>
                    <div className="flex pb-3">
                        <ChevronDown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeZone
