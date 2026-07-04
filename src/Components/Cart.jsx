import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  let cartItemAvail = true;

  return (
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
              <CartItem />
            ) : (
              <div className="sec flex flex-row justify-between items-center border-b border-gray-300 py-9 mx-6 max-sm:mx-1 max-sm:py-4 bg-gray-100 px-4 mt-6">
                Cart is Empty..
              </div>
            )}
          </div>
        </div>
        <div className="sec-2 border border-gray-200 rounded-xl w-[40%] h-full flex flex-col items-center py-12 gap-4 max-sm:w-[95vw] max-sm:mb-10">
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
            />
          </div>
          <div className="nameOf w-80 text-md text-gray-600">
            <label htmlFor="user">Name of Card holder</label>
            <br />
            <input
              type="text"
              id="user"
              placeholder="Enter Name"
              className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
            />
          </div>
          <div className="cardNum w-80 text-md text-gray-600">
            <label htmlFor="cardN">Card number</label>
            <br />
            <input
              type="tel"
              pattern="/d*"
              id="cardN"
              placeholder="Enter Card Numbers"
              className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
            />
          </div>
          <div className="expcvv flex flex-row w-80 gap-5 text-md text-gray-600">
            <label htmlFor="exp">
              Expiration <br />
              <input
                type="text"
                pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                placeholder="MM / YY"
                id="exp"
                className="border w-30"
                className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
              />
            </label>
            <label htmlFor="cvv w-80 text-md text-gray-600">
              CVV <br />
              <input
                type="tel"
                pattern="\d{3}"
                maxLength="10"
                id="cvv"
                className="border w-30"
                className="border border-gray-300 px-2 py-1 w-full rounded-lg mt-1"
              />
            </label>
          </div>
          <div className="subCalc w-80 text-md text-gray-600 flex flex-col gap-3">
            <div className="row flex flex-row justify-between">
              <div className="field font-semibold text-zinc-800">Subtotal</div>
              <div className="amount font-semibold text-zinc-800">$260</div>
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
              <div className="amount font-semibold text-zinc-800">$278</div>
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
        </div>
      </div>
    </div>
  );
};
export default Cart;
