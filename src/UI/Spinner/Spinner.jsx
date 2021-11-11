import React from 'react';

import Loader from 'react-loader-spinner';
import css from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={css.Loader}>
      <Loader type="Circles" color="#4a56e2" height={100} width={100} />
    </div>
  );
};

export default Spinner;
