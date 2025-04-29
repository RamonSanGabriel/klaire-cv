import { employment7 } from '../../../data/cv';
import css from './Employment7.module.css';

const Employment7 = () => {
  const {
    employment7Title,
    employment7Duration,
    employment7Company,
    employment7Location,
    employment7Desc1,
    employment7Desc2,
    employment7Desc3,
    employment7Desc4,
    employment7Desc5,
  } = employment7;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment7Title}</h4>
          <h4>{employment7Duration}</h4>
          <h4>{employment7Company}</h4>
          <h4>{employment7Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment7Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment7Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment7Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment7Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment7Desc5}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment7;
