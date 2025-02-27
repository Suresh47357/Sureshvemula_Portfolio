import React from 'react'
import Project from './Project';
// import task from '../assets/task_manage.jpg'
// import job from '../assets/jobs_app.webp'
// import gpt from '../assets/gpt3_portfolio.webp'
import{motion} from 'framer-motion'

const Projects = () => {
    const project1={
        name:"Impact of Quantum-Enhanced Machine learning Over cybersecurity",
        //logo:task,
        matter:"Leveraging quantum computing to enhance threat detection, anomaly identification, and cryptographic security. Experienced in applying ML for intrusion detection and risk mitigation. ",
        tech:['intrusion detection system','CSS','ML','PYTHON']
    };
    const project2={
        name:"Air pollution Detection from Automobile Emissions using Machine learning Model",
       // logo:job,
        matter:"Air Pollution Detection Using Machine Learning – Developed an ML-based model to analyze automobile emissions and detect air pollution levels. Researched predictive analytics for environmental monitoring (IEEE).",
        tech:['Research paper in IEEE']
    };
  return (
    <div className="pb-8 mb-12 border-b border-neutral-900">
        <div className="flex justify-center ">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-50}}
        transition={{duration:1.5}}
        className="font-thin text-3xl">Projects</motion.h1>
        </div>
        <div className="">
            <Project project={project1}/>
            <Project project={project2}/>
        </div>
    </div>
  )
}

export default Projects
