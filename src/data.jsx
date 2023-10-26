import { nanoid } from 'nanoid';
import { FaPython, FaReact } from 'react-icons/fa';
import {SiCsharp} from 'react-icons/si';
import ttt from './assets/images/ttt.png'
import tdl from './assets/images/tdl.png'
import cg from './assets/images/cg.png'
import menu from './assets/images/menu.png'
import getimages from './assets/images/gimages.png'
import mymdb from './assets/images/mymdb.png'
import mybooks from './assets/images/mybooks.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'MERN',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Proficiency in full-stack development with MongoDB as the model, React on the front-end hosted on an Express (Node) server.',
  },
  {
    id: nanoid(),
    title: 'Machine Learning',
    icon: <FaPython className="h-16 w-16 text-emerald-500" />,
    text: 'Can deliver a range of efficient machine learning algorithms, both in Python with the help of the Scikit-learn library and in R.',
  },
  {
    id: nanoid(),
    title: 'Object-Oriented Systems Development',
    icon: <SiCsharp className="h-16 w-16 text-emerald-500" />,
    text: 'Experienced in Object-oriented programming with C# alongside the use of the .NET framework.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: getimages,
    url: 'https://getimagesdk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/getImages',
    title: 'Get Images',
    text: 'The application allows the user to search for any object of their choice. Upon item entry, it returns 10 high quality photos of the requested object. The pictures are fetched using the Unsplash API.',
  },
  {
    id: nanoid(),
    img: mymdb,
    url: 'https://mymdbdk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/mymdb',
    title: 'My Personal IMDB',
    text: 'The application lists the movies that I watch, alongside relevant information such as the genre and the year of release. Each movie also contains my personal rating and a brief synopsis and review.',
  },
  {
    id: nanoid(),
    img: mybooks,
    url: 'https://mybooksdk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/mybooks',
    title: 'My Personal Book Reviews',
    text: 'A listing of the books that I have read, accompanied by their authors, genre and year of publishment. Each article is accompanied by a personal take.',
  },
  {
    id: nanoid(),
    img: ttt,
    url: 'https://tictactoedk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/tictactoe',
    title: 'Tic-tac toe',
    text: 'A simple tic-tac toe game for two players. The first player is marked X and the second player is marked O. The game also tallies scores of the players and displays the total score in a scoreboard.',
  },
  {
    id: nanoid(),
    img: cg,
    url: 'https://generatecolordk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/colorgen',
    title: 'Color generator',
    text: 'The web application allows the user to generate 10 each of lighter and darker shades for any chosen color from a color palettes. Can be used by other applications for styling purposes.',
  },
  {
    id: nanoid(),
    img: menu,
    url: 'https://menudk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/menu',
    title: 'Menu',
    text: 'The menu of a restaurant serving burgers, pizzas and ice creams. The web application allows the users to specifically search for any of the three categories of items or view them all.',
  },
  {
    id: nanoid(),
    img: tdl,
    url: 'https://todolistdk.netlify.app/',
    github: 'https://github.com/Dikshyanta23/todolist',
    title: 'To-do list',
    text: "A simple to-do list that allows the users to add a task to the list, modify and delete it. The application uses the browser's local storage to persist the data. Therefore, the app can be used across browser refreshes.",
  },
];
