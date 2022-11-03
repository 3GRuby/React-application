import "./cartDropdown.style.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} CartItem={item} />
        ))}
      </div>
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
