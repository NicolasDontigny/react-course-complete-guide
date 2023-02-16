import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from 'hooks/use-http';
import { useEffect, useState } from 'react';
import { apiConstants } from 'constants/api.constants';

// const DUMMY_MEALS = [
//   {
//     "id": "m1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   { "name": "Schnitzel", "description": "A german specialty!", "price": "16.5" },
//   { "name": "Barbecue Burger", "description": "American, raw, meaty", "price": "12.99" },
//   { "name": "Green Bowl", "description": "Healthy...and green...", "price": "18.99" },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, fetchData: fetchMeals } = useHttp();

  const handleMeals = (meals) => {
    const mealsArray = Object.keys(meals).map((mealId) => ({
      id: mealId,
      ...meals[mealId],
    }));
    setMeals(mealsArray);
  };

  useEffect(() => {
    fetchMeals({ url: apiConstants.firebase('meals.json') }, handleMeals);
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let cardContent = <ul>{mealsList}</ul>;

  if (isLoading) {
    cardContent = <p>Fetching Meals...</p>;
  } else if (error) {
    cardContent = <p>There was an error fetching meals</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>{cardContent}</Card>
    </section>
  );
};

export default AvailableMeals;
