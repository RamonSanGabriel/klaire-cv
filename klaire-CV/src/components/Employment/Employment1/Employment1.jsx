import css from './Employment1.module.css';
import { employment1, employmentHistory } from '../../../data/cv';

const Employment1 = () => {
  const {
    employment1Title,
    employment1Duration,
    employment1Company,
    employment1Location,
    employment1Desc1,
    employment1Desc2,
    employment1Desc3,
    employment1Desc4,
    employment1Desc5,
    employment1Desc6,
  } = employment1;

  const { empTitle } = employmentHistory;

  return (
    <>
      <section className={css.employmentSection}>
        <h3 className={css.title}>{empTitle}</h3>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment1Title}</h4>
          <h4>{employment1Duration}</h4>
          <h4>{employment1Company}</h4>
          <h4>{employment1Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment1Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment1Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment1Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment1Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment1Desc5}</p>
          </li>
          <li>
            <p className={css.description}>{employment1Desc6}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment1;
