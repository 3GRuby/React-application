import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./cartDropdown.style.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem.component";
import { CartContext } from "../../context/Cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
