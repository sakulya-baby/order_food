import React from "react";
import { MealItem } from "./MealItem";
import styled from "styled-components";
import { product } from "../../utils/constants";

export const Meal = () => {
  return (
    <StyledSection>
      <ul>
        {product.map((item) => (
          <MealItem
            key={item.id}
            description={item.description}
            title={item.title}
            price={item.price}
            id={item.id}
          />
        ))}
      </ul>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: #fff;
  width: 80%;
  margin: 50px auto;
  padding: 40px;
  border-radius: 16px;
  margin-top: 40px;
  ul {
    list-style: none;
  }
`;
