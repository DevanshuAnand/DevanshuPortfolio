import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Devanshu Anand',
  subtitle: 'Front-End Developer, B.Tech Undergrad',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profileImageCrop.jpeg',
  paragraphOne: 'I am a pre-final year B.Tech undergraduate student at BMS Institute of Technology, Banglore. I have keen interest in web developement and I have good experience on web developement tools like HTML, CSS, JS, REACT, etc. ',
  paragraphTwo: 'I have a sound knowledge of data sturctures and algorithms in C++ and advanced concepts like OOPs. I have basic knowledge of DBMS, MySQL and Operating systems.  ',
  paragraphThree: 'I also have hands on experience on Arduino and IoT based projects.',
  resume: 'https://www.canva.com/design/DAEigNQciEE/uI9KQcaeVyc4KBeBI44Pxw/view?utm_content=DAEigNQciEE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'recipe app.PNG',
    title: 'Recipe search ',
    info: 'This is a simple webpage designed using HTML, CSS and javascript. It uses an API to recommened the best recipes based on the given ingridients. ',
    info2: ' The webpage even contains the video tutorials for the given recipes. The webpage is hosted on netlify.',
    url: 'https://get-your-recipes-js.netlify.app/',
    repo: 'https://github.com/DevanshuAnand/Recipe-Search', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Copy of Circuit Diagram.png',
    title: 'Smart dustbin',
    info: 'The main objective of the project is to design a smart dustbin that will help in keeping our environment clean and also eco-friendly. We are inspired by Swaach Bharat Mission. ',
    info2: 'This smart dustbin the management system is built on the microcontroller-based system having ultrasonic sensors on the dustbin. In this proposed technology we have designed a smart dustbin using ARDUINO UNO, along with ultrasonic sensor, servo motor, and battery jumper wire.',
    url: 'https://drive.google.com/file/d/1cHc8EHGjwGDnRLkrbzFHchEN80jYxQ51/view?usp=sharing',
    repo: 'https://github.com/DevanshuAnand/Smart-Dustbin', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'interiorImage.PNG',
    title: 'Interior Design portfolio',
    info: 'An aesthetic landing page for interior designing firm',
    info2: 'The website is design using HTML and CSS and is hosted using github pages',
    url: 'https://devanshuanand.github.io/Landing-page_Interior-design/',
    repo: 'https://github.com/DevanshuAnand/Landing-page_Interior-design', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/DevanshuAnand7',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/devanshu-anand-4b8932146/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DevanshuAnand/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
