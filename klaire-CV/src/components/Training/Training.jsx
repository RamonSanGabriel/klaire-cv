import css from './Training.module.css';
import { training } from '../../data/training';

const Training = () => {
  return (
    <div className={css.trainingWrapper}>
      <ul className={css.trainingList}>
        <h3>Trained in Handling Aesthetic Equipment</h3>
        {training.map(({ id, training }) => (
          <li key={id} className={css.trainingItem}>
            {training}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Training;
