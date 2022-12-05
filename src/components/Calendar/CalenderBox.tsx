import React from "react";

export interface ICalenderBoxProps {
    value:string|number
}

const CalenderBox: React.FC<ICalenderBoxProps> = (props) => {

    return(
       <>
           <div className="uppercase h-10 flex item-center justify-center border border-gray-500">
               {props.value}
           </div>
       </>
    )
}

export default CalenderBox
