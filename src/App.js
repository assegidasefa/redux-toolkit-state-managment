import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './feature/cart/cartSlice';
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return <main>
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
