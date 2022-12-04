import React, {useState} from "react";
import AvailabilityInput from "./AvailabilityInput"
import ChevronUp from "../../icons/ChevronUp";
import ChevronDown from "../../icons/ChevronD";

export interface Iavailability2Props {

}

const AvailabilityComponent: React.FC<Iavailability2Props> = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <div
                className="text-gray-500 flex justify-between items-center text-lg pt-4 pl-6 w-full h-10 hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                Availability
                <div className="w-auto flex pt-3">

                    {open ?
                        <div className="pb-5 -mr-3 ">
                            <ChevronDown />
                        </div>
                        :
                        <div className="-mr-1">
                            <ChevronUp />
                        </div>
                    }
                </div>
            </div>
            {open && (
                <div className='h-40 font-medium'>
                    <AvailabilityInput />
                </div>
            )}
        </>
    )
}
export default AvailabilityComponent
