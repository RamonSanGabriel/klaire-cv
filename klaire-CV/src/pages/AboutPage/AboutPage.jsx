import { useEffect } from 'react';
import AboutMe from '../../components/AboutMe/AboutMe';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1>About Me</h1>
      <AboutMe />
    </div>
  );
};

export default AboutPage;
