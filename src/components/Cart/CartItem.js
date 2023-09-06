import { useState, useEffect } from "react";
import { removeFromCart } from "../../store/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function CartItem({ item }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item.count);

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={item.quantity} />
        <button
          className="cart-item-button"
          onClick={() => setCount(item.count + 1)}
        >
          +
        </button>
        <button className="cart-item-button">-</button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item))}
        >
          {" "}
          Remove{" "}
        </button>
      </div>
    </li>
  );
}

export default CartItem;
