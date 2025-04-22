import css from './Employment6.module.css';
import { employment6 } from '../../../data/cv';

const Employment6 = () => {
  const {
    employment6Title,
    employment6Duration,
    employment6Company,
    employment6Location,
    employment6Desc1,
    employment6Desc2,
    employment6Desc3,
    employment6Desc4,
    employment6Desc5,
    employment6Desc6,
    employment6Desc7,
    employment6Desc8,
    employment6Desc9,
    employment6Desc10,
    employment6Desc11,
    employment6Desc12,
  } = employment6;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment6Title}</h4>
          <h4>{employment6Duration}</h4>
          <h4>{employment6Company}</h4>
          <h4>{employment6Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment6Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc5}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc6}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc7}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc8}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc9}</p>
          </li>
          <li>
            <p className={css.description}>{employment6Desc10}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment6;
