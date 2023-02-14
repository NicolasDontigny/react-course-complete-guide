import React from 'react';
import Header from './components/Header/Header';
import styles from './App.module.css';
import MealsSummary from './components/Banner/MealsSummary';
import MealsCard from './components/Meals/MealsCard';

function App() {
  return (
    <div className={styles.app}>
      <Header></Header>
      <main>
        <MealsSummary></MealsSummary>
        <MealsCard></MealsCard>
      </main>
    </div>
  );
}

export default App;
