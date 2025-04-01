import css from './About.module.css';
import { about } from '../../data/about';

const About = () => {
  const { title, description } = about;
  return (
    <>
      <div className={css.aboutWrapper}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <hr />
    </>
  );
};

export default About;
