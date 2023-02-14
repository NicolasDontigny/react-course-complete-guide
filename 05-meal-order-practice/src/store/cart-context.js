import React, { useReducer, useState } from 'react';

export const CartContext = React.createContext({
  totalCount: 0,
  totalPrice: 0,
  meals: [],
  onAddMeal: (_meal, _qty) => {},
  onRemoveMeal: (_meal, _qty) => {},
});

const defaultCartState = {
  meals: [],
  totalCount: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const existingMeal = state.meals.find(
      (mealQty) => mealQty.meal.id === action.meal.id
    );
    let updatedMeals;
    if (existingMeal) {
      let { meal, qty: existingQty } = existingMeal;
      updatedMeals = [
        ...state.meals.map((mealQty) =>
          mealQty.meal.id === meal.id
            ? { ...mealQty, qty: (existingQty += action.qty) }
            : { ...mealQty }
        ),
      ];
    } else {
      updatedMeals = [...state.meals, { meal: action.meal, qty: action.qty }];
    }

    return {
      meals: updatedMeals,
      totalCount: state.totalCount + action.qty,
      totalPrice: state.totalPrice + action.qty * action.meal.price,
    };
  } else if (action.type === 'REMOVE') {
    const existingMeal = state.meals.find(
      (mealQty) => mealQty.meal.id === action.mealId
    );
    if (!existingMeal) return state.meals;

    let { meal, qty: existingQty } = existingMeal;

    let updatedMeals;
    if (existingMeal.qty <= 1) {
      updatedMeals = state.meals.filter(
        (prevMealQty) => prevMealQty.meal.id !== action.mealId
      );
    } else {
      updatedMeals = state.meals.map((mealQty) =>
        mealQty.meal.id === meal.id
          ? { ...mealQty, qty: (existingQty -= 1) }
          : mealQty
      );
    }

    return {
      meals: updatedMeals,
      totalCount: state.totalCount - 1,
      totalPrice: state.totalPrice - existingMeal.meal.price,
    };
  }
};

const CartContextProvider = (props) => {
  // const [meals, setMeals] = useState([]);
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    // @ts-ignore
    defaultCartState
  );

  // const totalCount = meals.reduce((acc, meal) => acc + meal.qty, 0);
  // const totalPrice = `$${meals.reduce(
  //   (acc, meal) => acc + meal.qty * meal.meal.price,
  //   0
  // )}`;

  const addMealHandler = (mealToAdd, qty) => {
    // setMeals((prevMeals) => {
    //   const existingMeal = prevMeals.find(
    //     (mealQty) => mealQty.meal.id === mealToAdd.id
    //   );
    //   if (existingMeal) {
    //     let { meal, qty: existingQty } = existingMeal;
    //     return prevMeals.map((mealQty) =>
    //       mealQty.meal.id === meal.id
    //         ? { ...mealQty, qty: (existingQty += qty) }
    //         : mealQty
    //     );
    //   } else {
    //     return [...prevMeals, { meal: mealToAdd, qty }];
    //   }
    // });
    // @ts-ignore
    dispatchCartAction({ type: 'ADD', meal: { ...mealToAdd }, qty });
  };

  const removeMealHandler = (mealId) => {
    // setMeals((prevMeals) => {
    //   const existingMeal = prevMeals.find(
    //     (mealQty) => mealQty.meal.id === mealId
    //   );
    //   if (!existingMeal) return prevMeals;

    //   let { meal, qty: existingQty } = existingMeal;

    //   if (existingMeal.qty <= 1) {
    //     return prevMeals.filter(
    //       (prevMealQty) => prevMealQty.meal.id !== mealId
    //     );
    //   } else {
    //     return [
    //       ...prevMeals.map((mealQty) =>
    //         mealQty.meal.id === meal.id
    //           ? { ...mealQty, qty: (existingQty -= 1) }
    //           : mealQty
    //       ),
    //     ];
    //   }
    // });
    // @ts-ignore
    dispatchCartAction({ type: 'REMOVE', mealId });
  };

  const cartContext = {
    totalCount: cartState.totalCount,
    totalPrice: cartState.totalPrice,
    meals: cartState.meals,
    onAddMeal: addMealHandler,
    onRemoveMeal: removeMealHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
