import css from './Employment5.module.css';
import { employment5 } from '../../../data/cv';

const Employment5 = () => {
  const {
    employment5Title,
    employment5Duration,
    employment5Company,
    employment5Location,
    employment5Desc1,
    employment5Desc2,
    employment5Desc3,
    employment5Desc4,
    employment5Desc5,
    employment5Desc6,
    employment5Desc7,
    employment5Desc8,
    employment5Desc9,
    employment5Desc10,
    employment5Desc11,
    employment5Desc12,
  } = employment5;
  return (
    <>
      <section className={css.employmentSection}>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{employment5Title}</h4>
          <h4>{employment5Duration}</h4>
          <h4>{employment5Company}</h4>
          <h4>{employment5Location}</h4>
        </div>
        <ul className={css.sumList}>
          <li>
            <p className={css.description}>{employment5Desc1}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc2}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc3}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc4}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc5}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc6}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc7}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc8}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc9}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc10}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc11}</p>
          </li>
          <li>
            <p className={css.description}>{employment5Desc12}</p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Employment5;
