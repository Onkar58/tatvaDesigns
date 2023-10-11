import React from 'react'
import img1 from '../assets/images/img1.jpg'


const projects = [
  {
    name: "The Petronas Twin Tower",
    loc: "HIGH LINE",
    img: img1,
  },
  {
    name: "The Petronas Twin Tower",
    loc: "HIGH LINE",
    img: img1,
  },
  {
    name: "The Petronas Twin Tower",
    loc: "HIGH LINE",
    img: img1,
  },
  {
    name: "The Petronas Twin Tower",
    loc: "HIGH LINE",
    img: img1,
  },
  {
    name: "The Petronas Twin Tower",
    loc: "HIGH LINE",
    img: img1,
  },
  {
    name: "The Petronas Twin Tower",
    loc: "HIGH LINE",
    img: img1,
  },
]


const Projects = () => {
  return (
    <div id='projects' className='my-20 px-5 lg:px-20 flex flex-col gap-10 justify-center items-center'>
      <section className='max-w-[1180px]'>
        <h1 className='text-[30px] lg:text-[100px] font-[700]'>
          "Building a legacy, one project at a time"
        </h1>
        <hr className='my-5 ' />
        <p className='text-[16px] lg:text-[32px] text-[#0a0a0a]'>
          Whether you're an architect, designer, or simply someone with an interest in the built environment, our latest projects are sure to inspire and challenge you.
        </p>
      </section>
      <section className='max-w-[1208px]'>
        <h1 className='text-[30px] lg:text-[70px] font-[600] text-center'>
          Projects
        </h1>
        <div id='projectCards' className='my-10 w-full flex flex-wrap justify-center items-center gap-10'>
          {projects.map((project, index) =>
          (
            <div className='card w-full lg:w-[30%] hover:cursor-pointer' key={index}>
              <img src={project.img} />
              <h1 className='font-[600] text-[25px] mx-5 mt-5'>
                {project.name}
              </h1>
              <p className='text-[#756b66] text-[12px] font-[600] opacity-50 mx-5'>{project.loc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects