import css from './Employment4.module.css';
import { employment4 } from '../../../data/cv';

const Employment4 = () => {
  const {
    employment4Title,
    employment4Duration,
    employment4Company,
    employment4Location,
    employment4Desc1,
    employment4Desc2,
    employment4Desc3,
    employment4Desc4,
  } = employment4;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment4Title}</h4>
          <h4>{employment4Duration}</h4>
          <h4>{employment4Company}</h4>
          <h4>{employment4Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment4Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment4Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment4Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment4Desc4}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment4;
