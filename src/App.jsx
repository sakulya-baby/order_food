import { useContext, useState } from "react";
import { Header } from "./components/header/Header";
import { Meal } from "./components/meal/Meal";
import { MealsSummary } from "./components/mealsSummary/MealsSummary";
import { Cart } from "./components/cart/Cart";
import { ModalContext } from "./context/context-modal";

function App() {
  const {isOpenModal} = useContext(ModalContext);
  return (
    <>
      <Header />
      <MealsSummary />
      <Meal />
      {isOpenModal && <Cart />}
    </>
  );
}

export default App;


