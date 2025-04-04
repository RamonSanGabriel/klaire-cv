import { useEffect } from 'react';
import Work from '../../components/Work/Work';

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <h1>Work Experience</h1>
      <Work />
    </div>
  );
};

export default WorkPage;
