import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const About = (props) => {

  return (
    <div className="">
    <h1 className="font-bold mb-7" >
     ABOUT
    </h1>
    <p className=" text-gray-200">
      {props.about}
    </p>
    </div>
   

  );
};

export default About