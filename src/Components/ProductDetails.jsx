import { Link, useNavigate } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { useFetch } from "../Utils/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../Utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";


const ProductDetails = () => {
  const [popup, setPopup] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  let cartCount = useSelector((store) => store.cart.countItems);

  let cartArr = useSelector((store) => store.cart.cartItems);

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const { data, error, loading } = useFetch(
    `https://dummyjson.com/products/${id}`,
  );

  // const { data: dataObj, error:err, loading:load } = useFetch("https://dummyjson.com/products");

  // let cartItemIndx = !load && dataObj.products.findIndex((item) => item.id == data?.id);

  // console.log(cartItemIndx)
  // if(!load){
  //   if (!dataObj.products[cartItemIndx].quantity) {
  //   dataObj.products[cartItemIndx].quantity = 1;
  // }
  // }

  console.log("dataquantity", data);

  function handleCheckout() {
    setPopup(true);
    setTimeout(() => {
      navigate('/');
      setPopup(false);
    }, 2000);
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
          </div>
        </div>
      )}
      <div className="w-full">
        {/*navigation sec*/}
        <div className="max-w-300 mx-auto my-10 px-[3vw] font-medium">
          <div className="nav flex flex-row items-center text-sm text-gray-700 hover:text-gray-600 gap-2">
            <Link to="/" className=" hover:text-gray-600">
              Home
            </Link>
            <MdNavigateNext className="  hover:text-gray-600" />
            <div className=" text-gray-800 hover:text-gray-600">Product</div>
          </div>
        </div>
        {/*main sec*/}
        <div className="main flex flex-row justify-around items-start max-w-300 mx-auto max-sm:flex-col">
          {loading ? (
            "Loading..."
          ) : (
            <>
              <div className="sec-1 w-[40%] max-sm:w-full">
                <img src={data.images[0]} alt="product_img" loading="lazy" />
              </div>
              <div className="sec-2 w-[55%] flex flex-col justify-center gap-2 max-sm:w-[93vw] max-sm:mx-auto max-sm:mt-5 max-sm:mb-10">
                <div className="company-name text-md font-semibold text-zinc-400 mt-1 ">
                  {data.brand}
                </div>
                <div className="title text-3xl font-bold text-gray-800">
                  {data.title}
                </div>
                <div className="sub flex flex-row justify-between ">
                  <div className="price text-2xl font-bold text-gray-800">
                    ${data.price}
                  </div>
                  <div className="review flex flex-row items-center gap-1.5">
                    <div className="text-xl text-[#FF9529]">
                      <IoStar />
                    </div>
                    <div className="text-md text-2xl font-bold text-gray-800 mb-2">
                      {data.rating}
                    </div>
                  </div>
                </div>
                <div className="desc border-t-2 border-dashed border-gray-200 pt-6">
                  <div className="heading text-xl font-bold text-gray-800 mb-1">
                    Description:
                  </div>
                  <div className="summry text-lg text-gray-700">
                    {data.description}
                  </div>
                </div>
                <div className="more mt-2 mb-4">
                  <div className="text-lg font-bold text-gray-800">
                    More Details
                  </div>
                  <div className="text-lg text-gray-700">
                    <ul>
                      <li>
                        <span className="field">Remaining Stock: </span>
                        <span className="val">{data.stock}</span>
                      </li>
                      <li>
                        <span className="field ">Product Weight: </span>
                        <span className="val">{data.weight}</span>
                      </li>
                      <li>
                        <span className="field ">Dimension (w x h x d): </span>
                        <span className="val">
                          {Math.floor(data.dimensions.width)} x{" "}
                          {Math.floor(data.dimensions.height)} x{" "}
                          {Math.floor(data.dimensions.depth)}
                        </span>
                      </li>
                      <li>
                        <span className="field ">Warranty Info: </span>
                        <span className="val">{data.warrantyInformation}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pmbtnAddto flex gap-6">
                  <div className="pmbtn flex border-2 border-gray-200 w-41 rounded-4xl bg-gray-50">
                    <div
                      className="minus px-5 py-2  cursor-pointer hover:bg-gray-50 text-xl font-bold text-gray-500  rounded-tl-4xl rounded-bl-4xl"
                      onClick={() =>
                        quantity <= 1 ? quantity : setQuantity(quantity - 1)
                      }
                    >
                      -
                    </div>
                    <div className="num px-5 py-2  text-lg max-sm:w-15 w-14 font-semibold">
                      {quantity}
                    </div>
                    <div
                      className="plus px-5 py-2 cursor-pointer hover:bg-gray-50 text-xl font-bold text-gray-500  rounded-tr-4xl rounded-br-4xl"
                      onClick={() =>
                        quantity < data.minimumOrderQuantity
                          ? setQuantity(quantity + 1)
                          : quantity
                      }
                    >
                      +
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-lg bg-gray-800 text-white px-12 py-2 hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer max-sm:px-2 font-medium rounded-4xl w-[80%]"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          ...data,
                          quantity: quantity,
                        }),
                      )
                    }
                  >
                    Add to cart
                  </button>
                </div>
                <br />
                <div className="checkout mb-3">
                  <button
                    type="button"
                    className="text-lg border-2 border-gray-800 px-12 py-2  hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer max-sm:px-2 font-medium rounded-4xl w-full capitalize"
                    onClick={handleCheckout}
                  >
                    checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
