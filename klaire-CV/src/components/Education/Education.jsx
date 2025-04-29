import { education } from '../../data/education';
import css from './Education.module.css';

const Education = () => {
  const { course, school, institute, certificate, empTitle } = education;
  return (
    <div className={css.educationWrapper}>
      {/* <ul className={css.educationList}>
        <h3>{empTitle}</h3>
        <div className={css.educationItems}>
          <li>{}</li>
          <li>{}</li>
          <li>{}</li>
          <li>{}</li>
          <li>{}</li>
        </div>
      </ul> */}
      {/* <hr /> */}
      <section className={css.employmentSection}>
        <h3 className={css.title}>{empTitle}</h3>
        <div className={css.employmentContainer}>
          <h4 className={css.employmentTitle}>{course}</h4>
          <h4>{institute}</h4>
          <p className={css.school}>{school}</p>
          <p className={css.certificate}>{certificate}</p>
        </div>
      </section>
    </div>
  );
};

export default Education;
