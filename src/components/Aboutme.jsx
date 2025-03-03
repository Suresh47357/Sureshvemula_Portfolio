import React from 'react'
import logo from '../assets/about.jpg'
import{motion} from 'framer-motion'

const Aboutme = () => {
  return (
    <div className="lg:p-12 h-fit my-6">
      <div className="flex justify-center">
        <h3 className="text-3xl text-white">About</h3>
        <h3 className="text-slate-600 ml-2 text-3xl">Me</h3>
        </div>  
         <div className="flex justify-around flex-col lg:flex-row-reverse lg:p-20">
            <div className="tracking-tight h-72 max-w-Screen-xl flex justify-center  lg:items-start mt-8 lg:mt-0 lg:w-fit font-thin text-gray-100 lg:ml-8">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                >
                <h1 className="text-3xl font-normal">Engineering</h1>
                  <p className="text-xl font-normal mt-4">Manav rachna international insitute of research and studies</p>
                  <div className="flex justify-between mt-4 font-normal">
                    <p>computer science(digital forensices and cybersecurity)</p>
                    <p>CGPA:6.89</p>
                  </div>
                  <h1 className="text-3xl font-normal mt-8">Intermediate</h1>
                  <p className="text-xl font-normal mt-4">Narayana Junior College</p>
                  <div className="flex justify-between mt-4 font-normal">
                    <p>MPC</p>
                    <p>CGPA:8.09</p>
                  </div>
                  <h1 className="text-3xl font-normal mt-8">10th Standard</h1>
                  <p className="text-xl font-normal mt-4">Narayana e-Techno School</p>
                  <div className="flex justify-start mt-4 font-normal">
                    <p>CGPA:9.2</p>
                  </div>
                </motion.div>
            </div>
            <div className="h-auto w-8/12   mt-0 hidden md:block">
                <motion.img 
                whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}}
                src={logo} alt="logo" className="rounded-md" />
            </div>
         </div>
    </div>
  )
}

export default Aboutme
