import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/context-modal.jsx";
import { CartProvider } from "./context/cart-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ModalProvider>
      <App />
    </ModalProvider>
  </CartProvider>
);
