import { RxCross2 } from "react-icons/rx";

const CartItem = () => {
  return (
    <>
      <div className="sec flex flex-row justify-between items-center border-b border-gray-300 py-9 mx-6 max-sm:mx-1 max-sm:py-4">
        <div className="image w-25 h-25 bg-zinc-50 border border-gray-100 max-sm:w-18 max-sm:h-18">
          <img
            src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
            alt="cart_image"
            className="h-full"
          />
        </div>
        <div className="details flex flex-col gap-0.5 text-md">
          <div className="title font-semibold text-zinc-800 max-sm:line-clamp-1 max-sm:w-44">
            Gucci Eau De Perfume
          </div>
          <div className="category font-medium text-zinc-800">Perfume</div>
          <div className="identity text-zinc-800 max-sm:line-clamp-1">
            #BEA-NAI-NAI-005
          </div>
        </div>
        <div className="addToBtn flex text-md max-sm:flex-col-reverse">
          <div className="px-3 py-1 border border-gray-200 bg-gray-50 hover:bg-white cursor-pointe max-sm:border-0 max-sm:bg-white">
            -
          </div>
          <div className="px-2.5 py-0.5 border  border-gray-200 max-sm:border">
            2
          </div>
          <div className="px-3 py-1 border border-gray-200 bg-gray-50 hover:bg-white cursor-pointer max-sm:border-0 max-sm:bg-white">
            +
          </div>
        </div>
        <div className="price font-semibold">$153</div>
        <div className="delBtn text-lg text-zinc-500 cursor-pointer hover:text-red-400 max-sm:text-md">
          <RxCross2 />
        </div>
      </div>
    </>
  );
};
export default CartItem;
