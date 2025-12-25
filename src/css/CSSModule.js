import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      Welcome, <span className="something">Hello World</span>
    </div>
  );
};

export default CSSModule;
