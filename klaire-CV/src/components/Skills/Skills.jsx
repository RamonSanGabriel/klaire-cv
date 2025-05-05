import { skills } from '../../data/cv';
import css from './Skills.module.css';

const Skills = () => {
  return (
    <div className={css.skillWrapper}>
      <section className={css.skillSection}>
        <h3 className={css.title}>Skills & Languages</h3>
        <ul className={css.skillContainer}>
          {skills.map(({ id, skill }) => (
            <li key={id} className={css.skillList}>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Skills;
