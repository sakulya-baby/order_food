import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { Modal } from "../UI/Modal";
import styled from "styled-components";
import Button from "../UI/Button";
import { ModalContext } from "../../context/context-modal";
import { CartContext } from "../../context/cart-context";

export const Cart = () => {
  const { closeModalHandler } = useContext(ModalContext);

  const { addedMeal, totalAmount } = useContext(CartContext);
  return (
    <Modal onClose={closeModalHandler}>
      <CartContent>
        <ListStyle>
          {addedMeal.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </ListStyle>
        <TotalAmountContainer>
          <h1>Total Amount</h1>
          <div>
            <b>${Number(totalAmount.toFixed(2))}</b>

            <section>
              <Button variant="outlined" onClick={closeModalHandler}>
                close
              </Button>
              <Button>order</Button>
            </section>
          </div>
        </TotalAmountContainer>
      </CartContent>
    </Modal>
  );
};

const CartContent = styled.div`
  border-radius: 20px;
  padding: 20px 32px;
`;

const ListStyle = styled.ul`
  width: 671px;
  max-height: 237px;
  overflow-y: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: end;
  }
  b {
    font-size: 24px;
    font-weight: bold;
    color: #8a2b06;
  }
  section {
    display: flex;
    gap: 19px;
  }
`;
