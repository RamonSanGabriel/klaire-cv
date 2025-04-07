// import { useRef } from 'react';
// import { useReactToPrint } from 'react-to-print';
import { printBtn } from '../../data/cv';
// import Header from '../Header/Header';

const Button = () => {
  const { name } = printBtn;
  return (
    <>
      <button>{name}</button>
    </>
  );
};

export default Button;
