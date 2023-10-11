import { FaPlus } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services" className="w-[90%] h-full mx-auto flex flex-col gap-14">
      {/* Heading */}
      <div className="w-[80%] pb-8 lg:pb-10 border-b-[1px] border-[#dad7d7]">
        <p className="text-black font-bold text-4xl md:text-6xl lg:text-9xl">
          We specialize in these fields.
        </p>
      </div>
      {/* SubHeading */}
      <div className="w-[80%]">
        <p className="text-[#0a0a0a] text-xl md:text-2xl lg:text-3xl text-left">
          We research new oppurtunities for a better everyday life, and design
          new solutions for people and planet. We belive that every great design
          begins with a conversation. Contact us to start the discussion around
          your design needs.
        </p>
      </div>
      {/* Services */}
      <div className="lg:w-[85%] lg:ml-20 flex flex-col md:flex-row gap-2  md:justify-between text-[#0e0e0e] uppercase">
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p className="">Architectural Planning</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>Planning</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>Vastu Planning</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p className="">3D ELEVATION</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>INTERIOR DESIGN</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>3D MODEL</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p className="">NAKSHA PASS</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>CONSTRUCTION DRAWING</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>SITE SUPERVISION</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p className="">LANDSCAPE DESIGN</p>
          </div>
          <div className="flex items-center gap-2">
            <FaPlus fill="#000" />
            <p>PROJECT MANAGEMENT</p>
          </div>
        </div>
      </div>
      {/* Countup */}
      <div className="w-full flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-1 w-full md:w-[30%] text-center md:text-left">
          <div className="py-2 text-7xl md:text-8xl lg:text-9xl font-semibold border-b-[1px] border-[#616161]">64</div>
          <p className="py-5 text-xl font-normal text-[#0a0a0a]">Clients around the world</p>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-[30%] text-center md:text-left">
          <div className="py-2 text-7xl md:text-8xl lg:text-9xl font-semibold border-b-[1px] border-[#616161]">124</div>
          <p className="py-5 text-xl font-normal text-[#0a0a0a]">Projects Completed</p>
        </div>
        <div className="flex flex-col gap-1 w-full md:w-[30%] text-center md:text-left">
          <div className="py-2 text-7xl md:text-8xl lg:text-9xl font-semibold border-b-[1px] border-[#616161]">244K</div>
          <p className="py-5 text-xl font-normal text-[#0a0a0a]">Square Feet</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
