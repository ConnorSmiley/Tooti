import React from "react";

export interface IScheduleComponentProps {

}

const ScheduleComponent: React.FC<IScheduleComponentProps> = () => {

    return(
       <>
           <div className="pl-80 w-full h-auto  ">
               <div className=" h-16 bg-red-500 ml-16">
                   month and days
               </div>
               <div className="bg-green-500 h-[47rem] w-full">
                   <ScheduleComponent />


               </div>
           </div>
       </>
    )
}

export default ScheduleComponent
