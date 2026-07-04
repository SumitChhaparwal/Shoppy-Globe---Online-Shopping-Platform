import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { RiRefund2Line } from "react-icons/ri";
import { LuEarth } from "react-icons/lu";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-row w-full h-[60vh] justify-around bg-gray-100 max-sm:h-full max-sm:flex-col-reverse">
        <div className="sec-1 w-[45%] flex flex-col gap-3 justify-center pl-[3vw] md:w-[40%] max-sm:w-full">
          <div className="label text-lg font-semibold text-gray-700 max-sm:mt-6 max-sm:text-xl">
            Starting from $12
          </div>
          <div className="title text-5xl font-bold leading-14 md:text-4xl md:leading-tight md:font-medium max-sm:text-3xl max-sm:leading-normal max-sm:font-semibold ">
            Exclusive product collection for everyone
          </div>
          <div className="btn">
            <button className="text-md bg-gray-900 text-white px-4.5 py-2 rounded-3xl hover:bg-gray-800 transition-all duration-300 ease-in max-sm:mb-9 max-sm:mt-1">
              Explore Now
            </button>
          </div>
        </div>
        <div className="sec-2 w-[45%] md:w-[50%] max-sm:w-full px-20">
          <img
            src="/src/Assets/ecommgirlimg.png"
            alt="ecomm_girl_img"
            className="h-[59.50vh] max-sm:h-full"
          />
        </div>
      </div>
      <div className="aboutSection flex flex-row justify-center items-center h-[33vh] max-sm:h-full max-sm:flex-wrap max-sm:gap-3 max-sm:my-6 max-w-300 mx-auto">
        <div className="sec flex flex-row items-center justify-center gap-3 py-6 border border-[#cccccce1] bg-gray-50 w-[24%] rounded-tl-2xl rounded-bl-2xl max-sm:w-[46vw] max-sm:flex-col max-sm:rounded-xl">
          <div className="icon text-3xl">
            <LiaShippingFastSolid />
          </div>
          <div className="titleLabel max-sm:text-center">
            <div className="title text-xl capitalize font-semibold text-gray-900">
              free shipping
            </div>
            <div className="label text-lg font-medium text-gray-700 line-clamp-1">
              On above $55 order
            </div>
          </div>
        </div>
        <div className="sec sec flex flex-row items-center justify-center gap-3 py-6 border border-[#cccccce1] bg-gray-50 w-[24%] text-4xl max-sm:w-[46vw] max-sm:flex-col  max-sm:rounded-xl">
          <div className="icon text-3xl">
            <PiKeyReturn />
          </div>
          <div className="titleLabel max-sm:text-center">
            <div className="title title text-xl capitalize font-semibold text-gray-900 line-clamp-1">
              Easy to return
            </div>
            <div className="label text-lg font-medium text-gray-700 capitalize line-clamp-1">
              Just phone call
            </div>
          </div>
        </div>
        <div className="sec flex flex-row items-center justify-center gap-3 py-6  border border-[#cccccce1] bg-gray-50 w-[24%] max-sm:w-[47vw] max-sm:flex-col  max-sm:rounded-xl">
          <div className="icon text-4xl md:px-2 md:text-3xl max-sm:text-2xl">
            <LuEarth />
          </div>
          <div className="titleLabel max-sm:text-center">
            <div className="title title text-xl capitalize font-semibold text-gray-900 line-clamp-1">
              Abroad Delivery
            </div>
            <div className="label text-lg font-medium text-gray-700 capitalize line-clamp-1">
              Reliable service
            </div>
          </div>
        </div>
        <div className="sec sec flex flex-row items-center justify-center gap-3 py-6  border border-[#cccccce1] bg-gray-50 w-[24%] rounded-tr-2xl rounded-br-2xl max-sm:w-[47vw] max-sm:rounded-xl max-sm:flex-col">
          <div className="icon text-4xl max-sm:text-3xl">
            <RiRefund2Line />
          </div>
          <div className="titleLabel max-sm:text-center">
            <div className="title title text-xl capitalize font-semibold text-gray-900 line-clamp-1">
              Refund policy
            </div>
            <div className="label text-lg font-medium text-gray-700 capitalize">
              15 days return
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
