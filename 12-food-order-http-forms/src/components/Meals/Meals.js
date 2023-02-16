import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

const Meals = () => (
  <Fragment>
    <MealsSummary />
    <AvailableMeals />
  </Fragment>
);

export default Meals;
