import Head from 'next/head'
import Image from 'next/image'
import Domain from '../components/Domain'
import About from '../components/About'
import Event from '../components/Event'
import { client, urlFor } from '../lib/client'
import { IoMail, IoLogoLinkedin } from "react-icons/io5";
import Experience from '../components/Experience'
export default function Home({event,about,experience,skills}) {
 

  return (
    <div className=' text-white'>
      <main  className='space-y-5'> 
      <h1 className='bg-gray-600 m-auto text-center  bg-opacity-30 p-4 mb-20 mt-24'>{about[0].tag}</h1>
      <div className='flex space-x-10 '>
      <img className='rounded-full w-1/4 border-2 border-spacing-2' src={urlFor(about[0].image)} alt='my-app/public/vercel' />
        <div className='space-y-1 items-center pt-4'>
          <h1 className='text-2xl'>{about[0].name}</h1>
          <p className=' text-gray-300'>{about[0].sub}</p>
        </div> 
      </div> 

      <div className='h-5'></div>
      <About about={about[0].desc}/> 
      <hr className='border-2 border-cyan-800'/>
      <Experience name='EXPERIENCE' event={experience}/>
      <hr className='border-2 border-cyan-800'/>
      <div>
        <h1 className="font-bold  mb-10">SKILLS</h1>
       <div className=' mt-7'></div>
       { 
        skills.map(item=>{
          return <Domain key={item._id} domain={item.domain} skill={item.skill} />     
        })
       }
    
       </div>
     
      <hr className='border-2 border-cyan-800'/>

      <Event name='BIO' event={event}/>
      <hr className='border-2 border-cyan-800'/>
      <ul>
      <h1 className="font-bold mb-10">CONTACT</h1>  
      <li >
      <div className='flex p-3 items-center space-x-2  '>
      <IoLogoLinkedin/>
      <a href="https://www.linkedin.com/in/shreya-day-2058891a7/"
           className="cursor-pointor hover:underline">LinkedIn</a>
       </div>
      </li>
      <li >
        <div className='flex p-3 items-center space-x-2 '>
      <IoMail />
       <p>shreyaday123@gmail.com</p>
       </div>
      </li>
      </ul>
      
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "event"]';
  const event = await client.fetch(query);
   const query2 = '*[_type == "about"]';
  const about = await client.fetch(query2);
  const query3 = '*[_type == "experience"]';
  const  experience = await client.fetch(query3);
  const query4 = '*[_type == "skills"]';
  const skills = await client.fetch(query4);

  return {
    props: { event,about,experience,skills }
  }
}
