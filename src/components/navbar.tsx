import React from "react";

export interface InavbarProps {

}

const Navbar: React.FC<InavbarProps> = () => {

    return(
       <>
           <header className="bg-white h-16 flex items-center">
               <div className="flex pl-4 w-[320px] justify-between">
                   <button className="bg-[#56C795] text-white rounded-lg px-4 py-2 font-semibold  hover:bg-gray-500 hover:cursor-pointer">
                       Create Availability
                   </button>
                   <button className="text-[#56C795] font-semibold px-4 py-2 hover:bg-white hover:cursor-pointer">
                       Create Event
                   </button>
               </div>
           </header>
       </>
    )
}

export default Navbar
