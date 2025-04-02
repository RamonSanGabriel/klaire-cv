import css from './Footer.module.css';
import { footerIcons } from '../../data/icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={css.footerWrapper}>
      <div className={css.footerContainer}>
        <ul className={css.iconList}>
          {footerIcons.map(({ id, link, icon, path }) => (
            <li className={css.iconItems} key={id}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
