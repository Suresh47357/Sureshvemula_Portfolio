import React from 'react'
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiSpring } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import{motion} from 'framer-motion'


const iconvariants=(duration)=>({
  initial:{y:-6},
  animate:{
    y:[-6,6],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    },
  },
})
const Technologies = () => {
  return (
    <div className="mt-44 border-b border-neutral-800 mb-8 lg:mt-8 ">
        <div className="flex flex-wrap text-4xl font-thin justify-center">
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            >Technologies</motion.h1>
        </div>
      <div className="flex flex-wrap justify-center mt-8 mb-6 ">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex justify-around h-20">
        <motion.div
        variants={iconvariants(2.5)}
        intial="initial"
        animate="animate"
         className="border-4 border-neutral-800  p-4 rounded-2xl">
            <FaReact className="text-4xl text-cyan-700 "/>
        </motion.div>
        <motion.div 
        variants={iconvariants(3)}
        intial="initial"
        animate="animate"
        className="border-4 border-neutral-800 p-4 rounded-2xl ml-2 lg:ml-4">
            <SiJavascript className="text-4xl text-yellow-300 "/>
        </motion.div>
        <motion.div 
        variants={iconvariants(6)}
        intial="initial"
        animate="animate"
        className="border-4 border-neutral-800 p-4 rounded-2xl ml-2 lg:ml-4">
            <SiGithub className="text-4xl text-gray-600 "/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        intial="initial"
        animate="animate"
        className="border-4 border-neutral-800 px-2 py-2 rounded-2xl ml-2 lg:ml-4">
            <SiMysql className="text-5xl text-gray-300 "/>
        </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
