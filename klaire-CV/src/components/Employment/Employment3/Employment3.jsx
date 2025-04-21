import css from './Employment3.module.css';
import { employment3 } from '../../../data/cv';

const Employment3 = () => {
  const {
    employment3Title,
    employment3Duration,
    employment3Company,
    employment3Location,
    employment3Desc1,
    employment3Desc2,
    employment3Desc3,
    employment3Desc4,
    employment3Desc5,
  } = employment3;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment3Title}</h4>
          <h4>{employment3Duration}</h4>
          <h4>{employment3Company}</h4>
          <h4>{employment3Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment3Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment3Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment3Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment3Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment3Desc5}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment3;
