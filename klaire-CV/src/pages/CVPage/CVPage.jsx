import css from './CVPage.module.css';
import { useEffect, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import { headerCV, printBtn } from '../../data/cv';
import { professionalCV, summaryQualification } from '../../data/cv';

const CVPage = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  const { print } = printBtn;
  const { location, email, mobile, name, position } = headerCV;
  const { profTitle, profDescription } = professionalCV;
  const { summaryTitle, sumList1, sumList2, sumList3, sumList4, sumList5 } =
    summaryQualification;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <h1>CV Page</h1>
      <button onClick={handlePrint}>{print}</button>
      <div ref={contentRef} className={css.cvWrapper}>
        <header>
          <ul className={css.headerList}>
            <li>{location}</li>
            <li>{email}</li>
            <li>{mobile}</li>
          </ul>
          <h1>{name}</h1>
          <h2>{position}</h2>
        </header>
        <section className={css.cvProfessionalWrapper}>
          <h3 className={css.profTitle}>{profTitle}</h3>
          <p className={profDescription}>{profDescription}</p>
        </section>
        <section className={css.summaryQualification}>
          <h3 className={css.profTitle}>{summaryTitle}</h3>
          <ul className={css.sumList}>
            <li>
              <p className={profDescription}>{sumList1}</p>
            </li>
            <li>
              <p className={profDescription}>{sumList2}</p>
            </li>
            <li>
              <p className={profDescription}>{sumList3}</p>
            </li>
            <li>
              <p className={profDescription}>{sumList4}</p>
            </li>
            <li>
              <p className={profDescription}>{sumList5}</p>
            </li>
          </ul>
        </section>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default CVPage;
