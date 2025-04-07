import { useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { useReactToPrint } from 'react-to-print';
import { printBtn } from '../../data/cv';

const CVPage = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  const { name } = printBtn;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <h1>CV Page</h1>
      <button onClick={handlePrint}>{name}</button>
      <div ref={contentRef}>
        <Header />
        <h2>Education</h2>
      </div>
    </>
  );
};

export default CVPage;
