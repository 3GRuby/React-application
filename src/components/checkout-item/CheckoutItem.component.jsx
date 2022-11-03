import { useContext } from "react"
import { CartContext } from "react"


const CheckoutItem = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
          console.log(cartItems.name)
      </div>
      
    </div>
  );
}

export default CheckoutItem
