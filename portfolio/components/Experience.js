
import React, { useState } from "react";
const Experience = (props) => {
  const event=props.event
  return (

        <div >
          <h1 className="font-bold mb-10">{props.name}</h1>
          { 
           event.map(event=>{
             return(<div  key={event.date}>
              
              <h1 className="font-semibold  tracking-wider mb-2">{event.name}</h1>
              <h2 className="font-extralight text-gray-400 text-sm" >{event.date}</h2>
              <p className="mt-3 text-gray-200">{event.desc}</p>
              
            </div>)
           })
       }
        </div>

  );
};



export default Experience;