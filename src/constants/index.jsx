// Importing React icons
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiAdobeillustrator } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

// Importing of project images
import BinarySolutions from "../assets/images/projects/binary solutions.png";
import Dweller from "../assets/images/projects/dweller.png";
import TumorTracker from "../assets/images/projects/tumor tracker.png";
import GreySense from "../assets/images/projects/greysense.png";
import IniGroup from "../assets/images/projects/ini group.png"

// Skillset constant
export const Skillset = [
  {
    skillID: 1,
    icon: <FaReact />,
    skill: "React",
  },
  {
    skillID: 2,
    icon: <FaPython />,
    skill: "Python",
  },
  {
    skillID: 3,
    icon: <FaHtml5 />,
    skill: "HTML",
  },
  {
    skillID: 4,
    icon: <FaCss3 />,
    skill: "CSS",
  },
  {
    skillID: 5,
    icon: <FaJsSquare />,
    skill: "Javascript",
  },
  {
    skillID: 6,
    icon: <RiTailwindCssFill />,
    skill: "TailwindCSS",
  },
  {
    skillID: 7,
    icon: <FaPhp />,
    skill: "PHP",
  },
  {
    skillID: 8,
    icon: <GrMysql />,
    skill: "MySQL",
  },
  {
    skillID: 9,
    icon: <SiAdobeillustrator />,
    skill: "Illustrator",
  },
  {
    skillID: 10,
    icon: <FaGithub />,
    skill: "Github",
  },
  {
    skillID: 11,
    icon: <FaFigma />,
    skill: "Figma",
  },
  {
    skillID: 11,
    icon: <FaBootstrap />,
    skill: "Bootstrap.",
  },
];

// Navigation Links constant
export const NavLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

// Project descriptions
export const ProjectInfo = [
  {
    projectId: 1,
    title: "Ini Group",
    description:
      "Official website for Ini Group, a graphic design agency dedicated to transforming ideas into visually stunning realities. The website showcases the services offered, projects completed, and provides a way for potential clients to get in touch. Developed with React.js, TailwindCss, Motion Framer, and deployed on vercel",
      liveLink: "https://inigroup.vercel.app/",
    image: IniGroup,
  },
  {
    projectId: 2,
    title: "Tumor Tracker",
    description:
      "An artificially intelligent system that uses tensorflow, keras and a Convolutionary Neural Network to diagnose skin lesions/cancer based on user-uploaded pictures. Developed in Python and Flask with a web interface interface (HTML, CSS, Javascript).",
    githubRepo: "https://github.com/binarysolutionss/tumor-tracker",
    image: TumorTracker,
  },
  {
    projectId: 3,
    title: "Dweller",
    description:
      "An interface for a home rentals service for a real estate agency. It will allow admistrators to upload and advetise homes that are to rent. The interface is a web based one with HTML, CSS and Javascript. It will use MySQL to store and retrieve vacant homes for display on the website. To be integrated with Python (Flask).",
    githubRepo: "https://github.com/binarysolutionss/dweller-home-rentals",
    image: Dweller,
  },
  {
    projectId: 4,
    title: "Binary Solutions",
    description:
      "A static generated website for a local tech company. Fully responsive, the project leverages static front-end technologies. Viewers can learn About the company and contact them through a form. Leverages HTML5, CSS3, and Javascript. Form handling is handled by APIs.",
    githubRepo: "https://github.com/binarysolutionss/binarysolutions-website",
    image: BinarySolutions,
  },
  {
    projectId: 5,
    title: "GreySense",
    description:
      "A library management system with a web interface. Allows users to perform standard library functions on books stored in a database. Has Create, Read, Update amd Delete functions (CRUD Capabilities). Back end is handled in PHP and MySQL.",
    githubRepo: "https://github.com/binarysolutionss/greysense-e-library",
    image: GreySense,
  },
];
