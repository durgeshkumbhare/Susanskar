import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Sidebar from "../components/Sidebar";


const Homelayout = () => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <Sidebar />
      <Landing />
      
    </div>
  );
};

export default Homelayout;
