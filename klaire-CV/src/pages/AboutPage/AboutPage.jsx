import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default AboutPage;
