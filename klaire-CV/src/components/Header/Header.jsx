import css from './Header.module.css';
import { header } from '../../data/header';
import { headerIcons } from '../../data/icons';

const Header = () => {
  const { name, title, image } = header;
  return (
    <>
      <div className={css.imageWrapper}>
        <div className={css.imageContainer}>
          <img src={image} alt="header" />
        </div>
        <div className={css.imageDetails}>
          <p className={css.name}>{name}</p>
          <p className={css.title}>{title}</p>
          {/* <div className={css.iconsContainer}> */}
          <ul className={css.iconList}>
            {headerIcons.map(({ id, name, icon, href }) => (
              <li className={css.iconItems} key={id}>
                <a href={href} target="_blank">
                  {icon}
                </a>
                {/* <p>{name}</p> */}
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
        {/* Navbar */}
      </div>
    </>
  );
};

export default Header;
