import css from './CVPage.module.css';
import { useEffect, useRef } from 'react';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { useReactToPrint } from 'react-to-print';
import { printBtn } from '../../data/cv';
import { header } from '../../data/header';

const CVPage = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  const { print } = printBtn;
  const { name, title, image } = header;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <h1>CV Page</h1>
      <button onClick={handlePrint}>{print}</button>
      <div ref={contentRef} className={css.cvWrapper}>
        <header>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <p>Manila, Phlippines</p>
          <address>
            <p>Mobile number</p>
            <p>rese6486@gmail.com</p>
          </address>
          <img src={image} />
        </header>
      </div>
    </>
  );
};

export default CVPage;
