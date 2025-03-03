import React from 'react'
import{motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className="flex justify-center pb-4 mb-24 mt-96 lg:mt-8">
      <div className="font-medium">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className=" text-5xl font-normal text-neutral-500 text-center">Contact Me:</motion.h1>
        <motion.ul 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="list-disc pl-5 text-gray-300">
        <li className="text-medium mt-6">Email : surivemula777@gmail.com</li>
        <li className="text-medium mt-6 border-b">LinkedIn :suresh-kumar-vemula-242235250</li>
        </motion.ul>
           </div>
    </div>
  )
}

export default Contact
