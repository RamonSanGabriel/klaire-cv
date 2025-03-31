import css from './Loader.module.css';
import { SyncLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className={css.loader}>
      <SyncLoader color="#d24fa0" />
    </div>
  );
};

export default Loader;
