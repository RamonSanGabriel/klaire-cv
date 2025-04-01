import css from './Summary.module.css';
import { summary } from '../../data/summary';

const Summary = () => {
  const {
    title,
    qualification1,
    qualification2,
    qualification3,
    qualification4,
    qualification5,
  } = summary;
  return (
    <div className={css.summaryWrapper}>
      <ul className={css.summaryList}>
        <h3>{title}</h3>
        <div className={css.summaryItems}>
          <li>{qualification1}</li>
          <li>{qualification2}</li>
          <li>{qualification3}</li>
          <li>{qualification4}</li>
          <li>{qualification5}</li>
        </div>
      </ul>
    </div>
  );
};

export default Summary;
