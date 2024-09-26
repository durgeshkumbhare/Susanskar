import Navbar from "../components/Navbar";
import visionImg from "../assets/vision_mission_obj_3r-02.png";
import Footer from "../components/Footer";

const Vision = () => {
  return (
    <section className="bg-white h-[100%]">
      <Navbar />
      <div className="grid md:grid-cols-2 gap-2  p-6 ">
        <img className="right-[38rem] w-96 h-96" src={visionImg} />
        <div className="mt-10">
          <p className="text-gray-800 ">
            <span className="text-xl text-red-500 block  mb-4 "> Vision</span>
            Students learn to be productive citizens when given a stimulating
            environment, enough time, and the right opportunities. Our aim is to
            uphold high standards and expectations that challenge each student
            to reach their potential.
          </p>
          <p className="text-gray-800 mt-6">
            <span className="text-xl text-red-500 block mb-4 "> Mission</span>
            Our goal is to provide a friendly, nurturing, and positive
            environment where children feel safe, enjoy their childhood, and are
            encouraged to achieve their full potential while upholding strong
            ethical and moral values. We believe that fostering a sense of
            belonging and security is essential for their personal growth. By
            creating a supportive atmosphere, we empower children to develop
            confidence, resilience, and a love for learning that lasts a
            lifetime.
          </p>
        </div>
      </div>
      <div className="p-6 ">
        <h2 className="capitalize text-center text-3xl text-gray-900">
          a fresh Perspective on education
        </h2>
        <p className="text-center mt-4 mb-8 text-lg text-black">
          Susanskar School has developed a fresh perspective on education to
          enhance the value and qulaity of education. It believes in :
        </p>
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <div className="card bg-[#427BD2] text-white w-96 h-80 shrink-0">
            <div className="card-body">
              <h2 className="card-title text-yellow-400 ">Visualization</h2>
              <p>
                Bring dull academic concepts to life with visual and practical
                learning experiences, helping the students to understand how
                their schooling applies in the real-world. Include using the
                interactive white-board to display photos, audio clips and
                videos, as well as encouraging the students to get out of their
                seats with classroom experiments and local field trips.
              </p>
            </div>
          </div>
          <div className="card bg-[#427BD2]  text-white w-96 h-80">
            <div className="card-body">
              <h2 className="card-title text-yellow-400">Cooperative learning</h2>
              <p>
                Encourage students of mixed abilities to work together by
                promoting small group or whole class activities.
              </p>
            </div>
          </div>
          <div className="card bg-[#427BD2] text-white w-96 h-80">
            <div className="card-body">
              <h2 className="card-title text-yellow-400">Inquiry-based instruction</h2>
              <p>
                Pose thought-provoking questions which inspire the students to
                think for themselves and become more independent learners.
              </p>
            </div>
          </div>
          <div className="card bg-[#427BD2] text-white w-96 h-80">
            <div className="card-body">
              <h2 className="card-title text-yellow-400">Differentiation</h2>
              <p>
                Differentiate the teaching by allocating tasks based on
                students’s abilities, to ensure no one gets left behind.
              </p>
            </div>
          </div>
          <div className="card bg-[#427BD2] text-white w-96 h-80">
            <div className="card-body">
              <h2 className="card-title text-yellow-400">Technology in the classroom</h2>
              <p>
                Incorporating technology into teaching is a great way to
                actively engage the students, especially as digital media
                surrounds young people in the 21st century.
              </p>
            </div>
          </div>
          <div className="card bg-[#427BD2] text-white w-96 h-80">
            <div className="card-body">
              <h2 className="card-title text-yellow-400">Behaviour Management</h2>
              <p>
                Implementing an effective behaviour management strategy is
                crusial to gain the students respect and ensure students have an
                equal chance of reaching their full potential.
              </p>
            </div>
          </div>
          <div className="card bg-[#427BD2] text-white w-96 h-80">
            <div className="card-body">
              <h2 className="card-title text-yellow-400">Professional Development</h2>
              <p>
                Engaging teachers in regular professional development programmes
                is a great way to enhance teaching and learning in the
                classrooms. Sessions include learning about new educational
                technologies, online safety training, advice on how to use the
                teaching aids and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Vision;
