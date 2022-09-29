
import React, { useState } from "react";
const Event = (props) => {
  const event=props.event
  return (

        <div >
          <h1 className="font-bold mb-10">{props.name}</h1>
          { 
           event.map(event=>{
             return(<div key={event.date} className="flex">
              <div className="w-1/3">
              <h1 className="  text-gray-200 p-2" >{event.date}</h1>
              </div>
              <p className="w-2/3  text-gray-200 ml-0 p-2">{event.desc}</p>
            </div>)
           })
       }
        </div>

  );
};



export default Event;