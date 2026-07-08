import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { removeCartItems } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const [popup, setPopup] = useState(false);
  const [count, setCount] = useState(4);

  const cartArr = useSelector((store) => store.cart.cartItems);
  console.log("cart: ", cartArr);
  let cartItemAvail = cartArr.length;

  let subTotal = cartArr.reduce((acc, item) => {
    return acc + Number(item.price) * Number(item.quantity);
  }, 0);
  console.log(subTotal);

  const navigate = useNavigate();

  //using useEffect hook to avoid error like updating component while rerendering..
  useEffect(() => {
    if (!popup || count <= 0) {
      return;
    }

    if (count <= 1) {
      navigate("/");
      return;
    }

    const interval = window.setInterval(() => {
      setCount((prev) => setCount(prev - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [popup, count, navigate]);
  

  function handleCheckout() {
    setPopup(true);
    setCount(4);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!cartArr.length) {
      return;
    }
    handleCheckout();
    dispatch(removeCartItems());
  }

  return (
    <>
      {popup && (
        <div className="popUpBackground  w-full h-full z-10 bg-[#2e2e2e70] absolute">
          <div className="pop flex flex-col justify-center items-center gap-3 w-90 h-50 mx-auto bg-white rounded-2xl relative top-[30%]">
            <div className="icon">
              <FaCheckCircle className="text-green-500 text-3xl" />
            </div>
            <div className="title text-lg">Your Order has been Placed!</div>
            <div className="counter"> {count} sec</div>
          </div>
        </div>
      )}
      <div className=" w-full">
        <div className="max-w-400 mx-auto my-10 px-[3vw] font-medium">
          <div className="nav flex flex-row items-center text-sm text-gray-700 hover:text-gray-600 gap-2">
            <Link to="/" className=" hover:text-gray-600">
              Home
            </Link>
            <MdNavigateNext className="  hover:text-gray-600" />
            <div className=" text-gray-800 hover:text-gray-600">Cart</div>
            <div />
          </div>
        </div>
        <div className="max-w-300 mx-auto my-12 flex justify-center flex-row items-start px-4 gap-9 max-sm:flex-col max-sm:px-2">
          <div className="sec-1 w-[55%] max-sm:w-full">
            <div className="heading text-xl font-semibold text-zinc-800 mx-6">
              Shopping Cart
            </div>
            <div className="container-sec mt-3">
              {cartItemAvail ? (
                cartArr.map((item) => <CartItem itemObj={item} key={item.id} />)
              ) : (
                <div className="sec flex flex-row justify-between items-center border-b border-gray-300 py-9 mx-6 max-sm:mx-1 max-sm:py-4 bg-gray-100 px-4 mt-6">
                  Cart is Empty..
                </div>
              )}
            </div>
          </div>
          <form
            className="sec-2 border border-gray-200 rounded-xl w-[40%] h-full flex flex-col items-center py-12 gap-4 max-sm:w-[95vw] max-sm:mb-10"
            onSubmit={handleSubmit}
          >
            <div className="heading w-80 text-lg font-semibold text-zinc-800">
              Order Summary
            </div>
            <div className="disCode w-80 text-md text-gray-600">
              <label htmlFor="txt" className="font-medium">
                Promo code
              </label>
              <br />
              <input
                type="text"
                id="txt"
                placeholder="Enter Code"
                className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
                required
              />
            </div>
            <div className="nameOf w-80 text-md text-gray-600">
              <label htmlFor="user">Name of Card holder</label>
              <br />
              <input
                type="text"
                name="user_txt"
                id="user"
                placeholder="Enter Name"
                className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
                required
              />
            </div>
            <div className="cardNum w-80 text-md text-gray-600">
              <label htmlFor="cardN">Card number</label>
              <br />
              <input
                type="tel"
                name="card_number"
                id="cardN"
                placeholder="Enter Card Numbers"
                className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
                required
              />
            </div>
            <div className="expcvv flex flex-row w-80 gap-5 text-md text-gray-600">
              <label htmlFor="exp">
                Expiration <br />
                <input
                  type="text"
                  name="month and year"
                  pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                  placeholder="MM / YY"
                  id="exp"
                  className="border w-30"
                  className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
                  required
                />
              </label>
              <label htmlFor="cvv w-80 text-md text-gray-600">
                CVV <br />
                <input
                  type="tel"
                  name="cvv_number"
                  pattern="\d{3}"
                  maxLength="10"
                  id="cvv"
                  className="border w-30"
                  className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
                  required
                />
              </label>
            </div>
            <div className="subCalc w-80 text-md text-gray-600 flex flex-col gap-3">
              <div className="row flex flex-row justify-between">
                <div className="field font-semibold text-zinc-800">
                  Subtotal
                </div>
                <div className="amount font-semibold text-zinc-800">
                  ${subTotal.toFixed(2)}
                </div>
              </div>
              <div className="row flex flex-row justify-between">
                <div className="field">Estimate Tax</div>
                <div className="amount">$13</div>
              </div>
              <div className="row flex flex-row justify-between">
                <div className="field">Estimate shipping & Handling</div>
                <div className="amount">$5</div>
              </div>
              <div className="row flex flex-row justify-between border-t border-gray-300 pt-1.5">
                <div className="field font-semibold text-zinc-800">Total</div>
                <div className="amount font-semibold text-zinc-800">
                  ${subTotal ? Number(subTotal + 18).toFixed(2) : subTotal}
                </div>
              </div>
            </div>
            <div className="checkout w-80 text-md text-gray-600">
              <button
                type="submit"
                className="text-md bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 ease-in w-full py-1.5 rounded-lg text-white cursor-pointer"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Cart;
