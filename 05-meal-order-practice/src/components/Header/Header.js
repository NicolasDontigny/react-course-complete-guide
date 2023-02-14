import React from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <h2>ReactMeals</h2>
        <div>
          <HeaderCartButton></HeaderCartButton>
        </div>
      </div>
      <div className={styles['main-image']}>
        <img
          src='https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true'
          alt=''
        />
      </div>
    </>
  );
};

export default Header;
