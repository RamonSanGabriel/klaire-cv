import { employment8 } from '../../../data/cv';
import css from './Employment8.module.css';

const Employment8 = () => {
  const {
    employment8Title,
    employment8Duration,
    employment8Company,
    employment8Location,
    employment8Desc1,
    employment8Desc2,
    employment8Desc3,
    employment8Desc4,
    employment8Desc5,
  } = employment8;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment8Title}</h4>
          <h4>{employment8Duration}</h4>
          <h4>{employment8Company}</h4>
          <h4>{employment8Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment8Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment8Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment8Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment8Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment8Desc5}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment8;
