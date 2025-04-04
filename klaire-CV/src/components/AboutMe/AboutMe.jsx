import { education, skills, certificate } from '../../data/about';
import css from './AboutMe.module.css';

const AboutMe = () => {
  const { title, school, degree, year } = education;
  const { titleSkill, skills } = skill;
  const { titleCert, certificate1 } = certificate;
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
        </ul>
        <ul className={css.aboutMeList}>
          <h3>{titleSkill}</h3>
          <li className={css.listItem}>
            <p>Skills:</p>
            <span>{skill}</span>
          </li>
        </ul>
        <ul className={css.aboutMeList}>
          <h3>{titleCert}</h3>
          <li className={css.listItem}>
            <p>Certificate:</p>
            <span>{certificate1}</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutMe;
