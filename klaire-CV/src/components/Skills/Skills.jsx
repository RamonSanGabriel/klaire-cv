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
        <div className={css.lang}>
          <p>
            <strong>Language:</strong>
          </p>
          <p>English (Fluent), Tagalog (Native)</p>
          <p>
            <strong>LinkedIn:</strong>
          </p>
          <a className={css.linkedIn}>
            linkedin.com/in/klaire-therese-sison-san-gabriel-2b254192
          </a>
        </div>
      </section>
    </div>
  );
};

export default Skills;
