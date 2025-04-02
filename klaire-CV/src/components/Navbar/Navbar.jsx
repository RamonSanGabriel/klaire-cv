import css from './Navbar.module.css';
import { navIcons } from '../../data/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={css.navWrapper}>
      {/* <div className={css.footerContainer}> */}
      <ul className={css.iconList}>
        {navIcons.map(({ id, link, icon, path }) => (
          <li className={css.iconItems} key={id}>
            <NavLink to={path}>{link}</NavLink>
          </li>
        ))}
      </ul>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
