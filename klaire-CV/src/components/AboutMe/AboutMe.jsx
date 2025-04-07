import { education, skills, certificate } from '../../data/about';
import css from './AboutMe.module.css';

const AboutMe = () => {
  const { title, school, degree, year } = education;
  const { titleCert, certificate1 } = certificate;
  return (
    <>
      <section className={css.aboutSection}>
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
          <h3>Skills</h3>
          {skills.map(({ id, skill, desc }) => (
            <li className={css.listItem} key={id}>
              <p>{skill}</p>
              <span>{desc}</span>
            </li>
          ))}
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
