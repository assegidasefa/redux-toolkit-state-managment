import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './feature/cart/cartSlice';
import Modal from "./component/Modal";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const { cartItems,isLoading } = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store)=>store.modal)
  console.log("modal value: ",isOpen)

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);
  
  console.log("loading",isLoading)
  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <main>
   {isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
