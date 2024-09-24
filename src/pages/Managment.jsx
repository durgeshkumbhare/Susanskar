import React from "react";
import img1 from "../assets/image1.jpeg";
import img2 from "../assets/image2.jpeg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpeg";
import img6 from "../assets/image6.jpg";
import img7 from "../assets/image7.jpg";
import img8 from "../assets/image8.jpeg";
import img9 from "../assets/image9.jpg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Managment = () => {
  return (
    <article>
      <Navbar />
      <Sidebar />
      <div className="bg-white pt-4 pb-4">
        <h1 className="text-center text-3xl text-[#427BD2] capitalize font-serif tracking-wider font-bold mb-10 ">
          School Managment
        </h1>
        <div className="p-10 flex flex-col md:flex-row gap-8">
          <div>
            <h1 className="text-[#5e749f] text-2xl font-bold mt-6">
              Dr. Harshwardhan Bora
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">President</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              Education is the birthright of every child. There are many reasons
              why education is vital for children. It develops wisdom and
              intelligence which help in being self-dependent in life. It plays
              a vital role in the development of personality. It develops
              confidence also and helps us to become a responsible citizen of
              the nation. Children are the future of our nation. They learn that
              what is being taught since childhood. They should be encouraged to
              study and get a better education. Education is an essential
              component in a child's life as it enhances their skill,
              personality and attitude. It is rightly said that"education is the
              foundation upon which we build our future". We all parents want to
              see our kids getting success in life which is possible only
              through good education.
            </p>
          </div>
          <img
            src={img1}
            alt=""
            className="mt-6 rounded-lg h-96 w-96 mx-auto object-cover"
          />
        </div>
        <div className="px-10 flex flex-col md:flex-row  object-cover gap-8">
          <img
            src={img2}
            alt=""
            className="mt-6 rounded-lg mb-4 h-96 w-96 mx-auto"
          />
          <div className="mt-4">
            <h1 className="text-[#5e749f] text-2xl font-bold ">
              Hon. Shri Sunilji Gugaliya
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Vice President</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              When educating the minds or our youth, we must not forget to
              educate their heart. The biggest and most complex obstacle is your
              own mind, educating the mind without educating the heart is no
              education at all, just sanskarit your mind with “susanskar”.
            </p>
          </div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-8">
          <div>
            <h1 className="text-[#5e749f] text-2xl font-bold">
              Hon. Shri K. Sanjay
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Secretory</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              Education should be formative and not merely informative. Right
              education lays emphasis on holistic development of the student’s
              character and personality which should normally lead him/her to
              self awakening and fulfillment. It aims building leaders who are
              dedicated to the service of the nation and humanity. It endeavours
              to guide and shape natural talents so that a student is able to
              -Absorb and live by the eternal and universal values of life as
              enunciated by ancient and modern thinkers and rooted in India’s
              spiritual heritage, culture and tradition.
            </p>
          </div>
          <img
            src={img3}
            alt=""
            className="mt-6 rounded-lg h-96 w-96 mx-auto"
          />
        </div>
        <div className="px-10 flex flex-col md:flex-row gap-8">
          <img
            src={img4}
            alt=""
            className="mt-6 rounded-lg mb-4 h-96 w-96 mx-auto"
          />
          <div className="mt-4">
            <h1 className="text-[#5e749f] text-2xl font-bold ">
              Hon. Shri Sunilji Gugaliya
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Vice President</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              When educating the minds or our youth, we must not forget to
              educate their heart. The biggest and most complex obstacle is your
              own mind, educating the mind without educating the heart is no
              education at all, just sanskarit your mind with “susanskar”.
            </p>
          </div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-8">
          <div>
            <h1 className="text-[#5e749f] text-2xl font-bold">
              Hon. Shri K. Sanjay
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Secretory</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              Education should be formative and not merely informative. Right
              education lays emphasis on holistic development of the student’s
              character and personality which should normally lead him/her to
              self awakening and fulfillment. It aims building leaders who are
              dedicated to the service of the nation and humanity. It endeavours
              to guide and shape natural talents so that a student is able to
              -Absorb and live by the eternal and universal values of life as
              enunciated by ancient and modern thinkers and rooted in India’s
              spiritual heritage, culture and tradition.
            </p>
          </div>
          <img
            src={img5}
            alt=""
            className="mt-6 rounded-lg h-96 w-96 mx-auto"
          />
        </div>
        <div className="px-10 flex flex-col md:flex-row gap-8">
          <img
            src={img6}
            alt=""
            className="mt-6 rounded-lg mb-4 h-96 w-96 mx-auto"
          />
          <div className="mt-4">
            <h1 className="text-[#5e749f] text-2xl font-bold ">
              Hon. Shri Pravin Lunawat
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Managing Trustee</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              Education is a highly essential tool that helps you irrespective
              of the age, whether you are a child or a grown-up. Education is a
              class of learning and is achieved through the four walls of the
              school as well as at the playground. Every situation and activity
              we see or experience teaches us something.
            </p>
          </div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-8">
          <div>
            <h1 className="text-[#5e749f] text-2xl font-bold">
              Hon. Shri Manoj Lunawat
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Managing Trustee</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              It is the education that makes an individual self reliant, helps
              to suppress the social evils and contribute towards the delopement
              of the society and nation as a whole. Education helps in
              unravelling the mystery of nature. It enables us to understand and
              improve the working of our society.
            </p>
          </div>
          <img
            src={img7}
            alt=""
            className="mt-6 rounded-lg h-96 w-96 mx-auto"
          />
        </div>
        <div className="px-10 flex flex-col md:flex-row gap-8">
          <img
            src={img8}
            alt=""
            className="mt-6 rounded-lg mb-4 h-96 w-96 mx-auto"
          />
          <div className="mt-4">
            <h1 className="text-[#5e749f] text-2xl font-bold ">
              Hon. Shri Ganesh Gupta
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Managing Trustee</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              If you want to be more powerful in life, educate yourself, the
              future belongs to those who learn more skills and combine them in
              creative ways. Education is the premise of progress in every
              society, in every family.
            </p>
          </div>
        </div>
        <div className="p-10 flex flex-col md:flex-row gap-8">
          <div>
            <h1 className="text-[#5e749f] text-2xl font-bold">
              Hon. Shri Manoj Lunawat
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Managing Trustee</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              It is the education that makes an individual self reliant, helps
              to suppress the social evils and contribute towards the delopement
              of the society and nation as a whole. Education helps in
              unravelling the mystery of nature. It enables us to understand and
              improve the working of our society.
            </p>
          </div>
          <img
            src={img9}
            alt=""
            className="mt-6 rounded-lg h-96 w-96 mx-auto"
          />
        </div>
        <div className="px-10 mb-10 flex flex-col md:flex-row gap-8">
          <img
            src={img1}
            alt=""
            className="mt-6 rounded-lg mb-4 h-96 w-96 mx-auto"
          />
          <div className="mt-4">
            <h1 className="text-[#5e749f] text-2xl font-bold ">
              Hon. Shri Ganesh Gupta
            </h1>
            <h3 className="text-xl text-black">
              <span className="text-red-500 ">Managing Trustee</span>, Susanskar
              Bahuuddeshiy Shikshan Sanstha, Yavatmal.
            </h3>
            <p className="mt-8 text-gray-700 tracking-wide ">
              If you want to be more powerful in life, educate yourself, the
              future belongs to those who learn more skills and combine them in
              creative ways. Education is the premise of progress in every
              society, in every family.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </article>
  );
};

export default Managment;
