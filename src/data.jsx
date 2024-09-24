import hero1 from "./assets/hero1.jpg";
import hero2 from "./assets/hero2.jpeg";
import hero3 from "./assets/hero3.jpeg";
import hero4 from "./assets/hero4.jpeg";
import hero5 from "./assets/hero5.jpeg";
import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";
import { nanoid } from "nanoid";

import {
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";

export const heroImages = [
  {
    id: nanoid(),
    img: hero1,
  },
  {
    id: nanoid(),
    img: hero2,
  },
  {
    id: nanoid(),
    img: hero3,
  },
  {
    id: nanoid(),
    img: hero4,
  },
  {
    id: nanoid(),
    img: hero5,
  },
];

export const messages = [
  {
    id: nanoid(),
    img: 1,
    name: "Dr. Harshwardhan bora",
    position: "President",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "Education is the birthright of every child. There are many reasons why education is vital for children. It develops wisdom and intelligence which help in being self-dependent in life. It plays a vital role in the development of personality. It develops confidence also and helps us to become a responsible citizen of the nation. Children are the future of our nation. They learn that what is being taught since childhood. They should be encouraged to study and get a better education. Education is an essential component in a child's life as it enhances their skill, personality and attitude. It is rightly said that 'education is the foundation upon which we build our future'. We all parents want to see our kids getting success in life which is possible only through good education.",
  },
  {
    id: nanoid(),
    img: 1,
    name: "Hon. Shri Sunilji Gugaliya",
    position: "Vice President",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "When educating the minds or our youth, we must not forget to educate their heart. The biggest and most complex obstacle is your own mind, educating the mind without educating the heart is no education at all, just sanskarit your mind with “susanskar”.",
  },
  {
    id: nanoid(),
    img: 1,
    name: "Hon. Shri K. Sanjay",
    position: "Secretory",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "Susanskar English Medium School is established with vision to provide a friendly, nurturing and positive environment where children feel safe, enjoy their childhood, acheive their potential with strong ethical moral values. Along with imparting well designed & thought provoking education Susanskar School pays due attention to the mental, physical, emotional and spiritual development of their students. The school strives hard to encompass the prescribed syllabi of Maharashtra State Board as well as a curriculum that lies beyond the classroom education for upliftment of our students to the competitive challenges of future. I hope that our students will excel in every sphere of life and thereby making their parents, school and the Nation proud.With Best Wishes!",
  },
  {
    id: nanoid(),
    img: 1,
    name: "Hon. Shri Pravin Lunawat",
    position: "Managing Trustee",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "Education should be formative and not merely informative. Right education lays emphasis on holistic development of the student’s character and personality which should normally lead him/her to self awakening and fulfillment. It aims building leaders who are dedicated to the service of the nation and humanity. It endeavours to guide and shape natural talents so that a student is able to -Absorb and live by the eternal and universal values of life as enunciated by ancient and modern thinkers and rooted in India’s spiritual heritage, culture and tradition.",
  },
  {
    id: nanoid(),
    img: 1,
    name: "Hon. Shri Manoj Lunawat",
    position: "Managing Trustee",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "Education is a highly essential tool that helps you irrespective of the age, whether you are a child or a grown-up. Education is a class of learning and is achieved through the four walls of the school as well as at the playground. Every situation and activity we see or experience teaches us something.",
  },
  {
    id: nanoid(),
    img: 1,
    name: "Hon. Shri Ganesh Gupta",
    position: "Managing Trustee",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "It is the education that makes an individual self reliant, helps to suppress the social evils and contribute towards the delopement of the society and nation as a whole. Education helps in unravelling the mystery of nature. It enables us to understand and improve the working of our society.",
  },
  {
    id: nanoid(),
    img: 1,
    name: "Hon. Shri Rajesh Gupta",
    position: "Managing Trustee",
    Address: "Susanskar Bahuuddeshiy Shikshan Sanstha, Yavatmal.",
    message:
      "If you want to be more powerful in life, educate yourself, the future belongs to those who learn more skills and combine them in creative ways. Education is the premise of progress in every society, in every family.",
  },
];

export const sublinks = [
  {
    pageId: nanoid(),
    page: "product",
    links: [
      {
        id: nanoid(),
        label: "community",
        icon: <Fa500Px />,
        url: "/product/community",
      },
      {
        id: nanoid(),
        label: "content",
        icon: <FaAccusoft />,
        url: "/product/content",
      },
      {
        id: nanoid(),
        label: "roles",
        icon: <FaAdversal />,
        url: "/product/roles",
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "developers",
        icon: <FaAvianex />,
        url: "/solutions/developers",
      },
      {
        id: nanoid(),
        label: "content managers",
        icon: <FaBitcoin />,
        url: "/solutions/content-managers",
      },
      {
        id: nanoid(),
        label: "business teams",
        icon: <FaBtc />,
        url: "/solutions/business teams",
      },
      {
        id: nanoid(),
        label: "ecommerce",
        icon: <FaCodiepie />,
        url: "/solutions/ecommerce",
      },
    ],
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",
        icon: <FaDocker />,
        url: "/resources/starters",
      },
      {
        id: nanoid(),
        label: "showcase",
        icon: <FaGithubSquare />,
        url: "/resources/showcase",
      },
    ],
  },
];

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    url: "/about",
    text: "About us",
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: "/admission",
    text: "admission",
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: "/contact",
    text: "contact us",
    icon: <FaCalendarAlt />,
  },
 
];
