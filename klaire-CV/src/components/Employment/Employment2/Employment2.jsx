import css from './Employment2.module.css';
import { employment2 } from '../../../data/cv';

const Employment2 = () => {
  const {
    employment2Title,
    employment2Duration,
    employment2Company,
    employment2Location,
    employment2Desc1,
    employment2Desc2,
    employment2Desc3,
    employment2Desc4,
    employment2Desc5,
  } = employment2;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment2Title}</h4>
          <h4>{employment2Duration}</h4>
          <h4>{employment2Company}</h4>
          <h4>{employment2Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment2Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment2Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment2Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment2Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment2Desc5}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment2;
