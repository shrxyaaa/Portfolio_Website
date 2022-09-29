import Link from "next/link";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { withRouter } from "next/router";
import {IoLogoGithub,} from "react-icons/io5"
import {BsFillPersonFill} from "react-icons/bs";


function Navbar({router} ){
   console.log()
  return (
    <div style={{backgroundColor:"#202023ce" }} className="flex bg-opacity-5 fixed w-screen justify-center">
      <nav className="m-auto  lg:w-1/2 md:w-1/2 w-full  text-white flex" >
        
        <Link href="/">
        {(router.pathname=='/')?
        
            <div className="bg-cyan-800  w-1/3   justify-center   p-2 flex cursor-pointor  hover:underline">
            <div className="w-fit items-center flex"><BsFillPersonFill/><p className="w-min">SD</p></div>
            </div>
            :
            <div className=" p-2 cursor-pointor  justify-center w-1/3  text-center    hover:underline flex">
               <div className="w-fit items-center flex"><BsFillPersonFill/><p className="w-min">SD</p></div>
            </div>
           
        }
        </Link>
       

        <Link href="/projects">
          {(router.pathname=='/projects')?
            <a className="bg-cyan-800 p-2  w-1/3 text-center  cursor-pointor hover:underline">Projects</a>:
            <a className=" p-2 cursor-pointor  w-1/3 text-center  hover:underline">Projects</a>
        }
        </Link>
       
       <div className="cursor-pointor  w-1/3  text-center items-center   flex hover:underline p-2 space-x-1 ">
        <IoLogoGithub/>
       <a target="_blank" rel="noreferrer" href="https://github.com/shrxyaaa">Github</a>
        </div>
      </nav>
     </div>
  );
};

export default withRouter( Navbar);