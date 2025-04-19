import css from './CVPage.module.css';
import { useEffect, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';
import {
  employment1,
  employmentHistory,
  headerCV,
  printBtn,
} from '../../data/cv';
import { professionalCV, summaryQualification } from '../../data/cv';

const CVPage = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  const { print } = printBtn;
  const { location, email, mobile, name, position } = headerCV;
  const { profTitle, profDescription } = professionalCV;
  const { summaryTitle, sumList1, sumList2, sumList3, sumList4, sumList5 } =
    summaryQualification;
  const { empTitle } = employmentHistory;
  const {
    employment1Title,
    employment1Duration,
    employment1Desc,
    employment1Company,
    employment1Location,
  } = employment1;

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
        <section className={css.professionalSummary}>
          <h3 className={css.title}>{profTitle}</h3>
          <p className={css.description}>{profDescription}</p>
        </section>
        <section className={css.summaryQualification}>
          <h3 className={css.title}>{summaryTitle}</h3>
          <ul className={css.sumList}>
            <li>
              <p className={css.description}>{sumList1}</p>
            </li>
            <li>
              <p className={css.description}>{sumList2}</p>
            </li>
            <li>
              <p className={css.description}>{sumList3}</p>
            </li>
            <li>
              <p className={css.description}>{sumList4}</p>
            </li>
            <li>
              <p className={css.description}>{sumList5}</p>
            </li>
          </ul>
        </section>
        <section className={css.employmentSection}>
          <h3 className={css.title}>{empTitle}</h3>
          <div className={css.employment1Container}>
            <h4 className={css.employmentTitle}>{employment1Title}</h4>
            <h4>{employment1Duration}</h4>
            <h4>{employment1Company}</h4>
            <h4>{employment1Location}</h4>
          </div>
          <ul className={css.sumList}>
            <li>
              <p className={css.description}>{employment1Desc}</p>
            </li>
            <li>
              <p className={css.description}>{sumList2}</p>
            </li>
            <li>
              <p className={css.description}>{sumList3}</p>
            </li>
            <li>
              <p className={css.description}>{sumList4}</p>
            </li>
            <li>
              <p className={css.description}>{sumList5}</p>
            </li>
          </ul>
        </section>
        {/* <hr /> */}
      </div>
    </>
  );
};

export default CVPage;
