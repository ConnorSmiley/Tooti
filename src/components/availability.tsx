import React from "react";


export interface IavailabilityProps {

}

const Availability: React.FC<IavailabilityProps> = () => {

    return(
       <>
           <div tabIndex={0} className="
           collapse
           collapse-arrow
           bg-red-500
           w-auto

           ">
               <div className="collapse-title text-xl font-medium m">
                   Availability
               </div>
               <div className="collapse-content">
                   <input>View All</input>
                   <p>English Classes</p>
                   <p>Conversation Classes</p>
                   <p>Night Classes</p>
               </div>
           </div>
       </>
    )
}

export default Availability
