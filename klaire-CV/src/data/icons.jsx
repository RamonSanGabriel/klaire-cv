import { FaMobileScreenButton } from 'react-icons/fa6';
import { FaHome, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const iconDetails = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome />,
    href: '/',
  },
  {
    id: 2,
    name: 'Mobile',
    icon: <FaMobileScreenButton />,
    href: 'tel:+353831324960',
  },
  {
    id: 3,
    name: 'Email',
    icon: <MdEmail />,
    href: 'mailto:rese6486@gmail.com',
  },
  {
    id: 4,
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/klaire-therese-sison-san-gabriel-2b254192/',
  },
];
