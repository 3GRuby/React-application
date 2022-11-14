import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./cartDropdown.style.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {

 const cartItems = useSelector(selectCartItems)

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
