import React, {useState} from "react";
import AvailabilityInput from "./AvailabilityInput"


export interface Iavailability2Props {

}

const AvailabilityComponent: React.FC<Iavailability2Props> = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            <div className="text-gray-500 flex items-center text-lg pt-4 pl-6 w-full h-10 hover:cursor-pointer"
                 onClick={() => setOpen(!open)}
            >
                Availability
            </div>
            {open && (
                <div className='h-40'>
                    <AvailabilityInput />
                </div>
            )}
        </>
    )
}
export default AvailabilityComponent
