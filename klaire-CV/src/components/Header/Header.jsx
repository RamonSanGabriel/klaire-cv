import css from './Header.module.css';
import { header } from '../../data/header';

const Header = () => {
  const { name, title, image } = header;
  return (
    <div className={css.imageWrapper}>
      <div className={css.imageContainer}>
        <img src={image} alt="header" />
      </div>
      <div className={css.imageDetails}>
        <p className={css.name}>{name}</p>
        <p className={css.title}>{title}</p>
      </div>
      {/* Navbar */}
    </div>
  );
};

export default Header;
