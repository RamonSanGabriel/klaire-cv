import { FaMobileScreenButton } from 'react-icons/fa6';
import { FaHome, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const headerIcons = [
  {
    id: 1,
    link: 'Mobile',
    icon: <FaMobileScreenButton />,
    href: 'tel:+353831324960',
  },
  {
    id: 2,
    link: 'Email',
    icon: <MdEmail />,
    href: 'mailto:rese6486@gmail.com',
  },
  {
    id: 3,
    link: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/klaire-therese-sison-san-gabriel-2b254192/',
  },
];

/* export const cvIcons = [
  {
    id: 1,
    link: 'Home',
    icon: <FaHome />,
    href: 'Manila, Philippines',
  },
  {
    id: 2,
    link: 'Mobile',
    icon: <FaMobileScreenButton />,
    href: '+353831324960',
  },
  {
    id: 3,
    link: 'Email',
    icon: <MdEmail />,
    href: 'rese6486@gmail.com',
  },
  {
    id: 4,
    link: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/klaire-therese-sison-san-gabriel-2b254192/',
  },
]; */

export const navIcons = [
  {
    id: 1,
    link: 'Home',
    icon: <FaHome />,
    path: '/',
  },
  {
    id: 2,
    link: 'About',
    icon: <FaMobileScreenButton />,
    path: '/about',
  },
  {
    id: 3,
    link: 'Work',
    icon: <MdEmail />,
    path: '/work',
  },
  {
    id: 4,
    link: 'CV',
    icon: <FaLinkedin />,
    path: '/cv',
  },
];
