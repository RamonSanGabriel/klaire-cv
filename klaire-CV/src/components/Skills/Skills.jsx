import { linkedIn, skills } from '../../data/cv';
import css from './Skills.module.css';
import { Link } from 'react-router-dom';

const Skills = () => {
  const { href } = linkedIn;
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
          <Link className={css.linkedIn} to={href}>
            linkedin.com/in/klaire-therese-sison-san-gabriel-2b254192
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Skills;
