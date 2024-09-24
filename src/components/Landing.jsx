import Hero from "./Hero";
import img from "../assets/Aboutimg.jpg";
import img2 from "../assets/Principal.jpg";
import { MdOutlineSportsVolleyball } from "react-icons/md";
import { GiMicroscope, GiTeacher } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import { Link } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <div className="text-black bg-white mb-[]">
      <Hero />
      <section className="">
        <div className="p-8">
          <h2 className="text-2xl font-bold font-serif mb-2">
            About Susanskar Vidya Mandir
          </h2>
          <p className="border-b-4 border-green-400 mb-8"></p>
          <div className="flex flex-col md:flex-row gap-4 justify-between ">
            <div className="max-w-[40rem]">
              <p className="tracking-wide font-serif ">
                Susanskar started its journey on 23rd June 2002 with classes
                Nursery and KGs. Now it has grown into full-fledged
                co-educational school having classes Nursery to 10th grade. It
                is affiliated to the council for Secondary School Certificate
                Examination, Maharashtra State. Within a short period of time,
                it has grown into one of the best schools in the city of
                Yavatmal, Maharshtra. Susanskar has adopted for its educational
                endeavour Holistic learning which transforms a person into an
                ideal and outstanding personality by inculcating human values
                and qualities to make him more dynamic, discreet, duty conscious
                and responsible towards himself as well as the nature, society
                and Nation.
              </p>
              <Link
                to="/about"
                className="btn mt-10 btn-secondary text-lg text-white"
              >
                Know More
              </Link>
            </div>
            <img src={img} className="h-96 w-96 object-cover" />
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold font-serif mb-2">
            Principal's message
          </h2>
          <p className="border-b-4 border-green-400 mb-8"></p>
          <div>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="h-[30rem] w-96">
                <img src={img2} className="h-96 w-96 object-cover mt-2" />
              </div>
              <p className="max-w-[50rem] tracking-wide font-serif">
                <span className="block mb-4 font-bold">
                  Dear Parents and Students,
                </span>
                It is with great pleasure that I welcome you to our school's
                Website. As Principal I am hugely impressed by the commitment of
                the management and the staff for providing excellent all round
                education for our students. The school that is being run under
                the well-established management of Susanskar Bahhuddeshiy
                Shikshan Sanstha has earned its name and fame by imparting
                excellent education since last 20 years. At our institution, we
                provide an atmosphere for multifaceted devel opment where
                children are encouraged to channelize their potential in the
                pursuit of excellence. The school strives hard to make the best
                possible efforts to instill strong values integrating with
                academics and extra-curricular activities to the children.
                Transforming every individual into a self-reliant and
                independent citizen, the school provides a blending of
                scholastic and co-scholastic activites. While academic
                excellence is our major thrust, the school is also devoted to
                prepare students for life, groom endeavour to always live up to
                this ideology and inculcate this into everything we do, with the
                aim that we will be able to ensure that the children grow to
                their full potential, while constantly being groomed to pass out
                as men and women competent to bear responsibility in all walks
                of life. The parents are the most stregthening power in shaping
                the future of children and their consistent support empowers us
                to do more and more. I pay my gratitude to them for their faith
                in us. I would like to extend my sincere gratitude and
                appreciation for all of the hardworking and dedicated educators
                and staff serving the school.
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-[#427BD2] my-8 p-4  text-center">
          <h2 className="text-3xl capitalize font-bold font-serif tracking-wide mb-8 text-white">
            when its overall devlopment
            <span className="block">we are your first choice</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex gap-2 text-start">
              <MdOutlineSportsVolleyball className="inline h-20 w-20 text-yellow-400 " />
              <p className="text-xl font-bold  font-serif text-white mt-3 ">
                Students <span className="block"></span>Achievement
              </p>
            </div>
            <div className="flex gap-2 text-start">
              <GrAchievement className="inline h-16 w-16 text-yellow-400 " />
              <p className="text-xl font-bold  font-serif text-white">
                Individual<span className="block">Student Approach</span>
              </p>
            </div>
            <div className="flex gap-2 text-start">
              <FaBookOpenReader className="inline h-16 w-16 text-yellow-400 " />
              <p className="text-xl font-bold  font-serif text-white">
                Practical<span className="block">Approachs</span>
              </p>
            </div>
            <div className="flex gap-2 text-start">
              <GiMicroscope className="inline h-16 w-16 text-yellow-400 " />
              <p className="text-xl font-bold  font-serif text-white">
                Communication<span className="block">Skills</span>
              </p>
            </div>
            <div className="flex gap-2 text-start">
              <GiTeacher className="inline h-16 w-16 text-yellow-400 " />
              <p className="text-xl font-bold  font-serif text-white">
                unique sports <span className="block">facility</span>
              </p>
            </div>
          </div>
        </div>
        <Testimonials />
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
