/* eslint-disable react/no-unescaped-entities */
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit md:h-[100vh] bg-contact bg-center bg-no-repeat">
      <div className="w-[90%] h-[90%] mx-auto py-10 flex flex-col gap-10 md:gap-0 md:flex-row">
        <div className="w-1/2 flex flex-col gap-8 md:gap-0 justify-between h-full ">
          <div className="w-full flex flex-col gap-8 ">
            <div className="w-full border-b-[1px] border-[#dad7d7] pb-4 md:pb-6 lg:pb-8">
              <p className=" text-5xl md:text-7xl lg:text-[106px] text-[#0a0a0a] font-bold text-left">
                Let's Talk
              </p>
            </div>
            <p className=" text-xl md:text-2xl lg:text-3xl text-[#756b66] font-semibold text-left">
              Got a project on your mind? Let's discuss about the details.
            </p>
          </div>
          <div className="w-full flex flex-col gap-5">
            <p className="text-xl text-[#0a0a0a] font-semibold">Call Us</p>
            <p className="text-2xl text-[#0a0a0a] font-semibold">
              +91 1234567890
            </p>
            <div className="flex gap-8">
              <BiLogoFacebookCircle className="scale-150 hover:opacity-70 cursor-pointer" />
              <AiFillYoutube className="scale-150 hover:opacity-70 cursor-pointer" />
              <AiFillInstagram className="scale-150 hover:opacity-70 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col ">
          <form className="w-[90vw] md:w-[80%] mx-auto flex-1 border rounded-2xl flex flex-col gap-y-4 pb-14 p-10 items-start">
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-transparent outline-none py-3 w-full placeholder:text-[#756b66] focus:border-accent transition-all border-b-[1px] border-[#dad7d7]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-transparent outline-none py-3 w-full placeholder:text-[#756b66] focus:border-accent transition-all border-b-[1px] border-[#dad7d7]"
            />
            <textarea
              className="bg-transparent border-b outline-none py-12 w-full placeholder:text-[#756b66] focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
              required
              rows={6}
              cols={50}
            ></textarea>
            <button className="px-4 py-2 bg-black rounded-3xl text-base text-white font-semibold hover:scale-90 hover:bg-[#756b66] hover:border-white hover:border-2 transition-all duration-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
