import React from "react";
import {Link} from "react-router-dom";


export interface IgreetingProps {

}

const Greeting: React.FC<IgreetingProps> = () => {
    return(
       <>
           <div className="App">
               <h1>Hello interviewer</h1>
               <h2>implement the following buttons</h2>
               <section className="space-x-1.5">
                   <button
                       className="btn btn-ghost outline border-blue-500 text-3xl m-4 hover:bg-[#B1B2FF] cursor-pointer font-bold ">
                       <Link
                           className="btn btn-ghost normal-case text-xl flex items-center justify-center"
                           to="/calendar"
                       >
                           Book a class
                       </Link>
                   </button>

                   <hr />
                   <button
                       className="bg-[#B1B2FF] btn btn-ghost outline border-blue-500 text-3xl m-4 hover:bg-[#56C795] cursor-pointer">
                       <Link className="btn btn-ghost normal-case text-xl flex items-center justify-center "
                             to="/class">
                           Start a class now (stretch goal)
                       </Link>
                   </button>
               </section>
               <p>check instructions on the Readme.md file</p>
               <section>
                   colors:
                   <ul>
                       <li>Gray: #667085</li>
                       <li>Purple: #B1B2FF</li>
                       <li>Green: #56C795</li>
                   </ul>
               </section>
           </div>


       </>
    )
}

export default Greeting
