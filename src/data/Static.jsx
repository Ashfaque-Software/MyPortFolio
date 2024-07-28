import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";
import symfony from "../assets/langues/symfony.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import spring from "../assets/langues/spring.png";

// Array of work objects
export const works = [
  {
    title: "Skin-Store-App",
    imgUrl: "https://th.bing.com/th/id/OIP.qFlh8gORyneGOfXWGrnNvAHaEo?rs=1&pid=ImgDetMain",
    tech: ["Html", "Css", "JavaScript", "React", "Redux", "MongoDB"],
    GithubRepo: ["https://github.com/Ashfaque-Software/Skin-store"],
    workUrl: "https://scintillating-monstera-30f36f.netlify.app/",
    duration: "400",
  },
  {
    title: "Weather-App",
    imgUrl: "https://discussions.apple.com/content/attachment/585228040",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    GithubRepo: ["https://github.com/Ashfaque-Software/Weather-App"],
    workUrl: "https://66a5fbc0b3b714f4c12a5dce--glistening-treacle-14cf78.netlify.app/",
    duration: "500",
  },
  {
    title: "MyPortfolio",
    imgUrl: "https://i.postimg.cc/sfK6J7Wn/Screenshot-2024-02-20-203521.png",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    GithubRepo: ["https://github.com/Ashfaque-Software/Ashfaque-Software.github.io"],
    workUrl: "https://ashfaque-software.github.io/",
    duration: "500",
  }
];

// Array of experience objects
export const experiences = [
  {
    date: "January 2023 - February 2023",
    company: "AfterCode",
    position: "Flutter Developer",
    description: "I successfully developed a mobile application for managing a healthcare facility, catering to both the administrative staff and patients. This involved conducting a thorough study, designing intuitive interfaces, and seamlessly integrating the Backend system.",
  },
  {
    date: "January 2022 - February 2022",
    company: "AfterCode",
    position: "Internship",
    description: "I have expertise in creating visually captivating and user-friendly websites for restaurants. Additionally, I possess skills in managing automated tests to ensure optimal functionality and performance.",
  },
  {
    date: "January 2020 - Present",
    company: "Self employed",
    position: "Freelancer",
    description: "I specialize in designing user interfaces for websites and mobile applications. I also create logos, posters, and mockups. My designs are visually appealing, intuitive, and tailored to engage target audiences. With a deep understanding of design principles and industry trends, I consistently deliver high-quality work that captivates users.",
  }
];

// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 7,
    src: angular,
    title: "Node.js",
    style: "shadow-rose-500",
  },
  {
    id: 9,
    src: symfony,
    title: "MongoDB",
    style: "shadow-black",
  },
  {
    id: 10,
    src: spring,
    title: "Redux",
    style: "shadow-green-600",
  }
];
