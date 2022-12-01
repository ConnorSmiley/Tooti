import React from "react";

export interface ICalenderBoxProps {
    value:string|number


}

const CalenderBox: React.FC<ICalenderBoxProps> = (props:any) => {

    return(
       <>
           <div className="uppercase h-10 flex item-center justify-center">
               {props.value}
           </div>
       </>
    )
}

export default CalenderBox
