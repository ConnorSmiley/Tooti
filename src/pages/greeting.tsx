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
                       className="bg-[#56C795] rounded-md border-blue-500 text-3xl m-4 cursor-pointer font-bold ">
                       <Link
                           className="hover:bg-pink-500 w-full h-full text-black btn btn-ghost normal-case text-xl flex items-center justify-center"
                           to="/class"
                       >
                           Book a class
                       </Link>
                   </button>

                   <hr />
                   <button
                       className="bg-[#B1B2FF] w-96 h-16 text-2xl text-black m-4 font-bold rounded-md cursor-pointer hover:bg-pink-500">
                       <Link className="normal-case flex items-center justify-center "
                             to="/calendar">
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
