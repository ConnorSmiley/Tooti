import React from "react";
import WeekColumn from "../WeekColumn";

export interface IFullDayComponentProps {

}

const FullDayComponent: React.FC<IFullDayComponentProps> = () => {

    return(
       <>
           <div className="flex flex-1 justify-between h-[46rem] overflow-y-scroll">
               <WeekColumn />
               <WeekColumn />
               <WeekColumn />
               <WeekColumn />
               <WeekColumn />
               <WeekColumn />
               <WeekColumn />
               <WeekColumn />
           </div>

       </>
    )
}

export default FullDayComponent
