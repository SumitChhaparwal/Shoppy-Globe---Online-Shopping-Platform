import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { QuantInc, QuantDec, deleteCartItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ itemObj }) => {
  const cartArr = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  return (
    <>
      <div className="sec flex flex-row justify-between items-center border-b border-gray-300 py-9 mx-6 max-sm:mx-1 max-sm:py-4">
        <div className="image w-25 h-25 bg-zinc-50 border border-gray-100 max-sm:w-18 max-sm:h-18">
          <img
            src={itemObj.images[0]}
            alt="cart_item_image"
            loading="lazy"
            className="h-full"
          />
        </div>
        <div className="details flex flex-col gap-0.5 text-md">
          <div className="title font-semibold text-zinc-800 line-clamp-1 max-sm:w-44">
            {itemObj.title}
          </div>
          <div className="category font-medium text-zinc-800">
            {itemObj.category}
          </div>
          <div className="identity text-zinc-800 max-sm:line-clamp-1">
            #{itemObj.sku}
          </div>
        </div>
        <div className="addToBtn flex text-md max-sm:flex-col-reverse">
          <div
            className="w-8 h-8 text-center py-1 border border-gray-200 bg-gray-50 hover:bg-white cursor-pointe max-sm:border-0 max-sm:bg-white"
            onClick={() => dispatch(QuantDec(itemObj))}
          >
            -
          </div>
          <div className="w-8 h-8 text-center py-1 border  border-gray-200 max-sm:border">
            {itemObj.quantity}
          </div>
          <div
            className="w-8 h-8 text-center py-1 border border-gray-200 bg-gray-50 hover:bg-white cursor-pointer max-sm:border-0 max-sm:bg-white"
            onClick={() => dispatch(QuantInc(itemObj))}
          >
            +
          </div>
        </div>
        <div className="price font-semibold">
          ${Number(itemObj.price * itemObj.quantity).toFixed(2)}
        </div>
        <div
          className="delBtn text-lg text-zinc-500 cursor-pointer hover:text-red-400 max-sm:text-md"
          onClick={() => dispatch(deleteCartItem(itemObj))}
        >
          <RxCross2 />
        </div>
      </div>
    </>
  );
};
export default CartItem;
