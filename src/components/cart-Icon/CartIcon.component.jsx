import { useDispatch, useSelector} from "react-redux";

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import {setIsCartOpen} from '../../store/cart/cart.action'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cartIcon.style.scss";

const CartIcon = () => {
  const dispatch = useDispatch() 
  const cartCount = useSelector(selectCartCount)
  const isCartOpen = useSelector(selectIsCartOpen)

  const toggleIsCardOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCardOpen} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
