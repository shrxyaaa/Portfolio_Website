import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { urlFor } from "../lib/client";
const Project = (props) => {
  
  return (
    <a className="bg-white" href={props.url} target="_blank" rel="noreferrer">
    <div className="flex my-10  rounded-md space-x-2">
     <div className="w-1/3 ">
      <img src={urlFor(props.image)} alt='my-app/public/vercel' className="cursor-pointer aspect-square"/>
    </div>
    <div className="space-y-4 p-2 cursor-pointer bg-gray-100 bg-opacity-5 hover:bg-gray-600 hover:bg-opacity-30 text-gray-300  w-2/3">
    <h1  className="font-bold	">
     {props.name}
    </h1>
    <h3>{props.date}</h3>
    <p >{props.description}</p>
    </div>
    </div> 
    </a>

  );
};

export default Project