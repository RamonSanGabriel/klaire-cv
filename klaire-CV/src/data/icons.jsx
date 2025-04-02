import { FaMobileScreenButton } from 'react-icons/fa6';
import { FaHome, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const headerIcons = [
  {
    id: 1,
    name: 'Mobile',
    icon: <FaMobileScreenButton />,
    path: 'tel:+353831324960',
  },
  {
    id: 2,
    name: 'Email',
    icon: <MdEmail />,
    path: 'mailto:rese6486@gmail.com',
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/klaire-therese-sison-san-gabriel-2b254192/',
  },
];

export const footerIcons = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome />,
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    icon: <FaMobileScreenButton />,
    path: '/about',
  },
  {
    id: 3,
    name: 'Work',
    icon: <MdEmail />,
    path: 'work',
  },
  {
    id: 4,
    name: 'CV',
    icon: <FaLinkedin />,
    path: '/cv',
  },
];
