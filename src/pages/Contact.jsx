import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import Sidebar from "../components/Sidebar";

const Contact = () => {
  return (
    <section className="bg-white h-lvh">
      <Navbar />
      <Sidebar />
      <article className="mt-20 p-4">
        <h1 className="text-black text-xl font-bold tracking-wide border-b-2 border-black pb-4 font-serif">
          Get In Touch
        </h1>
        <div className="mt-10">
          <form className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-4 flex-col shrink">
              <label className="input input-bordered flex  items-center gap-2  bg-gray-50 border-2 border-black text-black ">
                Name
                <input
                  type="text"
                  className="grow bg-[#0fa4af]"
                  placeholder=""
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-black bg-gray-50 border-2 border-black">
                Email
                <input type="text" className="grow" />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-black bg-gray-50 border-2 border-black">
                Message
                <input type="text" className="grow" />
              </label>
            </div>
            <div>
              <label className="input input-bordered flex items-start p-2 gap-2 h-28 text-black bg-gray-50 border-2 border-black mb-4">
                Comment
                <input type="text" className="grow text-white" />
              </label>
              <button className="btn btn-primary text-lg w-32">Submit</button>
            </div>
          </form>
        </div>
      </article>
      <Footer />
    </section>
  );
};

export default Contact;
