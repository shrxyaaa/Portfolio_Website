import React from 'react'


const Domain = (props) => {
  return (
   
             <div className=' text-gray-200 my-5'>
              <h1 >
               {props.domain}
              </h1 >
              <div className="space-y-2 space-x-3">
               {
                props.skill.map(item=>{
                  return(
                
                  <p  key={item} className="bg-cyan-700 rounded-sm text-white bg-opacity-50 hover:bg-opacity-100 inline-block w-max  px-3 py-2"
                  >{item}</p>
      
                  )})
               }
               </div>
              </div> 
      
  )
}

export default Domain