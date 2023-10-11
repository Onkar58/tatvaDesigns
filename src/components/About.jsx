import React, { useEffect, useState } from 'react'
import img1 from '../assets/images/img4.jpeg'
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img5.jpeg'

const About = () => {
  const [activeTab, setActiveTab] = useState("history")
  const [activeInfo, setActiveInfo] = useState(`Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world. 
  Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability.`)

  useEffect(() => {
    if (activeTab === "history") {
      setActiveInfo(`Archy was founded in 1936 in Chicago, USA. The company was established by Louis Skidmore and Nathaniel Owings, and later joined by John O. Merrill. 
      SOM has been responsible for the design of many notable buildings worldwide, including the Sears Tower (now known as Willis Tower) in Chicago, which was the world's tallest building from 1973 to 1998. The company has also designed the John Hancock Center, One World Trade Center, and Burj Khalifa, which is currently the tallest building in the world. Throughout its history, SOM has been recognized for its innovative designs and commitment to sustainability.`)
    }
    if (activeTab === "description") {
      setActiveInfo(`We believe that good design should not only be aesthetically pleasing, but also functional and environmentally responsible. Our approach to architecture is rooted in a deep understanding of our clients' needs and the context in which we are designing. We work closely with our clients throughout the entire design process to ensure that their vision is realized and that their space is both beautiful and practical.`)
    }
    if (activeTab === "reviews") {
      setActiveInfo(`Ratings and reviews, A numerical rating system and written reviews from clients can be very persuasive in convincing potential clients to hire an architecture firm. These reviews can be posted directly on the architecture firm's website or on third-party review sites such as Yelp or Google Reviews. It's important to respond to all reviews, whether positive or negative, in a professional and respectful manner. This shows that the architecture firm values feedback and is committed to delivering exceptional service.`)
    }
  }, [activeTab])

  return (
    <div id='about' className='h-min lg:h-min-[100vh] lg:p-20 flex flex-col justify-center items-center z-10 mt-10'>

      <div className='w-full px-5 lg:px-20'>
        <h1 className='font-[700] text-[35px] md:text-[100px]'>"Discover Our Story"</h1>
        <hr className='border-[1px] border-slate-100'></hr>
        <h2 className='text-[18px] md:text-[32px] font-[400]'>Designing the future, today - welcome to our architecture</h2>
      </div>

      <div className='aboutInfoContainer flex flex-col lg:flex-row w-full lg:h-[100vh] px-5 md:px-20 py-10'>
        <div className=' relative imagesContainer mb-10 h-[90vw] lg:h-4/5 w-full lg:w-1/2'>
          <img src={img1} className='absolute w-[80%] top-1/2 left-1/2 -translate-x-[60%] -translate-y-[60%]' />
          <img src={img2} className='absolute w-[80%] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' />
          <img src={img3} className='absolute w-[80%] top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%]' />
        </div>
        <div className='textContainer h-full w-full md:w-1/2 flex flex-col abcred-400'>
          <div className='infoText w-full m-b-5 flex flex-col md:flex md:flex-row'>
            <section className='tabs flex-0 text-[20px] font-[400] underline'>
              <p className={`m-1 hover:cursor-pointer hover:opacity-100 ${activeTab === "history" ? "opacity-[100%]" : "opacity-[50%]"}`} onClick={() => setActiveTab("history")}>History</p>
              <p className={`m-1 hover:cursor-pointer hover:opacity-100 my-5 ${activeTab === "description" ? "opacity-[100%]" : "opacity-[50%]"}`} onClick={() => setActiveTab("description")}>Description</p>
              <p className={`m-1 hover:cursor-pointer hover:opacity-100 my-5 ${activeTab === "reviews" ? "opacity-[100%]" : "opacity-[50%]"}`} onClick={() => setActiveTab("reviews")}>Reviews</p>
            </section>
            <section className='content px-2 mb-10 lg:px-10 flex-0 text-[15px] lg:text-[18px] text-[#756b66] abcslate-300'>
              {activeInfo}
            </section>
          </div>
          <div className='stats px-2 lg:px-10'>
            <p className='w-full my-3 flex justify-between'>Architecture <span>95%</span></p>
            <hr className='w-[95%] border-black' />
            <p className='w-full my-3 flex justify-between'>Functional Spaces <span>85%</span></p>
            <hr className='w-[85%] border-black' />
            <p className='w-full my-3 flex justify-between'>Renovation <span>75%</span></p>
            <hr className='mb-5 w-[75%] border-black' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About