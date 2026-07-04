import { Link } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { IoStar } from "react-icons/io5";

const ProductDetails = () => {
  return (
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
        <div className="sec-1 w-[40%] max-sm:w-full">
          <img
            src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/1.webp"
            alt="product_img"
            className="h-[40vh] bg-zinc-50 mx-auto border rounded-xl border-[#cccccca6]"
          />
        </div>
        <div className="sec-2 w-[55%] flex flex-col justify-center gap-2 max-sm:w-[93vw] max-sm:mx-auto max-sm:mt-5 max-sm:mb-10">
          <div className="company-name text-md font-semibold text-zinc-400 mt-1 ">
            Gucci Brand
          </div>
          <div className="title text-3xl font-bold text-gray-800">
            Calvin Klein CK One
          </div>
          <div className="sub flex flex-row justify-between ">
            <div className="price text-2xl font-bold text-gray-800">$49.99</div>
            <div className="review flex flex-row items-center gap-1.5">
              <div className="text-xl text-[#FF9529]">
                <IoStar />
              </div>
              <div className="text-md text-2xl font-bold text-gray-800 mb-2">
                4.5
              </div>
            </div>
          </div>
          <div className="desc border-t-2 border-dashed border-gray-200 pt-6">
            <div className="heading text-xl font-bold text-gray-800 mb-1">
              Description:
            </div>
            <div className="summry text-lg text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              veniam asperiores alias atque totam rerum nostrum, aperiam id
              tempore. Debitis provident dignissimos rerum non tempora ad
              accusamus et vel quaerat.
            </div>
          </div>
          <div className="more mt-2 mb-4">
            <div className="text-lg font-bold text-gray-800">More Details</div>
            <div className="text-lg text-gray-700">
              <ul>
                <li>
                  <span className="field">Remaining Stock: </span>
                  <span className="val">29</span>
                </li>
                <li>
                  <span className="field ">Product Weight: </span>
                  <span className="val">7</span>
                </li>
                <li>
                  <span className="field ">Dimension (w x h x d): </span>
                  <span className="val">29 x 27 x 20</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pmbtnAddto flex gap-6">
            <div className="pmbtn flex border-2 border-gray-200 w-41 rounded-4xl bg-gray-50">
              <div className="minus px-5 py-2  cursor-pointer hover:bg-gray-50 text-xl font-bold text-gray-500  rounded-tl-4xl rounded-bl-4xl">
                -
              </div>
              <div className="num px-5 py-2  text-lg max-sm:w-15 w-14 font-semibold">
                5
              </div>
              <div className="plus px-5 py-2 cursor-pointer hover:bg-gray-50 text-xl font-bold text-gray-500  rounded-tr-4xl rounded-br-4xl">
                +
              </div>
            </div>
            <button
              type="button"
              className="text-lg bg-gray-800 text-white px-12 py-2 hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer max-sm:px-2 font-medium rounded-4xl w-[80%]"
            >
              Add to cart
            </button>
          </div>
          <br />
          <div className="checkout mb-3">
            <button
              type="button"
              className="text-lg border-2 border-gray-800 px-12 py-2  hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer max-sm:px-2 font-medium rounded-4xl w-full capitalize"
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
