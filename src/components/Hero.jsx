import React from 'react'
import logo from '../assets/suri-pic4.jpg'
import{motion} from 'framer-motion'
const container=(delay)=>({
 hidden:{x:-100, opacity:0},
 visible:{
  x:0,
  opacity:1,
  transition:{duration:0.5,delay}
 }
})
const Hero = () => {
  return (
      <div className="flex flex-col mt-16 width-fit lg:flex-row lg:justify-around">
        <div className="flex flex-col  items-center lg:items-start ">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="font-thin font-style: italic text-6xl tracking-tight lg:text-8xl text-gray-200 mt-4">Suresh vemula</motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500  to-violet-500 bg-clip-text text-4xl tracking-tight text-transparent mt-8">Software Devloper</motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl font-light tracking-tight text-gray-300 mt-4">I am a passionate programmer with skills in Python, JavaScript, HTML, CSS, and cybersecurity. I enjoy building interactive websites, developing applications, and exploring security techniques to protect digital systems. With a strong interest in both web development and cybersecurity, I focus on creating efficient, user-friendly, and secure solutions. My portfolio showcases various projects, including web applications, security implementations, and coding experiments. I am always eager to learn new technologies and improve my skills to stay updated with the latest industry trends.. </motion.p>
        </div>
         <div className="mt-4 lg:mt-none w-full lg:w-1/2 lg:p-8">
         <div className="flex justify-center overflow-hidden">
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={logo} alt="logo" className="rounded-md w-3/4 h-auto"/>
         </div>
         </div>
      </div>
  )
}

export default Hero
