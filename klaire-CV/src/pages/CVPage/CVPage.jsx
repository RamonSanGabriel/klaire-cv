import css from './CVPage.module.css';
import { useEffect, useRef } from 'react';
import About from '../../components/About/About';
import { useReactToPrint } from 'react-to-print';
import { printBtn } from '../../data/cv';
import { header } from '../../data/header';
import { cvIcons } from '../../data/icons';
import { about, aboutCV } from '../../data/about';

const CVPage = () => {
  const contentRef = useRef();

  const handlePrint = useReactToPrint({ contentRef });
  const { print } = printBtn;
  const { name, title, image } = header;
  const { cvtitle, cvdescription } = aboutCV;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <h1>CV Page</h1>
      <button onClick={handlePrint}>{print}</button>
      <div ref={contentRef} className={css.cvWrapper}>
        <header>
          <h1>{name}</h1>
          <h2>{title}</h2>
          <address className={css.cvAddress}>
            <ul className={css.cvList}>
              {cvIcons.map(({ id, link, icon, href }) => (
                <li key={id}>
                  <p>
                    <span>{icon}</span>
                    {href}
                  </p>
                </li>
              ))}
            </ul>
            <img src={image} />
          </address>
        </header>
        <div className={css.cvaboutWrapper}>
          <h3 className={css.cvtitle}>{cvtitle}</h3>
          <p className={cvdescription}>{cvdescription}</p>
        </div>
        <hr />
      </div>
    </>
  );
};

export default CVPage;
