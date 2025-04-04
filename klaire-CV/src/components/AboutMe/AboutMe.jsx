import { aboutMe } from '../../data/about';
import css from './AboutMe.module.css';

const AboutMe = () => {
  const { title, school, degree, year, certificate } = aboutMe;
  return (
    <>
      <section>
        <ul className={css.aboutMeList}>
          <h3>{title}</h3>

          <li className={css.listItem}>
            <p>School:</p> <span> {school}</span>
          </li>
          <li className={css.listItem}>
            <p>Degree:</p> <span>{degree}</span>
          </li>
          <li className={css.listItem}>
            <p>Year Graduate:</p> <span>{year}</span>
          </li>
          <li className={css.listItem}>
            <p>Certificate:</p> <span>{certificate}</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutMe;
