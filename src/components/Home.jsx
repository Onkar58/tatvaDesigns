import Navbar from "./Navbar";
import Landing from "./Landing";

const Home = () => {
  return (
    <div className="flex w-[100vw] min-h-[100vh] relative" id="home">
      <div className="w-[50%] sm:w-[25%] min-h-full bg-[#102633]"></div>
      <div className="w-[50%] sm:w-[75%] min-h-full bg-black "></div>
      <Navbar/>
      <Landing/>
    </div>
  );
};

export default Home;
