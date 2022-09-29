import Head from 'next/head'
import Image from 'next/image'

import Project from '../components/Project'
import{client} from "../lib/client"


export default function Projects({projects}) {

  return (
    <div className='space-y-20'>
     <div className='mt-24'></div>
      <div>
       { 
        projects.map(project=>{
          return <Project key={project._id} url={project.url} image={project.image} name={project.projectName} date={project.duration} description={project.desc}/>     
        })
       }
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "projects"]';
  const projects = await client.fetch(query);

  return {
    props: { projects }
  }
}
