import React from "react";

export interface ICalendarv3Props {

}

const Calendarv3: React.FC<ICalendarv3Props> = () => {
    const weekdays: string[] = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']

    return(
       <>
           <div>
               {weekdays.map((days)=> (
                   <div>{days}</div>
               ))}
           </div>
       </>
    )
}

export default Calendarv3
