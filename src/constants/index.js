import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
} from "../assets";

import mysql from "../assets/mysql.png";
import python from "../assets/python-logo.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import nextjs from "../assets/nextjs.png";

import ModernBank from "../assets/modern_bank.png";
import Furniture from "../assets/furniture.png";
import Cryptobase from "../assets/cryptobase.png";
import GrowthStreet from "../assets/growthStreet.png";
import PhotoStock from "../assets/PhotoStock.png";
import HouseRental from "../assets/HouseRental.png";

import Digda from "../assets/digda.jpeg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Designer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tio proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tio does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Saya sangat senang bisa bekerja sama dengan Tio, dia memiliki skill komunikasi dan teknis yang sangat baik.",
    name: "Digda Aro",
    designation: "PM",
    company: "SpeedCash",
    image: Digda,
  },
];

const projects = [
  {
    name: "Clothing Store",
    description:
      "A modern website built with reactjs and tailwindcss about GrowthStreet, which contains a navbar, hero section, CTA button, products, slider, product slider, contact, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: GrowthStreet,
    source_code_link: "https://github.com/tiodwisatrio/clothing-store-server",
  },
  {
    name: "Cashier App",
    description:
      "A modern website built with reactjs and tailwindcss about cashier app, which contains a navbar, hero section, CTA button, products, slider, product slider, contact, and more.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: Furniture,
    source_code_link: "",
  },
  {
    name: "Modern Bank",
    description:
      "React JS application consisting of a stunning hero section, high-quality assets and gradients, business stats, reusable feature sections with call-to-action buttons, testimonials, and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "figma",
        color: "pink-text-gradient",
      },
    ],
    image: ModernBank,
    source_code_link: "https://github.com/tiodwisatrio/modern_bank",
  },
];

// const certificate = [
//   {
//     title: "Javascript Algorithms and Data Structures",
//     company: "FreeCodeCamp",
//     description: "FreeCodeCamp",
//     Image:
//       "https://www.freecodecamp.org/certification/tiodwisatrio/javascript-algorithms-and-data-structures",
//     link: "https://www.freecodecamp.org/certification/tiodwisatrio/javascript-algorithms-and-data-structures",
//   },
//   {
//     title: "Data Engineering Professional",
//     company: "Rapidminer",
//     description: "Rapidminer",
//     image:
//       "https://www.rapidminer.com/learn/certificates/5f9f9b5b-9b5b-4b5b-9b5b-9b5b9b5b9b5b",
//     link: "https://ti-user-certificates.s3.amazonaws.com/5733896a-1d71-46e5-b0a3-1ffcf845fe21/69440fb0-c6f7-4c75-a752-c6dcd371f3b0-tio-dwi-satrio-898d198c-269e-4043-8328-f9f77151dc6d-certificate.pdf",
//   },
// ];

export { services, technologies, testimonials, projects };
