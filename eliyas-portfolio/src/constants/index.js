import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  graphics,
} from '../assets';


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },

  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Full stack developer',
    icon: prototyping,
  },
  {
    title: 'Graphics Design',
    icon: graphics,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    title: 'HTML',
  },
  {
    name: 'CSS 3',
    icon: css,
    title: 'CSS',
  },
  {
    name: 'JavaScript',
    icon: javascript,
    title: 'Javascript',
  },
  {
    name: 'TypeScript',
    icon: typescript,
    title: 'TypeScript',
  },
  {
    name: 'React JS',
    icon: reactjs,
    title: 'React JS',
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    title: 'Tailwind',
  },
  {
    name: 'Node JS',
    icon: nodejs,
    title: 'Node JS',
  },
  {
    name: 'postgresql',
    icon: postgresql,
    title: 'postgresql',
  },
  {
    name: 'git',
    icon: git,
    title: 'git',
  },
  {
    name: 'figma',
    icon: figma,
    title: 'figma',
  },
  {
    name: 'php',
    icon: docker,
    title: 'PHP',
  },
];

const experiences = [
  {
    title: 'Civil Engineering',
    company_name: 'Adigrat University, Ethiopia',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 20 2013 - July 30 2018',
  },
  {
    title: 'Vidio Game Design',
    company_name: 'xamk.fi',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2020 - Aug 26 2020',
  },
  {
    title: 'Front-End Development Bootcamp',
    company_name: 'github.com/mekbib-tekle',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Jan 2024',
  },
  {
    title: 'Full-Stack Web Development',
    company_name: 'Udemy',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2022 - Present',
  },
  {
    title: 'Ohjelmistokehittäjä',
    company_name: 'StadinAO',
    icon: dcc,
    iconBg: '#333333',
    date: 'Aug 2022 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Drum kit',
    description: 'The code implements event listeners to detect both keyboard inputs and on-screen button clicks, allowing users to play various drum sounds.',
   
    image: komikult,
    repo: 'https://github.com/eliyasson/Drum-kit',
    demo: 'https://eliyasson.github.io/Drum-kit/',
  },
  {
    id: 'project-2',
    name: 'KuvaKantele',
    description:
      'The KuvaKantele school project is a comprehensive web application designed using PHP, CSS, HTML, Bootstrap, and JavaScript. The project encompasses both an admin side and a user side, offering a versatile platform.',

    image: leaderboard,
    repo: 'https://github.com/eliyasson/Ohjelmointi-n-ytt-',
    demo: 'https://github.com/eliyasson/Ohjelmointi-n-ytt-',
  },
  {
    id: 'project-3',
    name: 'Small Library',
    description: 'The Small Library project is a compact and efficient web application designed to manage and organize a collection of books. Developed using a combination of HTML, CSS, and PHP and JavaScript, the project provides a user-friendly interface for both librarians and library visitors',
    
    image: math,
    repo: 'https://github.com/eliyasson/PHP-MySQL-Book-Records',
    demo: 'https://github.com/eliyasson/PHP-MySQL-Book-Records',
  },
  
  
];

export { services, technologies, experiences, projects };
