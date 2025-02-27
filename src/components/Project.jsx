import React from 'react'
// import task from '../assets/task_manage.jpg'
// import job from '../assets/jobs_app.webp'
// import gpt from '../assets/gpt3_portfolio.webp'
import{motion} from 'framer-motion'

const Project = ({project}) => {
  return (
    <div>
      <div className="mb-12 mt-12 rounded-md bg-zinc-900 p-8 lg:bg-transparent lg:flex lg:justiy-between lg:px-32">
                {/* <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}
                className="flex justify-center mx-12"><img src={project.logo} alt="Logo" className="h-auto w-64 rounded-md object-contain"/>
                </motion.div> */}
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:1.5}}
                className="flex justify-center ">
                <div className="text-center lg:w-7/12 lg:mx-24">
                <h3 className="2xl text-gray-100 font-semibold mt-4 lg:text-left">{project.name}</h3>
                <p className="text-gray-300 text-sm mt-6 text-left">{project.matter}
                </p>
                <div className="flex justify-center mt-6 lg:justify-start">
                  {project.tech.map(tech=>(
                    <div className=" px-4 py-1 text-purple-800 bg-zinc-950 text-md font-semibold ml-2 rounded-md lg:bg-zinc-900">{tech}</div>
                  ))}
                </div>
                </div>   
                </motion.div>
                
                
            </div>
    </div>
  )
}

export default Project
