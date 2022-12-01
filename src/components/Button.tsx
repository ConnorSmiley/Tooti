import React from "react";

export interface IButtonProps {
    text:string
}

const Button: React.FC<IButtonProps> = (props) => {

    return(
       <>
           <div>
              <div>
                  {props.text}
              </div>
           </div>
       </>
    )
}

export default Button
