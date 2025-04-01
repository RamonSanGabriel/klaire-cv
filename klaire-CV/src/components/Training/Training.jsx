import css from './Training.module.css';
import { training } from '../../data/training';

const Training = () => {
  const {
    title,
    training1,
    training2,
    training3,
    training4,
    training5,
    training6,
  } = training;
  return (
    <div className={css.trainingWrapper}>
      <ul className={css.trainingList}>
        <h3>{title}</h3>
        <li className={css.trainingItems}>{training1}</li>
        <li>{training2}</li>
        <li>{training3}</li>
        <li>{training4}</li>
        <li>{training5}</li>
        <li>{training6}</li>
      </ul>
    </div>
  );
};

export default Training;
