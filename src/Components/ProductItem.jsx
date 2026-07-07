import { Link } from "react-router-dom";
import { addToCart } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";

const ProductItem = ({ itemObj }) => {
  const strVal = itemObj.rating.toString();
  const strValLen = strVal.length - 1;

  const dispatch = useDispatch();

  return (
    <>
      <div className="productItem border border-[#ccc] w-68 h-115 flex flex-col items-center rounded-2xl max-sm:w-85">
        <Link to={`/productDetails/${itemObj.id}`}>
        <div className=" mb-3 px-15 py-6 bg-gray-100 rounded-tl-2xl rounded-tr-2xl max-sm:px-20 max-sm:mt-0.6">
          <img src={itemObj.images[0]} alt="product_image" className="h-46" />
        </div>
        <div className="w-full">
          <div className="category mx-3 text-sm text-gray-400 mb-1 capitalize">
            {itemObj.category}
          </div>
          <div className="capitalize flex flex-row justify-between mx-3 text-lg font-medium">
            <div className="title text-gray-800 line-clamp-1">
              {itemObj.title}
            </div>
            <div className="rating text-[#FF9529]">
              {strValLen === 3 ? strVal.slice(0, -1) : strVal}
            </div>
          </div>
          <div className="desc text-sm mx-3 line-clamp-2 text-gray-700 mb-1">
            {itemObj.description}
          </div>
        </div>
        </Link>
        <div className="price text-lg font-bold text-gray-800 my-2 mx-auto">
          ${itemObj.price}
        </div>
        <button
          className="text-md border text-orange-500 bg-white px-8 py-2 hover:bg-orange-500 hover:text-white transition-[background-color] duration-300 ease-out cursor-pointer rounded-md"
          onClick={() => dispatch(addToCart(itemObj))}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};
export default ProductItem;
