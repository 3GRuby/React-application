import { useContext } from "react";
import { Link } from "react-router-dom";

import "./cartDropdown.style.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem.component";
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
      <Link to='/checkout'><Button>Checkout</Button></Link>
    </div>
  );
};

export default CartDropdown;
