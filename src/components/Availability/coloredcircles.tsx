import React from "react";


//Didn't know how to type-define a `${TUPLE}}`
function Coloredcircles(props:any) {

    return(
        <>
           <div className="flex justify-end w-12 right-3">
              <div className="h-5 w-5 rounded-full flex items-center mr-4"
                  style={{backgroundColor: `${props.color}`}}/>
           </div>
       </>
    )
}

export default Coloredcircles


