import React from 'react'
import {
    FaGlobeAfrica,
    FaArtstation,
    FaDigitalOcean,
    FaCreativeCommonsSa 
} from 'react-icons/fa'

const AboutUs2 = () => {
  return (
    <div className='container flex flex-col w-full lg:flex-row lg:gap-10 items-start justify-start px-5 lg:px-[102px] mt-10'>
        <div className='box1 flex flex-col items-start justify-start lg:w-1/4'>
            <FaGlobeAfrica className='text-[70px] my-10 self-center'/>
            <h1 className="text-[20px] font-[500]">Consultation and initial meeting</h1>
            <p className="my-[10px] text-[#756b66] text-[16px]">The architecture company meets with the client to discuss their needs, budget, and timeline. They may also visit the site to get a better understanding of the project.</p>
        </div>
        <div className='box2 flex flex-col items-start justify-start lg:w-1/4'>
            <FaArtstation className='text-[70px] my-10 self-center'/>
            <h1 className="text-[20px] font-[500]">Concept Design</h1>
            <p className="my-[10px] text-[#756b66] text-[16px]">Based on the client's requirements, the architecture company creates a concept design that outlines the overall vision for the project. This may include sketches, 3D models, or computer-generated renderings.</p>
        </div>
        <div className='box3 flex flex-col items-start justify-start lg:w-1/4'>
            <FaDigitalOcean className='text-[70px] my-10 self-center'/>
            <h1 className="text-[20px] font-[500]">Design Development</h1>
            <p className="my-[10px] text-[#756b66] text-[16px]">Once the client approves the concept design, the architecture company begins to develop detailed drawings and plans. This may involve collaborating with engineers, contractors, and other specialists to ensure that the design is feasible.</p>
        </div>
        <div className='box4 flex flex-col items-start justify-start lg:w-1/4'>
            <FaCreativeCommonsSa className='text-[70px] my-10 self-center'/>
            <h1 className="text-[20px] font-[500]">Permitting and Approvals</h1>
            <p className="my-[10px] text-[#756b66] text-[16px]">Before construction can begin, the architecture company must obtain the necessary permits and approvals from local authorities. This may involve submitting plans and documents for review and responding to any questions or co</p>
        </div>
    </div>
  )
}

export default AboutUs2