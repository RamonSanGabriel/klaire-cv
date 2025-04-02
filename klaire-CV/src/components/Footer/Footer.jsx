import css from './Footer.module.css';
import { footerIcons } from '../../data/icons';

const Footer = () => {
  return (
    <div className={css.footerWrapper}>
      <div className={css.footerContainer}>
        <ul className={css.iconList}>
          {footerIcons.map(({ id, name, icon, href }) => (
            <li className={css.iconItems} key={id}>
              <a href={href} target="_blank">
                {name}
              </a>
              {/* <p>{name}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
