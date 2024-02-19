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
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
 
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'php',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Front-End Developer',
    company_name: 'Cover Hunt',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Mar 2022 - May 2022',
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Kelhel',
    icon: kelhel,
    iconBg: '#333333',
    date: 'May 2022 - Oct 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Diversity Cyber Council',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2022 - Present',
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
