import { createContext, useReducer, useState } from "react";

export const CartContext = createContext({});
const ADDED_MEALS = "ADDED_MEALS";
const INCREASE_MEAL = "INCREASE_MEAL";
const DECREASE_MEAL = "DECREASE_MEAL";

const reducer = (state, action) => {
  switch (action.type) {
    case ADDED_MEALS: {
      const prevMeals = state.addedMeal;
      const mealAction = action.payload;

      if (prevMeals.length === 0) {
        return {
          ...state,
          addedMeal: [mealAction],
        };
      }
      const isExistMeal = prevMeals.find((meal) => meal.id === mealAction.id);
      if (isExistMeal === undefined) {
        return {
          ...state,
          addedMeal: [...prevMeals, mealAction],
        };
      }
      const newAddedMeal = prevMeals.map((meal) => {
        if (meal.id === mealAction.id) {
          return {
            ...meal,
            amount: meal.amount + mealAction.amount,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeal: newAddedMeal,
      };
    }

    case INCREASE_MEAL: {
      const prevMeals = state.addedMeal;
      const mealId = action.payload;

      const newAddedMeal = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            amount: meal.amount + 1,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeal: newAddedMeal,
      };
    }

    case DECREASE_MEAL: {
      const prevMeals = state.addedMeal;
      const mealId = action.payload;

      const currentMeal = prevMeals.find((item) => item.id === mealId);
      if (currentMeal.amount === 1) {
        return {
          ...state,
          addedMeal: prevMeals.filter((item) => item.id !== currentMeal.id),
        };
      }

      const newAddedMeal = prevMeals.map((meal) => {
        if (meal.id === mealId) {
          return {
            ...meal,
            amount: meal.amount - 1,
          };
        }
        return meal;
      });
      return {
        ...state,
        addedMeal: newAddedMeal,
      };
    }

    default: {
      return state;
    }
  }
};

const initialState = {
  addedMeal: [],
  totalAmount: 0,
};

export const CartProvider = ({ children }) => {
  const [mealState, dispatch] = useReducer(reducer, initialState);

  const addedMealsHandler = (newMeal) => {
    dispatch({ type: ADDED_MEALS, payload: newMeal });
  };
  const incrementAmountMealHandler = (id) => {
    dispatch({ type: INCREASE_MEAL, payload: id });
  };
  const decrementAmountMealHandler = (id) => {
    dispatch({ type: DECREASE_MEAL, payload: id });
  };

  const totalAmount = mealState.addedMeal.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);

  const contextValue = {
    addedMeal: mealState.addedMeal,
    addedMealsHandler,
    onIncrease: incrementAmountMealHandler,
    onDecrease: decrementAmountMealHandler,
    totalAmount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
