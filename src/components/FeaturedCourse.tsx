import React from 'react'
import ProjectData from '@/data/projectData.json'
import { BackgroundGradient } from './ui/background-gradient';
interface Project {
    id: string;
    image: string;
    title: string;
    description: string;
  }


function FeaturedCourse() {
  
         
  return (
    <div className=' sm:flex flex-col space-y-5 p-10 sm:p-0 sm:space-y-0  flex-wrap gap-5 bg-gray-900 h-full sm:h-[45rem] mx-auto w-full justify-around items-center '>
      <div className='flex flex-col items-center justify-center mx-auto w-full'>
        <h1 className='sm:text-3xl text-2xl text-blue-400'>Featured Courses</h1>
        <p className='sm:text-5xl text-3xl mx-auto'>Learn With the Beast</p>
      </div>
      <div className='grid grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {
           ProjectData.projects.map((project:Project)=>(
       <BackgroundGradient className="rounded-[22px]  sm:max-w-sm p-4  text-center  sm:p-10 bg-white dark:bg-zinc-900" key={project.id}>
         <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
         {project.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
         {project.description}
        </p>
       <div className='mt-5'>
       <span className='bg-white  p-2 rounded-lg '>
       <span className='text-black'>
            View All
        </span>
       </span>
       </div>
       </BackgroundGradient>
           ))
          
        }
      </div>
     
     <div >
      <button className='p-3 px-10 bg-white text-black rounded-xl'>View All</button>
     </div>
     
      
    </div>
  )
}

export default FeaturedCourse
